/**
 * The app's signature background motif, ported from TrajectoryArc.swift: a
 * single rising quad-curve arc, echoing the logo mark's jump trajectory.
 * `liftoff` (0...1) is where along the height the curve starts from the
 * bottom — matches the Swift shape's parameter exactly.
 */
export function TrajectoryArc({
  className,
  liftoff = 0,
  strokeWidth = 0.6,
}: {
  className?: string;
  liftoff?: number;
  strokeWidth?: number;
}) {
  const startY = 100 - 100 * liftoff;
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={`M 0 ${startY} Q 62 100 100 0`}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
