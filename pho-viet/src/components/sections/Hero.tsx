import { ButtonLink } from "@/components/ui/ButtonLink";
import { Lantern } from "@/components/ui/Lantern";
import { Photo } from "@/components/ui/Photo";
import { Stars } from "@/components/ui/Stars";
import { TodayBadge } from "@/components/ui/TodayBadge";
import { images } from "@/content/images";
import { site } from "@/content/site";

const d = (ms: number) => ({ "--d": ms }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-wood text-cream">
      {/* Hanging lanterns (decorative) */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10">
        <Lantern className="absolute top-0 left-[4%] hidden w-14 text-cream lg:block" string={60} delay={0} />
        <Lantern className="absolute top-0 left-[46%] hidden w-10 text-cream lg:block" color="#c0392b" string={20} delay={900} />
        <Lantern className="absolute top-0 right-[3%] w-10 text-cream sm:w-12 lg:right-[44%]" color="#e0a43a" string={90} delay={400} />
      </div>
      {/* Warm glow */}
      <div aria-hidden className="absolute -top-40 -left-40 -z-20 size-[36rem] rounded-full bg-red/25 blur-3xl" />

      <div className="shell grid items-center gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-6">
          <p className="type-eyebrow hero-in text-gold" style={d(0)}>
            Family-run Vietnamese kitchen · Wichita Falls, TX
          </p>
          <h1 id="hero-title" className="type-display hero-in mt-5 text-balance" style={d(80)}>
            The bowl North Texas <em className="text-red-light">comes back for.</em>
          </h1>
          <p className="type-lead hero-in mt-6 max-w-xl text-cream/85" style={d(180)}>
            Rich pho broth, rice vermicelli bowls and rice plates, served fast by a
            kind family-run team. Dine in or take out on Call Field Rd.
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
              <strong className="text-base font-semibold">{site.rating.value}</strong>
              <Stars value={site.rating.value} className="text-gold" />
              <span className="text-cream/80">· {site.rating.count} Google reviews</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <TodayBadge />
          </div>
        </div>

        <div className="hero-in relative lg:col-span-6" style={d(120)}>
          {/* PLACEHOLDER IMAGE → owner's hero shot of a bowl of pho */}
          <Photo
            image={images.hero}
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            aspect="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5]"
            className="shadow-[0_30px_60px_-30px_rgb(0_0_0/0.7)]"
          />
          <p className="absolute bottom-4 left-4 rounded-full bg-wood/80 px-3.5 py-1.5 text-xs font-medium text-cream backdrop-blur-sm">
            Dine in · Take out
          </p>
        </div>
      </div>
    </section>
  );
}
