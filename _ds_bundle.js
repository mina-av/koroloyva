/* @ds-bundle: {"format":3,"namespace":"KorolyovaDesignSystem_d31d2b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"PropertyCard","sourcePath":"components/realestate/PropertyCard.jsx"},{"name":"Quote","sourcePath":"components/realestate/Quote.jsx"},{"name":"ServiceCard","sourcePath":"components/realestate/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/realestate/StatBlock.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"c1f9cbe8aece","components/core/Button.jsx":"30be496dbc52","components/core/Divider.jsx":"d61bab423234","components/core/Eyebrow.jsx":"23b35e1ab030","components/core/IconButton.jsx":"3d60856b4aad","components/core/Input.jsx":"9c6ea206dc64","components/realestate/PropertyCard.jsx":"0ad49d97a1ee","components/realestate/Quote.jsx":"76f5e9e0e208","components/realestate/ServiceCard.jsx":"145e9f932a3f","components/realestate/StatBlock.jsx":"44ce944710ae","slides/Slides.jsx":"9d04278bd99f","ui_kits/website/About.jsx":"ba1006c6ab8e","ui_kits/website/Business.jsx":"e9223ec3dc8c","ui_kits/website/Contact.jsx":"73dc7f700c6d","ui_kits/website/Footer.jsx":"7afccc30580e","ui_kits/website/Header.jsx":"7be017e15b48","ui_kits/website/Hero.jsx":"9e9dd5ffa48f","ui_kits/website/Network.jsx":"81480ac32c4e","ui_kits/website/Owners.jsx":"01401d1a4500","ui_kits/website/Parts.jsx":"63869cfa9cf8","ui_kits/website/Paths.jsx":"2fe2e6e6490e","ui_kits/website/Problem.jsx":"6b03ddf5a73f","ui_kits/website/Process.jsx":"1b651ed0810c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KorolyovaDesignSystem_d31d2b = window.KorolyovaDesignSystem_d31d2b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KOROLYOVA — Badge / Tag
 * Quiet squared label. Tone sets color; subtle by default.
 */
const TONES = {
  neutral: {
    background: "var(--sand-200)",
    color: "var(--ink-700)",
    border: "1px solid var(--sand-300)"
  },
  accent: {
    background: "var(--champagne-200)",
    color: "var(--brass-700)",
    border: "1px solid transparent"
  },
  ink: {
    background: "var(--ink-900)",
    color: "var(--cream-50)",
    border: "1px solid var(--ink-900)"
  },
  outline: {
    background: "transparent",
    color: "var(--ink-700)",
    border: "1px solid var(--stone-300)"
  }
};
function Badge({
  children,
  tone = "neutral",
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KOROLYOVA — Button
 * Squared, uppercase grotesk with wide tracking. One accent (brass).
 */
const SIZES = {
  sm: {
    padding: "9px 18px",
    fontSize: "11px",
    letterSpacing: "0.16em"
  },
  md: {
    padding: "14px 28px",
    fontSize: "12px",
    letterSpacing: "0.18em"
  },
  lg: {
    padding: "18px 38px",
    fontSize: "13px",
    letterSpacing: "0.2em"
  }
};
const VARIANTS = {
  primary: {
    background: "var(--ink-900)",
    color: "var(--cream-50)",
    border: "1px solid var(--ink-900)"
  },
  accent: {
    background: "var(--brass-500)",
    color: "var(--ink-900)",
    border: "1px solid var(--brass-500)"
  },
  secondary: {
    background: "transparent",
    color: "var(--ink-900)",
    border: "1px solid var(--ink-900)"
  },
  ghost: {
    background: "transparent",
    color: "var(--ink-900)",
    border: "1px solid transparent",
    padding: "6px 2px"
  }
};
const HOVER = {
  primary: {
    background: "var(--ink-700)"
  },
  accent: {
    background: "var(--brass-600)",
    borderColor: "var(--brass-600)"
  },
  secondary: {
    background: "var(--ink-900)",
    color: "var(--cream-50)"
  },
  ghost: {
    color: "var(--brass-600)"
  }
};
function Button({
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
    onDarkOverride = {
      color: "var(--cream-50)",
      borderColor: "var(--border-on-ink)"
    };
  }
  if (onDark && variant === "ghost") {
    onDarkOverride = {
      color: "var(--cream-50)"
    };
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
    ...(hover && !disabled ? HOVER[variant] : {})
  };
  if (variant === "ghost") {
    style.borderRadius = 0;
    style.borderBottom = "1px solid currentColor";
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, withArrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "1.1em",
      transform: hover ? "translateX(3px)" : "none",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/**
 * KOROLYOVA — Divider
 * Hairline rule. Optional centered ornament (diamond) for chapter breaks.
 */
function Divider({
  ornament = false,
  onDark = false,
  style
}) {
  const line = onDark ? "var(--border-on-ink)" : "var(--sand-300)";
  if (!ornament) {
    return /*#__PURE__*/React.createElement("hr", {
      style: {
        border: 0,
        borderTop: `1px solid ${line}`,
        margin: 0,
        width: "100%",
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: line
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "6px",
      height: "6px",
      transform: "rotate(45deg)",
      background: "var(--brass-500)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: line
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KOROLYOVA — Eyebrow
 * Uppercase, wide-tracked label. Optional leading rule (the "luxe tick").
 */
function Eyebrow({
  children,
  rule = true,
  onDark = false,
  as = "div",
  style,
  ...rest
}) {
  const Tag = as;
  const color = onDark ? "rgba(247,242,233,0.55)" : "var(--stone-400)";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.85em",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "28px",
      height: "1px",
      background: "currentColor",
      opacity: 0.7,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KOROLYOVA — IconButton
 * Squared icon control. Renders a Lucide glyph via <i data-lucide>.
 * The host page must load Lucide and call lucide.createIcons() after render.
 */
const SIZES = {
  sm: 36,
  md: 44,
  lg: 52
};
const ICON = {
  sm: 16,
  md: 18,
  lg: 20
};
const VARIANTS = {
  outline: {
    background: "transparent",
    color: "var(--ink-900)",
    border: "1px solid var(--stone-300)"
  },
  solid: {
    background: "var(--ink-900)",
    color: "var(--cream-50)",
    border: "1px solid var(--ink-900)"
  },
  ghost: {
    background: "transparent",
    color: "var(--ink-700)",
    border: "1px solid transparent"
  }
};
const HOVER = {
  outline: {
    borderColor: "var(--brass-500)",
    color: "var(--brass-600)"
  },
  solid: {
    background: "var(--ink-700)"
  },
  ghost: {
    background: "var(--sand-200)"
  }
};
function IconButton({
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
  const onDarkOverride = onDark && variant === "outline" ? {
    color: "var(--cream-50)",
    borderColor: "var(--border-on-ink)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-xs)",
      cursor: "pointer",
      transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      ...base,
      ...onDarkOverride,
      ...(hover ? HOVER[variant] : {})
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: ICON[size],
      height: ICON[size]
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KOROLYOVA — Input
 * Underlined field (no box) for an editorial, expensive feel.
 * Label floats above as an eyebrow.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: labelColor
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brass-500)"
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "8px 0",
      fontFamily: "var(--font-sans)",
      fontSize: "17px",
      color: textColor,
      borderBottom: `1.5px solid ${focus ? "var(--brass-500)" : lineBase}`,
      transition: "border-color var(--dur-base) var(--ease-out)"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/realestate/PropertyCard.jsx
try { (() => {
/**
 * KOROLYOVA — PropertyCard
 * Editorial listing card. Image on top, quiet meta below, brass price.
 */
function PropertyCard({
  image,
  location,
  title,
  price,
  specs = [],
  status,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-paper)",
      cursor: onClick ? "pointer" : "default",
      transition: "transform var(--dur-base) var(--ease-out)",
      transform: hover ? "translateY(-4px)" : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      aspectRatio: "4 / 3",
      background: "var(--sand-200)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform var(--dur-slow) var(--ease-out)",
      transform: hover ? "scale(1.04)" : "scale(1)",
      filter: "saturate(0.92)"
    }
  }), status && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "14px",
      left: "14px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "ink"
  }, status))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 4px 4px",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, location && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--brass-600)"
    }
  }, location), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "27px",
      lineHeight: 1.08,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)",
      margin: 0
    }
  }, title), specs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "18px",
      flexWrap: "wrap",
      marginTop: "2px"
    }
  }, specs.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      color: "var(--stone-500)"
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "1px",
      background: "var(--sand-300)",
      margin: "8px 0 4px"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "22px",
      color: hover ? "var(--brass-600)" : "var(--ink-900)",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, price)));
}
Object.assign(__ds_scope, { PropertyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// components/realestate/Quote.jsx
try { (() => {
/**
 * KOROLYOVA — Quote
 * Editorial pull-quote in display serif with brass mark and attribution.
 */
function Quote({
  children,
  author,
  role,
  onDark = false,
  style
}) {
  const primary = onDark ? "var(--cream-50)" : "var(--ink-900)";
  const secondary = onDark ? "var(--text-inverse-soft)" : "var(--stone-500)";
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      maxWidth: "20ch",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "64px",
      lineHeight: 0.6,
      color: "var(--brass-500)",
      display: "block",
      marginBottom: "8px"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(1.8rem, 3.4vw, 2.75rem)",
      lineHeight: 1.18,
      letterSpacing: "-0.01em",
      color: primary,
      maxWidth: "20ch"
    }
  }, children), (author || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "26px",
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, author && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      fontWeight: 600,
      letterSpacing: "0.06em",
      color: primary
    }
  }, author), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: secondary
    }
  }, role)));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/Quote.jsx", error: String((e && e.message) || e) }); }

// components/realestate/ServiceCard.jsx
try { (() => {
/**
 * KOROLYOVA — ServiceCard
 * Editorial service entry: index number, title, description, hover rule.
 * Knight-Frank-style services grid item.
 */
function ServiceCard({
  index,
  title,
  description,
  icon,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      padding: "34px 30px 30px",
      background: "var(--surface-paper)",
      borderTop: "1px solid var(--sand-300)",
      cursor: onClick ? "pointer" : "default",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "2px",
      width: hover ? "100%" : "0%",
      background: "var(--brass-500)",
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "14px",
      marginBottom: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "20px",
      fontWeight: 500,
      color: "var(--brass-600)",
      lineHeight: 1
    }
  }, index), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 18,
      height: 18,
      color: "var(--stone-400)"
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "26px",
      lineHeight: 1.1,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)",
      margin: "0 0 12px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--stone-500)",
      margin: 0,
      maxWidth: "42ch"
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5em",
      marginTop: "22px",
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: hover ? "var(--brass-600)" : "var(--ink-900)",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, "Mehr ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: hover ? "translateX(3px)" : "none",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  }, "\u2192")));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/realestate/StatBlock.jsx
try { (() => {
/**
 * KOROLYOVA — StatBlock
 * Large serif figure + label. For proof points / market data.
 */
function StatBlock({
  value,
  label,
  caption,
  onDark = false,
  align = "left",
  style
}) {
  const primary = onDark ? "var(--cream-50)" : "var(--ink-900)";
  const secondary = onDark ? "var(--text-inverse-soft)" : "var(--stone-500)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(2.8rem, 5vw, 4rem)",
      lineHeight: 0.95,
      letterSpacing: "-0.01em",
      color: primary
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--brass-600)",
      marginTop: "4px"
    }
  }, label), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      lineHeight: 1.5,
      color: secondary,
      maxWidth: "30ch"
    }
  }, caption));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/StatBlock.jsx", error: String((e && e.message) || e) }); }

// slides/Slides.jsx
try { (() => {
/* global React */
(function () {
  const {
    Eyebrow,
    Divider
  } = window.KorolyovaDesignSystem_d31d2b;
  const W = 1280,
    H = 720;
  function Frame({
    children,
    bg = "cream",
    image,
    index,
    label,
    style
  }) {
    const dark = bg === "ink" || bg === "image";
    const bgColor = bg === "ink" ? "var(--ink-900)" : "var(--cream-50)";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: W,
        height: H,
        overflow: "hidden",
        background: bgColor,
        color: dark ? "var(--cream-50)" : "var(--ink-900)",
        fontFamily: "var(--font-sans)",
        ...style
      }
    }, bg === "image" && image && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: "",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "saturate(0.88) brightness(0.78)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(22,19,15,0.5) 0%, rgba(22,19,15,0.1) 38%, rgba(22,19,15,0.82) 100%)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 44,
        left: 56,
        zIndex: 3,
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 19,
        letterSpacing: "0.02em",
        color: dark ? "var(--cream-50)" : "var(--ink-900)"
      }
    }, "\u0422\u0430\u043C\u0438\u043B\u0430 \u041A\u043E\u0440\u043E\u043B\u0451\u0432\u0430"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 40,
        left: 56,
        right: 56,
        zIndex: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: dark ? "rgba(247,242,233,0.6)" : "var(--stone-400)"
      }
    }, label), index && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 15,
        color: dark ? "var(--brass-400)" : "var(--brass-600)"
      }
    }, index)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        zIndex: 2,
        width: "100%",
        height: "100%"
      }
    }, children));
  }

  /* ---- 01 · Title --------------------------------------------------------- */
  function TitleSlide() {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "image",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",
      index: "01",
      label: "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0443"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 56,
        bottom: 100,
        maxWidth: 1130
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: true
    }, "20+ \u043B\u0435\u0442 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 58,
        lineHeight: 1.12,
        letterSpacing: "-0.015em",
        color: "var(--cream-50)",
        margin: "20px 0 0"
      }
    }, "\u041D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0442\u044C \u043A\u0430\u043F\u0438\u0442\u0430\u043B \u2014 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: "italic",
        color: "var(--brass-400)"
      }
    }, "\u0438\u043B\u0438 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0430\u0442\u044C"), " \u0435\u0433\u043E"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.5,
        color: "rgba(247,242,233,0.85)",
        maxWidth: "58ch",
        margin: "32px 0 0"
      }
    }, "\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u0440\u0435\u0434\u043A\u043E \u0432 \u0431\u044E\u0434\u0436\u0435\u0442\u0435. \u0427\u0430\u0449\u0435 \u2014 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435.")));
  }

  /* ---- 02 · Problem ------------------------------------------------------- */
  const QUESTIONS = ["Хватит ли денег завершить проект так, как задумали?", "Как выбрать подрядчиков, которым можно доверять?", "Как контролировать качество и избежать лишних расходов?", "Как получить именно тот результат, что представляли в начале?"];
  function ProblemSlide() {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "ink",
      index: "02",
      label: "\u0421 \u0447\u0435\u0433\u043E \u0432\u0441\u0451 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "146px 56px 0",
        display: "grid",
        gridTemplateColumns: "0.9fr 1.1fr",
        gap: 64,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: true
    }, "\u0421 \u0447\u0435\u0433\u043E \u0432\u0441\u0451 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 46,
        lineHeight: 1.08,
        letterSpacing: "-0.01em",
        color: "var(--cream-50)",
        margin: "18px 0 0",
        maxWidth: "16ch"
      }
    }, "\u0412\u0441\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0435 \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u044B"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.6,
        color: "rgba(247,242,233,0.72)",
        margin: "24px 0 0",
        maxWidth: "34ch"
      }
    }, "\u0412\u044B \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u044B \u0437\u043D\u0430\u0442\u044C \u0432\u0441\u0451 \u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435. \u041D\u043E \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u043D \u0431\u044B\u0442\u044C \u0438 \u0437\u0430\u043B\u043E\u0436\u043D\u0438\u043A\u043E\u043C \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432.")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, QUESTIONS.map((q, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 20,
        padding: "20px 0",
        borderTop: "1px solid var(--border-on-ink)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 20,
        color: "var(--brass-400)",
        flex: "none",
        width: 30
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        lineHeight: 1.4,
        color: "var(--cream-50)"
      }
    }, q))))));
  }

  /* ---- 03 · Paths --------------------------------------------------------- */
  const PATHS = [{
    n: "01",
    label: "Для собственников",
    title: "Вы — собственник недвижимости",
    desc: "Консультации, курс и полное представление ваших интересов на проекте."
  }, {
    n: "02",
    label: "Для предпринимателей",
    title: "Вы создаёте строительный бизнес",
    desc: "Программа, первый объект под руководством, стратегическое партнёрство."
  }, {
    n: "03",
    label: "Партнёрство",
    title: "Закрытая партнёрская сеть",
    desc: "Поставщики, подрядчики, застройщики и специалисты — за 20+ лет работы."
  }];
  function PathsSlide() {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "cream",
      index: "03",
      label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0443\u0442\u044C"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "150px 56px 0"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0422\u0440\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 44,
        lineHeight: 1.04,
        letterSpacing: "-0.01em",
        color: "var(--ink-900)",
        margin: "16px 0 48px",
        maxWidth: "24ch"
      }
    }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0443\u0442\u044C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0430\u043A\u0442\u0443\u0430\u043B\u0435\u043D \u0434\u043B\u044F \u0432\u0430\u0441 \u0441\u0435\u0433\u043E\u0434\u043D\u044F"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 0,
        borderTop: "1px solid var(--sand-300)"
      }
    }, PATHS.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.n,
      style: {
        padding: "30px 30px 0 0",
        borderRight: p.n !== "03" ? "1px solid var(--sand-300)" : "none",
        paddingLeft: p.n === "01" ? 0 : 30
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        color: "var(--brass-600)"
      }
    }, p.n), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--brass-700)",
        margin: "16px 0 0"
      }
    }, p.label), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 25,
        lineHeight: 1.12,
        color: "var(--ink-900)",
        margin: "10px 0 12px",
        maxWidth: "14ch"
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.55,
        color: "var(--stone-500)",
        margin: 0,
        maxWidth: "26ch"
      }
    }, p.desc))))));
  }

  /* ---- 04 · Owners formats ------------------------------------------------ */
  const OWNERS = [{
    title: "Консультация",
    sub: "Разбор вашей ситуации",
    meta: "Письменные рекомендации и план действий",
    price: "от 97 $"
  }, {
    title: "Курс для собственников",
    sub: "Контроль качества без технического образования",
    meta: "52 модуля · 143 урока · 634 страницы",
    price: "237 – 1 570 $"
  }, {
    title: "Представление интересов",
    sub: "Ваши интересы на каждом этапе проекта",
    meta: "Контроль смет, сроков, качества, подрядчиков",
    price: "от 2 570 $"
  }];
  function OwnersSlide() {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "cream",
      index: "04",
      label: "\u0414\u043B\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "150px 56px 0"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0424\u043E\u0440\u043C\u0430\u0442\u044B \u0443\u0447\u0430\u0441\u0442\u0438\u044F"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 44,
        lineHeight: 1.04,
        letterSpacing: "-0.01em",
        color: "var(--ink-900)",
        margin: "16px 0 46px",
        maxWidth: "22ch"
      }
    }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0434 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 28
      }
    }, OWNERS.map(o => /*#__PURE__*/React.createElement("div", {
      key: o.title,
      style: {
        background: "var(--paper)",
        border: "1px solid var(--sand-300)",
        padding: "30px 28px",
        display: "flex",
        flexDirection: "column",
        minHeight: 280
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 26,
        lineHeight: 1.12,
        color: "var(--ink-900)",
        margin: 0,
        minHeight: 58,
        flexShrink: 0
      }
    }, o.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.45,
        fontWeight: 500,
        color: "var(--brass-700)",
        margin: "10px 0 0",
        flexShrink: 0
      }
    }, o.sub), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        lineHeight: 1.55,
        color: "var(--stone-500)",
        margin: "16px 0 0",
        flex: 1
      }
    }, o.meta), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--sand-300)",
        margin: "16px 0 14px"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 26,
        color: "var(--ink-900)"
      }
    }, o.price))))));
  }

  /* ---- 05 · Business ------------------------------------------------------ */
  const BUSINESS = [{
    title: "Самостоятельное изучение",
    sub: "Полная система в своём темпе",
    meta: "95 модулей · 297 уроков · 1 000+ страниц",
    price: "587 $"
  }, {
    title: "Первый объект с экспертом",
    sub: "Реальный проект не в одиночку",
    meta: "5 месяцев · закрытый чат · Zoom · сеть",
    price: "от 3 870 $"
  }, {
    title: "Стратегическое партнёрство",
    sub: "Для бизнеса на годы вперёд",
    meta: "Стратегические встречи · персональные консультации",
    price: "от 15 000 $"
  }];
  function BusinessSlide() {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "ink",
      index: "05",
      label: "\u0414\u043B\u044F \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u0432"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "146px 56px 0"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: true
    }, "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 44,
        lineHeight: 1.04,
        letterSpacing: "-0.01em",
        color: "var(--cream-50)",
        margin: "16px 0 44px",
        maxWidth: "24ch"
      }
    }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 28
      }
    }, BUSINESS.map(b => /*#__PURE__*/React.createElement("div", {
      key: b.title,
      style: {
        border: "1px solid var(--border-on-ink)",
        padding: "30px 28px",
        display: "flex",
        flexDirection: "column",
        minHeight: 260
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 25,
        lineHeight: 1.12,
        color: "var(--cream-50)",
        margin: 0,
        minHeight: 56,
        flexShrink: 0
      }
    }, b.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.45,
        fontWeight: 500,
        color: "var(--brass-400)",
        margin: "10px 0 0",
        flexShrink: 0
      }
    }, b.sub), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        lineHeight: 1.55,
        color: "rgba(247,242,233,0.66)",
        margin: "16px 0 0",
        flex: 1
      }
    }, b.meta), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--border-on-ink)",
        margin: "16px 0 14px"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 26,
        color: "var(--brass-400)"
      }
    }, b.price))))));
  }

  /* ---- 06 · About --------------------------------------------------------- */
  function AboutSlide() {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "cream",
      index: "06",
      label: "\u041E\u0431 \u0430\u0432\u0442\u043E\u0440\u0435"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "150px 56px 90px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u041E\u0431 \u0430\u0432\u0442\u043E\u0440\u0435"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 54,
        lineHeight: 1.0,
        letterSpacing: "-0.01em",
        color: "var(--ink-900)",
        margin: "16px 0 0"
      }
    }, "\u0422\u0430\u043C\u0438\u043B\u0430 \u041A\u043E\u0440\u043E\u043B\u0451\u0432\u0430"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.65,
        color: "var(--stone-500)",
        margin: "24px 0 0",
        maxWidth: "46ch"
      }
    }, "\u0417\u0430 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C 20 \u043B\u0435\u0442 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u044F \u0443\u0431\u0435\u0434\u0438\u043B\u0430\u0441\u044C: \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C\u044E \u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C, \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C\u0441\u044F \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u0435\u043C. \u0412\u0430\u0436\u043D\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0432\u043D\u0443\u0442\u0440\u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0438 \u0437\u0430 \u0447\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u044B \u043F\u043B\u0430\u0442\u0438\u0442\u0435 \u0441\u0432\u043E\u0438 \u0434\u0435\u043D\u044C\u0433\u0438."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 48,
        marginTop: 36
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 40,
        color: "var(--brass-600)",
        lineHeight: 1
      }
    }, "20+"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--stone-500)",
        marginTop: 6
      }
    }, "\u043B\u0435\u0442 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 40,
        color: "var(--brass-600)",
        lineHeight: 1
      }
    }, "3"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--stone-500)",
        marginTop: 6
      }
    }, "\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F")))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1100&q=80",
      alt: "\u0422\u0430\u043C\u0438\u043B\u0430 \u041A\u043E\u0440\u043E\u043B\u0451\u0432\u0430",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "saturate(0.92)"
      }
    }))));
  }

  /* ---- 07 · Contact ------------------------------------------------------- */
  const STEPS = [["01", "Заполните бриф"], ["02", "Я изучу информацию"], ["03", "Проведём встречу"], ["04", "Вы получите результат"]];
  function ContactSlide() {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "ink",
      index: "07",
      label: "\u041A\u0430\u043A \u043D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "146px 56px 0",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: true
    }, "\u041D\u0435 \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0441 \u0447\u0435\u0433\u043E \u043D\u0430\u0447\u0430\u0442\u044C?"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 52,
        lineHeight: 1.02,
        letterSpacing: "-0.01em",
        color: "var(--cream-50)",
        margin: "18px 0 0",
        maxWidth: "14ch"
      }
    }, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u2014 \u044F \u043F\u043E\u043C\u043E\u0433\u0443 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.6,
        color: "rgba(247,242,233,0.75)",
        maxWidth: "36ch",
        margin: "24px 0 0"
      }
    }, "\u041A\u0430\u0436\u0434\u0430\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0430. Telegram \xB7 WhatsApp \xB7 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, STEPS.map(([n, t], i) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 22,
        padding: "18px 0",
        borderTop: i === 0 ? "none" : "1px solid var(--border-on-ink)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 24,
        color: "var(--brass-400)",
        width: 34,
        flex: "none"
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 19,
        color: "var(--cream-50)"
      }
    }, t))))));
  }
  Object.assign(window, {
    SlideFrame: Frame,
    TitleSlide,
    ProblemSlide,
    PathsSlide,
    OwnersSlide,
    BusinessSlide,
    AboutSlide,
    ContactSlide
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
/* global React */
(function () {
  const {
    KFNumberTag
  } = window;
  const ABOUT_IMG = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1100&q=80";
  function About() {
    return /*#__PURE__*/React.createElement("section", {
      id: "about",
      style: {
        background: "var(--paper)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(KFNumberTag, {
      n: "05"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "0.62fr 0.38fr",
        gap: 72,
        alignItems: "center"
      },
      className: "kit-about-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "clamp(2.4rem, 4.4vw, 4rem)",
        lineHeight: 1.02,
        letterSpacing: "-0.01em",
        color: "var(--ink-900)",
        margin: 0
      }
    }, "\u0422\u0430\u043C\u0438\u043B\u0430 \u041A\u043E\u0440\u043E\u043B\u0451\u0432\u0430"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 18,
        lineHeight: 1.7,
        color: "var(--stone-500)",
        margin: "30px 0 0",
        maxWidth: "54ch"
      }
    }, "\u0417\u0430 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C 20 \u043B\u0435\u0442 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u044F \u0443\u0431\u0435\u0434\u0438\u043B\u0430\u0441\u044C \u0432 \u043E\u0434\u043D\u043E\u0439 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0432\u0435\u0449\u0438: \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C\u044E, \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0438\u043B\u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u043E\u043C, \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C\u0441\u044F \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u0435\u043C. \u041D\u043E \u0432\u0430\u0436\u043D\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0432\u043D\u0443\u0442\u0440\u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0438 \u0437\u0430 \u0447\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u044B \u043F\u043B\u0430\u0442\u0438\u0442\u0435 \u0441\u0432\u043E\u0438 \u0434\u0435\u043D\u044C\u0433\u0438 \u0438\u043B\u0438 \u0434\u0435\u043D\u044C\u0433\u0438 \u0441\u0432\u043E\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432. \u0418\u043C\u0435\u043D\u043D\u043E \u044D\u0442\u043E\u043C\u0443 \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u044B \u0432\u0441\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u043E\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: ABOUT_IMG,
      alt: "\u0422\u0430\u043C\u0438\u043B\u0430 \u041A\u043E\u0440\u043E\u043B\u0451\u0432\u0430",
      style: {
        width: "100%",
        aspectRatio: "4 / 5",
        objectFit: "cover",
        filter: "saturate(0.92)",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: -24,
        bottom: -24,
        background: "var(--ink-900)",
        color: "var(--cream-50)",
        padding: "20px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 34,
        lineHeight: 1,
        color: "var(--brass-400)"
      }
    }, "20+"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginTop: 6
      }
    }, "\u043B\u0435\u0442 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438"))))));
  }
  window.About = About;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Business.jsx
try { (() => {
/* global React */
(function () {
  const {
    KFSectionHead,
    KFOfferCard
  } = window;
  function Business({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: "business",
      style: {
        background: "var(--cream-50)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-wide)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 60,
        maxWidth: 880
      }
    }, /*#__PURE__*/React.createElement(KFSectionHead, {
      n: "03",
      label: "\u0414\u043B\u044F \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u0432",
      heading: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043F\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430",
      intro: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0438 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u044B\u0445 \u0441\u0444\u0435\u0440 \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u041D\u043E \u043E\u043F\u044B\u0442 \u043D\u0435 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0443\u0440\u043E\u043A\u043E\u0432 \u0438 \u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u044F \u043A\u043D\u0438\u0433. \u041E\u043D \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u043E\u0433\u0434\u0430, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438, \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430\u043C\u0438, \u0431\u044E\u0434\u0436\u0435\u0442\u0430\u043C\u0438, \u0441\u0440\u043E\u043A\u0430\u043C\u0438 \u0438 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C\u0438.",
      max: "24ch"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 28,
        alignItems: "stretch"
      },
      className: "kit-business-grid"
    }, /*#__PURE__*/React.createElement(KFOfferCard, {
      title: "\u0421\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435",
      subtitle: "\u041F\u043E\u043B\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432 \u0441\u0432\u043E\u0451\u043C \u0442\u0435\u043C\u043F\u0435",
      meta: "95 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 \xB7 297 \u0443\u0440\u043E\u043A\u043E\u0432 \xB7 1 000+ \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \xB7 \u0440\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442\u044B \xB7 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u044B \xB7 \u0447\u0435\u043A-\u043B\u0438\u0441\u0442\u044B",
      price: "587 $",
      ctaLabel: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F",
      onNav: onNav
    }, /*#__PURE__*/React.createElement("p", null, "\u0412 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 \u0441\u043E\u0431\u0440\u0430\u043D \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u043F\u044B\u0442 \u0431\u043E\u043B\u0435\u0435 20 \u043B\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u0441\u0444\u0435\u0440\u0435 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438, \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438.")), /*#__PURE__*/React.createElement(KFOfferCard, {
      title: "\u041F\u0435\u0440\u0432\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442 \u043F\u043E\u0434 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E\u043C \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0430",
      subtitle: "\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u044F\u0434\u043E\u043C \u0441 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u0436\u0435 \u043F\u0440\u043E\u0448\u0451\u043B \u044D\u0442\u043E\u0442 \u043F\u0443\u0442\u044C",
      meta: "5 \u043C\u0435\u0441\u044F\u0446\u0435\u0432 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F \xB7 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u0447\u0430\u0442 \xB7 Zoom-\u0432\u0441\u0442\u0440\u0435\u0447\u0438 \xB7 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u043A\u043E\u0439 \u0441\u0435\u0442\u0438",
      note: "\u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E. \u041C\u0435\u0441\u0442\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u044B.",
      price: "\u043E\u0442 3 870 $",
      ctaLabel: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443",
      onNav: onNav
    }, /*#__PURE__*/React.createElement("p", null, "\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043E\u043F\u044B\u0442 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u0445. \u042D\u0442\u043E\u0442 \u0444\u043E\u0440\u043C\u0430\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u043F\u0440\u043E\u0439\u0442\u0438 \u043F\u0435\u0440\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u043D\u0435 \u0432 \u043E\u0434\u0438\u043D\u043E\u0447\u043A\u0443.")), /*#__PURE__*/React.createElement(KFOfferCard, {
      title: "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u0442\u0432\u043E",
      subtitle: "\u0414\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0441\u0442\u0440\u043E\u0438\u0442 \u0431\u0438\u0437\u043D\u0435\u0441 \u043D\u0430 \u0433\u043E\u0434\u044B \u0432\u043F\u0435\u0440\u0451\u0434",
      meta: "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \xB7 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \xB7 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043C\u0435\u0436\u0434\u0443 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043C\u0438 \xB7 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u043A\u043E\u0439 \u0441\u0435\u0442\u0438",
      note: "\u041C\u0435\u0441\u0442\u043E \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043E. \u041D\u0430\u0447\u0430\u043B\u043E \u0441 \u043B\u0438\u0447\u043D\u043E\u0439 \u0432\u0441\u0442\u0440\u0435\u0447\u0438.",
      price: "\u043E\u0442 15 000 $",
      ctaLabel: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443",
      onNav: onNav
    }, /*#__PURE__*/React.createElement("p", null, "\u0414\u043B\u044F \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043D\u0443\u0436\u0435\u043D \u043F\u0430\u0440\u0442\u043D\u0451\u0440: \u0432\u0438\u0434\u0435\u0442\u044C \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E \u0448\u0438\u0440\u0435, \u0432\u044B\u044F\u0432\u043B\u044F\u0442\u044C \u0440\u0438\u0441\u043A\u0438, \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0432 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B.")))));
  }
  window.Business = Business;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Business.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* global React */
(function () {
  const {
    Button,
    Input
  } = window.KorolyovaDesignSystem_d31d2b;
  const {
    KFSectionHead
  } = window;
  const INTERESTS = ["Консультация", "Курс для собственников", "Представление интересов собственника", "Программа по созданию строительного бизнеса", "Профессиональная партнёрская сеть", "Другое"];
  const METHODS = ["Telegram", "WhatsApp", "Телефон"];
  function Contact() {
    const [f, setF] = React.useState({
      name: "",
      contact: "",
      method: "Telegram",
      interest: "",
      message: "",
      sent: false
    });
    const set = (k, v) => setF(s => ({
      ...s,
      [k]: v
    }));
    const labelStyle = {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--stone-500)",
      marginBottom: 12,
      display: "block"
    };
    return /*#__PURE__*/React.createElement("section", {
      id: "contact",
      style: {
        background: "var(--paper)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        marginBottom: 56
      }
    }, /*#__PURE__*/React.createElement(KFSectionHead, {
      n: "07",
      heading: "\u041D\u0435 \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0441 \u0447\u0435\u0433\u043E \u043D\u0430\u0447\u0430\u0442\u044C?",
      intro: "\u041A\u0430\u0436\u0434\u0430\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0430. \u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435, \u0438 \u044F \u043F\u043E\u043C\u043E\u0433\u0443 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0444\u043E\u0440\u043C\u0430\u0442.",
      max: "18ch"
    })), f.sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid var(--sand-300)",
        padding: "64px 40px",
        textAlign: "center",
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check-check",
      style: {
        width: 32,
        height: 32,
        color: "var(--brass-600)"
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 30,
        color: "var(--ink-900)",
        margin: "18px 0 0"
      }
    }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        color: "var(--stone-500)",
        margin: "10px 0 0"
      }
    }, "\u042F \u0441\u0432\u044F\u0436\u0443\u0441\u044C \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        set("sent", true);
      },
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "34px 40px",
        maxWidth: 900
      },
      className: "kit-form-grid"
    }, /*#__PURE__*/React.createElement(Input, {
      label: "\u0418\u043C\u044F",
      placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
      value: f.name,
      onChange: e => set("name", e.target.value),
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u0412\u0430\u0448 \u043A\u043E\u043D\u0442\u0430\u043A\u0442",
      placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D, e-mail \u0438\u043B\u0438 @username",
      value: f.contact,
      onChange: e => set("contact", e.target.value),
      required: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: labelStyle
    }, "\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0441\u0432\u044F\u0437\u0438"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        flexWrap: "wrap"
      }
    }, METHODS.map(m => /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: m,
      onClick: () => set("method", m),
      style: {
        cursor: "pointer",
        background: f.method === m ? "var(--ink-900)" : "transparent",
        color: f.method === m ? "var(--cream-50)" : "var(--ink-700)",
        border: "1px solid " + (f.method === m ? "var(--ink-900)" : "var(--sand-300)"),
        borderRadius: "var(--radius-pill)",
        padding: "10px 22px",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 500,
        transition: "all var(--dur-fast) var(--ease-out)"
      }
    }, m)))), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: labelStyle
    }, "\u0427\u0442\u043E \u0432\u0430\u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442?"), /*#__PURE__*/React.createElement("select", {
      value: f.interest,
      onChange: e => set("interest", e.target.value),
      required: true,
      style: {
        width: "100%",
        appearance: "none",
        background: "transparent",
        border: "none",
        borderBottom: "1.5px solid var(--sand-300)",
        padding: "8px 0",
        fontFamily: "var(--font-sans)",
        fontSize: 17,
        color: f.interest ? "var(--ink-900)" : "var(--stone-400)",
        outline: "none",
        cursor: "pointer",
        borderRadius: 0
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435"), INTERESTS.map(o => /*#__PURE__*/React.createElement("option", {
      key: o,
      value: o
    }, o)))), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: labelStyle
    }, "\u0412\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441"), /*#__PURE__*/React.createElement("textarea", {
      rows: 4,
      value: f.message,
      onChange: e => set("message", e.target.value),
      placeholder: "\u041A\u0440\u0430\u0442\u043A\u043E \u043E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E",
      style: {
        width: "100%",
        appearance: "none",
        background: "transparent",
        border: "1px solid var(--sand-300)",
        padding: "14px 16px",
        resize: "vertical",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        color: "var(--ink-900)",
        outline: "none",
        borderRadius: "var(--radius-xs)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      type: "submit",
      withArrow: true
    }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")))));
  }
  window.Contact = Contact;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* global React */
(function () {
  const COLS = [{
    title: "Собственникам",
    target: "owners",
    items: ["Консультация", "Курс для собственников", "Представление интересов"]
  }, {
    title: "Строительный бизнес",
    target: "business",
    items: ["Самостоятельное изучение", "Первый объект", "Стратегическое партнёрство"]
  }, {
    title: "Навигация",
    items: [["Партнёрская сеть", "network"], ["Об авторе", "about"], ["Как начать работу", "process"], ["Записаться на консультацию", "contact"]]
  }];
  function Footer({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: "var(--ink-900)",
        color: "var(--cream-50)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-wide)",
        margin: "0 auto",
        padding: "var(--section-y-snug) var(--gutter) 40px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
        gap: 48
      },
      className: "kit-footer-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 26,
        color: "var(--cream-50)",
        margin: 0
      }
    }, "\u0422\u0430\u043C\u0438\u043B\u0430 \u041A\u043E\u0440\u043E\u043B\u0451\u0432\u0430"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.6,
        color: "rgba(247,242,233,0.66)",
        margin: "16px 0 0",
        maxWidth: "32ch"
      }
    }, "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0443. \u0411\u043E\u043B\u0435\u0435 20 \u043B\u0435\u0442 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438.")), COLS.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.title
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--brass-400)",
        margin: "0 0 18px"
      }
    }, c.title), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, c.items.map(it => {
      const [label, tgt] = Array.isArray(it) ? it : [it, c.target];
      return /*#__PURE__*/React.createElement("li", {
        key: label
      }, /*#__PURE__*/React.createElement("a", {
        href: "#" + tgt,
        onClick: e => {
          e.preventDefault();
          onNav(tgt);
        },
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          color: "rgba(247,242,233,0.8)"
        },
        onMouseEnter: e => e.currentTarget.style.color = "var(--brass-400)",
        onMouseLeave: e => e.currentTarget.style.color = "rgba(247,242,233,0.8)"
      }, label));
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--border-on-ink)",
        margin: "48px 0 0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        paddingTop: 28
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "rgba(247,242,233,0.55)"
      }
    }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "rgba(247,242,233,0.5)"
      }
    }, "\xA9 \u0422\u0430\u043C\u0438\u043B\u0430 \u041A\u043E\u0440\u043E\u043B\u0451\u0432\u0430"))));
  }
  window.Footer = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* global React */
(function () {
  const {
    Button,
    IconButton
  } = window.KorolyovaDesignSystem_d31d2b;
  const LINKS = [["Собственникам", "owners"], ["Строительный бизнес", "business"], ["Партнёрская сеть", "network"], ["Об авторе", "about"]];
  function Header({
    onNav,
    mobileOpen,
    setMobileOpen
  }) {
    const [scrolled, setScrolled] = React.useState(false);
    React.useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 40);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: scrolled ? "rgba(247,242,233,0.92)" : "transparent",
        backdropFilter: scrolled ? "saturate(140%) blur(12px)" : "none",
        borderBottom: "1px solid " + (scrolled ? "var(--sand-300)" : "transparent"),
        transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-wide)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        height: 82,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#top",
      onClick: e => {
        e.preventDefault();
        onNav("top");
      },
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 25,
        letterSpacing: "0.02em",
        color: "var(--ink-900)",
        whiteSpace: "nowrap"
      }
    }, "\u0422\u0430\u043C\u0438\u043B\u0430 \u041A\u043E\u0440\u043E\u043B\u0451\u0432\u0430"), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        gap: 34,
        alignItems: "center"
      },
      className: "kit-desktop-nav"
    }, LINKS.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
      key: id,
      href: "#" + id,
      onClick: e => {
        e.preventDefault();
        onNav(id);
      },
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: "0.01em",
        color: "var(--ink-700)",
        whiteSpace: "nowrap"
      },
      onMouseEnter: e => e.currentTarget.style.color = "var(--brass-600)",
      onMouseLeave: e => e.currentTarget.style.color = "var(--ink-700)"
    }, l)), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => onNav("contact")
    }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E")), /*#__PURE__*/React.createElement("div", {
      className: "kit-mobile-toggle",
      style: {
        display: "none"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: mobileOpen ? "x" : "menu",
      label: "\u041C\u0435\u043D\u044E",
      variant: "ghost",
      onClick: () => setMobileOpen(!mobileOpen)
    }))), mobileOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--sand-300)",
        background: "var(--cream-50)",
        padding: "16px var(--gutter)"
      }
    }, [...LINKS, ["Записаться на консультацию", "contact"]].map(([l, id]) => /*#__PURE__*/React.createElement("a", {
      key: id,
      href: "#" + id,
      onClick: e => {
        e.preventDefault();
        onNav(id);
        setMobileOpen(false);
      },
      style: {
        display: "block",
        padding: "13px 0",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        color: "var(--ink-800)",
        borderBottom: "1px solid var(--sand-200)"
      }
    }, l))));
  }
  window.Header = Header;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* global React */
(function () {
  const {
    Eyebrow
  } = window.KorolyovaDesignSystem_d31d2b;
  const HERO_IMG = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80";
  function Hero({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "var(--ink-900)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: HERO_IMG,
      alt: "",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "saturate(0.88) brightness(0.78)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(22,19,15,0.45) 0%, rgba(22,19,15,0.12) 32%, rgba(22,19,15,0.82) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        maxWidth: "var(--container-wide)",
        margin: "0 auto",
        width: "100%",
        padding: "0 var(--gutter) 92px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1000
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: true
    }, "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0443"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)",
        lineHeight: 1.02,
        letterSpacing: "-0.015em",
        color: "var(--cream-50)",
        margin: "24px 0 0"
      }
    }, "\u041D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0442\u044C \u043A\u0430\u043F\u0438\u0442\u0430\u043B \u2014 \u0438\u043B\u0438 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: "italic",
        color: "var(--brass-400)"
      }
    }, "\u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0430\u0442\u044C"), " \u0435\u0433\u043E"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
        lineHeight: 1.6,
        color: "rgba(247,242,233,0.85)",
        maxWidth: "60ch",
        margin: "30px 0 0"
      }
    }, "\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u0440\u0435\u0434\u043A\u043E \u0432 \u0431\u044E\u0434\u0436\u0435\u0442\u0435. \u0427\u0430\u0449\u0435 \u2014 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435. \u0417\u0430 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C 20 \u043B\u0435\u0442 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u044F \u0443\u0431\u0435\u0434\u0438\u043B\u0430\u0441\u044C: \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0432\u0430\u0436\u043D\u0435\u0435, \u0447\u0435\u043C \u0431\u044B\u0442\u044C \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u0435\u043C."))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        right: "var(--gutter)",
        bottom: 44,
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "rgba(247,242,233,0.7)",
        writingMode: "vertical-rl"
      }
    }, "20+ \u043B\u0435\u0442 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 54,
        background: "rgba(247,242,233,0.4)"
      }
    })));
  }
  window.Hero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Network.jsx
try { (() => {
/* global React */
(function () {
  const {
    Button,
    Eyebrow,
    Divider
  } = window.KorolyovaDesignSystem_d31d2b;
  const {
    KFNumberTag
  } = window;
  const STEPS = [["01", "Заполните анкету"], ["02", "Ознакомительная встреча"], ["03", "Анализ возможностей"], ["04", "Подключение"]];
  function Network({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: "network",
      style: {
        background: "var(--ink-900)",
        color: "var(--cream-50)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-wide)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(KFNumberTag, {
      n: "04",
      onDark: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: 80,
        alignItems: "start"
      },
      className: "kit-network-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "clamp(2.1rem, 3.8vw, 3.4rem)",
        lineHeight: 1.06,
        letterSpacing: "-0.01em",
        color: "var(--cream-50)",
        margin: 0,
        maxWidth: "16ch"
      }
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u0430\u044F \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u043A\u0430\u044F \u0441\u0435\u0442\u044C"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 17,
        lineHeight: 1.65,
        color: "rgba(247,242,233,0.8)",
        margin: "28px 0 0",
        maxWidth: "52ch"
      }
    }, "\u0411\u043E\u043B\u0435\u0435 20 \u043B\u0435\u0442 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439 \u0441 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C\u0438, \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430\u043C\u0438, \u0437\u0430\u0441\u0442\u0440\u043E\u0439\u0449\u0438\u043A\u0430\u043C\u0438 \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438 \u0440\u044B\u043D\u043A\u0430. \u0414\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0435\u0442\u0438 \u2014 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u043E\u043C\u0443 \u0432\u0430\u0436\u043D\u044B \u043D\u0430\u0434\u0451\u0436\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u0430 \u043D\u0435 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        lineHeight: 1.65,
        color: "rgba(247,242,233,0.66)",
        margin: "20px 0 0",
        maxWidth: "52ch"
      }
    }, "\u0427\u0435\u0440\u0435\u0437 \u0441\u0435\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C: \u043F\u043E\u0438\u0441\u043A \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u043E\u0432 \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \xB7 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \xB7 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0438 \u043C\u0435\u0431\u0435\u043B\u0438 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \xB7 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u044B \xB7 \u043F\u043E\u0434\u0431\u043E\u0440 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0438 \u0443\u0447\u0430\u0441\u0442\u043A\u043E\u0432 \xB7 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 28,
        marginTop: 40,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 40,
        color: "var(--brass-400)"
      }
    }, "690 $"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => onNav("contact")
    }, "\u041F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"))), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid var(--border-on-ink)",
        padding: "38px 34px"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: true
    }, "\u041A\u0430\u043A \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, STEPS.map(([n, t], i) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 22,
        padding: "18px 0",
        borderTop: i === 0 ? "none" : "1px solid var(--border-on-ink)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        color: "var(--brass-400)",
        width: 32,
        flex: "none"
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 17,
        color: "var(--cream-50)"
      }
    }, t))))))));
  }
  window.Network = Network;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Network.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Owners.jsx
try { (() => {
/* global React */
(function () {
  const {
    KFSectionHead,
    KFOfferCard
  } = window;
  function Owners({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: "owners",
      style: {
        background: "var(--paper)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-wide)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 60
      }
    }, /*#__PURE__*/React.createElement(KFSectionHead, {
      n: "02",
      label: "\u0414\u043B\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438",
      heading: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438",
      intro: "\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u044F \u0441\u043E\u0437\u0434\u0430\u043B\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0432 \u0443\u0447\u0430\u0441\u0442\u0438\u044F.",
      max: "22ch"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 28,
        alignItems: "stretch"
      },
      className: "kit-owners-grid"
    }, /*#__PURE__*/React.createElement(KFOfferCard, {
      title: "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F",
      subtitle: "\u0420\u0430\u0437\u0431\u043E\u0440 \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438",
      price: "\u043E\u0442 97 $",
      ctaLabel: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0431\u0440\u0438\u0444 \u0438 \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F",
      onNav: onNav
    }, /*#__PURE__*/React.createElement("p", null, "\u041F\u043E\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438\u043B\u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u0430? \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u0438 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u044B\u0439 \u0432\u0437\u0433\u043B\u044F\u0434."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontWeight: 600,
        color: "var(--ink-800)",
        margin: "0 0 8px"
      }
    }, "\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442, \u0435\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u043E:"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 18,
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("li", null, "\u043E\u0446\u0435\u043D\u0438\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442"), /*#__PURE__*/React.createElement("li", null, "\u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0432 \u0441\u043F\u043E\u0440\u0435 \u0441 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u043E\u043C"), /*#__PURE__*/React.createElement("li", null, "\u043F\u0440\u0438\u043D\u044F\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442 \u0438\u043B\u0438 \u044D\u0442\u0430\u043F"), /*#__PURE__*/React.createElement("li", null, "\u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432\u0442\u043E\u0440\u043E\u0435 \u043C\u043D\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0434 \u0432\u0430\u0436\u043D\u044B\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C"))), /*#__PURE__*/React.createElement("p", null, "\u041F\u043E \u0438\u0442\u043E\u0433\u0443: \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u0438 \u043F\u043B\u0430\u043D \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439.")), /*#__PURE__*/React.createElement(KFOfferCard, {
      title: "\u041A\u0443\u0440\u0441 \u0434\u043B\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432",
      subtitle: "\u041D\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0439\u0442\u0435 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430\u043C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430 \u0432\u0430\u0448\u0438 \u0434\u0435\u043D\u044C\u0433\u0438",
      meta: "52 \u043C\u043E\u0434\u0443\u043B\u044F \xB7 143 \u0443\u0440\u043E\u043A\u0430 \xB7 634 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \xB7 \u0447\u0435\u043A-\u043B\u0438\u0441\u0442\u044B \xB7 \u0448\u0430\u0431\u043B\u043E\u043D\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432",
      tiers: [{
        name: "Базовый",
        price: "237 $"
      }, {
        name: "Оптимальный",
        price: "587 $"
      }, {
        name: "Персональное сопровождение",
        price: "1 570 $"
      }],
      ctaLabel: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u043A\u0443\u0440\u0441\u0435",
      onNav: onNav
    }, /*#__PURE__*/React.createElement("p", null, "\u0420\u0435\u043C\u043E\u043D\u0442 \u2014 \u044D\u0442\u043E \u043F\u0440\u043E\u0435\u043A\u0442, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0446\u0435\u043D\u0430 \u043E\u0448\u0438\u0431\u043A\u0438 \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u0447\u0438\u0441\u043B\u044F\u0442\u044C\u0441\u044F \u0442\u044B\u0441\u044F\u0447\u0430\u043C\u0438 \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432. \u041A\u0443\u0440\u0441 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E, \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u044D\u0442\u0430\u043F\u044B \u0431\u0435\u0437 \u043E\u0448\u0438\u0431\u043E\u043A \u0438 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C, \u0434\u0430\u0436\u0435 \u0431\u0435\u0437 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F.")), /*#__PURE__*/React.createElement(KFOfferCard, {
      title: "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0430",
      subtitle: "\u0412\u0430\u0448\u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u044B \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
      price: "\u043E\u0442 2 570 $",
      ctaLabel: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F",
      onNav: onNav
    }, /*#__PURE__*/React.createElement("p", null, "\u0412 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0434\u0435\u0441\u044F\u0442\u043A\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0432\u043E\u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u044B. \u0412\u0430\u0448\u0438 \u0447\u0430\u0441\u0442\u043E \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0431\u0435\u0437 \u0437\u0430\u0449\u0438\u0442\u044B."), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 18,
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("li", null, "\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F \u0440\u0430\u0431\u043E\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438"), /*#__PURE__*/React.createElement("li", null, "\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u043C\u0435\u0442 \u0438 \u043E\u0431\u044A\u0451\u043C\u043E\u0432"), /*#__PURE__*/React.createElement("li", null, "\u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0446\u0438\u044F \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u043E\u0432 \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432"), /*#__PURE__*/React.createElement("li", null, "\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0441\u0440\u043E\u043A\u043E\u0432 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430"), /*#__PURE__*/React.createElement("li", null, "\u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043D\u0435\u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432")), /*#__PURE__*/React.createElement("p", null, "\u041E\u0431\u044A\u0451\u043C \u0443\u0447\u0430\u0441\u0442\u0438\u044F \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E, \u043F\u043E\u0441\u043B\u0435 \u0437\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u0430 \u0441 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C.")))));
  }
  window.Owners = Owners;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Owners.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Parts.jsx
try { (() => {
/* global React */
(function () {
  const {
    Eyebrow
  } = window.KorolyovaDesignSystem_d31d2b;
  function NumberTag({
    n,
    onDark
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 1,
        background: onDark ? "var(--border-on-ink)" : "var(--sand-300)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 17,
        letterSpacing: "0.05em",
        color: onDark ? "var(--brass-400)" : "var(--brass-600)"
      }
    }, n));
  }
  function SectionHead({
    n,
    label,
    heading,
    intro,
    onDark,
    max = "24ch",
    align = "left"
  }) {
    const ink = onDark ? "var(--cream-50)" : "var(--ink-900)";
    const sec = onDark ? "rgba(247,242,233,0.72)" : "var(--stone-500)";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: align,
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start"
      }
    }, n && /*#__PURE__*/React.createElement(NumberTag, {
      n: n,
      onDark: onDark
    }), label && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: onDark
    }, label)), heading && /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "clamp(2.1rem, 3.8vw, 3.4rem)",
        lineHeight: 1.06,
        letterSpacing: "-0.01em",
        color: ink,
        margin: 0,
        maxWidth: max
      }
    }, heading), intro && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 17,
        lineHeight: 1.65,
        color: sec,
        margin: "24px 0 0",
        maxWidth: "62ch"
      }
    }, intro));
  }
  function ArrowLink({
    children,
    href = "#contact",
    onNav,
    target,
    onDark
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      onClick: e => {
        if (onNav) {
          e.preventDefault();
          onNav(target || "contact");
        }
      },
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.04em",
        color: h ? "var(--brass-600)" : onDark ? "var(--cream-50)" : "var(--ink-900)",
        transition: "color var(--dur-fast) var(--ease-out)"
      }
    }, children, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        transform: h ? "translateX(4px)" : "none",
        transition: "transform var(--dur-fast) var(--ease-out)"
      }
    }, "\u2192"));
  }

  // Offer card used by Owners & Business sections
  function OfferCard({
    title,
    subtitle,
    children,
    meta,
    note,
    tiers,
    price,
    ctaLabel,
    onNav,
    featured
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("article", {
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-paper)",
        border: "1px solid var(--sand-300)",
        padding: "36px 32px 30px",
        height: "100%",
        boxShadow: h ? "var(--shadow-md)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        height: 2,
        width: h ? "100%" : "0%",
        background: "var(--brass-500)",
        transition: "width var(--dur-slow) var(--ease-out)"
      }
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 29,
        lineHeight: 1.08,
        letterSpacing: "-0.01em",
        color: "var(--ink-900)",
        margin: 0
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        lineHeight: 1.5,
        fontWeight: 500,
        color: "var(--brass-700)",
        margin: "12px 0 0"
      }
    }, subtitle), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "20px 0 0",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        flex: 1,
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "var(--stone-500)"
      }
    }, children, meta && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        lineHeight: 1.6,
        letterSpacing: "0.02em",
        color: "var(--ink-600)",
        borderTop: "1px solid var(--sand-200)",
        paddingTop: 14,
        margin: 0
      }
    }, meta), tiers && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 0,
        marginTop: 4
      }
    }, tiers.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.name,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "11px 0",
        borderBottom: "1px solid var(--sand-200)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: "var(--ink-800)"
      }
    }, t.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 20,
        color: "var(--ink-900)"
      }
    }, t.price)))), note && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        fontStyle: "italic",
        color: "var(--stone-400)",
        margin: 0
      }
    }, note)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, price && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--sand-300)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 28,
        color: "var(--ink-900)"
      }
    }, price)), /*#__PURE__*/React.createElement(ArrowLink, {
      href: "#contact",
      onNav: onNav,
      target: "contact"
    }, ctaLabel)));
  }
  Object.assign(window, {
    KFNumberTag: NumberTag,
    KFSectionHead: SectionHead,
    KFArrowLink: ArrowLink,
    KFOfferCard: OfferCard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Paths.jsx
try { (() => {
/* global React */
(function () {
  const {
    KFSectionHead,
    KFArrowLink
  } = window;
  const PATHS = [{
    label: "Для собственников",
    title: "Вы — собственник недвижимости",
    target: "owners",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
  }, {
    label: "Для предпринимателей",
    title: "Вы создаёте строительный бизнес",
    target: "business",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
  }, {
    label: "Партнёрство",
    title: "Закрытая партнёрская сеть",
    target: "network",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
  }];
  function PathCard({
    p,
    onNav
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("article", {
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      onClick: () => onNav(p.target),
      style: {
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        aspectRatio: "4 / 3",
        background: "var(--sand-200)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.img,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "saturate(0.9)",
        transform: h ? "scale(1.04)" : "scale(1)",
        transition: "transform var(--dur-slow) var(--ease-out)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 22
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--brass-600)",
        margin: 0
      }
    }, p.label), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 27,
        lineHeight: 1.12,
        letterSpacing: "-0.01em",
        color: "var(--ink-900)",
        margin: "12px 0 18px",
        maxWidth: "16ch"
      }
    }, p.title), /*#__PURE__*/React.createElement(KFArrowLink, {
      onNav: onNav,
      target: p.target
    }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438")));
  }
  function Paths({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: "puti",
      style: {
        background: "var(--cream-50)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-wide)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 60
      }
    }, /*#__PURE__*/React.createElement(KFSectionHead, {
      n: "01",
      heading: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0443\u0442\u044C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0430\u043A\u0442\u0443\u0430\u043B\u0435\u043D \u0434\u043B\u044F \u0432\u0430\u0441 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
      max: "20ch"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 40
      },
      className: "kit-paths-grid"
    }, PATHS.map(p => /*#__PURE__*/React.createElement(PathCard, {
      key: p.target,
      p: p,
      onNav: onNav
    })))));
  }
  window.Paths = Paths;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Paths.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Problem.jsx
try { (() => {
/* global React */
(function () {
  const {
    Eyebrow
  } = window.KorolyovaDesignSystem_d31d2b;
  const QUESTIONS = ["Хватит ли денег завершить проект так, как задумали?", "Как выбрать подрядчиков, которым можно доверять?", "Как контролировать качество и избежать лишних расходов?", "Как получить именно тот результат, который представляли в начале?"];
  function Problem() {
    return /*#__PURE__*/React.createElement("section", {
      id: "problem",
      style: {
        background: "var(--paper)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "0.4fr 0.6fr",
        gap: 64,
        alignItems: "start"
      },
      className: "kit-problem-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 120
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0421 \u0447\u0435\u0433\u043E \u0432\u0441\u0451 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "clamp(1.7rem, 2.8vw, 2.5rem)",
        lineHeight: 1.22,
        letterSpacing: "-0.01em",
        color: "var(--ink-900)",
        margin: 0,
        maxWidth: "26ch"
      }
    }, "\u0412\u044B \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u044B \u0437\u043D\u0430\u0442\u044C \u0432\u0441\u0451 \u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435. \u041D\u043E, \u043A\u043E\u0433\u0434\u0430 \u0440\u0435\u0447\u044C \u043E \u0432\u0430\u0448\u0435\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0435, \u0432\u0441\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0435 \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u044B."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 17,
        lineHeight: 1.65,
        color: "var(--stone-500)",
        margin: "32px 0 0"
      }
    }, "\u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u0441\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0441 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u043C\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438:"), /*#__PURE__*/React.createElement("ol", {
      style: {
        listStyle: "none",
        counterReset: "q",
        padding: 0,
        margin: "28px 0 0"
      }
    }, QUESTIONS.map((q, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: 20,
        padding: "20px 0",
        borderTop: "1px solid var(--sand-300)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 18,
        color: "var(--brass-600)",
        lineHeight: 1.4,
        flex: "none",
        width: 28
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 17,
        lineHeight: 1.5,
        color: "var(--ink-800)"
      }
    }, q)))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 1.35,
        color: "var(--ink-900)",
        margin: "40px 0 0",
        maxWidth: "30ch"
      }
    }, "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u043D \u0431\u044B\u0442\u044C \u0437\u0430\u043B\u043E\u0436\u043D\u0438\u043A\u043E\u043C \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432. \u0418 \u0432\u043E\u0442 \u0441 \u044D\u0442\u0438\u043C \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F.")))));
  }
  window.Problem = Problem;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Problem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Process.jsx
try { (() => {
/* global React */
(function () {
  const {
    KFSectionHead
  } = window;
  const STEPS = [["01", "Заполните бриф", "Опишите ситуацию и приложите материалы."], ["02", "Я изучу информацию", "При необходимости запрошу дополнительные данные."], ["03", "Проведём встречу", "Разберём вашу ситуацию и определим формат работы."], ["04", "Вы получите результат", "Рекомендации, план действий или начало сопровождения."]];
  function Process() {
    return /*#__PURE__*/React.createElement("section", {
      id: "process",
      style: {
        background: "var(--cream-50)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-wide)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 56
      }
    }, /*#__PURE__*/React.createElement(KFSectionHead, {
      n: "06",
      heading: "\u041A\u0430\u043A \u043D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443",
      max: "20ch"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 0,
        borderTop: "1px solid var(--sand-300)"
      },
      className: "kit-process-grid"
    }, STEPS.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        padding: "34px 28px 34px 0",
        borderRight: i < 3 ? "1px solid var(--sand-300)" : "none",
        paddingLeft: i === 0 ? 0 : 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 40,
        color: "var(--brass-600)",
        lineHeight: 1
      }
    }, n), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 23,
        lineHeight: 1.12,
        color: "var(--ink-900)",
        margin: "20px 0 10px"
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.55,
        color: "var(--stone-500)",
        margin: 0
      }
    }, d))))));
  }
  window.Process = Process;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Process.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
