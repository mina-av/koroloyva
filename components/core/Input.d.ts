import * as React from "react";

export interface InputProps {
  /** Uppercase floating label above the field. */
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  /** Tune colors for ink backgrounds. */
  onDark?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
}

/** Underlined text input (no box) with an uppercase label — editorial, expensive feel. */
export function Input(props: InputProps): JSX.Element;
