#!/usr/bin/env python3
"""Build a single self-contained offline index-offline.html.

Inlines:
  - Google Fonts CSS + woff2 font files
  - Local assets/ images and SVGs
  - Two external emily2u.com photos
  - A 3x3 OpenStreetMap tile grid replacing the Google Maps iframe
"""
from __future__ import annotations
import base64
import math
import mimetypes
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "index.html"
OUT = ROOT / "index-offline.html"

UA_DESKTOP = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 "
    "(KHTML, like Gecko) Version/17.0 Safari/605.1.15"
)

GFONTS_URL = (
    "https://fonts.googleapis.com/css2?"
    "family=Cormorant+Garamond:wght@400;500"
    "&family=Inter:wght@400;500"
    "&family=JetBrains+Mono:wght@400"
    "&display=swap"
)

EMILY_PHOTOS = [
    "https://www.emily2u.com/wp-content/uploads/2019/05/8-TS-Lim.jpg.webp",
    "https://www.emily2u.com/wp-content/uploads/2019/05/9-TS-Lim.jpg.webp",
]

YT_THUMB = "https://img.youtube.com/vi/IUY2bNPh-yI/maxresdefault.jpg"

# 63 Jalan Tokong, 75200 Melaka
SHOP_LAT, SHOP_LON, ZOOM = 2.1965, 102.2470, 16


def fetch(url: str, headers: dict | None = None) -> bytes:
    req = urllib.request.Request(url, headers=headers or {"User-Agent": UA_DESKTOP})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def b64(data: bytes) -> str:
    return base64.b64encode(data).decode("ascii")


def data_uri(data: bytes, mime: str) -> str:
    return f"data:{mime};base64,{b64(data)}"


def guess_mime(path: Path) -> str:
    m, _ = mimetypes.guess_type(str(path))
    if m:
        return m
    # mimetypes doesn't know .webp on some setups
    if path.suffix.lower() == ".webp":
        return "image/webp"
    if path.suffix.lower() == ".svg":
        return "image/svg+xml"
    return "application/octet-stream"


def inline_google_fonts() -> str:
    """Fetch the Google Fonts CSS and replace each woff2 URL with a base64 data URI."""
    print("Fetching Google Fonts CSS...", file=sys.stderr)
    css = fetch(GFONTS_URL).decode("utf-8")
    woff_urls = re.findall(r"url\((https://fonts\.gstatic\.com/[^)]+\.woff2)\)", css)
    woff_urls = list(dict.fromkeys(woff_urls))  # dedupe, keep order
    print(f"  found {len(woff_urls)} woff2 files", file=sys.stderr)
    for url in woff_urls:
        print(f"  fetching {url.rsplit('/', 1)[-1]}", file=sys.stderr)
        font_bytes = fetch(url)
        uri = data_uri(font_bytes, "font/woff2")
        css = css.replace(url, uri)
    # Strip any remaining .woff (legacy) fallback src lines — woff2 is enough.
    css = re.sub(
        r"\s*src:\s*url\(https://fonts\.gstatic\.com/[^)]+\.woff\)\s*format\('woff'\);",
        "",
        css,
    )
    return css


def lonlat_to_tile(lon: float, lat: float, z: int) -> tuple[int, int]:
    n = 2 ** z
    xt = int((lon + 180.0) / 360.0 * n)
    lat_rad = math.radians(lat)
    yt = int((1.0 - math.asinh(math.tan(lat_rad)) / math.pi) / 2.0 * n)
    return xt, yt


def fetch_map_tiles() -> list[list[str]]:
    """Return a 3x3 grid (rows of data URIs) of map tiles centered on the shop.

    Uses CartoDB Positron basemap — free for static/non-commercial use, no key.
    OpenStreetMap's own tile server blocks bulk fetches per their usage policy.
    """
    cx, cy = lonlat_to_tile(SHOP_LON, SHOP_LAT, ZOOM)
    print(f"Fetching map tiles around ({cx},{cy}) @ z{ZOOM}...", file=sys.stderr)
    grid: list[list[str]] = []
    subdomains = ["a", "b", "c", "d"]
    i = 0
    for dy in (-1, 0, 1):
        row = []
        for dx in (-1, 0, 1):
            sub = subdomains[i % len(subdomains)]
            i += 1
            url = (
                f"https://{sub}.basemaps.cartocdn.com/light_all/"
                f"{ZOOM}/{cx+dx}/{cy+dy}.png"
            )
            png = fetch(url, headers={"User-Agent": UA_DESKTOP})
            row.append(data_uri(png, "image/png"))
        grid.append(row)
    return grid


def build_map_html(grid: list[list[str]]) -> str:
    """Build a CSS-grid 768x768 map image with a marker pin centered on the shop."""
    cells = "".join(
        f'<img src="{uri}" alt="" width="256" height="256" />'
        for row in grid for uri in row
    )
    # Marker uses an inline SVG data URI so it has zero extra deps.
    pin_svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 44" '
        'width="32" height="44"><path d="M16 0C7.2 0 0 7.2 0 16c0 12 16 28 16 28s16-16 '
        '16-28C32 7.2 24.8 0 16 0z" fill="#c44536"/>'
        '<circle cx="16" cy="16" r="6" fill="#fff"/></svg>'
    )
    pin_uri = data_uri(pin_svg.encode("utf-8"), "image/svg+xml")
    return f"""
      <div class="offline-map" role="img" aria-label="Map of 63 Jalan Tokong, Melaka">
        <div class="offline-map-grid">{cells}</div>
        <img class="offline-map-pin" src="{pin_uri}" alt="Shop location pin" />
        <div class="offline-map-attr">© OpenStreetMap · © CARTO</div>
      </div>"""


MAP_CSS = """
    .offline-map { position: relative; width: 100%; max-width: 768px; margin: 0 auto;
      aspect-ratio: 1 / 1; overflow: hidden; border-radius: 8px;
      background: #e8e2d5; }
    .offline-map-grid { display: grid; grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr); width: 100%; height: 100%; }
    .offline-map-grid img { width: 100%; height: 100%; display: block; }
    .offline-map-pin { position: absolute; top: 50%; left: 50%;
      transform: translate(-50%, -100%); width: 32px; height: 44px;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); }
    .offline-map-attr { position: absolute; bottom: 4px; right: 8px;
      font-size: 11px; color: #333; background: rgba(255,255,255,0.7);
      padding: 2px 6px; border-radius: 3px; font-family: var(--sans, system-ui); }
"""


def main() -> None:
    html = SRC.read_text(encoding="utf-8")

    # 1) Inline Google Fonts: remove the three <link> tags + add inlined <style>.
    inlined_css = inline_google_fonts()
    # Remove the preconnect + stylesheet link block (lines 8-10 in source).
    html = re.sub(
        r'\s*<link rel="preconnect" href="https://fonts\.googleapis\.com"[^>]*/>\s*'
        r'<link rel="preconnect" href="https://fonts\.gstatic\.com"[^>]*/>\s*'
        r'<link href="https://fonts\.googleapis\.com/css2[^"]+" rel="stylesheet"\s*/>',
        "",
        html,
    )
    # Inject the inlined font CSS + map CSS as the first <style> block.
    style_block = f"<style>\n{inlined_css}\n{MAP_CSS}\n</style>"
    html = html.replace("</head>", f"{style_block}\n</head>", 1)

    # 2a) Strip <source srcset> tags so the inlined <img> fallback is used.
    # Responsive variants would balloon the file; the 960px <img> is enough offline.
    html = re.sub(r"\s*<source\b[^>]*srcset=\"assets/[^>]*/>\s*", "", html)
    # 2b) Strip srcset= attributes on <img> tags (the inlined src= is enough).
    html = re.sub(r'\s+srcset="assets/[^"]*"', "", html)

    # 2) Inline all local assets referenced by src= or data= (with ?v= cache busters).
    asset_pattern = re.compile(r'(src|data)="(assets/[^"?]+)(\?[^"]*)?"')
    cache: dict[str, str] = {}
    def asset_repl(m: re.Match) -> str:
        attr, rel = m.group(1), m.group(2)
        if rel not in cache:
            p = ROOT / rel
            if not p.exists():
                print(f"  WARN: missing asset {rel}", file=sys.stderr)
                return m.group(0)
            cache[rel] = data_uri(p.read_bytes(), guess_mime(p))
            print(f"  inlined {rel} ({p.stat().st_size//1024} KB)", file=sys.stderr)
        return f'{attr}="{cache[rel]}"'
    print("Inlining local assets...", file=sys.stderr)
    html = asset_pattern.sub(asset_repl, html)

    # 3) Inline the two emily2u.com photos and the YouTube thumbnail.
    # Validate that what comes back is actually image data — emily2u 301-redirects
    # missing images to their homepage (HTML), which would inline as broken bytes.
    print("Fetching emily2u photos + YouTube thumbnail...", file=sys.stderr)
    image_magic = (b"\xff\xd8\xff", b"\x89PNG", b"RIFF", b"GIF8")
    for url in EMILY_PHOTOS + [YT_THUMB]:
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA_DESKTOP})
            with urllib.request.urlopen(req, timeout=30) as r:
                # Don't follow cross-host redirects to HTML pages.
                final_ct = r.headers.get("Content-Type", "")
                data = r.read()
            valid = final_ct.startswith("image/") and any(
                data.startswith(m) for m in image_magic
            )
            if not valid:
                print(f"  SKIP {url} (got {final_ct!r}, not image)", file=sys.stderr)
                # Remove the <img> tag entirely so the layout doesn't show a broken icon.
                html = re.sub(
                    r'<img[^>]*src="' + re.escape(url) + r'"[^>]*/?>',
                    "",
                    html,
                )
                continue
            mime = "image/webp" if url.endswith(".webp") else final_ct or "image/jpeg"
            uri = data_uri(data, mime)
            html = html.replace(url, uri)
            print(f"  inlined {url.rsplit('/', 1)[-1]} ({len(data)//1024} KB)", file=sys.stderr)
        except Exception as e:
            print(f"  FAILED {url}: {e}", file=sys.stderr)

    # 4) Replace the Google Maps iframe with the inline OSM tile grid.
    map_grid = fetch_map_tiles()
    map_html = build_map_html(map_grid)
    html = re.sub(
        r"<iframe[^>]*maps\.google\.com[^>]*>\s*</iframe>",
        map_html,
        html,
        count=1,
        flags=re.DOTALL,
    )

    # 5) Add an offline banner so the recipient knows what they're looking at.
    banner = (
        '<div style="background:#2d2a26;color:#f5efe0;padding:8px 16px;'
        'text-align:center;font:13px/1.4 system-ui,-apple-system,sans-serif;">'
        'Offline preview · all assets embedded · external links open in browser '
        'when online</div>'
    )
    html = re.sub(r"(<body[^>]*>)", r"\1\n" + banner, html, count=1)

    OUT.write_text(html, encoding="utf-8")
    size_mb = OUT.stat().st_size / (1024 * 1024)
    print(f"\nWrote {OUT.relative_to(ROOT)} ({size_mb:.2f} MB)", file=sys.stderr)


if __name__ == "__main__":
    main()
