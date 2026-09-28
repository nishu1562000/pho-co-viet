import { site } from "@/content/site";
import { cn } from "@/lib/cn";

function to12h(time: string) {
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")}${suffix}` : `${hour}${suffix}`;
}

/**
 * Opening hours. Consecutive days with identical hours collapse into one row
 * ("Mon – Sun"), so the same component works if weekend hours change.
 */
export function Hours({ className, tone = "rice" }: { className?: string; tone?: "rice" | "phin" }) {
  const groups: { from: string; to: string; value: string }[] = [];
  for (const d of site.hours) {
    const value = d.opens && d.closes ? `${to12h(d.opens)} – ${to12h(d.closes)}` : "Closed";
    const last = groups[groups.length - 1];
    if (last && last.value === value) last.to = d.day;
    else groups.push({ from: d.day, to: d.day, value });
  }

  return (
    <dl className={cn("grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5", className)}>
      {groups.map((g) => (
        <div key={g.from} className="contents">
          <dt className={tone === "rice" ? "text-muted" : "text-muted-dark"}>
            {g.from === "Monday" && g.to === "Sunday"
              ? "Every day"
              : g.from === g.to
                ? g.from.slice(0, 3)
                : `${g.from.slice(0, 3)} – ${g.to.slice(0, 3)}`}
          </dt>
          <dd className="tabular-nums">{g.value}</dd>
        </div>
      ))}
    </dl>
  );
}
