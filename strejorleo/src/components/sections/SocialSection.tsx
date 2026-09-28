import { ArrowUpRight } from "lucide-react";

import { site } from "@/content/site";

/**
 * Official social profiles. Renders nothing until `site.social` is filled in.
 * Links out to the profile rather than embedding a third-party feed widget,
 * which keeps the page fast and avoids showing posts we haven't vetted.
 */
export function SocialSection() {
  if (site.social.length === 0) return null;

  return (
    <section aria-label="Follow along" className="section-y-sm border-t border-line">
      <div className="shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="type-h2 max-w-[14ch]">Follow the kitchen.</p>
        <ul className="flex flex-col gap-3">
          {site.social.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group type-h3 inline-flex items-center gap-3"
              >
                <span className="link-underline">{s.handle}</span>
                <span className="type-caption text-muted">{s.label}</span>
                <ArrowUpRight
                  aria-hidden
                  strokeWidth={1.5}
                  className="size-5 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
