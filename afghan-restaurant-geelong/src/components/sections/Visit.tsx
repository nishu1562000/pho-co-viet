import { MapPin, Phone, UtensilsCrossed } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { HoursTable } from "@/components/ui/HoursTable";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="section-y bg-cream-2">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="visit-title"
            eyebrow="Visit"
            intro="In the Geelong CBD, a short walk from the waterfront."
          >
            Dinner on Moorabool St
          </SectionHeading>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-pomegranate-deep" />
              <address className="not-italic">
                <span className="font-semibold">{site.address.street}</span>
                <br />
                {site.address.city} {site.address.region} {site.address.postalCode}
              </address>
            </li>
            <li className="flex gap-4">
              <Phone aria-hidden className="mt-1 size-5 shrink-0 text-pomegranate-deep" />
              <a href={site.phoneHref} className="link-underline font-semibold tabular-nums">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-4">
              <UtensilsCrossed aria-hidden className="mt-1 size-5 shrink-0 text-pomegranate-deep" />
              <span>Dine in or takeaway</span>
            </li>
          </ul>

          <div className="mt-8 rounded-card bg-cream p-2 ring-1 ring-line">
            <h3 className="px-4 pt-3 pb-1 font-semibold">Hours · open 7 days, dinner only</h3>
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
          <div className="h-full min-h-[22rem] overflow-hidden rounded-card bg-cream-3 ring-1 ring-line sm:min-h-[28rem]">
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
