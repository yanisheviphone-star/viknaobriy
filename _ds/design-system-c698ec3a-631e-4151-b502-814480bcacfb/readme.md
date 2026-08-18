# ЕКІПАЖ Design System

## Sources
- Reference screenshots of architectural-systems manufacturer websites (in `uploads/`) set the shape and type language: flat grey plates, square 2px-bordered buttons, bold Inter headings. Colors remain this system's own industrial palette. Earlier reference (`uploads/DESIGN-shopify.md`) is superseded for shape/depth, and its shape and type language (pill buttons, 12px-radius shadowed plates, thin-weight 330 display type).
- No Figma file, codebase, logo, or product photography was provided. Colors, type pairing, and all copy are original work by this design system for [ЕКІПАЖ], scoped to the brief below.

## Company
[ЕКІПАЖ] is a Ukrainian manufacturer of aluminum profile systems — windows, doors, garage doors, facade and balcony structures. The site this system supports serves **dealers, installers, architects, and end customers** with: a product catalog with technical specs (profile cross-sections, thermal performance, series comparisons), a dealer/distributor locator, a quote request form, and a certification/manufacturing overview.

Overall mood: **precision, reliability, engineering trust.** No emojis, no illustrations, no playful elements, no startup-marketing tone.

## Content Fundamentals
- **Voice:** direct, technical, declarative. Sentences state facts (values, standards, dimensions) rather than sell a feeling. "Certified to EN 14351-1" not "Built for peace of mind."
- **Person:** address the reader as "you" in forms and CTAs ("Request a quote," "Find a dealer near you"); descriptive/spec copy is third-person and factual.
- **Casing:** sentence case throughout, including headlines and button labels. Only certification codes and series names are set in caps (CE, ISO 9001, PA-70).
- **Numbers matter:** never round or omit a spec value. Uf-values, chamber counts, and depths appear as precise figures with units (`0.94 W/m²K`, not "highly efficient").
- **No emoji, no exclamation marks, no rhetorical questions.**
- **Example headline:** "Aluminum profile systems engineered for precision."
- **Example body:** "Multi-chamber aluminum profile with thermal break, engineered for certified thermal performance and structural rigidity."
- **Example CTA pair:** "Browse product catalog" / "Request a quote" — always a verb + concrete object, never "Learn more" alone as a primary action.

## Visual Foundations
- **Canvas:** a single track — white base canvas (`--color-bg`, #FFFFFF) with an occasional subtle grey section band (`--color-bg-subtle`, #F5F6F8) for visual rhythm (certification strip, table headers, footer). No second dark/cinematic canvas, no cream tint.
- **Color:** deep engineering blue (`--color-primary`, #1E4B8C) used sparingly — CTAs, links, active states, table accents — never as large fill areas. Neutral grey scale from near-white to graphite (`--gray-900`, #111827) carries all text and structure. No gradients, no glassmorphism, no colored background fills behind cards.
- **Type:** Inter for everything — a confident UI grotesque. Display and headings are **bold (700)** with tight negative tracking; body is 400 at 1.6 line-height; small labels are 600 uppercase with wide tracking. System `ui-monospace` for technical spec values and tables, reinforcing the "datasheet" register wherever a number matters.
- **Shape:** everything is square — every radius token is `0`. Buttons are rectangles with a **2px border** (`--border-width-strong`); plates, tags, inputs and image slots are hard-edged rectangles. Nothing in the system is rounded.
- **Depth:** none. All `--elevation-*` tokens are `none` — the system is flat. Separation comes from flat grey plate fills (`--color-plate` #F1F1F1, `--color-plate-strong` #E6E7E8), 1px hairlines (`--color-border`), and ink blocks (`--color-ink`).
- **Imagery:** real production photography (profiles, factory floor, installation, cross-sections) sitting flush in a square, hard-edged frame — never rounded, never shadowed. No photography was supplied, so every image slot in this system is a labeled placeholder — see Caveats.
- **Animation:** none specified; keep any transitions to simple opacity/color fades under 150ms if added — no bounce, no scale.
- **Hover/press states:** hover darkens the primary blue by one step (`--color-primary-700`) or tints neutral surfaces to `--gray-50`; no shrink/scale on press.
- **Layout:** generous but not extreme whitespace — 48–80px section padding, 16–32px card padding. No fixed/sticky decorative elements beyond a standard top nav.
- **Transparency/blur:** not used anywhere in the system.

## Iconography
No icon set was supplied with the brief, so the system now ships its **own filled glyph set** drawn on a 24px grid inside `components/icons/Icon.jsx` — solid shapes, no strokes, knockouts via `fill-rule: evenodd`, refined at small sizes. It covers interface, trust-mark, contact and product-category glyphs (window, door, sliding-door, facade, fire-door, partition, sunshade). The old CDN `Icon` component, recolored through a CSS mask so they inherit `color`. This is a **flagged substitution** — Lucide's plain stroke style was chosen for its neutral, technical character; swap in the manufacturer's own icon set if one exists. No emoji or unicode glyphs are used as icons anywhere in the system.

## Font Substitution Note
No font files were supplied. **Inter** (variable, loaded via Google Fonts in `tokens/fonts.css`) is the system typeface — it is set bold (700) for display and headings (mirroring the Shopify reference's editorial display cut) while body/UI text sits at 400–550. System `ui-monospace` covers code/spec values, no webfont mono needed. Please flag if the brand has a licensed proprietary typeface it prefers instead.

## Logo
No logo file was supplied. The brand name "ЕКІПАЖ" is rendered in plain type (Inter, 700) everywhere a mark would go — nav, footer, thumbnail. Do not treat any wordmark rendering in this system as a substitute for a real logo; supply one if available.

## Index

- `styles.css` — root stylesheet, imports everything in `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `fonts.css`, `base.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups in the Design System tab).
- `assets/` — no visual assets were supplied (no logo, no photography); this folder is intentionally empty pending real materials.
- `components/` — reusable primitives, grouped by concern:
  - `buttons/Button` — primary/secondary/outline/ghost, 3 sizes, icon support.
  - `badges/Badge` — square tag, 4 tones.
  - `cards/Card` — flat grey plate (default / outline / accent / ink).
  - `forms/Input`, `forms/Select` — text field + select, shared chrome.
  - `forms/QuoteForm` — minimal quote request form (name, company, phone, product, details).
  - `tables/SpecTable` — two-column mono spec readout.
  - `tables/SeriesComparisonTable` — multi-column series comparison.
  - `product/ProductSpecCard` — series card with cross-section slot + spec table.
  - `dealer/DealerLocator` — search + list of dealers/installers/distributors.
  - `certifications/CertificationBadge` — icon + label + caption for standards.
  - `navigation/NavBar`, `navigation/Footer`.
  - `icons/Icon` — in-house filled glyph set (inline SVG, `currentColor`).
- `ui_kits/marketing-site/` — interactive click-through recreation: Home, Catalog, Product Detail, Find a Dealer, Request a Quote.
- `SKILL.md` — portable skill definition for use in Claude Code.

### Intentional additions
No component source (Figma/codebase) was provided, so this is a from-scratch component set sized to the brief. `Icon` is an intentional addition — a thin wrapper needed to give the rest of the system (nav, dealer locator, certifications) a consistent way to render glyphs from the substituted Lucide set.

## Caveats — please help iterate
- **No logo, photography, or icon set was supplied.** Every image slot in the UI kit is a labeled grey placeholder; the icon set is drawn in-house (filled, no strokes) rather than licensed. Real assets would meaningfully sharpen this system — please attach them if available.
- **No Figma file or existing codebase was given** — the component inventory (Button, Badge, Card, forms, tables, product/dealer/certification components) was authored from the brief's explicit requirements list, not cloned from a real product. Flag anything that doesn't match your actual site.
- **Font substitution:** Inter Variable stands in for a bespoke grotesque — confirm this is an acceptable direction or supply licensed font files.
- **Cards/buttons/type now follow the reference screenshots** (flat grey plates, square 2px-bordered buttons, bold Inter headings, zero radius, zero shadow) while keeping this system's own industrial color palette — confirm this direction reads right for the brand.
- The marketing site UI kit is one plausible information architecture (Home → Catalog → Product Detail → Dealer Locator → Quote); confirm it matches the real site's structure before treating it as ground truth.
