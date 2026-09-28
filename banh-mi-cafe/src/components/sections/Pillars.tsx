import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/content/images";
import { pillars } from "@/content/menu";
import { cn } from "@/lib/cn";

const pillarImages = {
  "banh-mi": images.banhMiPaper,
  pho: images.phoOverhead,
  coffee: images.creamCoffee,
} as const;

// Staggered columns: the middle one sits lower, like items on a counter.
const offset = ["", "md:mt-24", "md:mt-10"];

export function Pillars() {
  return (
    <section aria-labelledby="pillars-title" className="section-y">
      <div className="shell">
        <SectionHeading
          id="pillars-title"
          kicker="What we make"
          aside={
            <p className="type-lead max-w-sm text-phin/75" data-reveal>
              Three things, done properly. Eat in at the communal tables, or take it across the street to the park.
            </p>
          }
        >
          Banh mi, pho <span className="accent text-chili">&amp;</span> phin coffee.
        </SectionHeading>

        <ol className="mt-14 grid gap-16 md:mt-20 md:grid-cols-3 md:gap-8 lg:gap-12">
          {pillars.map((p, i) => (
            <li key={p.id} className={cn("group", offset[i])} data-reveal style={{ "--reveal-delay": i * 120 } as React.CSSProperties}>
              <Link href={`/menu#${p.id}`} className="block">
                <Photo
                  image={pillarImages[p.id]}
                  sizes="(min-width: 768px) 31vw, 100vw"
                  aspect="aspect-[4/5]"
                  zoom
                />
                <p className="type-caption mt-6 text-chili">0{i + 1}</p>
                <h3 className="type-h3 mt-2 text-[clamp(1.75rem,1.3rem+1.2vw,2.5rem)]">{p.title}</h3>
                <p className="mt-3 max-w-xs text-phin/75">{p.line}</p>
                <ul className="mt-5 border-t border-line">
                  {p.items.map((item) => (
                    <li key={item} className="border-b border-line py-2.5 text-[0.95rem]">
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="type-button mt-5 inline-flex items-center gap-2 text-chili">
                  <span className="link-underline">See all {p.title.toLowerCase()}</span>
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
