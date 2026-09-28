import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/content/images";
import { menu } from "@/content/menu";

// Items the café's ordering page marks as best sellers.
const bestSellers = menu
  .flatMap((section) =>
    section.items
      .filter((item) => item.tags?.includes("Best seller"))
      .map((item) => ({ ...item, section: section.title, note: section.note })),
  )
  .slice(0, 3);

export function BestSellers() {
  return (
    <section aria-labelledby="best-title" className="section-y bg-rice-2">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-h-compact)+2rem)]">
            <SectionHeading id="best-title" kicker="Best sellers">
              Start <span className="accent text-chili">here.</span>
            </SectionHeading>
            <p className="type-lead mt-6 max-w-md text-phin/75" data-reveal>
              The most-ordered items on our online menu. A good place to begin.
            </p>
            <div className="mt-10 hidden lg:block" data-reveal>
              <Photo image={images.summerRolls} sizes="36vw" aspect="aspect-[5/4]" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ol className="border-t-2 border-phin">
            {bestSellers.map((item, i) => (
              <li
                key={item.section + item.name}
                className="grid grid-cols-[auto_1fr] gap-x-6 border-b border-line py-8 sm:gap-x-10"
                data-reveal
                style={{ "--reveal-delay": i * 90 } as React.CSSProperties}
              >
                <span className="accent text-5xl leading-none text-chili sm:text-6xl">{i + 1}</span>
                <div>
                  <p className="type-caption text-muted">{item.section}</p>
                  <h3 className="type-h3 mt-2 text-[clamp(1.75rem,1.2rem+1.6vw,2.75rem)] text-balance">
                    {item.section === "Banh Mi" ? `${item.name} Banh Mi` : item.name}
                  </h3>
                  {item.description && <p className="mt-3 text-phin/80">{item.description}</p>}
                  {item.section === "Banh Mi" && item.note && (
                    <p className="type-small mt-2 text-muted">{item.note}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 lg:hidden" data-reveal>
            <Photo image={images.summerRolls} sizes="100vw" aspect="aspect-[5/4]" />
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/menu" variant="phin">
              Full menu
            </ButtonLink>
            <ButtonLink href="/#order" variant="outline">
              Order online
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
