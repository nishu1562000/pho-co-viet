import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/** Text logo with an eight-point star mark. Swap for the owner's logo file if they have one. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg aria-hidden viewBox="0 0 32 32" className="size-8 shrink-0">
        <g fill="#b3232f">
          <rect x="7" y="7" width="18" height="18" rx="1.5" />
          <rect x="7" y="7" width="18" height="18" rx="1.5" transform="rotate(45 16 16)" />
        </g>
        <circle cx="16" cy="16" r="5" fill="none" stroke="#e6a93a" strokeWidth="1.8" />
        <circle cx="16" cy="16" r="1.8" fill="#e6a93a" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.1rem] leading-tight font-medium sm:text-[1.3rem]">{site.name}</span>
        <span
          className={cn(
            "mt-0.5 text-[0.62rem] font-semibold tracking-[0.18em] uppercase",
            tone === "dark" ? "text-saffron" : "text-pomegranate-deep",
          )}
        >
          {site.tagline}
        </span>
      </span>
    </span>
  );
}
