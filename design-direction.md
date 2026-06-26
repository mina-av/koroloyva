# Design-Direktion: Tamila Korolyova

> Output Phase 2. Eigene Richtung — nicht die Referenz gespiegelt, sondern ihre DNA
> für dieses Angebot neu interpretiert. Alle Token sind verbindlich für den Build.
> Stand: 2026-06-26

---

## 1. Farb-Token

| Token | Name | Hex | Verwendung |
|---|---|---|---|
| `--color-base` | Warmes Fast-Schwarz | `#1A1916` | Hero-Hintergrund, Footer, Primärtext auf hellem Grund |
| `--color-surface` | Steinweiß | `#F7F5F2` | Seitenhintergrund, helle Sektionen |
| `--color-card` | Reines Weiß | `#FFFFFF` | Karten, Formularhintergrund |
| `--color-accent` | Altmessing | `#9E7B4A` | Signature-Akzent (sparsam), Links, aktive Zustände |
| `--color-text-secondary` | Warmes Mittelgrau | `#686460` | Sublines, Beschreibungstext, Labels |
| `--color-border` | Helles Grau | `#E4E0DA` | Trennlinien, Kartenränder |

**Logik:** Nahezu achromatisch wie die Referenz, aber mit warmem Unterton statt kaltem Schwarz-Weiß.
Das Messing (`#9E7B4A`) signalisiert Solidität und handwerkliche Qualität — passend zu Bau und
Immobilien. Es erscheint nur an Schlüsselstellen (ein Wort in der Headline, ein dünner Akzent-Strich,
aktive Zustände). Kein zweiter Akzent.

**Warum kein generischer KI-Default:**
- Nicht Creme+Serif+Terrakotta → der Hintergrund ist klar warm-weiß, kein Elfenbein; der Akzent
  ist Messing, kein Terrakotta.
- Nicht Fast-Schwarz+Neon → der Akzent ist gedämpft, nicht leuchtend.
- Nicht Zeitungs-Layout → keine Multikolumnen-Textwände.

---

## 2. Typografie-Token

### Schrift-Pairing

| Rolle | Familie | Quelle | Begründung |
|---|---|---|---|
| Display (`--font-display`) | **Cormorant** | Google Fonts | Eleganter Hochstil-Serif mit vollständigem Kyrillisch. Selten in Bau/Immo — unverwechselbar. Nur für Hero-Headline und Sektions-Nummern. |
| Body (`--font-body`) | **Onest** | Google Fonts | Moderner Grotesque, exzellenter Kyrillisch-Support. Sehr gut lesbar, zeitgemäß, kein Mainstream wie Inter. |

**Kyrillisch-Check:** Beide Schriften unterstützen den vollständigen Kyrillischen Zeichensatz
(einschließlich ё, й, ъ, ы, э, ю, я). Verifiziert über Google Fonts Charset-Anzeige.

### Größen-Skala (CSS Custom Properties)

```css
--text-hero:    clamp(3rem, 7vw, 6rem);    /* Hero-Headline, Cormorant */
--text-h2:      clamp(1.75rem, 3.5vw, 2.75rem);
--text-h3:      clamp(1.25rem, 2vw, 1.5rem);
--text-body:    1rem;                       /* 16px Basis */
--text-small:   0.875rem;
--text-label:   0.75rem;                   /* Caps, gesperrt */

--leading-tight: 1.1;   /* Headlines */
--leading-body:  1.65;  /* Fließtext */
--tracking-wide: 0.08em; /* Versalien-Labels */
```

**Einsatz-Regel:** Cormorant nur in der Hero-Headline und einmalig pro Hauptsektion als
Ziffer/Ornament. Alles andere: Onest. Kein Schriftwechsel im Fließtext.

---

## 3. Layout-Konzept

**Prinzip:** Strukturierter Zweispalter mit klarer Mittelachse. Großzügige Sektions-Abstände
(~96 px) als visuelles Trennmittel statt Linien. Karten ohne Schatten, nur mit feinem Rand.

```
Max-width Container:  1200px, zentriert
Padding horizontal:   clamp(1.5rem, 5vw, 4rem)
Sektions-Abstand:     96px (Desktop) → 64px (Tablet) → 48px (Mobile)
Grid für Cards:       repeat(auto-fit, minmax(320px, 1fr)), gap 2rem
Border-Radius:        4px (Karten, Buttons) — minimalistisch
```

### ASCII-Wireframe (Single Page, Hub-Struktur)

```
┌──────────────────────────────────────────────────────────┐
│  NAV  Tamila Korolyova             [Записаться на консультацию] │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  HERO  (dunkler Hintergrund, --color-base)               │
│                                                          │
│    Cormorant, groß:                                      │
│    «Недвижимость способна увеличивать                    │
│     капитал — или [уничтожать] его»        ← Akzent-Wort │
│                                                          │
│    Subline (Onest, hell):                                │
│    Разница — в качестве решений на каждом этапе.         │
│    20 лет практики. Выберите свой формат.                │
│                                                          │
│    [Записаться]  [Узнать подробнее ↓]                    │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  PROBLEM  (--color-surface)                              │
│  3 Spalten: Budget · Qualität · Kontrolle               │
│  Knapp, aus Kundensicht                                  │
├──────────────────────────────────────────────────────────┤
│  ZWEI PFADE  (weiß, volle Breite, zweigeteilt)          │
│                                                          │
│   ┌─────────────────┐ │ ┌─────────────────┐             │
│   │ ВЫ СОБСТВЕННИК  │ │ │ ВЫ СОЗДАЁТЕ     │             │
│   │ НЕДВИЖИМОСТИ    │ │ │ СТРОИТЕЛЬНЫЙ    │             │
│   │                 │ │ │ БИЗНЕС          │             │
│   │ [Перейти →]     │ │ │ [Перейти →]     │             │
│   └─────────────────┘ │ └─────────────────┘             │
│                       │                                  │
│           + ПАРТНЁРСКАЯ СЕТЬ (schmal, darunter)          │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  ANGEBOTE EIGENTÜMER  (--color-surface)                  │
│  3 Cards: Консультация · Курс · Ведение                  │
│  Preis sichtbar, CTA je Card                             │
├──────────────────────────────────────────────────────────┤
│  ANGEBOTE BAUGESCHÄFT  (weiß)                            │
│  3 Cards: Самостоятельно · Первый объект · Партнёрство   │
├──────────────────────────────────────────────────────────┤
│  ÜBER TAMILA  (--color-base, hell auf dunkel)            │
│  «Более 20 лет практики» — kurz, keine Erfindungen       │
├──────────────────────────────────────────────────────────┤
│  ABLAUF / Wie es funktioniert  (--color-surface)         │
│  4 Schritte (Bриф → Анализ → Встреча → Результат)       │
├──────────────────────────────────────────────────────────┤
│  ABSCHLUSS-CTA  (Akzent-Streifen, --color-accent)        │
│  «Не уверены, с чего начать?»                            │
│  [Написать Тамиле]                                       │
├──────────────────────────────────────────────────────────┤
│  FOOTER  (--color-base)                                  │
│  Kontakt · Navigation · Rechts-Platzhalter               │
└──────────────────────────────────────────────────────────┘
```

---

## 4. Signature-Element

**Das eine Element: die typografische Hero-Headline.**

Da keine Fotos vorhanden sind, trägt die Typografie die gesamte visuelle Last des ersten Eindrucks.
Die Hero-Headline in Cormorant wird sehr groß gesetzt (bis zu 96 px), über zwei Zeilen gebrochen,
mit einem einzigen Wort in `--color-accent` hervorgehoben:

```
Недвижимость способна увеличивать
капитал — или [уничтожать] его
```

Das Wort in Messing + der knappe dunkle Hintergrund + viel Luft = der Moment, an den man sich
erinnert. Keine Animation, kein Effekt — nur Typografie als Statement.

**Sekundäres Signature-Detail:** Ein einzelner waagerechter Messing-Strich (`2px, --color-accent`)
vor Sektions-Nummern (01 / 02 / 03) als wiederkehrendes Strukturelement.

---

## 5. Bildstrategie

**Situation:** Keine Fotos vorhanden — Design muss ohne Fotografie funktionieren.

**Lösung:** Text-forward Layout. Der dunkle Hero-Hintergrund (`--color-base`) ersetzt das Architekturfoto
der Referenz vollständig. Kein Platzhalter-Bild, kein generischer Gradient.

**Spätere Erweiterung (wenn Fotos geliefert werden):**
- Hero: ein hochformatiges oder 16:9-Foto von Tamila (Porträt, professionell, kein Stockfoto)
- Sektion «Über»: dasselbe oder ähnliches Foto
- Kein Lifestyle-Stock — nur echte, eigene Bilder

Bis dahin: reines Typografie-Design, das für sich steht.

---

## 6. Motion

Sparsam, genau ein orchestrierter Moment:

- **Beim ersten Laden:** Hero-Headline blendet wortweise ein (opacity 0→1, leicht verzögert, 400 ms).
  Nur wenn `prefers-reduced-motion: no-preference`.
- **Hover auf Cards:** leichter `translateY(-4px)` + Border-Farbwechsel zu `--color-accent`. 200 ms ease.
- **Hover auf Buttons:** Hintergrund/Border-Transition, 150 ms.
- **Kein Scroll-Theater**, keine Parallax, keine staggered Sektionen.

---

## 7. Selbstkritik

| Prüfpunkt | Ergebnis |
|---|---|
| Creme + Serif + Terrakotta? | Nein. Hintergrund ist warm-weiß (nicht Elfenbein), Akzent ist Messing (nicht Terrakotta). |
| Fast-Schwarz + Neon? | Nein. Akzent ist gedämpft und hochwertig, kein Leuchtfarben-Kontrast. |
| Zeitungs-Layout? | Nein. Klare Sektions-Trennung, keine Textwände. |
| Kyrillisch-Support beider Schriften? | Ja — Cormorant und Onest beide geprüft. |
| Keine erfundenen Inhalte? | Ja — kein Social Proof, keine Fotos, keine Texte aus Referenz. |
| Funktioniert ohne Fotografie? | Ja — typografischer Hero ersetzt Architekturfoto vollständig. |

---

*Design-Direktion abgeschlossen. Warte auf Freigabe vor Phase 3 (Informationsarchitektur).*
