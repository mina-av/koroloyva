import React from "react";

/**
 * KOROLYOVA — ServiceCard
 * Editorial service entry: index number, title, description, hover rule.
 * Knight-Frank-style services grid item.
 */
export function ServiceCard({ index, title, description, icon, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        padding: "34px 30px 30px",
        background: "var(--surface-paper)",
        borderTop: "1px solid var(--sand-300)",
        cursor: onClick ? "pointer" : "default",
        overflow: "hidden",
        ...style,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute", top: 0, left: 0, height: "2px",
          width: hover ? "100%" : "0%", background: "var(--brass-500)",
          transition: "width var(--dur-slow) var(--ease-out)",
        }}
      />
      <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "18px" }}>
        <span style={{
          fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 500,
          color: "var(--brass-600)", lineHeight: 1,
        }}>
          {index}
        </span>
        {icon && <i data-lucide={icon} style={{ width: 18, height: 18, color: "var(--stone-400)" }} />}
      </div>
      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "26px",
        lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "0 0 12px",
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: "var(--font-sans)", fontSize: "15px", lineHeight: 1.6,
        color: "var(--stone-500)", margin: 0, maxWidth: "42ch",
      }}>
        {description}
      </p>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: "0.5em", marginTop: "22px",
        fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 600,
        letterSpacing: "0.16em", textTransform: "uppercase",
        color: hover ? "var(--brass-600)" : "var(--ink-900)",
        transition: "color var(--dur-fast) var(--ease-out)",
      }}>
        Mehr <span aria-hidden="true" style={{ transform: hover ? "translateX(3px)" : "none", transition: "transform var(--dur-fast) var(--ease-out)" }}>&rarr;</span>
      </span>
    </article>
  );
}
