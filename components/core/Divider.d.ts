import * as React from "react";

export interface DividerProps {
  /** Center a small brass diamond — for chapter / section breaks. */
  ornament?: boolean;
  onDark?: boolean;
  style?: React.CSSProperties;
}

/** Hairline rule; optional brass-diamond ornament for editorial section breaks. */
export function Divider(props: DividerProps): JSX.Element;
