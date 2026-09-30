import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { images } from "@/content/images";
import { site } from "@/content/site";

export function TakeawayBanner() {
  return (
    <section aria-labelledby="takeaway-title" className="on-dark relative isolate overflow-hidden bg-charcoal text-cream">
      {/* PLACEHOLDER IMAGE → owner's photo of their charcoal grill */}
      <Image
        src={images.grill.src}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        className="-z-20 object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />

      <div className="shell py-16 md:py-24">
        <div className="max-w-xl" data-reveal>
          <p className="type-eyebrow text-saffron">Takeaway</p>
          <h2 id="takeaway-title" className="type-h2 mt-3 text-balance">
            Picking up dinner on the way home?
          </h2>
          <p className="type-lead mt-4 text-cream/85">Call ahead for takeaway and it’ll be hot off the coals when you arrive.</p>
          <div className="mt-8">
            <ButtonLink href={site.phoneHref} icon="phone">
              Call {site.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
