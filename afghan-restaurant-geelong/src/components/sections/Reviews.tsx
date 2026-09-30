import { Quote } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { site } from "@/content/site";

/**
 * PLACEHOLDERS: replace each card with a real Google review (quote + first
 * name + last initial), with the reviewer's words unchanged. Never write or
 * paraphrase review text here. The themes guide which reviews to pick.
 */
const placeholders = [{ theme: "the chicken skewers" }, { theme: "the lamb shank" }, { theme: "the generous portions" }];

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="section-y">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading id="reviews-title" eyebrow="Reviews" className="lg:col-span-6">
            Loved in Geelong
          </SectionHeading>

          <div className="flex flex-wrap items-center gap-6 lg:col-span-6 lg:justify-end" data-reveal>
            <div>
              <p className="flex items-center gap-3">
                <span className="font-serif text-6xl leading-none">{site.rating.value} ★</span>
              </p>
              <p className="mt-2 flex items-center gap-2 text-muted">
                <Stars value={site.rating.value} className="text-lg text-pomegranate" />
                <span className="type-small">from {site.rating.count} Google reviews</span>
              </p>
            </div>
            <ButtonLink href={site.links.maps} variant="outline" size="sm">
              Read them on Google
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {placeholders.map((p, i) => (
            <li
              key={p.theme}
              className="relative flex flex-col rounded-card border-2 border-dashed border-cream-3 bg-cream-2/60 p-7 pt-9"
              data-reveal
              style={{ "--reveal-delay": i * 100 } as React.CSSProperties}
            >
              <span className="absolute -top-3 left-6 rounded-full bg-pomegranate px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-white uppercase">
                Replace with real Google review
              </span>
              <Quote aria-hidden className="size-8 text-pomegranate/30" />
              <p className="mt-4 flex-1 text-lg text-muted italic">
                A real Google review about {p.theme} goes here, word for word.
              </p>
              <p className="type-small mt-6 border-t border-line pt-4 font-semibold text-muted">Reviewer name · Google</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
