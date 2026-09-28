import type { Metadata } from "next";

import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How the ${site.name} website handles your information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

// TODO(client): have this reviewed, and update it if analytics or a
// first-party ordering system are added.
export default function PrivacyPage() {
  return (
    <article className="shell pt-[calc(var(--header-h)+3rem)] pb-(--section) md:pt-[calc(var(--header-h)+5rem)]">
      <div className="max-w-2xl">
        <p className="type-caption text-muted">Last updated September 2026</p>
        <h1 className="type-h1 mt-5">Privacy</h1>
        <div className="mt-12 space-y-10 text-phin/85 [&_h2]:type-h3 [&_h2]:mb-3 [&_h2]:text-phin">
          <section>
            <h2>What this site collects</h2>
            <p>
              This website doesn&rsquo;t use cookies, analytics or advertising trackers, and it
              doesn&rsquo;t ask for personal information. Our hosting provider may keep standard
              server logs (such as IP address and browser type) for security and reliability.
            </p>
          </section>
          <section>
            <h2>Ordering and maps</h2>
            <p>
              Online orders are placed through third-party services (Grubhub, Uber Eats, DoorDash,
              Seamless), and directions open Google Maps. Each has its own privacy policy, which
              governs any information you share there.
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>
              Questions? Call {site.phoneDisplay} or visit us at {site.address.street},{" "}
              {site.address.locality}, {site.address.region} {site.address.postalCode}.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
