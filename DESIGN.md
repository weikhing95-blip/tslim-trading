---
version: 1.0
name: T.S. Lim Trading — Heritage Editorial
description: A warm-canvas editorial design language for a heritage Peranakan craft brand. Anchored on a tinted cream canvas with slab-serif display headlines, scarce warm-coral CTAs, and dark navy product surfaces. The voice is editorial, restrained, and material — closer to a long-form magazine column than a SaaS marketing page. Hand-drawn line icons in cream-tinted circles substitute for verbose section descriptors. Brand voltage comes from the cream/coral pairing and from the cream-to-dark surface pacing across sections.

colors:
  primary:               "#cc785c"
  primary-active:        "#a9583e"
  primary-disabled:      "#e6dfd8"
  ink:                   "#141413"
  body-strong:           "#252523"
  body:                  "#3d3d3a"
  muted:                 "#6c6a64"
  muted-soft:            "#8e8b82"
  canvas:                "#faf9f5"
  surface-soft:          "#f5f0e8"
  surface-card:          "#efe9de"
  surface-cream-strong:  "#e8e0d2"
  surface-dark:          "#181715"
  surface-dark-elevated: "#252320"
  surface-dark-soft:     "#1f1e1b"
  hairline:              "#e6dfd8"
  hairline-soft:         "#ebe6df"
  on-primary:            "#ffffff"
  on-dark:               "#faf9f5"
  on-dark-soft:          "#a09d96"
  accent-teal:           "#5db8a6"
  accent-amber:          "#e8a55a"

typography:
  display-xl:
    fontFamily: "Cormorant Garamond, Tiempos Headline, Garamond, serif"
    fontSize: "clamp(40px, 6vw, 64px)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  display-lg:
    fontFamily: "Cormorant Garamond, Tiempos Headline, Garamond, serif"
    fontSize: "clamp(34px, 4.4vw, 48px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  display-md:
    fontFamily: "Cormorant Garamond, Tiempos Headline, Garamond, serif"
    fontSize: "clamp(28px, 3.4vw, 36px)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  display-sm:
    fontFamily: "Cormorant Garamond, Tiempos Headline, Garamond, serif"
    fontSize: "clamp(22px, 2.6vw, 28px)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title-lg:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.3
  title-md:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
  title-sm:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
  body-md:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
  caption-uppercase:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.125em"
    textTransform: uppercase
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  mono-caption:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, monospace"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.1em"
    textTransform: uppercase

rounded:
  xs:   4px
  sm:   6px
  md:   8px
  lg:   12px
  xl:   16px
  pill: 9999px

spacing:
  xxs:     4px
  xs:      8px
  sm:      12px
  md:      16px
  lg:      24px
  xl:      32px
  xxl:     48px
  section: 96px

icons:
  size:        22px
  container:   48px
  stroke:      1.5px
  style:       "single-weight line, rounded caps, rounded joins, no fill except for accent dots"
  color:       "{colors.ink} on {colors.surface-cream-strong} circle"
  use:         "scannable section markers; do not use as decorative accents"

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    height: 64px
    border: "1px solid transparent (becomes {colors.hairline} when scrolled)"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    height: 44px
    padding: "0 22px"
    rounded: "{rounded.md}"
    typography: "Inter 14/500"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    height: 44px
    rounded: "{rounded.md}"
  button-on-dark:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    height: 44px
    rounded: "{rounded.md}"
  hero-illustration-card:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.xl}"
    aspectRatio: "5 / 6"
  grade-card:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    imageRadius: "{rounded.md}"
    imageAspect: "4 / 3"
  maker-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    portraitAspect: "4 / 5"
  process-step:
    iconContainer: "{components.icon-circle}"
    numberLabel: "{typography.mono-caption}, color {colors.primary}"
    title: "{typography.display-sm}, Cormorant 500"
    body: "{typography.body-md}"
    divider: "1px solid {colors.hairline}"
  icon-circle:
    backgroundColor: "{colors.surface-cream-strong}"
    iconColor: "{colors.ink}"
    size: 48px
    rounded: "{rounded.pill}"
    inverseOnDark: "{colors.surface-dark-elevated} background, {colors.on-dark} icon"
  rec-card:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    yearLabel: "{typography.mono-caption}, color {colors.muted}"
    title: "{typography.title-lg} but rendered Cormorant 500"
    source: "{typography.caption}, color {colors.primary}"
  doc-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    layout: "2-column at desktop, stacked at mobile"
  commission-callout-coral:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "64px 48px"
    ctaButton: "background {colors.canvas}, text {colors.ink}"
  visit-row:
    layout: "100px label column | 1fr value column"
    label: "{typography.mono-caption}, color {colors.muted}"
    value: "{typography.body-md}, color {colors.ink}"
    divider: "1px solid {colors.hairline} top and bottom"
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-soft}"
    padding: "64px 0 40px"
    columns: 4
---

## Overview

T.S. Lim Trading's design language positions a heritage craft brand against the visual conventions of e-commerce. The base atmosphere is a **tinted cream canvas** (`{colors.canvas}` — #faf9f5) — warm, deliberately not pure white. Headlines run a **slab-serif display** (Cormorant Garamond, weight 500, with negative letter-spacing) paired with **Inter** body sans. The result reads like a magazine column on the artisan, not a marketing page about a product.

Brand voltage comes from the **cream + coral pairing**. Coral (`{colors.primary}` — #cc785c) is the signature accent — scarce on individual elements (one nav CTA, primary buttons, text-link colour) and generous only on the full-bleed commission callout. The coral has a quiet historical resonance with Peranakan craft palettes; it is **not** a contemporary-startup orange.

The system has three surface modes that alternate band-by-band:

1. **Cream canvas** (`{colors.canvas}`) — default body floor
2. **Cream card** (`{colors.surface-card}`) — grade cards, hero illustration card
3. **Dark navy** (`{colors.surface-dark}`) — maker band, documentary card, footer
4. **Coral fill** (`{colors.primary}`) — used **only** on the commission callout

The cream-to-dark contrast is the page's pacing rhythm. The coral appears at the climax of the page (the commission) and only there as a full surface.

**Key characteristics:**

- Warm cream canvas with warm-dark ink (`{colors.ink}` — #141413) text. The brand's defining colour choice.
- Slab-serif display headlines at weight 500 with -0.015em to -0.025em letter-spacing. Never bold, never sans-serif at the display level.
- Hand-drawn line icons in cream-tinted circles mark the Craft and Recognition sections. The icons substitute for verbose descriptors so the page is scannable.
- Dark navy surface cards carry the maker portrait and the documentary preview — chrome that *shows* the work rather than *describing* it.
- Border-radius is hierarchical: `{rounded.md}` (8px) for buttons + inputs, `{rounded.lg}` (12px) for content + product cards, `{rounded.xl}` (16px) for the hero illustration container, `{rounded.pill}` for badges and icon circles.
- Section rhythm is `{spacing.section}` (96px) between bands; internal card padding stays generous at `{spacing.xl}` (32px).

## Colors

### Brand & accent

- **Coral / Primary** (`{colors.primary}` — #cc785c): The signature accent. Used on the nav CTA, primary buttons, text-link colour, the full-bleed commission callout, and as an icon-mark colour for the Step labels. The most-recognised brand colour outside of the wordmark.
- **Coral Active** (`{colors.primary-active}` — #a9583e): Hover / press darker variant.
- **Coral Disabled** (`{colors.primary-disabled}` — #e6dfd8): A desaturated cream-tinted disabled state. Same hex as `{colors.hairline}` — borders and disabled coral share one elevation step.
- **Accent Teal** (`{colors.accent-teal}` — #5db8a6): Used sparingly. Currently appears as the eyebrow accent inside the documentary dark card.
- **Accent Amber** (`{colors.accent-amber}` — #e8a55a): Used sparingly. Currently appears as the eyebrow accent inside the maker dark band.

### Surfaces

- **Canvas** (`{colors.canvas}` — #faf9f5): Default page floor. Tinted cream, deliberately not pure white.
- **Surface Soft** (`{colors.surface-soft}` — #f5f0e8): Section dividers, very-soft band backgrounds (the Recognition section uses this).
- **Surface Card** (`{colors.surface-card}` — #efe9de): Grade cards, hero illustration card. One step darker than canvas.
- **Surface Cream Strong** (`{colors.surface-cream-strong}` — #e8e0d2): The strongest cream tint. Used for icon-circle backgrounds and for grade-card image placeholders.
- **Surface Dark** (`{colors.surface-dark}` — #181715): Maker band, documentary card, footer.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #252320): Elevated cards / buttons inside dark surfaces (the documentary "Watch on YouTube" button uses this).
- **Surface Dark Soft** (`{colors.surface-dark-soft}` — #1f1e1b): Reserved for nested dark elements.

### Text

- **Ink** (`{colors.ink}` — #141413): All headlines and primary text on cream. Warm dark, slightly off-pure-black.
- **Body Strong** (`{colors.body-strong}` — #252523): Lead paragraphs, hero sub-headlines.
- **Body** (`{colors.body}` — #3d3d3a): Default running text.
- **Muted** (`{colors.muted}` — #6c6a64): Sub-labels (Visit row labels, Recognition year captions, footer secondary text).
- **Muted Soft** (`{colors.muted-soft}` — #8e8b82): Reserved for fine-print and lowest-priority text.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on coral backgrounds.
- **On Dark** (`{colors.on-dark}` — #faf9f5): Cream-tinted "white" on dark surfaces (echoes the canvas tone — never pure white on dark).
- **On Dark Soft** (`{colors.on-dark-soft}` — #a09d96): Secondary text in dark surfaces (footer links, maker body copy).

### Hairlines

- **Hairline** (`{colors.hairline}` — #e6dfd8): 1px borders on cream surfaces (Recognition cards, Visit rows, scrolled nav).
- **Hairline Soft** (`{colors.hairline-soft}` — #ebe6df): Barely-visible divider, used inside the same surface.

## Typography

### Families

- **Display:** Cormorant Garamond (weight 500). The slab-serif character is the brand voice — switching to a sans-serif display would make the page indistinguishable from any other modern e-commerce template. Use Tiempos Headline as the closest paid substitute; EB Garamond as the open-source fallback.
- **Body & UI:** Inter (weight 400 for paragraphs, 500 for labels). Humanist proportions, optimised for screen.
- **Mono:** JetBrains Mono. Used for step numbers ("Step 01"), Recognition year captions ("2012"), Visit row labels ("Hours", "Address"), grade-card meta text ("5–10 days per pair"), and footer bottom-line. The mono is the "specification" voice — terse, precise, contrasting with the editorial serif.

### Hierarchy

| Token | Size | Weight | Line height | Letter-spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | clamp(40, 6vw, 64)px | 500 | 1.05 | -0.025em | Hero h1 |
| `{typography.display-lg}` | clamp(34, 4.4vw, 48)px | 500 | 1.1 | -0.02em | Section h2s |
| `{typography.display-md}` | clamp(28, 3.4vw, 36)px | 500 | 1.15 | -0.015em | Documentary h2, grade-card titles |
| `{typography.display-sm}` | clamp(22, 2.6vw, 28)px | 500 | 1.2 | -0.01em | Process step titles, grade-card titles, recognition card titles |
| `{typography.title-lg}` | 22px | 500 | 1.3 | 0 | Inter labels |
| `{typography.title-md}` | 18px | 500 | 1.4 | 0 | Inter labels |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Default running text |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Footer body, fine print |
| `{typography.caption-uppercase}` | 12px | 500 | 1.4 | 0.125em | Eyebrow labels, nav links, footer headings |
| `{typography.mono}` | 14px | 400 | 1.6 | 0 | Grade-card meta |
| `{typography.mono-caption}` | 11px | 400 | 1.4 | 0.1em | Step number, year, visit-row label |

### Principles

- **Never bold the display serif.** Weight 500 is the maximum. The serif voice is considered, not assertive.
- **Negative letter-spacing on display sizes is non-negotiable.** Cormorant Garamond without it reads spaced-out and off-brand.
- **Body stays at weight 400, labels at 500.** Don't use 600+ for emphasis — use the serif display or the mono caption instead.
- **Mono is for "specification" voice.** Step numbers, dates, addresses, measurements. Don't use mono as a stylistic accent in running paragraphs.

## Layout

### Spacing system

Base unit: 4px. Tokens: `{spacing.xxs}` 4 · `{spacing.xs}` 8 · `{spacing.sm}` 12 · `{spacing.md}` 16 · `{spacing.lg}` 24 · `{spacing.xl}` 32 · `{spacing.xxl}` 48 · `{spacing.section}` 96.

- **Section vertical padding:** `{spacing.section}` (96px) at desktop, `72px` at mobile.
- **Card internal padding:** `{spacing.xl}` (32px) for grade cards, recognition cards, maker band internal padding.
- **Commission callout padding:** `64px × 48px` (taller for ceremonial weight).
- **Documentary text panel padding:** `64px × 48px`.

### Grid & container

- **Max content width:** 1200px, centered.
- **Outer gutter:** 32px at desktop, 24px at tablet, 20px at mobile.
- **Hero:** 1:1 two-column at desktop, single column at mobile (text first, illustration below).
- **Grade cards:** 3-up at desktop, 1-up at mobile.
- **Process steps:** 3-column row at desktop (icon | title | description), stacked at mobile (icon as row-span, title + description stacked in the second column).
- **Recognition cards:** 3-up at desktop, 1-up at mobile.
- **Documentary card:** 2-column at desktop, stacked at mobile.

### Whitespace philosophy

The cream canvas + serif display + generous internal padding create an editorial pacing. Whitespace between bands stays uniform at 96px; whitespace inside cards is generous (32px). The page should feel like turning pages in a printed monograph, not scrolling a marketing site.

## Surface pacing

The page **alternates** between cream and dark surfaces to create reading rhythm. The strict rule: never use the same surface mode in two consecutive bands.

Current pacing (top to bottom):

1. Cream — Hero
2. Cream — Collection (grade cards on cream-card surface)
3. **Dark** — Maker band
4. Cream — Process (icons in cream-strong circles on cream)
5. Cream (soft) — Recognition (`{colors.surface-soft}` background)
6. **Dark** — Documentary card
7. **Coral** — Commission callout (the only full-bleed coral surface on the page)
8. Cream — Visit
9. **Dark** — Footer

Note steps 4 and 5 are both cream but the surface tone shifts (`{colors.canvas}` → `{colors.surface-soft}`). This is the *only* permitted cream-on-cream transition; both bands carry a clearly different tonal value.

## Icon system

Hand-drawn-feel line icons in cream-tinted circles. Used to make the **Craft** and **Recognition** sections scannable — people pattern-match an icon faster than they read a paragraph.

### Spec

- **Container:** 48 × 48px circle, `{colors.surface-cream-strong}` background, `{rounded.pill}` radius.
- **Inverse on dark surfaces:** `{colors.surface-dark-elevated}` background, `{colors.on-dark}` icon colour.
- **Icon:** 22 × 22px viewBox (drawn in 24 × 24 SVG canvas), 1.5px stroke, rounded caps, rounded joins, no fill except for small accent dots / arrowheads.
- **Colour:** `{colors.ink}` on cream containers, `{colors.on-dark}` on dark containers. Never coral — the coral is reserved for surface and CTA voltage.
- **Drawing convention:** single-weight line, no shaded fills, no gradients, no two-tone strokes. Each icon should be redrawable from memory.

### Current set

**Process (5):** Pattern (tracing-paper rectangle + motif curves) · Bead selection (three beads in a row) · Stitching (needle + thread) · Lasting (shoe-last side profile) · Provenance (document with three text lines).

**Recognition (1):** Press & Documentary (film frame with play triangle) — used only because no single institution corresponds to this card.

### Extension rule

When adding a new icon, draw it in the same hand: 24-canvas, 1.5 stroke, two-to-six paths maximum, rounded joins. If the icon needs more than six paths to read, the *concept* is too complex and the section probably shouldn't have an icon there.

## Credential marks (real institutional logos)

The Recognition section's first two cards display **official logos** of the awarding institutions (UNESCO, Kraftangan Malaysia) instead of drawn icons. The rule:

- **If the card credits a specific awarding body, use that body's official logo.** Credibility comes from the unmistakable real mark, not from a stylised icon.
- **If the card represents a category** with no single institution behind it (e.g. "Press & Documentary" covering multiple publications), keep the icon-in-circle treatment from the icon system.

### Display spec

- **Container (`.rec-mark`):** 48px tall, flex-row left-aligned, 24px bottom margin to match the icon-circle's vertical rhythm.
- **Image (`.rec-mark img`):** `max-height: 40px`, `max-width: 220px`, `object-fit: contain`. The 40px cap is below the 48px container so logos sit slightly inset, giving them visual breathing room.
- **Compact variant (`.rec-mark--compact`):** for square-ish logos like UNESCO, allow `max-height: 48px` to claim full container height. Wide wordmarks (Kraftangan) stay at the default 40px.
- **Colour:** original logo colours, no recolouring, no monochrome silhouettes. Trademark integrity > brand palette uniformity here.

### Asset location

`/assets/*.svg` — self-hosted, not hot-linked. Sources documented in `Known gaps` below.

### Don'ts for credential marks

- Don't recolour or restyle a real institutional logo to match the cream palette. The foreign colour signals "external authority, not our design" and that signal is the point.
- Don't enlarge a logo to dominate the card. Logos sit at credential scale (≤48px), not at hero scale.
- Don't combine multiple institution logos into one card. One credential per card.

## Components

### Top nav

Cream, sticky, 64px tall. Carries the T.S. Lim spike-mark + wordmark at left, horizontal menu (Collection, Maker, Process, Recognition, Visit) at center, "Commission" coral CTA at right. Becomes hairline-bottomed and translucent on scroll. Menu collapses below 960px.

### Buttons

- **`button-primary`** — Coral CTA. 44px height, 22px horizontal padding, `{rounded.md}` radius. Background `{colors.primary}`, text `{colors.on-primary}`, hover darkens to `{colors.primary-active}`.
- **`button-secondary`** — Cream button with hairline outline. 44px height, same padding. Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`.
- **`button-on-dark`** — Used over dark surfaces (the "Watch on YouTube" button on the documentary card). Background `{colors.surface-dark-elevated}`, text `{colors.on-dark}`.
- **Text link** — Inline coral underline-on-hover. Used for inline references inside body copy.

### Hero

- **`hero-grid`** — 1:1 two-column. Text left (eyebrow → display-xl h1 → body-strong sub → button row). Image right (`hero-illustration-card`, aspect 5:6, `{rounded.xl}`).
- **`hero-meta`** — Below the grid, separated by a hairline. Two mono-caption lines: award + address.

### Grade card

Three-up grid at desktop. Each card is `{colors.surface-card}` background, `{rounded.lg}`, 32px padding, containing: a 4:3 image at `{rounded.md}`, a coral pill tag ("Grade I · Coarse"), a serif display-sm title (Manik Kasar / Halus / Manek Potong), a mono meta line (lead time), a body-md description.

### Maker band (dark)

Full-width dark band, `{rounded.lg}`. 1.1:1 grid: text left (amber eyebrow → display-lg headline → 2-paragraph body → fact-row of 3), portrait right (4:5 aspect, `{rounded.md}`). The fact-row uses mono-caption labels with display-sm serif values.

### Process step

Three-column row: icon (48px circle) | step-label (mono "Step 0X" + serif title) | body. 40px vertical padding, hairline divider between steps. Steps collapse to icon-on-left + stacked content on mobile.

### Recognition card

Three-up grid at desktop. Each card is `{colors.canvas}` with a 1px hairline border, `{rounded.lg}`, 32px padding. Top to bottom: icon-circle (48px), mono-caption year, serif display-sm title, body-sm description, coral source link.

### Documentary card (dark)

Full-width dark card, `{rounded.lg}`. 1:1 grid: text panel left (teal eyebrow → display-md headline → body-sm description → "Watch on YouTube" button-on-dark), thumbnail right.

### Commission callout (coral)

The single coral moment on the page. Full-width, `{rounded.lg}`, 64px × 48px padding. White-on-coral type. Cream "Begin a conversation" CTA button at the bottom. **Do not add a second coral surface elsewhere on the page** — the scarcity is what makes this one read as a climax.

### Visit row

100px-wide mono-caption label column + 1fr value column. 16px vertical padding per row, 1px hairline divider on top and bottom of the group. Map sits to the right at `{rounded.lg}`, 18% grayscale + 97% contrast filter to mute Google's default colour saturation.

### Footer

Dark navy, 4-column link grid at desktop, collapses to 2 at tablet, 1 at mobile. Spike-mark + wordmark at top in `{colors.on-dark}`. Column headings in `{typography.caption-uppercase}`. Bottom row in mono with subtle separation.

## Do's

- Anchor every page on the cream canvas. Pure white reads generic; the warm tint is the brand differentiator.
- Use Cormorant Garamond serif for every display headline. Pair with Inter body sans. Negative letter-spacing on display sizes is non-negotiable.
- Reserve coral for primary CTAs and the **single** full-bleed commission callout. Don't paint accent moments coral elsewhere.
- Use icon-circles to mark the Craft and Recognition sections. These sections are scanned more than read.
- Alternate cream-and-dark surfaces band-by-band. The rhythm is the brand's pacing.
- Apply 96px section padding at desktop, 72px at mobile.
- Use mono type for "specification" content: dates, lead times, addresses, step numbers, bead counts. The mono is the voice of provenance.

## Don'ts

- Don't use cool grays or pure white for canvas. Cream is the brand.
- Don't use a sans-serif display headline. The serif character is the editorial voice — sans-display turns the site into a Tailwind template.
- Don't bold the serif beyond weight 500. The display reads as considered, not bombastic.
- Don't put coral on icons, on text accents inside dark surfaces, or as a hover wash. Coral is scarce on individual elements; the page has one coral moment (the callout).
- Don't add a second coral callout band. The single coral surface is the page's climax — duplicating it dilutes it.
- Don't introduce a fourth surface tone (no purple bands, no green panels, no gradient hero). The cream + coral + dark trinity is closed.
- Don't add icons outside the Craft and Recognition sections. Icons elsewhere would feel decorative; here they are *navigational*.
- Don't use stock photography of unrelated craft scenes. All imagery must show the workshop, the maker, or the pairs themselves.
- Don't add hover state styling beyond what is encoded: primary darkens on press, hairlines darken on hover, text-links pick up an underline. Nothing else moves.
- Don't compound icons (an icon stacked on top of another icon). One concept, one icon.
- Don't use stroke widths other than 1.5px in icons. The single weight is the visual unity of the icon set.

## Responsive behaviour

### Breakpoints

| Name | Width | Key changes |
|---|---|---|
| Mobile | < 560px | Outer gutter 20px; footer collapses 2-col → 1-col |
| Small | 560–960px | Hamburger nav (currently hidden — to be implemented); 1-column grade/recognition grids; stacked hero; stacked maker; stacked documentary; 2-column footer |
| Desktop | 960–1440px | Full top-nav, 3-up grids, 2-column hero, 2-column maker, 2-column documentary |
| Wide | > 1440px | Same as desktop; max content width caps at 1200px |

### Touch targets

- All buttons at minimum 44 × 44px.
- Icon-circles are 48px — comfortable tap targets, though they aren't tappable themselves.
- Form inputs (when added) should follow the button height: 44px.

### Image behaviour

- Hero image, grade-card images, maker portrait, and documentary thumbnail all use `object-fit: cover` and scale proportionally.
- Map iframe takes filter `grayscale(0.18) contrast(0.97)` to mute Google's default saturation.

## Iteration guide

This DESIGN.md is the source of truth. Every change must be reasoned against it.

1. **Reference tokens by name, never inline hex.** If a colour or size isn't covered by a token, add a token to this file *before* using it in HTML/CSS.
2. **Surface pacing must remain alternating.** When adding a new section, decide its surface mode and verify the band before/after doesn't share the same mode.
3. **Coral is scarce.** Adding a new coral element requires removing or downgrading another coral moment elsewhere.
4. **Icons only in Craft and Recognition.** Expanding the icon system to other sections is a design decision, not an implementation one — flag it and discuss before adding.
5. **Mono is the specification voice.** Don't reach for mono for stylistic flavour; reach for it when the content is genuinely a number, a date, an address, or a code.
6. **Display headlines stay Cormorant 500 with negative tracking.** Body stays Inter 400. The split is unbreakable.
7. **When in doubt about emphasis: bigger Cormorant before bolder weight.**

## Known gaps

- The mobile nav currently hides menu links below 960px instead of collapsing to a hamburger sheet. A proper mobile nav (hamburger button + full-screen cream sheet) is unbuilt.
- Photography is placeholder (hot-linked from emily2u.com). The brand needs a proper photography spec: cropping, lighting, palette, framing. Until then, treat all imagery as temporary.
- Form components (text input, textarea, select, checkbox, validation states) are unspecified. They will be needed if a commission request form is added inline rather than relying on `mailto:`.
- Animation and motion are unspecified. The current page is static; transitions are limited to colour fades on hover. Any future motion work needs a section here.
- E-commerce surfaces (cart, checkout, order tracking) are out of scope. The brand operates on `mailto:` commissions, not a catalogue.
- Bilingual handling (English, Bahasa Malaysia, Mandarin) is unspecified. Type pairing, line-height, and column widths will need re-checking when localised.
- The spike-mark glyph is a placeholder — an 8-spoke radial drawn inline as SVG. A proper brand mark, refined typographically and tested at small sizes, is needed.
- Credential mark sources: UNESCO emblem from Wikimedia Commons; Kraftangan Malaysia logo from `kraftangan.gov.my/images/logo_en.svg`. Both are self-hosted in `/assets/`. UNESCO's general emblem has trademark usage restrictions; the recipient (T.S. Lim Trading is a 2012 awardee) has a legitimate basis to display the credit, but if the institution publishes a dedicated "Award of Excellence" recipient seal, swap to that mark.
