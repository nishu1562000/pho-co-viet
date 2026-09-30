"use client";

import { formatTime, weeklyHours } from "@/content/site";
import { useToday } from "@/lib/hours";
import { cn } from "@/lib/cn";

// Display Monday-first, the way people read a week.
const ORDER = [1, 2, 3, 4, 5, 6, 0];

/** Weekly hours with today's row highlighted (Geelong time). */
export function HoursTable() {
  const today = useToday();

  return (
    <table className="w-full border-collapse text-[0.95rem]">
      <caption className="sr-only">Opening hours</caption>
      <tbody>
        {ORDER.map((i) => {
          const d = weeklyHours[i];
          const isToday = today?.day === i;
          return (
            <tr
              key={d.day}
              aria-current={isToday ? "date" : undefined}
              className={cn("border-b border-line transition-colors last:border-0", isToday && "bg-pomegranate text-white")}
            >
              <th scope="row" className={cn("py-3 pl-4 text-left font-semibold", isToday && "rounded-l-lg")}>
                {d.day}
                {isToday && (
                  <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-[0.7rem] font-semibold tracking-wide uppercase">
                    Today
                  </span>
                )}
              </th>
              <td className={cn("py-3 pr-4 text-right tabular-nums", isToday && "rounded-r-lg", !d.open && !isToday && "text-muted")}>
                {d.open && d.close ? `${formatTime(d.open)} – ${formatTime(d.close)}` : "Closed"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
