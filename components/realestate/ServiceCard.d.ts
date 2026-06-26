import * as React from "react";

export interface ServiceCardProps {
  /** Two-digit index, e.g. "01". */
  index: string;
  title: string;
  description: string;
  /** Optional Lucide icon name (host must call lucide.createIcons()). */
  icon?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/** Editorial service-grid entry — index, serif title, description, brass top-rule on hover. */
export function ServiceCard(props: ServiceCardProps): JSX.Element;
