import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { images, type SiteImage } from "@/content/images";
import { cn } from "@/lib/cn";

type Occasion = {
  title: string;
  kicker: string;
  body: string;
  image: SiteImage;
  aspect: string;
  cta: { label: string; href: string };
};

const occasions: Occasion[] = [
  {
    title: "Lunch",
    kicker: "Midday on Reade Street",
    body: "A short walk from the courts, City Hall and the offices of Lower Manhattan. Take a proper break: a bowl, a roll, a table by the window.",
    image: images.chowder,
    aspect: "aspect-[4/5]",
    cta: { label: "See the menu", href: "/menu" },
  },
  {
    title: "Dinner",
    kicker: "Evenings in Tribeca",
    body: "The day winds down and the room slows with it. Dinner for two, for a group, or for one.",
    image: images.oystersTable,
    aspect: "aspect-[4/5]",
    cta: { label: "Plan your visit", href: "/#visit" },
  },
  {
    title: "Takeout",
    kicker: "The same kitchen, to go",
    body: "Packed to travel: back to the office, or home across town.",
    image: images.lobsterRoll,
    aspect: "aspect-[4/3] md:aspect-[5/4]",
    cta: { label: "Find us", href: "/#visit" },
  },
];

// Image column per row: a deliberate, non-repeating rhythm.
const layout = [
  "md:col-span-6",
  "md:order-2 md:col-span-7 md:col-start-6",
  "md:col-span-6 md:col-start-2",
];

export function Occasions() {
  return (
    <section aria-labelledby="occasions-title" className="section-y border-t border-line">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <Eyebrow index="02" className="lg:col-span-3 lg:pt-4">
            The Day
          </Eyebrow>
          <h2 id="occasions-title" className="type-h2 lg:col-span-9" data-reveal>
            Lunch, dinner, <em className="text-brick">or to go.</em>
          </h2>
        </div>

        <ol className="mt-16 space-y-24 md:mt-28 md:space-y-40">
          {occasions.map((o, i) => {
            const flip = i % 2 === 1;
            return (
              <li key={o.title} className="group grid items-center gap-8 md:grid-cols-12 md:gap-8">
                <div className={layout[i % layout.length]} data-reveal>
                  <Photo
                    image={o.image}
                    sizes="(min-width: 768px) 55vw, 100vw"
                    aspect={o.aspect}
                    zoom
                  />
                </div>

                <div
                  className={cn(
                    "md:col-span-4",
                    flip ? "md:order-1 md:col-start-1" : "md:col-start-9",
                  )}
                  data-reveal
                  style={{ "--reveal-delay": 120 } as React.CSSProperties}
                >
                  <p className="type-caption text-muted">
                    <span className="text-brick">0{i + 1}</span>
                    <span className="mx-3 opacity-50">/</span>
                    {o.kicker}
                  </p>
                  <h3 className="type-h1 mt-5">{o.title}</h3>
                  <p className="mt-6 max-w-sm text-ink/80">{o.body}</p>
                  <Link
                    href={o.cta.href}
                    className="type-button group/link mt-8 inline-flex items-center gap-3 py-2"
                  >
                    <span className="link-underline">{o.cta.label}</span>
                    <ArrowRight
                      aria-hidden
                      strokeWidth={1.5}
                      className="size-4 transition-transform duration-500 ease-out-expo group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
