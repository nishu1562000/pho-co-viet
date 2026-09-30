import { Info } from "lucide-react";

import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/content/images";
import { sampleMenu } from "@/content/menu";

export function MenuPreview() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="on-dark section-y relative bg-charcoal text-cream">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <SectionHeading
            id="menu-title"
            eyebrow="Menu"
            tone="charcoal"
            className="lg:col-span-7"
            intro="A taste of the kitchen, for dining in or taking away."
          >
            Sample menu
          </SectionHeading>

          <p
            role="note"
            className="flex items-start gap-3 rounded-card border border-dashed border-saffron/60 bg-charcoal-2 px-5 py-4 text-sm lg:col-span-5"
          >
            <Info aria-hidden className="mt-0.5 size-4.5 shrink-0 text-saffron" />
            <span>
              <strong className="text-saffron">Sample menu — final menu and prices from owner.</strong>{" "}
              <span className="text-muted-dark">Dishes are shown without prices.</span>
            </span>
          </p>
        </div>

        <div aria-hidden className="tile-rule mt-12" />

        <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {sampleMenu.map((group, i) => (
            <section
              key={group.id}
              id={`menu-${group.id}`}
              aria-labelledby={`menu-${group.id}-title`}
              data-reveal
              style={{ "--reveal-delay": i * 100 } as React.CSSProperties}
            >
              <h3 id={`menu-${group.id}-title`} className="type-h3 border-b border-saffron/50 pb-3 text-saffron">
                {group.title}
              </h3>
              <ul>
                {group.dishes.map((dish) => (
                  <li key={dish.name} className="border-b border-line-dark py-4">
                    <p className="font-semibold">{dish.name}</p>
                    <p className="type-small mt-1 text-muted-dark">{dish.description}</p>
                  </li>
                ))}
              </ul>
              {group.id === "starters" && (
                // PLACEHOLDER IMAGE → owner's photo of mantu
                <Photo image={images.mantu} sizes="(min-width: 768px) 30vw, 100vw" aspect="aspect-[3/2]" className="mt-6" />
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
