import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/content/images";
import { primaryContact, site } from "@/content/site";

export function ClosingCta() {
  const contact = primaryContact();

  return (
    <section aria-labelledby="closing-title" className="on-dark relative isolate overflow-hidden bg-ink text-paper">
      <Photo
        image={images.roomEvening}
        sizes="100vw"
        className="absolute! inset-0 -z-10 opacity-55"
        parallax
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/45" />

      <div className="shell flex min-h-[80svh] flex-col justify-end pt-40 pb-16 md:min-h-[88svh] md:pb-24">
        <p className="type-caption text-paper/75" data-reveal>
          {site.address.street} &middot; {site.address.neighborhood}
        </p>
        <h2 id="closing-title" className="type-display mt-6 max-w-[11ch]" data-reveal>
          A table on <em className="text-brick-light">Reade Street.</em>
        </h2>
        <div
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          data-reveal
          style={{ "--reveal-delay": 150 } as React.CSSProperties}
        >
          <p className="type-lead max-w-md text-paper/85">
            Come in for lunch or dinner, or pick something up on the way home.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.links.directions} variant="light">
              Visit us
            </ButtonLink>
            <ButtonLink href={contact.href} variant="outline-light" title={contact.label}>
              Contact us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
