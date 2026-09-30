import { Flame, HeartHandshake, Sparkles, Timer } from "lucide-react";

import { site } from "@/content/site";

const icons = [Timer, Sparkles, HeartHandshake, Flame];

/** What guests consistently mention in Google reviews, as short selling points. */
export function PraiseStrip() {
  return (
    <section aria-labelledby="praise-title" className="border-b border-line bg-cream-2">
      <div className="shell py-10 md:py-12">
        <h2 id="praise-title" className="type-eyebrow text-center text-red">
          What guests mention most in their reviews
        </h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {site.praise.map((p, i) => {
            const Icon = icons[i];
            return (
              <li key={p.title} className="flex gap-4" data-reveal style={{ "--reveal-delay": i * 80 } as React.CSSProperties}>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-red text-white">
                  <Icon aria-hidden className="size-5" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="type-small mt-1 text-muted">{p.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
