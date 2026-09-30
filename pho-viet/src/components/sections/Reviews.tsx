import { Quote } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { site } from "@/content/site";

/**
 * PLACEHOLDERS: replace each card with a real Google review (quote + first
 * name + last initial), with the reviewer's words unchanged. The themes below
 * are what customers mention most, to guide which reviews to pick.
 */
const placeholders = [
  { theme: "the pho broth" },
  { theme: "the vermicelli bowls" },
  { theme: "the fast, friendly service" },
];

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="section-y">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading id="reviews-title" eyebrow="Reviews" className="lg:col-span-7">
            Loved by Wichita Falls
          </SectionHeading>

          <div className="flex flex-wrap items-center gap-5 lg:col-span-5 lg:justify-end" data-reveal>
            <div>
              <p className="flex items-center gap-3">
                <span className="font-serif text-5xl leading-none">{site.rating.value}</span>
                <Stars value={site.rating.value} className="text-2xl text-red" />
              </p>
              <p className="type-small mt-2 text-muted">
                from {site.rating.count} Google reviews
              </p>
            </div>
            <ButtonLink href={site.links.maps} variant="outline" size="sm">
              Read them on Google
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {placeholders.map((p, i) => (
            <li
              key={p.theme}
              className="relative flex flex-col rounded-card border-2 border-dashed border-cream-3 bg-white/50 p-7"
              data-reveal
              style={{ "--reveal-delay": i * 100 } as React.CSSProperties}
            >
              <span className="absolute -top-3 left-6 rounded-full bg-red px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-white uppercase">
                Replace with real Google review
              </span>
              <Quote aria-hidden className="size-8 text-red/30" />
              <p className="mt-4 flex-1 text-lg text-muted italic">
                A real 5-star Google review about {p.theme} goes here, word for word.
              </p>
              <p className="type-small mt-6 border-t border-line pt-4 font-semibold text-muted">
                Reviewer name · Google
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
