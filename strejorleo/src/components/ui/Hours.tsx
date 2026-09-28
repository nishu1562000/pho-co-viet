import { site } from "@/content/site";
import { cn } from "@/lib/cn";

function to12h(time: string) {
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")}${suffix}` : `${hour}${suffix}`;
}

/**
 * Opening hours from site.ts. Until the client confirms hours, this shows the
 * verified service periods and points to the live Google listing instead of
 * guessing.
 */
export function Hours({ tone = "paper", className }: { tone?: "paper" | "ink"; className?: string }) {
  const muted = tone === "paper" ? "text-muted" : "text-muted-dark";

  if (!site.hours) {
    return (
      <div className={className}>
        <p>Lunch &amp; dinner</p>
        <p className={cn("type-small mt-1", muted)}>
          Dine-in and takeout.{" "}
          <a
            href={site.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            See today&rsquo;s hours on Google<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>
    );
  }

  return (
    <dl className={cn("grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5", className)}>
      {site.hours.map((d) => (
        <div key={d.day} className="contents">
          <dt className={muted}>{d.day.slice(0, 3)}</dt>
          <dd className="tabular-nums">
            {d.opens && d.closes ? `${to12h(d.opens)} – ${to12h(d.closes)}` : "Closed"}
          </dd>
        </div>
      ))}
    </dl>
  );
}
