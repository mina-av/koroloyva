# UI Kit — Лендинг Тамилы Королёвой

High-fidelity, interactive recreation of the **Тамила Королёва** landing page (consulting on real estate & construction). Copy is lifted verbatim from the source site (`uploads/index.html`, Russian); the layout is elevated to the expensive editorial system. Composes the design-system primitives — it does **not** re-implement them.

## Run
Open `index.html`. It loads `../../styles.css` (tokens + fonts), the compiled `../../_ds_bundle.js`, Lucide icons, then `Parts.jsx` (shared section helpers) and each section module.

## Sections (each assigns to `window`)
- `Parts.jsx` — shared `KFSectionHead`, `KFNumberTag`, `KFArrowLink`, `KFOfferCard`.
- `Header.jsx` — sticky nav, name wordmark, blur-on-scroll, mobile drawer.
- `Hero.jsx` — full-bleed interior photo, protection gradient, the "увеличивать капитал — или уничтожать его" headline.
- `Problem.jsx` — «С чего всё начинается» + the four owner questions.
- `Paths.jsx` — three paths (owners / business / network) as image cards.
- `Owners.jsx` — 02 · three formats incl. the course price tiers (237 / 587 / 1 570 $).
- `Business.jsx` — 03 · three business-program offers.
- `Network.jsx` — 04 · dark partner-network band + connection steps.
- `About.jsx` — 05 · Тамила Королёва bio + 20+ badge.
- `Process.jsx` — 06 · «Как начать работу», four steps.
- `Contact.jsx` — 07 · functional form (name, contact, method pills, interest select, message) → thank-you state.
- `Footer.jsx` — multi-column footer nav.

## Interactions
Smooth in-page nav (no `scrollIntoView`), mobile menu, contact-form submit → success, hover lifts/zoom on cards.

## Notes
- Imagery uses hosted **Unsplash** placeholders — the source had only "Фото" blocks and no brand photography. Swap for real photos (incl. the portrait of Тамила) in production.
- Fonts (Cormorant + Onest) and icon approach match the source; Lucide via CDN.
- Prices are in USD exactly as the source states them.
