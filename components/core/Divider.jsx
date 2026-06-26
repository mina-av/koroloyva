import React from "react";

/**
 * KOROLYOVA — Divider
 * Hairline rule. Optional centered ornament (diamond) for chapter breaks.
 */
export function Divider({ ornament = false, onDark = false, style }) {
  const line = onDark ? "var(--border-on-ink)" : "var(--sand-300)";
  if (!ornament) {
    return <hr style={{ border: 0, borderTop: `1px solid ${line}`, margin: 0, width: "100%", ...style }} />;
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", width: "100%", ...style }}>
      <span style={{ flex: 1, height: "1px", background: line }} />
      <span aria-hidden="true" style={{
        width: "6px", height: "6px", transform: "rotate(45deg)",
        background: "var(--brass-500)", flex: "none",
      }} />
      <span style={{ flex: 1, height: "1px", background: line }} />
    </div>
  );
}
