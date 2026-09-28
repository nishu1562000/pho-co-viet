import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { Stars } from "@/components/ui/Stars";
import { images } from "@/content/images";
import { site } from "@/content/site";

const d = (ms: number) => ({ "--d": ms }) as React.CSSProperties;

export function Hero() {
  const google = site.ratings[0];

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-[calc(var(--header-h)+1.25rem)]">
      <div className="shell grid gap-12 pb-14 md:pb-20 lg:min-h-[calc(100svh-var(--header-h))] lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-12">
        {/* Copy */}
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="type-caption hero-fade inline-flex items-center gap-2.5 text-chili" style={d(80)}>
            <span aria-hidden className="size-1.5 rounded-full bg-current" />
            Vietnamese café · {site.address.neighborhood}, NYC
          </p>

          <h1 id="hero-title" className="type-display mt-6">
            <span className="hero-line">
              <span style={d(140)}>Crisp bread.</span>
            </span>
            <span className="hero-line">
              <span style={d(240)}>Slow broth.</span>
            </span>
            <span className="hero-line">
              <span style={d(340)}>
                Strong <span className="accent text-chili">coffee.</span>
              </span>
            </span>
          </h1>

          <p className="type-lead hero-fade mt-7 max-w-[34rem] text-phin/80" style={d(560)}>
            A family-run spot on Mulberry Street, across from Columbus Park. Banh mi, pho and
            phin-dripped Vietnamese coffee, every day from 9:30am to 8pm.
          </p>

          <div className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row" style={d(680)}>
            <ButtonLink href="/#order">Order pickup or delivery</ButtonLink>
            <ButtonLink href="/menu" variant="outline">
              See the menu
            </ButtonLink>
          </div>

          <ul
            className="hero-fade type-small mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6"
            style={d(820)}
          >
            <li>
              <a
                href={google.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2"
              >
                <Stars value={google.value} className="text-chili" />
                <span>
                  <strong className="font-semibold">{google.value}</strong> on Google{" "}
                  <span className="text-muted group-hover:underline">({google.count} reviews)</span>
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li className="text-muted">{site.hoursSummary}</li>
            <li className="text-muted">{site.address.streetShort}</li>
          </ul>
        </div>

        {/* Image composition */}
        <div className="relative lg:col-span-6 xl:col-span-5 xl:col-start-8">
          <div className="hero-float relative ml-[12%] lg:ml-[14%]" style={d(200)}>
            <Photo
              image={images.banhMi}
              preload
              sizes="(min-width: 1024px) 40vw, 88vw"
              aspect="aspect-[4/5]"
            />
          </div>

          <div
            className="hero-float absolute bottom-[-6%] left-0 w-[40%] rounded-card bg-rice p-1.5 sm:p-2"
            style={d(420)}
          >
            <Photo image={images.phin} sizes="(min-width: 1024px) 16vw, 36vw" aspect="aspect-[3/4]" />
          </div>

          <p
            className="hero-float absolute top-[7%] left-[1%] flex size-24 -rotate-6 items-center justify-center rounded-full bg-herb p-3 text-center text-[0.72rem] leading-tight font-semibold tracking-wide text-rice uppercase sm:size-28 sm:text-[0.8rem]"
            style={d(560)}
          >
            Across from Columbus Park
          </p>
        </div>
      </div>
    </section>
  );
}
