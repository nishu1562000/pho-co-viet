import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { Stars } from "@/components/ui/Stars";
import { TodayBadge } from "@/components/ui/TodayBadge";
import { images } from "@/content/images";
import { site } from "@/content/site";

const d = (ms: number) => ({ "--d": ms }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-charcoal text-cream">
      {/* Ember glow (decorative) */}
      <div aria-hidden className="ember absolute -bottom-48 -left-40 -z-10 size-[34rem] rounded-full bg-pomegranate/25 blur-3xl" />
      <div aria-hidden className="absolute -top-40 right-0 -z-10 size-[28rem] rounded-full bg-saffron/10 blur-3xl" />

      <div className="shell grid items-center gap-10 pt-10 pb-14 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-6">
          <p className="type-eyebrow hero-in text-saffron" style={d(0)}>
            Afghan charcoal kitchen · Moorabool St, Geelong
          </p>
          <h1 id="hero-title" className="type-display hero-in mt-5 text-balance" style={d(80)}>
            Charcoal kebabs worth the <em className="text-saffron not-italic">drive to Geelong.</em>
          </h1>
          <p className="type-lead hero-in mt-6 max-w-xl text-pretty text-cream/85" style={d(180)}>
            Juicy skewers straight off the coals, slow-cooked lamb shank and fragrant Afghan rice, served in
            generous portions. Authentic flavours, dine in or takeaway.
          </p>

          <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row" style={d(260)}>
            <ButtonLink href={site.phoneHref} icon="phone">
              Call {site.phoneDisplay}
            </ButtonLink>
            <ButtonLink href={site.links.directions} variant="outline-light" icon="map">
              Get directions
            </ButtonLink>
          </div>

          <div className="hero-in mt-8 flex flex-wrap items-center gap-3" style={d(340)}>
            <a
              href={site.links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2.5 rounded-full bg-cream/10 px-4 py-2 text-sm shadow-[inset_0_0_0_1px_var(--color-line-dark)] transition-colors hover:bg-cream/15"
            >
              <strong className="text-base font-semibold">{site.rating.value} ★</strong>
              <Stars value={site.rating.value} className="hidden text-saffron min-[400px]:inline-block" />
              <span className="text-cream/85">· {site.rating.count} Google reviews</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <TodayBadge />
          </div>
        </div>

        <div className="hero-in relative lg:col-span-6" style={d(120)}>
          {/* PLACEHOLDER IMAGE → owner's hero shot of a kebab platter */}
          <Photo
            image={images.hero}
            priority
            quality={60} // busy, detailed photo: q60 is visually identical and ~25% lighter
            sizes="(min-width: 1024px) 46vw, 100vw"
            aspect="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5]"
            className="shadow-[0_30px_60px_-30px_rgb(0_0_0/0.9)] ring-1 ring-saffron/25"
          />
          <p className="absolute bottom-4 left-4 rounded-full bg-charcoal/85 px-3.5 py-1.5 text-xs font-semibold text-cream backdrop-blur-sm">
            Dine in · Takeaway
          </p>
        </div>
      </div>
      <div aria-hidden className="tile-band" />
    </section>
  );
}
