import { cn } from "@/lib/cn";

/** Decorative Vietnamese paper lantern (inline SVG, ~1KB). Sways gently unless reduced motion is on. */
export function Lantern({
  className,
  color = "var(--color-red)",
  delay = 0,
  string = 40,
}: {
  className?: string;
  color?: string;
  delay?: number;
  /** Length of the hanging cord in viewBox units. */
  string?: number;
}) {
  const h = 120 + string;
  return (
    <svg
      aria-hidden
      viewBox={`0 0 80 ${h}`}
      className={cn("lantern-sway pointer-events-none", className)}
      style={{ "--d": delay } as React.CSSProperties}
    >
      <line x1="40" y1="0" x2="40" y2={string} stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
      <g transform={`translate(0 ${string})`}>
        <rect x="28" y="0" width="24" height="8" rx="2" fill="#3b2418" />
        <ellipse cx="40" cy="44" rx="34" ry="38" fill={color} />
        {/* ribs */}
        <g fill="none" stroke="#000" strokeOpacity="0.14" strokeWidth="1.5">
          <ellipse cx="40" cy="44" rx="22" ry="38" />
          <ellipse cx="40" cy="44" rx="9" ry="38" />
        </g>
        {/* glow */}
        <ellipse cx="32" cy="36" rx="12" ry="16" fill="#fff" fillOpacity="0.14" />
        <rect x="28" y="80" width="24" height="7" rx="2" fill="#3b2418" />
        {/* tassel */}
        <path d="M40 87 v8 M36 95 h8 l-1 22 h-6 z" fill="#e0a43a" stroke="#e0a43a" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
