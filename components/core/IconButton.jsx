import React from "react";

/**
 * KOROLYOVA — IconButton
 * Squared icon control. Renders a Lucide glyph via <i data-lucide>.
 * The host page must load Lucide and call lucide.createIcons() after render.
 */
const SIZES = { sm: 36, md: 44, lg: 52 };
const ICON = { sm: 16, md: 18, lg: 20 };

const VARIANTS = {
  outline: { background: "transparent", color: "var(--ink-900)", border: "1px solid var(--stone-300)" },
  solid: { background: "var(--ink-900)", color: "var(--cream-50)", border: "1px solid var(--ink-900)" },
  ghost: { background: "transparent", color: "var(--ink-700)", border: "1px solid transparent" },
};
const HOVER = {
  outline: { borderColor: "var(--brass-500)", color: "var(--brass-600)" },
  solid: { background: "var(--ink-700)" },
  ghost: { background: "var(--sand-200)" },
};

export function IconButton({
  icon,
  label,
  variant = "outline",
  size = "md",
  onDark = false,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = SIZES[size] || SIZES.md;
  const base = VARIANTS[variant] || VARIANTS.outline;
  const onDarkOverride = onDark && variant === "outline"
    ? { color: "var(--cream-50)", borderColor: "var(--border-on-ink)" }
    : {};
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: dim, height: dim,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--radius-xs)",
        cursor: "pointer",
        transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
        ...base,
        ...onDarkOverride,
        ...(hover ? HOVER[variant] : {}),
      }}
      {...rest}
    >
      <i data-lucide={icon} style={{ width: ICON[size], height: ICON[size] }} />
    </button>
  );
}
