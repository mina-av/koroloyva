# Plan: Sales-Landingpage (Dienstleistung)

**Ausführung mit Claude Code.** Diese Datei ist als Spezifikation gedacht: Lege sie im
Projektordner als `PLAN.md` ab und arbeite die Phasen mit Claude Code der Reihe nach ab
(z. B. „Lies PLAN.md und führe Phase 1 aus"). Jede Phase hat ein klares Ergebnis und
Abnahmekriterien, damit du zwischendurch prüfen kannst.

---

## 0. Eckdaten & Parameter

| Parameter | Wert |
|---|---|
| Referenz (nur Stil-/Strukturvorbild) | `https://www.knightfrank.com/services` |
| Seitentyp | Sales-Landingpage, eine Seite (Single Page) |
| Verkauft wird | Dienstleistung |
| Tech-Stack | Statisches HTML/CSS/JS *(anpassbar)* |
| Hosting-Ziel | IONOS *(anpassbar)* |
| Sprache der Seite | **Russisch** — `lang="ru"`, alle UI-Texte, Copy und SEO auf Russisch |

> **Wichtiger Grundsatz zur Referenz:** Die Knight-Frank-Seite ist eine bekannte, urheberrechtlich
> geschützte Live-Seite und wird **nicht** kopiert. Übernommen werden nur die *visuelle Sprache*
> (Farb-Logik, Typo-Pairing, Sektions-Rhythmus, Bildbehandlung, Signature-Elemente) und die
> *Struktur-Idee*. **Keine** Texte, Fotos, Icons, das Logo oder den Markenauftritt übernehmen —
> es entstehen eigene Inhalte und Assets. Die Referenz ist Inspiration, kein Template.

---

## 1. Briefing (von dir auszufüllen, bevor Phase 2 startet)

Diese Felder bestimmen die gesamte Seite. Claude Code soll dich danach fragen bzw. diese
Werte aus diesem Block lesen.

- **Dienstleistung (Was genau wird angeboten?):** …
- **Anbieter / Marke:** …
- **Zielgruppe (1–2 Sätze: für wen, in welcher Situation?):** …
- **Hauptproblem der Zielgruppe (welchen Schmerz löst die Dienstleistung?):** …
- **Kernnutzen / Ergebnis (was hat der Kunde danach?):** …
- **Alleinstellungsmerkmal (warum du / dieser Anbieter, nicht der Wettbewerb?):** …
- **Primäres Ziel der Seite / Conversion (Anfrage-Formular? Termin buchen? Anruf? E-Mail?):** …
- **Primärer Call-to-Action (Button-Text + Ziel-URL/Link):** …
- **Social Proof vorhanden? (Referenzen, Logos, Zahlen, Testimonials):** …
- **Pakete/Preise zeigen? (ja/nein, ggf. welche):** …
- **Betreiber & Markt (für Rechtsseiten entscheidend):** Wer betreibt die Seite, für welchen Markt? …
  - *Betrieb aus Deutschland (z. B. über MAV Consulting/IONOS):* DSGVO + Impressumspflicht (DDG) gelten **unabhängig von der Sprache** → Impressum + Datenschutzerklärung, ggf. zusätzlich auf Russisch.
  - *Russischer Markt/Betreiber:* Datenschutz nach 152-ФЗ → «Политика конфиденциальности» und bei Formularen «Согласие на обработку персональных данных».
  - (Keine Rechtsberatung — im Zweifel anwaltlich prüfen lassen.)
- **Vorhandene Assets (Logo, Fotos, Schriftlizenzen):** …

---

## 2. Phasenplan

### Phase 1 — Referenz analysieren (Style-Extraktion)

**Ziel:** Aus der Knight-Frank-Services-Seite die übertragbaren Design- und Strukturmuster
herausziehen, **ohne** Inhalte zu übernehmen.

**Charakter der Referenz (zur Orientierung — Stand der Analyse):** edler, fotografie-getriebener
Auftritt; ruhige, fast-schwarze Palette (Theme `#181a1d`); großflächiger Bild-Hero
(Architektur-Foto, 16:9) mit klarer Headline + Subline + Stützabsätzen; „Global services" als Liste
von Leistungen (je Überschrift + ein Satz); „Key sectors" als Kachelgalerie mit 16:9-Fotos
(je Überschrift + ein Satz); schlankes Anfrage-Formular (Name/E-Mail/Telefon/Nachricht) mit
Datenschutz-Hinweis und Erfolgs-/Fehlerzustand; durchgängiger Primär-CTA „Book a consultation";
umfangreicher Footer mit Social-Links, Link-Spalten und Rechtslinks. Viel Weißraum, editoriale
Typografie, zurückhaltende Eleganz.

Claude Code soll:
1. Die URL `https://www.knightfrank.com/services` abrufen und analysieren (gerenderte Seite; bei
   JS-Abhängigkeit Browser/Headless nutzen, sonst HTML/CSS direkt auswerten).
2. Folgendes als kurzes Markdown-Dokument `analyse-referenz.md` dokumentieren:
   - **Farbpalette:** alle verwendeten Farben als Hex, gruppiert (Primär, Sekundär, Akzent, Neutral/Hintergrund, Text).
   - **Typografie:** Schriftfamilien, Größen-Skala, Gewichte, Zeilenhöhen, Buchstabenabstände; welche Schrift für Display vs. Fließtext.
   - **Layout-System:** Container-Breiten, Spaltenraster, Abstände/Spacing-Rhythmus zwischen Sektionen, Border-Radius-Konventionen.
   - **Sektions-Architektur:** Reihenfolge und Funktion der Abschnitte (z. B. Hero → … → Footer).
   - **Signature-Elemente:** was die Seite visuell unverwechselbar macht (z. B. eine Bildbehandlung, ein Linien-Stil, eine Animation, ein Typo-Detail).
   - **Interaktion/Motion:** vorhandene Animationen, Hover-Effekte, Scroll-Verhalten.
   - **Responsives Verhalten:** Breakpoints, mobile Besonderheiten.

**Abnahme:** `analyse-referenz.md` liegt vor und beschreibt Farben, Typo, Layout, Sektionen und
mindestens ein klares Signature-Element. Keine Originaltexte/-bilder der Referenz wurden kopiert.

---

### Phase 2 — Design-Direktion & Token-System

**Ziel:** Aus der Analyse eine *eigene*, bewusste Design-Richtung für die Dienstleistung ableiten.
Nicht die Referenz spiegeln, sondern ihre DNA für dein Angebot neu interpretieren.

Claude Code soll ein `design-direction.md` erstellen mit:
- **Farb-Token:** 4–6 benannte Hex-Werte (an der Referenz orientiert, aber auf die Marke/Dienstleistung abgestimmt).
- **Typo-Token:** mindestens 2 Rollen — eine charaktervolle Display-Schrift (sparsam eingesetzt) + eine gut lesbare Fließtext-Schrift; optional eine Utility-Schrift für Captions/Zahlen. **Beide Schriften müssen Kyrillisch vollständig unterstützen** (viele Display-Fonts haben keinen kyrillischen Zeichensatz — vor der Wahl prüfen). Gut abgedeckt z. B. bei Google Fonts: Display (PT Serif, Cormorant, Playfair Display, Manrope) und Body (Inter, PT Sans, Golos Text, Onest). Schriftlizenzen beachten.
- **Layout-Konzept:** ein Satz Beschreibung + grobes ASCII-Wireframe der Seite.
- **Signature-Element:** das eine Element, an das man sich erinnert, passend zur Dienstleistung.
- **Bildstrategie:** Diese Referenz lebt von großflächiger, hochwertiger Fotografie — der Look gelingt nur mit starken, lizenzierten oder eigenen Bildern (kein generisch wirkendes Stock-Material). Bildmotive, Format (16:9-Hero, Kachel-Bilder) und Bildbehandlung früh festlegen.
- **Selbstkritik:** kurz prüfen, ob die Richtung nach generischem KI-Default aussieht (cremefarbener Hintergrund + Serif + Terrakotta-Akzent / fast-schwarz + Neon-Akzent / Zeitungs-Layout). Falls ja: anpassen und begründen.

**Abnahme:** `design-direction.md` mit konkreten Hex-Werten, Schrift-Pairing, Layout-Skizze und
einem benannten Signature-Element. Du gibst die Richtung frei, bevor gebaut wird.

---

### Phase 3 — Informationsarchitektur (Sales-Struktur)

**Ziel:** Sektions-Reihenfolge festlegen, die für eine Dienstleistung konvertiert. Empfohlene
Grundstruktur (an Briefing anpassbar):

1. **Hero** — klare Wertversprechen-Headline + Subline + primärer CTA. Sofort verständlich: was, für wen, welches Ergebnis.
2. **Problem / Ausgangslage** — die Situation der Zielgruppe spiegeln (Schmerzpunkt).
3. **Lösung / Das Angebot** — die Dienstleistung verständlich erklärt.
4. **Nutzen / Ergebnisse** — Outcomes, nicht nur Features (was der Kunde danach hat).
5. **Ablauf / So funktioniert's** — 3–4 Schritte (nur nummerieren, wenn es echt eine Sequenz ist).
6. **Social Proof** — Referenzen, Testimonials, Kundenlogos, Ergebniszahlen (falls vorhanden).
7. **Über / Vertrauen** — wer liefert die Leistung, Qualifikation, Glaubwürdigkeit.
8. **Pakete / Preise** — optional, je nach Briefing.
9. **FAQ / Einwandbehandlung** — die häufigsten Kauf-Bremsen auflösen.
10. **Abschluss-CTA** — letzter klarer Handlungsaufruf.
11. **Footer** — Navigation, Kontakt, Rechtsseiten je nach Betreiber/Markt (siehe Briefing: DE → Impressum + Datenschutz; RU → «Политика конфиденциальности»).

**Abnahme:** Sektionsliste mit je 1 Satz Zweck pro Abschnitt, abgestimmt auf das Briefing.

---

### Phase 4 — Copywriting

**Ziel:** Eigene, konversionsorientierte Texte je Sektion auf **Russisch** (kein Referenz-Text).

Leitlinien:
- Komplett auf Russisch, natürlich klingend (keine wörtliche Übersetzung aus dem Deutschen). Korrektes Russisch inkl. Typografie (Anführungszeichen «…», Gedankenstrich —).
- Aus Kundensicht schreiben: Nutzen und Ergebnis statt Selbstbeschreibung.
- Aktiv, konkret, ohne Floskeln; Button-Text sagt genau, was passiert (z. B. «Записаться на консультацию», nicht «Отправить»).
- Eine klare Botschaft pro Sektion. Headline trägt, Subline erklärt.
- Tonalität an Marke und Zielgruppe anpassen (Anrede du/Sie — ты/вы — bewusst festlegen).

**Abnahme:** `copy.md` mit russischen Texten für alle Sektionen (Headline, Subline, Body, CTA-Labels, FAQ).

---

### Phase 5 — Build (statische Seite)

**Ziel:** Die Seite gemäß Phase 2–4 umsetzen.

Vorgaben:
- **Stack:** Ein `index.html`, ausgelagertes `styles.css`, minimales `script.js` (nur wo nötig).
- Farben und Typo **ausschließlich** aus den Tokens (CSS Custom Properties in `:root`).
- Auf saubere CSS-Spezifität achten (Konflikte zwischen Element- und Klassen-Selektoren bei Paddings/Margins vermeiden).
- Motion sparsam und gezielt (ein orchestrierter Moment statt vieler Effekte).
- Semantisches HTML (`<header>`, `<main>`, `<section>`, `<footer>`), eine `<h1>` im Hero.
- `<html lang="ru">` und `<meta charset="utf-8">` setzen (korrekte Kyrillik-Darstellung).

**Abnahme:** Seite rendert lokal, alle Sektionen vorhanden, Design entspricht `design-direction.md`.

---

### Phase 6 — Qualität: Responsive, A11y, Performance, SEO

- **Responsive:** sauber bis Mobile (≥320px), getestete Breakpoints.
- **Accessibility:** sichtbarer Tastatur-Fokus, ausreichende Kontraste, Alt-Texte, `prefers-reduced-motion` respektiert.
- **Performance:** Bilder optimiert/lazy-loaded, Schriften effizient geladen, kein unnötiges JS.
- **SEO:** russischer `<title>` + Meta-Description, Open-Graph-Tags (`og:locale` = `ru_RU`), sinnvolle Heading-Hierarchie, ggf. Schema.org (`Service`/`LocalBusiness`), `sitemap.xml`, `robots.txt`. Bei russischem Markt auch Yandex berücksichtigen (Yandex.Webmaster, ggf. `Host`-/Sprach-Signale).

**Abnahme:** Checkliste oben abgehakt; Lighthouse o. Ä. ohne kritische Mängel.

---

### Phase 7 — QA & Deployment

- Cross-Browser-Check, Formular/CTA-Funktion testen (Ziel-Link/Anfrage kommt an).
- **Rechtliches:** je nach Betreiber/Markt — DE: Impressum + Datenschutzerklärung; RU: «Политика конфиденциальности» (+ Einwilligung bei Formularen) — verlinkt und erreichbar.
- Deployment nach IONOS (FTP/Datei-Upload); ggf. `.htaccess` für HTTPS-Redirect und Caching.

**Abnahme:** Seite live, CTA funktioniert, Pflichtseiten erreichbar.

---

## 3. Empfohlene Projektstruktur

```
sales-landingpage/
├── PLAN.md                 # diese Datei
├── CLAUDE.md               # optional: Projektkontext/Regeln für Claude Code
├── analyse-referenz.md     # Output Phase 1
├── design-direction.md     # Output Phase 2
├── copy.md                 # Output Phase 4
├── index.html
├── styles.css
├── script.js
├── assets/                 # eigene Bilder/Icons/Fonts
├── legal/                  # Rechtsseiten je nach Markt:
│   ├── privacy.html        #   RU: «Политика конфиденциальности»
│   └── impressum.html      #   DE: Impressum + Datenschutz (falls aus DE betrieben)
├── sitemap.xml
└── robots.txt
```

## 4. So führst du es mit Claude Code aus

1. Projektordner anlegen, `PLAN.md` und (optional) `CLAUDE.md` hineinlegen.
2. Briefing-Block (Abschnitt 1) ausfüllen.
3. Claude Code starten und sinngemäß sagen:
   „Lies `PLAN.md`. Führe Phase 1 aus und zeig mir `analyse-referenz.md`."
4. Phase für Phase freigeben — nach Phase 2 (Design-Richtung) und Phase 3 (Struktur)
   jeweils kurz prüfen, bevor gebaut wird.
