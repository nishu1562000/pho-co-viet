import { MapPin, Phone, UtensilsCrossed } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { HoursTable } from "@/components/ui/HoursTable";
import { Lantern } from "@/components/ui/Lantern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="section-y relative overflow-hidden bg-cream-2">
      <Lantern className="absolute top-0 right-[6%] hidden w-12 text-wood md:block" string={50} delay={300} />

      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading id="visit-title" eyebrow="Visit us">
            Come in and warm up
          </SectionHeading>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-red" />
              <address className="not-italic">
                <span className="font-semibold">{site.address.street}</span>
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
            </li>
            <li className="flex gap-4">
              <Phone aria-hidden className="mt-1 size-5 shrink-0 text-red" />
              <a href={site.phoneHref} className="link-underline font-semibold tabular-nums">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-4">
              <UtensilsCrossed aria-hidden className="mt-1 size-5 shrink-0 text-red" />
              <span>Dine in or take out</span>
            </li>
          </ul>

          <div className="mt-8 rounded-card bg-cream p-2 ring-1 ring-line">
            <h3 className="sr-only">Hours</h3>
            <HoursTable />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.links.directions} icon="map">
              Get directions
            </ButtonLink>
            <ButtonLink href={site.phoneHref} icon="phone" variant="outline">
              Call us
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="h-full min-h-[22rem] overflow-hidden rounded-card ring-1 ring-line sm:min-h-[28rem]">
            <iframe
              title={`Map showing ${site.name} at ${site.address.street}, ${site.address.city}`}
              src={site.links.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-full min-h-[22rem] w-full border-0 sm:min-h-[28rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
