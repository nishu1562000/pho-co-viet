import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

/**
 * Verified reviews only. Renders nothing until `site.reviews` has entries, so
 * the page never shows invented social proof.
 */
export function Testimonials() {
  if (site.reviews.length === 0) return null;

  return (
    <section aria-labelledby="reviews-title" className="section-y border-t border-line">
      <div className="shell">
        <Eyebrow>Guests</Eyebrow>
        <h2 id="reviews-title" className="sr-only">
          Reviews
        </h2>
        <ul className="mt-12 grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {site.reviews.map((r) => (
            <li key={r.quote} data-reveal>
              <figure>
                <blockquote className="type-h3 text-pretty">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="type-caption mt-6 text-muted">
                  {r.author} &middot;{" "}
                  {r.url ? (
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="link-underline">
                      {r.source}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    r.source
                  )}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
