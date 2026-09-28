import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { site } from "@/content/site";

/** Verified public reviews and ratings only. Hidden if there are none. */
export function Reviews() {
  if (site.reviews.length === 0) return null;
  const [feature, ...rest] = site.reviews;

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="section-y">
      <div className="shell">
        <SectionHeading
          id="reviews-title"
          kicker="Reviews"
          aside={
            <ul className="grid grid-cols-2 gap-3 sm:flex" data-reveal>
              {site.ratings.map((r) => (
                <li key={r.source}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-card border border-line px-4 py-4 transition-colors hover:border-phin sm:px-5"
                  >
                    <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="font-display text-3xl leading-none font-semibold">{r.value}</span>
                      <Stars value={r.value} className="text-chili" />
                    </span>
                    <span className="type-small mt-2 inline-flex flex-wrap items-center gap-1 text-muted">
                      {r.count} {r.source} reviews
                      <ArrowUpRight aria-hidden className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          }
        >
          What the neighborhood <span className="accent text-chili">says.</span>
        </SectionHeading>

        <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-12 lg:gap-8">
          <figure className="flex flex-col justify-between rounded-card bg-phin p-8 text-rice sm:p-12 lg:col-span-7" data-reveal>
            <blockquote className="type-h2 text-pretty">
              <span aria-hidden className="text-chili-light">&ldquo;</span>
              {feature.quote}
              <span aria-hidden className="text-chili-light">&rdquo;</span>
            </blockquote>
            <figcaption className="type-caption mt-10 text-muted-dark">
              {"author" in feature && feature.author ? `${feature.author} · ` : ""}
              {feature.source} review
            </figcaption>
          </figure>

          <ul className="grid gap-6 lg:col-span-5">
            {rest.map((r, i) => (
              <li
                key={r.quote}
                className="rounded-card border border-line p-7 sm:p-8"
                data-reveal
                style={{ "--reveal-delay": (i + 1) * 90 } as React.CSSProperties}
              >
                <figure>
                  <blockquote className="type-lead text-pretty">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="type-caption mt-5 text-muted">
                    {"author" in r && r.author ? `${r.author} · ` : ""}
                    {r.source} review
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <p className="type-small mt-8 text-muted">
          Ratings as of {site.ratingsAsOf}. Quotes are excerpts from public reviews.
        </p>
      </div>
    </section>
  );
}
