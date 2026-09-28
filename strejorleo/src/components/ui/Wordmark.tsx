import { cn } from "@/lib/cn";

/** Typographic logo. Swap for the client's logo file when one exists. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display leading-none tracking-[0.16em] uppercase [font-feature-settings:'kern']",
        className,
      )}
    >
      Strejorleo
    </span>
  );
}
