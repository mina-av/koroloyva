import React from "react";

/**
 * KOROLYOVA — Eyebrow
 * Uppercase, wide-tracked label. Optional leading rule (the "luxe tick").
 */
export function Eyebrow({ children, rule = true, onDark = false, as = "div", style, ...rest }) {
  const Tag = as;
  const color = onDark ? "var(--brass-400)" : "var(--brass-600)";
  return (
    <Tag
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.85em",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-eyebrow)",
        fontWeight: 600,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color,
        ...style,
      }}
      {...rest}
    >
      {rule && (
        <span
          aria-hidden="true"
          style={{ width: "28px", height: "1px", background: "currentColor", opacity: 0.7, flex: "none" }}
        />
      )}
      {children}
    </Tag>
  );
}
