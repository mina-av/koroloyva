import * as React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  /** neutral = sand, accent = champagne/brass, ink = solid dark, outline = hairline. */
  tone?: "neutral" | "accent" | "ink" | "outline";
  style?: React.CSSProperties;
}

/** Small squared status/category label — quiet by default. */
export function Badge(props: BadgeProps): JSX.Element;
