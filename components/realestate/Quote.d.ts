import * as React from "react";

export interface QuoteProps {
  children: React.ReactNode;
  author?: string;
  role?: string;
  onDark?: boolean;
  style?: React.CSSProperties;
}

/** Large serif pull-quote with a brass quotation mark and attribution — testimonials, manifesto lines. */
export function Quote(props: QuoteProps): JSX.Element;
