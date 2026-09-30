"use client";

import { useSyncExternalStore } from "react";

import { formatTime, site, weeklyHours } from "@/content/site";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Current weekday (0 = Sunday) and minutes since midnight in the restaurant's time zone. */
function restaurantNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return { day: WEEKDAYS.indexOf(get("weekday")), minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

// Minute-level snapshot string: stable between renders, changes once a minute.
function getSnapshot() {
  const { day, minutes } = restaurantNow();
  return `${day}:${minutes}`;
}

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}

const toMinutes = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

export type TodayStatus = {
  day: number;
  hoursLabel: string; // "11am – 9pm" or "Closed"
  status: string; // "Open now · until 9pm", "Opens at 11am", "Closed today · opens Tue 11am"
  isOpen: boolean;
};

/**
 * Today's hours and open/closed status in Wichita Falls time.
 * Returns null during server render / first paint so the static HTML never
 * shows a stale day; the client fills it in immediately after hydration.
 */
export function useToday(): TodayStatus | null {
  const snap = useSyncExternalStore(subscribe, getSnapshot, () => "");
  if (!snap) return null;

  const [day, minutes] = snap.split(":").map(Number);
  const today = weeklyHours[day];

  const nextOpening = () => {
    for (let i = 1; i <= 7; i++) {
      const d = weeklyHours[(day + i) % 7];
      if (d.open) return `${i === 1 ? "tomorrow" : d.day.slice(0, 3)} ${formatTime(d.open)}`;
    }
    return "";
  };

  if (!today.open || !today.close) {
    return { day, hoursLabel: "Closed", status: `Closed today · opens ${nextOpening()}`, isOpen: false };
  }

  const open = toMinutes(today.open);
  const close = toMinutes(today.close);
  const hoursLabel = `${formatTime(today.open)} – ${formatTime(today.close)}`;

  if (minutes < open) return { day, hoursLabel, status: `Opens today at ${formatTime(today.open)}`, isOpen: false };
  if (minutes < close) return { day, hoursLabel, status: `Open now · until ${formatTime(today.close)}`, isOpen: true };
  return { day, hoursLabel, status: `Closed now · opens ${nextOpening()}`, isOpen: false };
}
