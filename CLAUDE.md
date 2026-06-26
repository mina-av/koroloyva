# CLAUDE.md — Projektregeln

Standing-Kontext für Claude Code. Diese Datei gilt durchgehend für das gesamte Projekt.
Der schrittweise Ablauf steht in `PLAN.md` — diese Datei hält die **Regeln** fest, nicht die Phasen.

---

## Projekt in einem Satz

Statische, einseitige **Sales-Landingpage auf Russisch** für eine **Dienstleistung**, gestalterisch
inspiriert von `https://www.knightfrank.com/services` (nur als Stil-/Strukturvorbild).

---

## Arbeitsweise

- Vor dem Bauen immer `PLAN.md` lesen und die Phasen der Reihe nach abarbeiten.
- Nach **Phase 1 (Analyse)**, **Phase 2 (Design-Richtung)** und **Phase 3 (Struktur)** jeweils
  stoppen und auf Freigabe warten, bevor es weitergeht.
- Den **Briefing-Block** in `PLAN.md` als Quelle der Wahrheit für Inhalte behandeln. Fehlt etwas,
  nachfragen — **nicht** raten und keine Fakten erfinden.
- Annahmen, die du triffst, sichtbar machen (kurz benennen).

## Harte Regeln (nicht verhandelbar)

1. **Referenz ist Inspiration, kein Template.** Knight Frank ist eine geschützte Live-Seite.
   Übernimm nur die *visuelle Sprache* und *Struktur-Idee* — **niemals** Texte, Fotos, Icons,
   das Logo oder den Markenauftritt. Eigene Inhalte und Assets erzeugen.
2. **Sprache = Russisch.** `<html lang="ru">`, `<meta charset="utf-8">`. Alle UI-Texte, Copy und
   SEO auf Russisch. Natürliches Russisch, keine Wort-für-Wort-Übersetzung.
3. **Schriften müssen Kyrillisch unterstützen.** Vor der Wahl prüfen; viele Display-Fonts haben
   keinen kyrillischen Zeichensatz.
4. **Keine erfundenen Beweise.** Keine fiktiven Testimonials, Kundenlogos, Zahlen oder Zitate.
   Nur was im Briefing belegt ist.
5. **Keine erfundenen Rechtstexte.** Rechtsseiten je nach Betreiber/Markt (siehe Briefing). Inhalte
   nicht selbst formulieren, sondern Platzhalter/Hinweis setzen, bis echte Texte vorliegen.

## Design

- Farben und Typografie **ausschließlich** über CSS Custom Properties in `:root` (Token-System aus
  `design-direction.md`). Keine hartkodierten Farb-/Schrift-Werte in Komponenten.
- Eine charaktervolle Display-Schrift sparsam einsetzen + gut lesbare Fließtext-Schrift.
- Nicht auf den generischen KI-Default zurückfallen (cremefarben+Serif+Terrakotta /
  fast-schwarz+Neon / Zeitungs-Layout). Falls die Richtung dort landet: anpassen und begründen.
- Motion gezielt und sparsam — ein orchestrierter Moment statt vieler Streueffekte.
- Boldness an **einer** Stelle bündeln (Signature-Element), drumherum ruhig halten.

## Code-Konventionen

- Stack: statisches **HTML/CSS/JS**, kein Framework ohne Rücksprache.
- Struktur: ein `index.html`, ausgelagertes `styles.css`, minimales `script.js` (nur wo nötig).
- Semantisches HTML (`<header>`, `<main>`, `<section>`, `<footer>`), genau eine `<h1>` (im Hero).
- Auf CSS-Spezifität achten: keine sich gegenseitig aufhebenden Selektoren (z. B. Element- vs.
  Klassen-Selektor bei Paddings/Margins zwischen Sektionen).
- Kein Inline-Styling außer für echte Einzelfälle. Klare, sprechende Klassennamen.
- Kein `localStorage`/`sessionStorage` nötig — Seite ist zustandslos.

## Qualitäts-Floor (immer, ohne Ankündigung)

- **Responsive** sauber bis ≥320px.
- **A11y:** sichtbarer Tastatur-Fokus, ausreichende Kontraste, Alt-Texte, `prefers-reduced-motion` respektiert.
- **Performance:** Bilder optimiert/lazy-loaded, Schriften effizient laden (`font-display: swap`), kein unnötiges JS.
- **SEO:** russischer `<title>` + Meta-Description, Open-Graph (`og:locale=ru_RU`), saubere Heading-Hierarchie.

## Copy

- Aus Kundensicht: Nutzen und Ergebnis statt Selbstbeschreibung.
- Aktiv und konkret; Button-Text sagt genau, was passiert (z. B. «Записаться на консультацию», nicht «Отправить»).
- Russische Typografie korrekt: Anführungszeichen «…», Gedankenstrich —.
- Anrede (ты/вы) bewusst festlegen und durchhalten.

## Output-Disziplin

- Analyse → `analyse-referenz.md`, Design → `design-direction.md`, Copy → `copy.md`.
- Vor größeren Änderungen kurz den Plan nennen, dann umsetzen.
- Bei Unsicherheit lieber fragen als annehmen.
