import * as React from "react";

export interface StatBlockProps {
  /** Headline figure, e.g. "€ 1,2 Mrd." or "7,4 %". */
  value: string;
  /** Uppercase brass label. */
  label: string;
  /** Optional supporting sentence. */
  caption?: string;
  onDark?: boolean;
  align?: "left" | "center";
  style?: React.CSSProperties;
}

/** Large serif statistic with brass label — proof points, market figures, track record. */
export function StatBlock(props: StatBlockProps): JSX.Element;
