# T.S. Lim Trading — Kasut Manek, Melaka

A heritage e-commerce landing page for **T.S. Lim Trading**, a hand-beaded Peranakan shoe workshop on Jalan Tokong (Temple Street), Melaka, Malaysia. The workshop is run by master artisan **Lim Tian Seng**, who has been designing and beading kasut manek since the late 1970s.

---

## About the business

| | |
|---|---|
| **Master artisan** | Lim Tian Seng |
| **Established** | 2000 (family beading practice goes back further) |
| **Address** | 63 Jalan Tokong (Temple Street), 75200 Melaka, Malaysia |
| **Phone** | +60 16-618 6989 |
| **Email** | tslim1961@yahoo.com.sg |
| **Hours** | Daily 10:00–16:00 |
| **Production** | ~70 bespoke pairs/month, made to order |
| **Awards** | Anugerah Kraf Negara 2012 · UNESCO Seal of Excellence for Handicrafts 2012 |
| **Press** | New Straits Times · Sydney Morning Herald · Malay Mail · Yahoo News · The Star |

### What is kasut manek?

Kasut manek (literally "shoes of beads") are hand-beaded Peranakan slippers — the signature footwear of the Baba Nyonya / Straits Chinese community. Each pair is beaded one glass seed bead at a time onto Aida canvas stretched over a wooden frame (pidangan), then lasted and soled by hand. A single pair holds 10,000–20,000 beads and takes anywhere from five days to two months to complete, depending on the bead tier.

Lim Tian Seng is the only maker in Melaka who personally does both the **design** and the **beading** of the manek face himself.

---

## Project structure

```
tslim-trading/
├── index.html          # Main landing page
├── assets/             # Press logos, images
│   ├── press-nst.png
│   ├── press-smh.svg
│   ├── press-malaymail.svg
│   ├── press-yahoo.svg
│   └── press-thestar.svg
├── docs/
│   └── CONTEXT.md      # Source-of-truth reference (business facts, press history, competitive research)
└── DESIGN.md           # Design system and visual decisions
```

---

## Viewing the site

This is a **single-file static site** — no build step required.

```bash
# Open directly in your browser
open index.html

# Or serve locally
npx serve .
# → http://localhost:3000
```

---

## What the landing page covers

- **Hero** — workshop tagline and core value proposition
- **Craft** — the three bead tiers (Manek Kasar · Manek Halus · Manek Potong)
- **Maker** — biography of Lim Tian Seng and the studio's heritage
- **Recognition** — 2012 national and UNESCO awards
- **As seen in** — press logo strip (NST, SMH, Malay Mail, Yahoo News, The Star)
- **Documentary** — embedded YouTube feature
- **Visit** — address, hours, contact details

---

## Key facts for contributors

- **Made-to-order only** — no ready stock; lead times range from 5 days to 2 months.
- **International shipping** is already operational.
- **No active social media** accounts exist for the business at this time.
- Business facts are documented in [`docs/CONTEXT.md`](docs/CONTEXT.md), which is the source of truth for all copy decisions. Update that file if facts change.
- Current 2026 pricing is not yet published on the site; the pricing section will be added once confirmed.

---

## Background

This project is being built by the owner's family to establish the workshop's first online presence. The site is intentionally content-first and narrative-driven — kasut manek is a craft under genuine succession risk, and the page reflects that honestly.
