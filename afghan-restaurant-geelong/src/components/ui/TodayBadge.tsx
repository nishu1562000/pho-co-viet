"use client";

import { Clock } from "lucide-react";

import { site } from "@/content/site";
import { useToday } from "@/lib/hours";
import { cn } from "@/lib/cn";

/** "Open 7 days · 4pm–10pm · Open now" pill. The live status appears after hydration. */
export function TodayBadge({ className }: { className?: string }) {
  const today = useToday();

  return (
    <p
      className={cn(
        "inline-flex min-h-10 items-center gap-2.5 rounded-full bg-cream/10 px-4 py-2 text-sm text-cream shadow-[inset_0_0_0_1px_var(--color-line-dark)]",
        className,
      )}
      aria-live="polite"
    >
      <Clock aria-hidden className="size-4 shrink-0 text-saffron" />
      <span>
        {site.hoursSummary}
        {today?.isOpen && <span className="font-semibold text-saffron"> · Open now</span>}
      </span>
    </p>
  );
}
