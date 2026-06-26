import * as React from "react";

export interface PropertyCardProps {
  /** Image URL (cover). */
  image: string;
  /** Uppercase location eyebrow, e.g. "München · Bogenhausen". */
  location?: string;
  title: string;
  /** Formatted price string, e.g. "€ 4.250.000". */
  price: string;
  /** Short spec strings, e.g. ["5 Zimmer", "240 m²", "Garten"]. */
  specs?: string[];
  /** Optional ink badge, e.g. "Exklusiv", "Verkauft". */
  status?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * Real-estate listing card — cover image, location, title, specs, brass price; lifts on hover.
 * @startingPoint section="Real estate" subtitle="Property listing card" viewport="420x520"
 */
export function PropertyCard(props: PropertyCardProps): JSX.Element;
