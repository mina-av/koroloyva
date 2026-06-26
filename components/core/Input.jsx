import React from "react";

/**
 * KOROLYOVA — Input
 * Underlined field (no box) for an editorial, expensive feel.
 * Label floats above as an eyebrow.
 */
export function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  onDark = false,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const labelColor = onDark ? "var(--text-inverse-soft)" : "var(--stone-500)";
  const textColor = onDark ? "var(--cream-50)" : "var(--ink-900)";
  const lineBase = onDark ? "var(--border-on-ink)" : "var(--sand-300)";

  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%", ...style }}>
      {label && (
        <span style={{
          fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 600,
          letterSpacing: "0.18em", textTransform: "uppercase", color: labelColor,
        }}>
          {label}{required && <span style={{ color: "var(--brass-500)" }}> *</span>}
        </span>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          appearance: "none",
          border: "none",
          outline: "none",
          background: "transparent",
          padding: "8px 0",
          fontFamily: "var(--font-sans)",
          fontSize: "17px",
          color: textColor,
          borderBottom: `1.5px solid ${focus ? "var(--brass-500)" : lineBase}`,
          transition: "border-color var(--dur-base) var(--ease-out)",
        }}
        {...rest}
      />
    </label>
  );
}
