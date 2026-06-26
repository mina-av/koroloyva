Icon-only control (nav toggles, prev/next, phone/mail). Renders a Lucide glyph — load Lucide on the page and call `lucide.createIcons()` after mount.

```jsx
<IconButton icon="arrow-right" label="Weiter" variant="solid" />
<IconButton icon="phone" label="Anrufen" />
<IconButton icon="menu" label="Menü" variant="ghost" onDark />
```

Variants: `outline`, `solid`, `ghost`. Min hit target is 44px (size `md`).
