import { ArrowDown } from "lucide-react";

import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, type SiteImage } from "@/content/images";

const cards: { id: string; kicker: string; title: string; body: string; image: SiteImage; menu: string }[] = [
  {
    id: "kebabs",
    kicker: "Chicken · Lamb · Trio",
    title: "Charcoal Kebabs",
    body: "Marinated chicken, lamb and lamb mince kofta, grilled over real coals. Guests call the chicken very juicy and tender.",
    image: images.kebabs, // PLACEHOLDER → owner's kebab photo
    menu: "#menu-kebabs",
  },
  {
    id: "lamb-shank",
    kicker: "Slow-cooked",
    title: "Lamb Shank",
    body: "Cooked low and slow until it falls off the bone, then served on a generous bed of rice.",
    image: images.lambShank, // PLACEHOLDER → owner's lamb shank photo
    menu: "#menu-mains",
  },
  {
    id: "rice",
    kicker: "Kabuli pulao & herb rice",
    title: "Afghan Rice",
    body: "Kabuli pulao with carrots and raisins, and a fragrant herb rice that kids love.",
    image: images.pulao, // PLACEHOLDER → owner's Kabuli pulao photo
    menu: "#menu-mains",
  },
];

export function KnownFor() {
  return (
    <section aria-labelledby="known-title" className="section-y bg-cream-2">
      <div className="shell">
        <SectionHeading
          id="known-title"
          eyebrow="What we’re known for"
          align="center"
          intro="Three dishes that bring people back to Moorabool St."
        >
          From the coals <em className="text-pomegranate-deep not-italic">&amp;</em> the pot
        </SectionHeading>

        <ul className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3 lg:gap-8">
          {cards.map((c, i) => (
            <li
              key={c.id}
              className="group flex flex-col overflow-hidden rounded-card bg-cream shadow-[0_1px_0_var(--color-line),0_24px_44px_-30px_rgb(20_16_13/0.55)] ring-1 ring-line transition-transform duration-500 ease-out-expo hover:-translate-y-1"
              data-reveal
              style={{ "--reveal-delay": i * 100 } as React.CSSProperties}
            >
              <Photo image={c.image} sizes="(min-width: 768px) 32vw, 100vw" aspect="aspect-[4/3]" className="rounded-none" zoom />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="type-eyebrow text-saffron-deep">{c.kicker}</p>
                <h3 className="type-h3 mt-2">{c.title}</h3>
                <p className="mt-3 flex-1 text-charcoal/80">{c.body}</p>
                <a href={c.menu} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-pomegranate-deep">
                  <span className="link-underline">See on the menu</span>
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
