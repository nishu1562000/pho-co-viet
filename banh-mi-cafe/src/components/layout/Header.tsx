"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Wordmark } from "@/components/ui/Wordmark";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation (state adjustment during render).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Mobile menu: lock scroll, keep focus inside, close on Escape.
  useEffect(() => {
    if (!open) return;
    const trigger = menuButton.current;
    document.documentElement.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab") return;
      const items = [trigger, ...(panel.current?.querySelectorAll<HTMLElement>("a") ?? [])].filter(
        Boolean,
      ) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,height] duration-500 ease-out-expo",
          scrolled || open
            ? "h-(--header-h-compact) bg-rice/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
            : "h-(--header-h) bg-transparent",
        )}
      >
        <div className="shell flex h-full items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name}, home`} className="relative z-10 text-[1rem] sm:text-[1.1rem]">
            <Wordmark />
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={item.href === pathname ? "page" : undefined}
                    className="link-nav py-2 text-[0.95rem] font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-[0.95rem] font-medium tabular-nums lg:inline-flex"
            >
              <Phone aria-hidden className="size-4 text-chili" strokeWidth={2} />
              <span className="link-underline">{site.phoneDisplay}</span>
            </a>
            <div className="hidden md:block">
              <ButtonLink href="/#order" size="sm">
                Order online
              </ButtonLink>
            </div>

            {/* Mobile: one-tap call + menu */}
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.name}, ${site.phoneDisplay}`}
              className="flex size-11 items-center justify-center rounded-full bg-chili text-white md:hidden"
            >
              <Phone aria-hidden className="size-4.5" strokeWidth={2} />
            </a>
            <button
              ref={menuButton}
              type="button"
              className="relative z-10 -mr-2 flex size-11 items-center justify-center md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span aria-hidden className="relative block h-3.5 w-6">
                <span
                  className={cn(
                    "absolute left-0 h-0.5 w-full rounded-full bg-phin transition-transform duration-500 ease-out-expo",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-0.5 rounded-full bg-phin transition-[transform,width,top] duration-500 ease-out-expo",
                    open ? "top-1.5 w-full -rotate-45" : "top-3 w-4",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Sibling of <header> so its backdrop-filter doesn't become this fixed panel's containing block. */}
      <div
        id="mobile-menu"
        ref={panel}
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-(--header-h-compact) bottom-0 z-40 flex flex-col bg-rice md:hidden",
          "transition-[opacity,visibility] duration-500 ease-out-expo",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-center">
          <ul>
            {nav.map((item, i) => (
              <li
                key={item.href}
                className={cn(
                  "transition-[opacity,transform] duration-700 ease-out-expo",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={item.href === pathname ? "page" : undefined}
                  className="type-h1 block py-2.5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shell grid gap-3 pb-[max(1.75rem,env(safe-area-inset-bottom))]">
          <p className="type-small mb-2 text-muted">
            {site.address.street} · {site.address.landmark}
            <br />
            {site.hoursSummary}
          </p>
          <ButtonLink href={site.phoneHref} variant="outline" className="w-full">
            Call {site.phoneDisplay}
          </ButtonLink>
          <ButtonLink href="/#order" className="w-full" onClick={() => setOpen(false)}>
            Order online
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
