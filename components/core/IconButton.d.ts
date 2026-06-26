import * as React from "react";

export interface IconButtonProps {
  /** Lucide icon name, e.g. "arrow-right", "phone", "menu". */
  icon: string;
  /** Accessible label (aria-label + tooltip). */
  label: string;
  variant?: "outline" | "solid" | "ghost";
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/** Squared icon-only control rendering a Lucide glyph. Host must call lucide.createIcons() after render. */
export function IconButton(props: IconButtonProps): JSX.Element;
