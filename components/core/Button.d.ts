import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual weight. primary = ink fill, accent = brass, secondary = outline, ghost = underline link. */
  variant?: "primary" | "accent" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Use on dark (ink) backgrounds — adjusts secondary/ghost colors. */
  onDark?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  /** Show a trailing arrow that nudges on hover. */
  withArrow?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

/**
 * Primary call-to-action button. Squared, uppercase, wide-tracked grotesk.
 * @startingPoint section="Core" subtitle="Buttons — primary, accent, outline, ghost" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
