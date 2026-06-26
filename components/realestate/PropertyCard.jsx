import React from "react";
import { Badge } from "../core/Badge.jsx";

/**
 * KOROLYOVA — PropertyCard
 * Editorial listing card. Image on top, quiet meta below, brass price.
 */
export function PropertyCard({
  image,
  location,
  title,
  price,
  specs = [],
  status,
  onClick,
  style,
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-paper)",
        cursor: onClick ? "pointer" : "default",
        transition: "transform var(--dur-base) var(--ease-out)",
        transform: hover ? "translateY(-4px)" : "none",
        ...style,
      }}
    >
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4 / 3", background: "var(--sand-200)" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transition: "transform var(--dur-slow) var(--ease-out)",
            transform: hover ? "scale(1.04)" : "scale(1)",
            filter: "saturate(0.92)",
          }}
        />
        {status && (
          <div style={{ position: "absolute", top: "14px", left: "14px" }}>
            <Badge tone="ink">{status}</Badge>
          </div>
        )}
      </div>

      <div style={{ padding: "20px 4px 4px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {location && (
          <span style={{
            fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 600,
            letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--brass-600)",
          }}>
            {location}
          </span>
        )}
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "27px",
          lineHeight: 1.08, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: 0,
        }}>
          {title}
        </h3>

        {specs.length > 0 && (
          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", marginTop: "2px" }}>
            {specs.map((s, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--stone-500)",
              }}>
                {s}
              </span>
            ))}
          </div>
        )}

        <div style={{ height: "1px", background: "var(--sand-300)", margin: "8px 0 4px" }} />
        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "22px",
          color: hover ? "var(--brass-600)" : "var(--ink-900)",
          transition: "color var(--dur-fast) var(--ease-out)",
        }}>
          {price}
        </span>
      </div>
    </article>
  );
}
