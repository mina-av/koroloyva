import React from "react";

/**
 * KOROLYOVA — StatBlock
 * Large serif figure + label. For proof points / market data.
 */
export function StatBlock({ value, label, caption, onDark = false, align = "left", style }) {
  const primary = onDark ? "var(--cream-50)" : "var(--ink-900)";
  const secondary = onDark ? "var(--text-inverse-soft)" : "var(--stone-500)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", textAlign: align, alignItems: align === "center" ? "center" : "flex-start", ...style }}>
      <span style={{
        fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.8rem, 5vw, 4rem)",
        lineHeight: 0.95, letterSpacing: "-0.01em", color: primary,
      }}>
        {value}
      </span>
      <span style={{
        fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 600,
        letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--brass-600)", marginTop: "4px",
      }}>
        {label}
      </span>
      {caption && (
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "14px", lineHeight: 1.5, color: secondary, maxWidth: "30ch" }}>
          {caption}
        </span>
      )}
    </div>
  );
}
