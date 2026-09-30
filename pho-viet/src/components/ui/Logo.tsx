import { cn } from "@/lib/cn";

/** Text logo with a small lantern mark. Swap for the owner's logo file if they have one. */
export function Logo({ tone = "cream", className }: { tone?: "cream" | "wood"; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg aria-hidden viewBox="0 0 32 40" className="h-9 w-auto">
        <rect x="11" y="0" width="10" height="4" rx="1" fill={tone === "cream" ? "#3b2418" : "#e0a43a"} />
        <ellipse cx="16" cy="19" rx="14" ry="15" fill="#a11d21" />
        <ellipse cx="16" cy="19" rx="6" ry="15" fill="none" stroke="#000" strokeOpacity="0.18" strokeWidth="1.2" />
        <rect x="11" y="33" width="10" height="4" rx="1" fill={tone === "cream" ? "#3b2418" : "#e0a43a"} />
        <path d="M16 37 v3" stroke="#e0a43a" strokeWidth="2" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.6rem] leading-none">Pho Viet</span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-semibold tracking-[0.18em] uppercase",
            tone === "cream" ? "text-muted" : "text-muted-dark",
          )}
        >
          Vietnamese Restaurant
        </span>
      </span>
    </span>
  );
}
