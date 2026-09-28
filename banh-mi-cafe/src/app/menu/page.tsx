import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/content/images";
import { menu } from "@/content/menu";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Menu",
  description: `Banh mi, pho, noodle soups, vermicelli bowls, summer rolls, Vietnamese coffee and matcha at ${site.name}, 46 Mulberry St, Chinatown NYC.`,
  alternates: { canonical: "/menu" },
  openGraph: { url: "/menu" },
};

const d = (ms: number) => ({ "--d": ms }) as React.CSSProperties;

export default function MenuPage() {
  return (
    <>
      <section className="pt-[calc(var(--header-h)+2.5rem)] pb-12 md:pt-[calc(var(--header-h)+4rem)] md:pb-16">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="type-caption hero-fade flex items-center gap-2.5 text-chili" style={d(60)}>
              <span aria-hidden className="size-1.5 rounded-full bg-current" />
              Dine in · Pickup · Delivery
            </p>
            <h1 className="type-display mt-5">
              <span className="hero-line">
                <span style={d(120)}>
                  The <span className="accent text-chili">menu.</span>
                </span>
              </span>
            </h1>
          </div>
          <div className="hero-fade lg:col-span-4 lg:col-start-9" style={d(360)}>
            <p className="type-lead text-phin/80">
              Banh mi on toasted French baguette, pho and noodle soups, rice-paper rolls, Vietnamese
              coffee and organic matcha.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#order" size="sm">
                Order online
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline" size="sm">
                {site.phoneDisplay}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Section jump links: horizontally scrollable on phones */}
      <nav
        aria-label="Menu sections"
        className="sticky top-(--header-h-compact) z-30 border-y border-line bg-rice/95 backdrop-blur-md"
      >
        <ul className="shell flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {menu.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                className="inline-flex min-h-10 items-center rounded-full px-4 text-sm font-medium shadow-[inset_0_0_0_1px_var(--color-line-strong)] transition-colors hover:bg-phin hover:text-rice"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="shell grid gap-16 py-16 md:py-24 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-20 md:space-y-28 lg:col-span-7">
          {menu.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-40">
              <h2 id={`${section.id}-title`} className="type-h2">
                {section.title}
              </h2>
              {section.note && <p className="type-small mt-3 max-w-xl text-muted">{section.note}</p>}
              <ul className="mt-8 border-t-2 border-phin">
                {section.items.map((item) => (
                  <li key={item.name} className="grid grid-cols-[1fr_auto] gap-x-6 border-b border-line py-5">
                    <div>
                      <h3 className="type-h3 inline">{item.name}</h3>
                      {item.tags?.map((t) => (
                        <span
                          key={t}
                          className="ml-3 inline-block translate-y-[-0.2em] rounded-full bg-chili px-2.5 py-1 align-middle text-[0.68rem] font-bold tracking-wide text-white uppercase"
                        >
                          {t}
                        </span>
                      ))}
                      {item.description && <p className="mt-1.5 text-phin/75">{item.description}</p>}
                    </div>
                    {item.price && <span className="font-semibold tabular-nums">{item.price}</span>}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <p className="type-small border-l-2 border-chili pl-4 text-muted">
            Menu and availability may change. Delivery apps set their own prices, so ask in the café
            or call {site.phoneDisplay} for today&rsquo;s in-store prices.
          </p>
        </div>

        <aside className="hidden lg:col-span-4 lg:col-start-9 lg:block">
          <div className="sticky top-[calc(var(--header-h-compact)+6rem)] grid gap-4">
            <Photo image={images.banhMi} sizes="30vw" aspect="aspect-[4/5]" />
            <div className="grid grid-cols-2 gap-4">
              <Photo image={images.phin} sizes="15vw" aspect="aspect-square" />
              <Photo image={images.matcha} sizes="15vw" aspect="aspect-square" />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
