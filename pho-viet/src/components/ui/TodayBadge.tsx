"use client";

import { Clock } from "lucide-react";

import { useToday } from "@/lib/hours";
import { cn } from "@/lib/cn";

/** "Today 11am – 9pm · Open now" pill. Shows the weekly summary until hydrated. */
export function TodayBadge({ className }: { className?: string }) {
  const today = useToday();

  return (
    <p
      className={cn(
        "inline-flex min-h-10 items-center gap-2.5 rounded-full bg-cream/90 px-4 py-2 text-sm font-medium text-wood shadow-[inset_0_0_0_1px_var(--color-line)]",
        className,
      )}
      aria-live="polite"
    >
      {today ? (
        <>
          <span
            aria-hidden
            className={cn("size-2 rounded-full", today.isOpen ? "bg-[#2e7d4f]" : "bg-muted")}
          />
          <span>
            <span className="font-semibold">Today:</span> {today.hoursLabel}
            <span className="text-muted"> · {today.status}</span>
          </span>
        </>
      ) : (
        <>
          <Clock aria-hidden className="size-4 text-red" />
          <span>Tue–Sat 11am–9pm · Sun 11am–3pm</span>
        </>
      )}
    </p>
  );
}
