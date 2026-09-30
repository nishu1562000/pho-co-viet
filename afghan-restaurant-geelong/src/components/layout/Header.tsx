"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/ui/Logo";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const trigger = button.current;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <header
      className={cn(
        "on-dark sticky top-0 z-50 bg-charcoal/95 text-cream backdrop-blur-md transition-shadow duration-300",
        (scrolled || open) && "shadow-[0_1px_0_var(--color-line-dark),0_10px_30px_-18px_rgb(0_0_0/0.8)]",
      )}
    >
      <div className="shell flex h-(--header-h) items-center justify-between gap-4">
        <a href="#top" className="min-w-0">
          <Logo />
          <span className="sr-only">, back to top</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="py-2 font-semibold text-cream/90 transition-colors hover:text-saffron">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* On phones the floating Call button does this job. */}
          <a
            href={site.phoneHref}
            className="hidden min-h-11 items-center gap-2 rounded-full bg-pomegranate px-5 text-sm font-semibold text-white transition-colors hover:bg-pomegranate-hover sm:inline-flex"
          >
            <Phone aria-hidden className="size-4" strokeWidth={2.2} />
            Call to order
          </a>
          <button
            ref={button}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="-mr-2 flex size-11 items-center justify-center rounded-full md:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-line-dark md:hidden">
        <ul className="shell py-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-13 items-center border-b border-line-dark font-serif text-2xl"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.phoneHref}
              className="my-4 flex min-h-13 items-center justify-center gap-2 rounded-full bg-pomegranate font-semibold text-white"
            >
              <Phone aria-hidden className="size-4.5" />
              Call to order · {site.phoneDisplay}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
