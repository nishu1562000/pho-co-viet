/**
 * Decorative star row drawn with CSS (one text node, no SVGs): a filled layer
 * clipped to the rating over a faint base layer. The numeric rating is always
 * shown as text beside it.
 */
export function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <span aria-hidden className={`relative inline-block text-[0.95rem] leading-none tracking-[0.08em] ${className ?? ""}`}>
      <span className="opacity-25">★★★★★</span>
      <span className="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap" style={{ width: `${(value / 5) * 100}%` }}>
        ★★★★★
      </span>
    </span>
  );
}
