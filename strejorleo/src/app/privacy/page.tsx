import type { Metadata } from "next";

import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How the ${site.name} website handles your information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

// TODO(client): have this reviewed before launch, and update it if analytics,
// reservations or online ordering are added.
export default function PrivacyPage() {
  return (
    <article className="shell pt-[calc(var(--header-h)+3rem)] pb-(--section) md:pt-[calc(var(--header-h)+5rem)]">
      <div className="max-w-2xl">
        <p className="type-caption text-muted">Last updated September 2026</p>
        <h1 className="type-h1 mt-6">Privacy</h1>

        <div className="mt-12 space-y-10 text-ink/85 [&_h2]:type-h3 [&_h2]:mb-3 [&_h2]:text-ink">
          <section>
            <h2>What this site collects</h2>
            <p>
              This website doesn&rsquo;t use cookies, analytics or advertising trackers, and it
              doesn&rsquo;t ask for personal information. Our hosting provider may keep standard
              server logs (such as IP address and browser type) for security and reliability.
            </p>
          </section>
          <section>
            <h2>Links to other services</h2>
            <p>
              Directions and map links open Google Maps, which has its own privacy policy. Any
              information you share there is governed by Google, not by {site.name}.
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>
              Questions about this policy can be directed to {site.name} at {site.address.street},{" "}
              {site.address.locality}, {site.address.region} {site.address.postalCode}.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
