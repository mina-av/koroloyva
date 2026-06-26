import * as React from "react";

export interface EyebrowProps {
  children: React.ReactNode;
  /** Show the short leading rule before the label. Default true. */
  rule?: boolean;
  /** Brass tuned for dark backgrounds. */
  onDark?: boolean;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

/** Small uppercase section label with a leading rule — sets editorial rhythm above headlines. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
