import { ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/content/images";
import { site } from "@/content/site";

export function Order() {
  return (
    <section id="order" aria-labelledby="order-title" className="relative isolate overflow-hidden bg-chili text-white">
      <div className="shell grid gap-12 py-(--section) lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-6">
          <p className="type-caption flex items-center gap-2.5 text-white/85">
            <span aria-hidden className="size-1.5 rounded-full bg-current" />
            Pickup &amp; delivery
          </p>
          <h2 id="order-title" className="type-display mt-5" data-reveal>
            Hungry? <span className="accent">Order ahead.</span>
          </h2>
          <p className="type-lead mt-6 max-w-md text-white/90" data-reveal>
            Order through your usual delivery app, or call ahead for pickup.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2" data-reveal>
            {site.ordering.map((o) => (
              <li key={o.name}>
                <a
                  href={o.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-15 items-center justify-between rounded-card bg-white/10 px-5 text-lg font-semibold shadow-[inset_0_0_0_1px_rgb(255_255_255/0.28)] transition-colors hover:bg-white hover:text-chili"
                >
                  {o.name}
                  <ArrowUpRight aria-hidden className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8" data-reveal>
            <ButtonLink href={site.phoneHref} variant="rice">
              Call {site.phoneDisplay}
            </ButtonLink>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:col-start-8">
          <Photo image={images.pho} sizes="(min-width: 1024px) 40vw, 100vw" aspect="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]" />
        </div>
      </div>
    </section>
  );
}
