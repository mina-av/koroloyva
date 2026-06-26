# Korolyova Design System

A luxury design system for **Тамила Королёва (Tamila Korolyova)** — consulting on real estate, construction and renovation, online courses, owner-interest representation, and a closed partner network, built on 20+ years of practice. The look is deliberately expensive: editorial serif typography, generous whitespace, warm near-black ink on cream paper, large architectural/interior photography, and a single restrained brass-gold accent. Reference register: high-end property consultancies (the brief named Knight Frank's services page as the quality bar).

> **Sources & provenance.** Built from the real brand site, supplied as `uploads/index.html` (the original `Korolyova-site/index.html`). All website copy is lifted verbatim from that source (Russian). The original itself loads **Cormorant + Onest** from Google Fonts and uses a Knight-Frank-style nav + service grid + photo placeholders — this system matches those fonts and elevates the layout. The original `styles.css`/`script.js` and brand photography were **not** supplied; colors here are an authored interpretation and imagery uses hosted placeholders.

---

## What Тамила Королёва is

A real-estate & construction expert who helps two audiences: **property owners** (consultations, an owner's course, and full representation of their interests on a project) and **construction entrepreneurs/investors** (a business program, mentored first project, strategic partnership), plus a **closed partner network**. The tone is expert and advisory — discreet, authoritative, never a mass-market course funnel.

Surfaces covered by this system:
- **Marketing landing page** — hero, problem, three paths, owner formats, business program, partner network, about, process, contact. → `ui_kits/website/`
- **Slide deck** — title, market, showcase, quote, contact (placeholder content from the first pass; see Caveats). → `slides/`

---

## Content fundamentals

How the brand writes. Language is **Russian (ru-RU)**.

- **Voice:** first-person expert ("я убедилась", "я создала несколько форматов") — a single named authority, not a faceless firm. Addresses the reader with formal **Вы**.
- **Tone:** calm, precise, advisory. Sells through clarity and risk-awareness ("цена ошибки может исчисляться тысячами долларов"), not hype. No urgency tactics, no exclamation marks.
- **Casing:** sentence case for prose; **UPPERCASE with wide tracking** only for eyebrows, labels, nav, buttons. Headlines in display serif, sentence case.
- **Punctuation:** em/en-dash for asides and emphasis; `·` as a soft separator in spec lines ("52 модуля · 143 урока · 634 страницы"); prices in **USD** with a thin space ("1 570 $", "от 2 570 $").
- **Emoji:** never. **Exclamation marks:** effectively never.
- **Signature lines** are aphoristic: *"Недвижимость способна увеличивать капитал — или уничтожать его"* · *"Собственник не обязан быть заложником мастеров."*
- **Numbers as proof:** course depth and experience stated plainly ("95 модулей · 297 уроков · 1 000+ страниц", "20+ лет практики"). No decorative stats.

---

## Visual foundations

- **Color** — Warm, low-saturation. Cream paper (`--cream-50 #F7F2E9`) and white as base; warm near-black ink (`--ink-900 #16130F`) for text and dark editorial sections; taupe **stone** neutrals for secondary text. **One** accent: muted **brass** gold (`--brass-500 #A8854B`), used sparingly for eyebrows, the quote mark, hover, and the single primary CTA per view. Status colors exist but are muted (never neon).
- **Typography** — Display: **Cormorant Garamond**, a high-contrast editorial serif, for all headlines and large figures (italic for the accented word). Body/UI: **Hanken Grotesk**, a quiet humanist grotesk. Eyebrows/labels: Hanken uppercase, 12px, `0.22em` tracking. Mono: IBM Plex Mono for incidental data. *(Substitution — see Iconography/Fonts note below.)*
- **Spacing & layout** — 4px base. Sections breathe: `--section-y` is 144px. Prose capped at `--measure 66ch`. Wide container `1480px`. Air is the primary signal of quality — when unsure, add space.
- **Backgrounds** — Two registers only: light (cream/paper) and dark (ink). Full-bleed photography for heroes and the title slide, always under a **protection gradient** (top + bottom ink scrims) so type stays legible. No decorative patterns, no mesh gradients, no purple.
- **Imagery** — Architecture, interiors, premium exteriors; warm, slightly desaturated (`filter: saturate(0.9)`), never cold or neon. Images sit flush (square corners). Slow zoom (`--dur-slow`) on hover for property cards.
- **Corners & borders** — Minimal rounding (2–4px; many elements fully square) — squared edges read as architectural. **Hairline borders** (`--sand-300` on light, `rgba(cream,0.16)` on ink) do most of the structural work; the brass diamond divider marks chapter breaks.
- **Elevation** — Soft, warm, low shadows (`--shadow-sm/md/lg`). Cards mostly rely on hairlines + a subtle hover lift (`translateY(-4px)`) rather than heavy drop shadows.
- **Motion** — Restrained. Fades and short translates with `--ease-out`; image reveals/zoom on `--dur-slow` (520ms). No bounce, no springy overshoot, no infinite loops on content. Brass rule "sweeps" across the top of a ServiceCard on hover.
- **Hover / press** — Hover = brass color shift or a quiet fill (secondary button inverts to ink); arrows nudge `translateX(3px)`. Press relies on the same color states (no aggressive scale-down). Inputs are underline-only; the underline turns brass on focus.
- **Transparency & blur** — Used only for the sticky header (cream at 92% + blur once scrolled) and the deck nav pill. Otherwise surfaces are opaque.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) — thin, even-stroke line icons, loaded from CDN (`lucide@0.460.0`). Their quiet 1.5px stroke matches the editorial, non-shouty register. Call `lucide.createIcons()` after render (and after each React commit) to swap `<i data-lucide="…">` for SVG.
  - **Substitution flag:** no brand icon set was available from the (unreachable) source site, so Lucide is a substitution. Replace with a licensed/branded set if one exists.
- **Usage:** sparing and small (16–22px), tinted stone or brass. Icons support text (services, contact lines, checklist ticks) — they never stand alone as decoration.
- **Emoji / Unicode:** no emoji. The only "glyph" motifs are the typographic quotation mark (`"` in Cormorant) and the small rotated-square **brass diamond** used in the `Divider`.
- **Logo:** the wordmark is **typographic**, not an image — `Тамила Королёва` set in Cormorant 500. Light and dark variants in `guidelines/wordmark.card.html`.

### Fonts — matched to source
The source site loads **Cormorant + Onest** from Google Fonts; this system uses the same families (plus IBM Plex Mono for incidental figures). No swap needed unless you license a different brand face later.

### Imagery note
All photography is loaded from hosted **Unsplash** URLs as placeholders — no brand photography was available. Swap for licensed assets in production.

---

## Index / manifest

**Foundations**
- `styles.css` — entry point (consumers link this). `@import` manifest only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `base.css`.
- `guidelines/*.card.html` — 15 specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Components** (`window.KorolyovaDesignSystem_d31d2b.*`)
- `components/core/` — `Button`, `IconButton`, `Eyebrow`, `Badge`, `Input`, `Divider`.
- `components/realestate/` — `PropertyCard`, `ServiceCard`, `StatBlock`, `Quote`.
- Each has `.jsx`, `.d.ts`, `.prompt.md`; one `*.card.html` per directory.

**UI kit**
- `ui_kits/website/` — interactive landing page for Тамила Королёва, real Russian copy (`index.html` + `Parts.jsx` + 10 section modules + `README.md`): Header, Hero, Problem, Paths, Owners, Business, Network, About, Process, Contact, Footer.

**Slides**
- `slides/` — `Slides.jsx` (5 slide components) + per-slide `*.slide.html` cards + `index.html` deck (arrow-key nav, self-scaling).

**Skill**
- `SKILL.md` — Agent-Skills-compatible entry point for downloading and reusing this system.
