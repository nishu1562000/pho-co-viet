import { Info } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/content/images";
import { sampleMenu } from "@/content/menu";
import { site } from "@/content/site";

export function MenuPreview() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="section-y bg-cream-2">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-10">
          <SectionHeading
            id="menu-title"
            eyebrow="Menu preview"
            className="lg:col-span-7"
            intro="A taste of the kitchen, for dining in or taking out."
          >
            From the kitchen
          </SectionHeading>

          <p
            role="note"
            className="flex items-start gap-3 rounded-card border-2 border-dashed border-red/40 bg-cream px-5 py-4 text-sm font-medium lg:col-span-5"
          >
            <Info aria-hidden className="mt-0.5 size-4.5 shrink-0 text-red" />
            <span>
              <strong className="text-red">Sample menu — final menu from owner.</strong> Dishes are
              shown without prices.
            </span>
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {sampleMenu.map((group, i) => (
            <section
              key={group.id}
              id={`menu-${group.id}`}
              aria-labelledby={`menu-${group.id}-title`}
              className="scroll-mt-24"
              data-reveal
              style={{ "--reveal-delay": i * 100 } as React.CSSProperties}
            >
              <div className="flex items-baseline justify-between gap-3 border-b-2 border-wood pb-3">
                <h3 id={`menu-${group.id}-title`} className="type-h3">
                  {group.title}
                </h3>
                <span className="text-sm font-semibold text-red" lang="vi">
                  {group.vietnamese}
                </span>
              </div>
              <ul>
                {group.dishes.map((dish) => (
                  <li key={dish.name} className="border-b border-line py-4">
                    <p className="font-semibold">{dish.name}</p>
                    {dish.vietnamese && (
                      <p className="type-small text-red" lang="vi">
                        {dish.vietnamese}
                      </p>
                    )}
                    {dish.description && <p className="type-small mt-1 text-muted">{dish.description}</p>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-14 grid items-center gap-8 overflow-hidden rounded-card bg-wood text-cream md:grid-cols-2">
          {/* PLACEHOLDER IMAGE → owner's photo of bún bò Huế or another signature dish */}
          <Photo image={images.bunBoHue} sizes="(min-width: 768px) 50vw, 100vw" aspect="aspect-[16/10] md:aspect-auto md:h-full md:min-h-72" className="rounded-none" />
          <div className="on-dark px-6 pb-8 md:py-10 md:pr-10 md:pl-2">
            <p className="type-eyebrow text-gold">Take-out</p>
            <p className="type-h3 mt-2">Hungry on the way home? Call ahead for take-out.</p>
            <div className="mt-6">
              <ButtonLink href={site.phoneHref} icon="phone" variant="cream">
                Call {site.phoneDisplay}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
