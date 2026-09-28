import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/content/images";
import { site } from "@/content/site";

const facts = [
  { label: "Open for", value: "Lunch & dinner" },
  { label: "Service", value: "Dine-in & takeout" },
  { label: "Between", value: "Church St & Broadway" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative pt-[calc(var(--header-h)+1.5rem)] lg:pt-(--header-h)">
      <div className="shell grid gap-10 pb-12 md:pb-16 lg:min-h-[calc(100svh-var(--header-h))] lg:grid-cols-12 lg:gap-8 lg:pb-8">
        <div className="flex flex-col lg:col-span-7 lg:justify-between lg:py-10">
          <p className="type-caption hero-fade flex items-center gap-3 text-muted" style={{ "--d": 100 } as React.CSSProperties}>
            <span className="text-brick">{site.address.neighborhood}</span>
            <span aria-hidden className="h-px w-8 bg-current opacity-50" />
            <span>{site.address.street}</span>
          </p>

          <div className="mt-8 lg:mt-0">
            <h1 id="hero-title" className="type-display">
              <span className="hero-line">
                <span style={{ "--d": 150 } as React.CSSProperties}>New England</span>
              </span>
              <span className="hero-line">
                <span style={{ "--d": 260 } as React.CSSProperties}>cooking, in</span>
              </span>
              <span className="hero-line">
                <span style={{ "--d": 370 } as React.CSSProperties} className="text-brick italic">
                  Tribeca.
                </span>
              </span>
            </h1>

            <div className="hero-fade mt-8 max-w-md md:mt-10" style={{ "--d": 650 } as React.CSSProperties}>
              <p className="type-lead text-ink/85">
                Lunch, dinner and takeout from a New England kitchen on Reade Street, a block from
                City Hall Park.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/#visit">Plan your visit</ButtonLink>
                <ButtonLink href="/menu" variant="outline">
                  See the menu
                </ButtonLink>
              </div>
            </div>
          </div>

          <dl
            className="hero-fade mt-12 grid grid-cols-3 border-t border-line pt-5 lg:mt-0"
            style={{ "--d": 850 } as React.CSSProperties}
          >
            {facts.map((f) => (
              <div key={f.label} className="pr-3">
                <dt className="type-caption text-muted">{f.label}</dt>
                <dd className="type-small mt-1.5 leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="-mx-(--gutter) sm:mx-0 lg:col-span-5 lg:py-6">
          <Photo
            image={images.hero}
            preload
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="hero-media aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[36rem]"
          />
        </div>
      </div>
    </section>
  );
}
