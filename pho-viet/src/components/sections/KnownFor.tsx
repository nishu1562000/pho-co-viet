import { ArrowDown } from "lucide-react";

import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, type SiteImage } from "@/content/images";

const cards: { id: string; title: string; vietnamese: string; body: string; image: SiteImage }[] = [
  {
    id: "pho",
    title: "Pho",
    vietnamese: "Phở",
    body: "The one regulars rave about: a rich, deeply savory beef broth over rice noodles, finished with fresh herbs, lime and jalapeño.",
    image: images.pho, // PLACEHOLDER → owner's pho photo
  },
  {
    id: "vermicelli",
    title: "Vermicelli Bowls",
    vietnamese: "Bún",
    body: "Rice vermicelli topped with grilled pork, grilled shrimp or fried chicken, and crispy egg rolls.",
    image: images.vermicelli, // PLACEHOLDER → owner's vermicelli bowl photo
  },
  {
    id: "rice",
    title: "Rice Plates",
    vietnamese: "Cơm",
    body: "Marinated, grilled pork chop, pork skewers or shrimp over rice, topped with a fried egg. Hearty and quick.",
    image: images.ricePlate, // PLACEHOLDER → owner's rice plate photo
  },
];

export function KnownFor() {
  return (
    <section aria-labelledby="known-title" className="section-y">
      <div className="shell">
        <SectionHeading
          id="known-title"
          eyebrow="What we’re known for"
          align="center"
          intro="The three things guests keep coming back for, served fast."
        >
          Pho, vermicelli bowls <em className="text-red">&amp;</em> rice plates
        </SectionHeading>

        <ul className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map((c, i) => (
            <li
              key={c.id}
              className="group flex flex-col overflow-hidden rounded-card bg-white/60 shadow-[0_1px_0_var(--color-line),0_20px_40px_-28px_rgb(59_36_24/0.45)] ring-1 ring-line transition-transform duration-500 ease-out-expo hover:-translate-y-1"
              data-reveal
              style={{ "--reveal-delay": i * 100 } as React.CSSProperties}
            >
              <Photo image={c.image} sizes="(min-width: 768px) 32vw, 100vw" aspect="aspect-[4/3]" className="rounded-none" zoom />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-sm font-semibold text-red" lang="vi">
                  {c.vietnamese}
                </p>
                <h3 className="type-h3 mt-1">{c.title}</h3>
                <p className="mt-3 flex-1 text-wood/80">{c.body}</p>
                <a href={`#menu-${c.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red">
                  <span className="link-underline">See sample dishes</span>
                  <ArrowDown aria-hidden className="size-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
