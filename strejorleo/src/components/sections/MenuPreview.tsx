import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/content/images";
import { menu, menuHighlights } from "@/content/menu";

export function MenuPreview() {
  return (
    <section aria-labelledby="kitchen-title" className="section-y bg-paper-2">
      <div className="shell grid gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-[calc(var(--header-h-compact)+2rem)]" data-reveal>
            <Photo
              image={images.oystersIce}
              sizes="(min-width: 768px) 40vw, 100vw"
              aspect="aspect-[4/5]"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pl-8 lg:col-span-6 lg:col-start-7 lg:pl-0">
          <Eyebrow index="03">From the Kitchen</Eyebrow>
          <h2 id="kitchen-title" className="type-h2 mt-8 text-balance" data-reveal>
            Built around the northeast coast.
          </h2>
          <p className="type-lead mt-6 max-w-md text-ink/80" data-reveal>
            Shellfish, chowder and the rest of the New England repertoire, cooked with restraint.
          </p>

          <ul className="mt-14 border-t border-line-strong">
            {menuHighlights.map((item, i) => (
              <li
                key={item.name}
                className="flex flex-col gap-1 border-b border-line py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                data-reveal
                style={{ "--reveal-delay": i * 60 } as React.CSSProperties}
              >
                <span className="type-h3">{item.name}</span>
                {item.note && (
                  <span className="type-small shrink-0 text-muted sm:text-right">{item.note}</span>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <ButtonLink href="/menu">See the full menu</ButtonLink>
            {menu.isSample && (
              <p className="type-small max-w-[16rem] text-muted">
                Sample dishes. The kitchen&rsquo;s list changes with the season.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
