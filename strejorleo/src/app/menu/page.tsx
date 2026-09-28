import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/content/images";
import { menu } from "@/content/menu";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Menu",
  description: `The New England menu at ${site.name}, 76 Reade Street, Tribeca. Lunch, dinner and takeout.`,
  alternates: { canonical: "/menu" },
  openGraph: { url: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <section className="pt-[calc(var(--header-h)+3rem)] pb-(--section-sm) md:pt-[calc(var(--header-h)+5rem)]">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <p className="type-caption hero-fade text-muted">Lunch &middot; Dinner &middot; Takeout</p>
            <h1 className="type-display mt-6">
              <span className="hero-line">
                <span style={{ "--d": 100 } as React.CSSProperties}>The</span>
              </span>
              <span className="hero-line">
                <span style={{ "--d": 200 } as React.CSSProperties} className="text-brick italic">
                  Menu.
                </span>
              </span>
            </h1>
          </div>
          <div className="hero-fade lg:col-span-4 lg:col-start-9" style={{ "--d": 450 } as React.CSSProperties}>
            <p className="type-lead text-ink/85">
              New England cooking from the kitchen on Reade Street. The same menu for dining in and for
              takeout.
            </p>
            {menu.isSample && (
              <p className="type-small mt-5 border-l-2 border-brick pl-4 text-muted">
                This is a sample of the style of menu. Dishes change with the season and the market.
                Ask in the restaurant for today&rsquo;s list.
              </p>
            )}
          </div>
        </div>
      </section>

      <section aria-label="Menu" className="border-t border-line pb-(--section)">
        <div className="shell grid gap-12 pt-12 md:grid-cols-12 md:gap-8 md:pt-20">
          <aside className="hidden md:col-span-4 md:block lg:col-span-4">
            <div className="sticky top-[calc(var(--header-h-compact)+2rem)]">
              <nav aria-label="Menu sections">
                <ul className="space-y-3">
                  {menu.sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="type-nav link-reveal py-1">
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <Photo
                image={images.mussels}
                sizes="30vw"
                aspect="aspect-[4/5]"
                className="mt-12 max-w-xs"
              />
            </div>
          </aside>

          <div className="space-y-20 md:col-span-8 md:space-y-28 lg:col-span-7 lg:col-start-6">
            {menu.sections.map((section, i) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-28">
                <p aria-hidden className="type-caption text-brick">
                  0{i + 1}
                </p>
                <h2 id={`${section.id}-title`} className="type-h2 mt-4">
                  {section.title}
                </h2>
                <ul className="mt-10 border-t border-line-strong">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-line py-5"
                    >
                      <span className="type-h3">{item.name}</span>
                      {item.price && <span className="self-baseline tabular-nums">{item.price}</span>}
                      {item.note && <span className="type-small col-span-2 text-muted">{item.note}</span>}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <div className="flex flex-col gap-6 border-t border-line-strong pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="type-h3 max-w-[16ch]">Lunch, dinner or to go.</p>
              <ButtonLink href="/#visit">Plan your visit</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
