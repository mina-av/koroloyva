/* global React */
(function () {
  const { Eyebrow } = window.KorolyovaDesignSystem_d31d2b;

  function NumberTag({ n, onDark }) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
        <span style={{ width: 56, height: 1, background: onDark ? "var(--border-on-ink)" : "var(--sand-300)" }} />
        <span style={{ fontFamily: "var(--font-display)", fontSize: 17, letterSpacing: "0.05em",
          color: onDark ? "var(--brass-400)" : "var(--brass-600)" }}>{n}</span>
      </div>
    );
  }

  function SectionHead({ n, label, heading, intro, onDark, max = "24ch", align = "left" }) {
    const ink = onDark ? "var(--cream-50)" : "var(--ink-900)";
    const sec = onDark ? "rgba(247,242,233,0.72)" : "var(--stone-500)";
    return (
      <div style={{ textAlign: align, display: "flex", flexDirection: "column", alignItems: align === "center" ? "center" : "flex-start" }}>
        {n && <NumberTag n={n} onDark={onDark} />}
        {label && <div style={{ marginBottom: 18 }}><Eyebrow onDark={onDark}>{label}</Eyebrow></div>}
        {heading && (
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.1rem, 3.8vw, 3.4rem)",
            lineHeight: 1.06, letterSpacing: "-0.01em", color: ink, margin: 0, maxWidth: max }}>
            {heading}
          </h2>
        )}
        {intro && (
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.65, color: sec,
            margin: "24px 0 0", maxWidth: "62ch" }}>
            {intro}
          </p>
        )}
      </div>
    );
  }

  function ArrowLink({ children, href = "#contact", onNav, target, onDark }) {
    const [h, setH] = React.useState(false);
    return (
      <a href={href}
        onClick={(e) => { if (onNav) { e.preventDefault(); onNav(target || "contact"); } }}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-sans)",
          fontSize: 13, fontWeight: 600, letterSpacing: "0.04em",
          color: h ? "var(--brass-600)" : (onDark ? "var(--cream-50)" : "var(--ink-900)"),
          transition: "color var(--dur-fast) var(--ease-out)" }}>
        {children}
        <span aria-hidden="true" style={{ transform: h ? "translateX(4px)" : "none", transition: "transform var(--dur-fast) var(--ease-out)" }}>&rarr;</span>
      </a>
    );
  }

  // Offer card used by Owners & Business sections
  function OfferCard({ title, subtitle, children, meta, note, tiers, price, ctaLabel, onNav, featured, bg = "#F7F2E9" }) {
    const [h, setH] = React.useState(false);
    return (
      <article
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ position: "relative", display: "flex", flexDirection: "column",
          background: bg, border: "1px solid var(--sand-300)",
          padding: "36px 32px 30px", height: "100%",
          boxShadow: h ? "var(--shadow-md)" : "none",
          transition: "box-shadow var(--dur-base) var(--ease-out)" }}>
        <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, height: 2,
          width: h ? "100%" : "0%", background: "var(--brass-500)", transition: "width var(--dur-slow) var(--ease-out)" }} />
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 29, lineHeight: 1.08,
          letterSpacing: "-0.01em", color: "var(--ink-900)", margin: 0 }}>{title}</h3>
        {subtitle && (
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.5, fontWeight: 500,
            color: "var(--brass-700)", margin: "12px 0 0" }}>{subtitle}</p>
        )}
        <div style={{ margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 14, flex: 1,
          fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "var(--stone-500)" }}>
          {children}
          {meta && (
            <p style={{ fontSize: 12.5, lineHeight: 1.6, letterSpacing: "0.02em", color: "var(--ink-600)",
              borderTop: "1px solid var(--sand-200)", paddingTop: 14, margin: 0 }}>{meta}</p>
          )}
          {tiers && (
            <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 4 }}>
              {tiers.map((t) => (
                <div key={t.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline",
                  padding: "11px 0", borderBottom: "1px solid var(--sand-200)" }}>
                  <span style={{ fontSize: 14, color: "var(--ink-800)" }}>{t.name}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--ink-900)" }}>{t.price}</span>
                </div>
              ))}
            </div>
          )}
          {note && <p style={{ fontSize: 13, fontStyle: "italic", color: "var(--stone-400)", margin: 0 }}>{note}</p>}
        </div>
        <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 14 }}>
          {price && (
            <React.Fragment>
              <div style={{ height: 1, background: "var(--sand-300)" }} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 28, color: "var(--ink-900)" }}>{price}</span>
            </React.Fragment>
          )}
          <ArrowLink href="#contact" onNav={onNav} target="contact">{ctaLabel}</ArrowLink>
        </div>
      </article>
    );
  }

  Object.assign(window, { KFNumberTag: NumberTag, KFSectionHead: SectionHead, KFArrowLink: ArrowLink, KFOfferCard: OfferCard });
})();
