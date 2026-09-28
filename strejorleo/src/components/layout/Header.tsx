"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  // Compact header once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation. Adjusting state during render is the
  // recommended pattern for resetting state when a value changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Mobile menu: lock scroll, trap focus, close on Escape.
  useEffect(() => {
    if (!open) return;
    const trigger = menuButton.current;
    document.documentElement.style.overflow = "hidden";

    const focusables = () =>
      Array.from(panel.current?.querySelectorAll<HTMLElement>("a, button") ?? []);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab") return;
      const items = [trigger, ...focusables()].filter(Boolean) as HTMLElement[];
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

  const isCurrent = (href: string) => href === pathname;

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,height] duration-500 ease-out-expo",
        scrolled || open
          ? "h-(--header-h-compact) bg-paper/92 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
          : "h-(--header-h) bg-transparent",
      )}
    >
      <div className="shell flex h-full items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="relative z-10 -my-2 py-2 text-[1.3rem] sm:text-[1.45rem]"
        >
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className="type-nav link-reveal py-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ButtonLink
              href={site.links.directions}
              className={cn("transition-[min-height,background-color,color] duration-500", scrolled && "min-h-11")}
            >
              Get directions
            </ButtonLink>
          </div>

          <button
            ref={menuButton}
            type="button"
            className="relative z-10 -mr-3 flex size-12 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3 w-7">
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-ink transition-transform duration-500 ease-out-expo",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px bg-ink transition-[transform,width] duration-500 ease-out-expo",
                  open ? "top-1.5 w-full -rotate-45" : "top-3 w-4",
                )}
              />
            </span>
          </button>
        </div>
      </div>

    </header>

      {/* Mobile menu. A sibling of <header>, not a child: the header's
          backdrop-filter would otherwise become the containing block for
          this fixed panel. */}
      <div
        id="mobile-menu"
        ref={panel}
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-(--header-h-compact) bottom-0 z-40 flex flex-col bg-paper md:hidden",
          "transition-[opacity,visibility] duration-500 ease-out-expo",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-center">
          <ul className="border-t border-line">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className={cn(
                  "border-b border-line transition-[opacity,transform] duration-700 ease-out-expo",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className="flex items-baseline justify-between py-5 font-display text-[2.6rem] leading-none"
                >
                  {item.label}
                  <span className="type-caption text-muted">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shell pb-[max(2rem,env(safe-area-inset-bottom))]">
          <p className="type-small mb-5 text-muted">
            {site.address.street}, {site.address.neighborhood}
            <br />
            {site.address.locality}, {site.address.region} {site.address.postalCode}
          </p>
          <ButtonLink href={site.links.directions} className="w-full">
            Get directions
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
