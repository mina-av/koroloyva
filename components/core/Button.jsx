import React from "react";

/**
 * KOROLYOVA — Button
 * Squared, uppercase grotesk with wide tracking. One accent (brass).
 */
const SIZES = {
  sm: { padding: "9px 18px", fontSize: "11px", letterSpacing: "0.16em" },
  md: { padding: "14px 28px", fontSize: "12px", letterSpacing: "0.18em" },
  lg: { padding: "18px 38px", fontSize: "13px", letterSpacing: "0.2em" },
};

const VARIANTS = {
  primary: {
    background: "var(--ink-900)",
    color: "var(--cream-50)",
    border: "1px solid var(--ink-900)",
  },
  accent: {
    background: "var(--brass-500)",
    color: "var(--ink-900)",
    border: "1px solid var(--brass-500)",
  },
  secondary: {
    background: "transparent",
    color: "var(--ink-900)",
    border: "1px solid var(--ink-900)",
  },
  ghost: {
    background: "transparent",
    color: "var(--ink-900)",
    border: "1px solid transparent",
    padding: "6px 2px",
  },
};

const HOVER = {
  primary: { background: "var(--ink-700)" },
  accent: { background: "var(--brass-600)", borderColor: "var(--brass-600)" },
  secondary: { background: "var(--ink-900)", color: "var(--cream-50)" },
  ghost: { color: "var(--brass-600)" },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  onDark = false,
  disabled = false,
  fullWidth = false,
  withArrow = false,
  onClick,
  type = "button",
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sz = SIZES[size] || SIZES.md;
  const base = VARIANTS[variant] || VARIANTS.primary;

  let onDarkOverride = {};
  if (onDark && variant === "secondary") {
    onDarkOverride = { color: "var(--cream-50)", borderColor: "var(--border-on-ink)" };
  }
  if (onDark && variant === "ghost") {
    onDarkOverride = { color: "var(--cream-50)" };
  }

  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.6em",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    textTransform: "uppercase",
    lineHeight: 1,
    cursor: disabled ? "not-allowed" : "pointer",
    borderRadius: "var(--radius-xs)",
    width: fullWidth ? "100%" : "auto",
    transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
    opacity: disabled ? 0.4 : 1,
    ...sz,
    ...base,
    ...onDarkOverride,
    ...(hover && !disabled ? HOVER[variant] : {}),
  };

  if (variant === "ghost") {
    style.borderRadius = 0;
    style.borderBottom = "1px solid currentColor";
  }

  return (
    <button
      type={type}
      style={style}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
      {withArrow && <span aria-hidden="true" style={{ fontSize: "1.1em", transform: hover ? "translateX(3px)" : "none", transition: "transform var(--dur-fast) var(--ease-out)" }}>&rarr;</span>}
    </button>
  );
}
