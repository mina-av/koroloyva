import React from "react";

/**
 * KOROLYOVA — Badge / Tag
 * Quiet squared label. Tone sets color; subtle by default.
 */
const TONES = {
  neutral: { background: "var(--sand-200)", color: "var(--ink-700)", border: "1px solid var(--sand-300)" },
  accent: { background: "var(--champagne-200)", color: "var(--brass-700)", border: "1px solid transparent" },
  ink: { background: "var(--ink-900)", color: "var(--cream-50)", border: "1px solid var(--ink-900)" },
  outline: { background: "transparent", color: "var(--ink-700)", border: "1px solid var(--stone-300)" },
};

export function Badge({ children, tone = "neutral", style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5em",
        fontFamily: "var(--font-sans)",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        lineHeight: 1,
        padding: "6px 11px",
        borderRadius: "var(--radius-xs)",
        ...t,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
