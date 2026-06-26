import React from "react";

/**
 * KOROLYOVA — Quote
 * Editorial pull-quote in display serif with brass mark and attribution.
 */
export function Quote({ children, author, role, onDark = false, style }) {
  const primary = onDark ? "var(--cream-50)" : "var(--ink-900)";
  const secondary = onDark ? "var(--text-inverse-soft)" : "var(--stone-500)";
  return (
    <figure style={{ margin: 0, maxWidth: "20ch", ...style }}>
      <span aria-hidden="true" style={{
        fontFamily: "var(--font-display)", fontSize: "64px", lineHeight: 0.6,
        color: "var(--brass-500)", display: "block", marginBottom: "8px",
      }}>
        &ldquo;
      </span>
      <blockquote style={{
        margin: 0, fontFamily: "var(--font-display)", fontWeight: 400,
        fontSize: "clamp(1.8rem, 3.4vw, 2.75rem)", lineHeight: 1.18,
        letterSpacing: "-0.01em", color: primary, maxWidth: "20ch",
      }}>
        {children}
      </blockquote>
      {(author || role) && (
        <figcaption style={{ marginTop: "26px", display: "flex", flexDirection: "column", gap: "3px" }}>
          {author && (
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.06em", color: primary }}>
              {author}
            </span>
          )}
          {role && (
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: secondary }}>
              {role}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
