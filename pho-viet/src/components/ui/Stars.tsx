/** Decorative CSS star row; the numeric rating is always shown as text beside it. */
export function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <span aria-hidden className={`relative inline-block leading-none tracking-[0.06em] ${className ?? ""}`}>
      <span className="opacity-30">★★★★★</span>
      <span className="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap" style={{ width: `${(value / 5) * 100}%` }}>
        ★★★★★
      </span>
    </span>
  );
}
