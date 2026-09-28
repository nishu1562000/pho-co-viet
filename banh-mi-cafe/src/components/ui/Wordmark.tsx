import { cn } from "@/lib/cn";

/** Typographic logo. Swap for the café's logo file when one exists. */
export function Wordmark({
  className,
  sub = true,
  tone = "rice",
}: {
  className?: string;
  sub?: boolean;
  /** Background it sits on: controls the accent colour for contrast. */
  tone?: "rice" | "phin";
}) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className="font-display text-[1.45em] font-semibold tracking-[-0.03em]">
        Banh Mi{" "}
        <span className={cn("accent font-medium", tone === "rice" ? "text-chili" : "text-chili-light")}>Cafe</span>
      </span>
      {sub && (
        <span className="mt-1 text-[0.62em] font-semibold tracking-[0.2em] uppercase opacity-70">
          Chinatown · NYC
        </span>
      )}
    </span>
  );
}
