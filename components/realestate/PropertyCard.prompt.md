Listing card for a property/object grid — cover image with subtle zoom on hover, location eyebrow, serif title, specs, brass price.

```jsx
<PropertyCard
  image="https://images.unsplash.com/photo-..."
  location="München · Bogenhausen"
  title="Villa am Englischen Garten"
  price="€ 4.250.000"
  specs={["5 Zimmer", "240 m²", "Garten"]}
  status="Exklusiv"
/>
```

Drop several into a CSS grid (`gap: var(--space-8)`). Pass `onClick` to make the whole card interactive.
