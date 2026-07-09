/**
 * The brand mark: an asymmetric "V" whose right arm continues into an
 * upward arrowhead. Same geometry as VertmaxLogoMark.swift (the in-app
 * mark and iOS app icon) so the web mark matches exactly — coordinates
 * and stroke width are ported 1:1 from the SwiftUI shape, scaled from a
 * 1024x1024 viewBox.
 */
export function Logo({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 250 290 L 480 760 L 740 260"
        stroke={color}
        strokeWidth="88"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
      />
      <path
        d="M 786.14 171.28 L 816.66 361.85 L 612.60 255.74 Z"
        fill={color}
      />
    </svg>
  );
}
