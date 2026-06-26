# Analyse-Referenz: Knight Frank /services

> Zweck dieser Datei: Visuelle Sprache und Struktur-Idee der Referenzseite dokumentieren.
> Kein Content, keine Assets, keine Texte von Knight Frank übernehmen.
> Stand: 2026-06-26

---

## 1. Farbpalette

Auf Basis des sichtbaren HTML und Markenauftritts:

| Token-Name (Vorschlag) | Beobachtet | Hex-Schätzung |
|---|---|---|
| Hintergrund (Seite) | Reines Weiß | `#FFFFFF` |
| Primärtext | Tiefdunkel, fast schwarz | `#1A1A1A` |
| Sekundärtext / Sublines | Mittleres Grau | `#6B6B6B` |
| Footer-Hintergrund | Dunkel-Anthrazit | `#1A1A1A` oder `#111111` |
| Footer-Text | Weiß / helles Grau | `#FFFFFF` / `#CCCCCC` |
| Akzent / Links | Schwarz oder sehr dunkelgrau | `#000000` |
| CTA-Button | Schwarz mit weißem Text | `#000000` / `#FFFFFF` |
| Card-Hintergrund | Weiß | `#FFFFFF` |
| Bildüberlagerungen | Subtile dunkle Gradients | — |

**Tonalität:** Nahezu achromatisch. Kein gesättigter Markenakzent sichtbar. Die Farbstärke kommt aus Typografie-Gewicht und hochqualitativer Fotografie, nicht aus Farbe.

---

## 2. Typografie

**Hinweis:** Google Fonts / Typekit-Links waren im Fetch nicht extrahierbar. Die folgende Einschätzung basiert auf dem visuellen Markenauftritt von Knight Frank.

| Rolle | Eigenschaft | Beobachtung |
|---|---|---|
| Headings | Sans-serif, moderner Charakter | Wahrscheinlich eigene Schrift oder lizenzierter Grotesque |
| Body | Sans-serif, sehr gut lesbar | Regular/Light, großzügige Laufweite |
| Navigation | Sans-serif, kompakt | Kleine Versalien oder Regular Caps |
| CTA-Buttons | Sans-serif, Medium/Semibold | Leicht gesperrt |

**Schrift-Hierarchie:** Heading-Größen fallen steil ab (sehr großer Hero-Titel → kleine Karten-Heads). Kaum dekorative Schriftmischung — die Stärke liegt in Größe und Gewicht, nicht in Schriftwechsel.

---

## 3. Layout-System

- **Max-width Container:** Einheitliche Breite (ca. 1200–1440 px), zentriert, symmetrisch
- **Grid-System:** 2- und 3-spaltig für Service-Cards
- **Spacing:** Großzügige vertikale Abstände zwischen Sektionen (ca. 80–120 px); innere Abstände konsequent (ca. 32–48 px)
- **Card-Proportionen:** Rechteckig, Hochformat oder 4:3 — Bild oben, Text darunter
- **Keine sichtbaren Rasterlinien/Divider** zwischen Sektionen — Weißraum als Trennmittel
- **Volle Seitenbreite** nur für Hero und Footer; alle anderen Sektionen im Container

---

## 4. Sektions-Architektur (in Reihenfolge)

| Nr. | Sektion | Funktion |
|---|---|---|
| 1 | **Global-Navigation** | Logo links, primäre Nav-Links (Newsroom, Careers, About), sekundäre CTAs rechts: «Sign in» + «Book a consultation» |
| 2 | **Hero** | Vollbreites Bild/Video-Hintergrund, große Headline, kurze Subline, kein expliziter CTA-Button (die Nav übernimmt das) |
| 3 | **Global Services Grid** | 6 Service-Cards in 2–3 Spalten, je mit Bild, Titel, 1–2 Satz Beschreibung, Link-Arrow |
| 4 | **Key Sectors Showcase** | 6 Branchen-Cards (Data Centres, Offices, Hotels, Retail, Living, Vineyards) mit Bild und Titel |
| 5 | **Contact/Footer-Übergang** | Inquiry-Form oder direkter Übergang zu Footer |
| 6 | **Footer** | 5+ Spalten: About KF, Governance, Regionen (Africa, Americas, Asia-Pacific, Europe, Middle East), rechtliche Links, Social Icons |

**Beobachtung:** Die Seite ist sehr content-light im Hero — ein Satz Claim genügt. Die eigentliche Informationsdichte liegt in den Cards.

---

## 5. Signature-Elemente

- **Fotografie:** Hochwertig, aspirational, professioneller Kontext (Büros, Luxusimmobilien, Meetings). Keine Stockphoto-Ästhetik.
- **Cards ohne Schatten:** Karten liegen flach auf weißem Grund — kein Box-Shadow, kein Rahmen. Trennung durch Abstand.
- **Arrow-Links:** Typischer «→» oder Pfeil-Link am Ende der Cards als einzige Interaktionsindikation.
- **Typografie als Statement:** Der Hero-Titel ist das Signature-Moment — groß, klar, ohne Schnörkel.
- **Kein sichtbarer dekorativer Schmuck:** Keine Ornamente, keine Hintergrundmuster, keine illustrativen Elemente.
- **Monochrome Icon-Welt:** Icons (falls vorhanden) einfarbig, minimalistisch.

---

## 6. Motion / Animation

- **Kein aufdringlicher Scroll-Effekt** erkennbar.
- Wahrscheinlich subtile **Hover-States** auf Cards und Links (Farbe/Unterstriche, evtl. Pfeil-Bewegung).
- Navigation hat vermutlich **Mega-Dropdown** mit sanfter Einblend-Transition.
- **Lazy Loading** auf Bilder — kein Content-Shift sichtbar.
- **Fazit:** Motion dient der Orientierung, nicht der Show.

---

## 7. Navigation-Details

- **Logo:** Oben links
- **Primär-Links:** Newsroom, Careers, About us
- **Sekundär-CTAs:** «Sign in» (Ghost-Stil), «Book a consultation» (Primär-Button, schwarz)
- **Länder-Selektor:** Mega-Dropdown für 52 Länder / 25 Sprachen
- **Sticky Nav:** Wahrscheinlich — Standard für Conversion-fokussierte Sites dieser Klasse

---

## 8. Responsiveness

- **Responsive Images:** Parametrisierte Bild-URLs (rmode, quality, width) → Cloudinary/CDN-Optimierung
- **Mobile vermutlich:** Hamburger-Menü, Cards gestackt (1 Spalte), Footer kollabiert
- **Content-Priorisierung:** Headline → erste Service-Cards → CTA — bleiben sichtbar ohne zu scrollen

---

## 9. Button- und CTA-Stile

| Typ | Stil | Text |
|---|---|---|
| Primär-CTA (Nav) | Schwarz, weißer Text, kein Rahmen | «Book a consultation» |
| Sekundär (Nav) | Ghost oder Unterstrichen | «Sign in» |
| Card-Links | Text-Link mit Pfeil | «View all» / Titel-Link |
| Kein sichtbarer Hero-CTA-Button | — | — |

**Muster:** Nur **ein** echter Button in der Nav — die gesamte Seite ist eine Awareness-Strecke, die diesen einen CTA erzwingt.

---

## 10. Visuelle Gesamtcharakter & Übertragbare Prinzipien

**Was Knight Frank gut macht:**

1. **Extreme Zurückhaltung** — viel Weißraum, keine Farb-Akzente, keine Muster. Macht Inhalt zur Hauptfigur.
2. **Qualität signalisiert Preis** — großartige Fotos, saubere Typografie, nichts billig.
3. **Ein CTA, konsequent wiederholt** — kein Entscheidungsstress, klarer Pfad.
4. **Sektions-Logik: Überblick → Tiefe** — erst Services als Grid, dann Sektoren, dann Kontakt.
5. **Keine Testimonials, keine Zahlen** auf der Services-Seite — Vertrauen durch Brand, nicht durch Beweise.

**Was wir anders machen (für eine Sales-Landingpage):**

- KF braucht keinen Hero-CTA — wir brauchen einen (wir sind kein Weltkonzern).
- Mehr emotionaler Aufbau nötig: Problem → Lösung → Vertrauen → Aktion.
- Social Proof muss vorhanden sein (innerhalb der Briefing-Grenzen).
- Kompaktere, kürzere Seite: eine starke Konversionsstrecke statt Navigations-Hub.

---

*Analyse abgeschlossen. Warte auf Freigabe vor Phase 2.*
