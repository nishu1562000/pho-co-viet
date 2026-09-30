import { Flame, HandPlatter, Leaf, Moon } from "lucide-react";

import { site } from "@/content/site";

const icons = [Flame, HandPlatter, Leaf, Moon];

/** What guests consistently mention in Google reviews, paraphrased as short selling points. */
export function PraiseStrip() {
  return (
    <section aria-labelledby="praise-title" className="border-b border-line bg-cream">
      <div className="shell py-12 md:py-16">
        <h2 id="praise-title" className="type-h3 text-center text-balance">
          What guests mention most
        </h2>
        <p className="type-small mt-2 text-center text-muted">Themes from {site.rating.count} Google reviews</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {site.praise.map((p, i) => {
            const Icon = icons[i];
            return (
              <li
                key={p.title}
                className="rounded-card bg-cream-2 p-6 ring-1 ring-line"
                data-reveal
                style={{ "--reveal-delay": i * 80 } as React.CSSProperties}
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-charcoal text-saffron">
                  <Icon aria-hidden className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="type-small mt-1.5 text-muted">{p.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
