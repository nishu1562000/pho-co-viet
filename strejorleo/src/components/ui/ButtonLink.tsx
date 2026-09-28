import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-brick active:bg-brick-hover",
  outline:
    "text-ink shadow-[inset_0_0_0_1px_var(--color-line-strong)] hover:bg-ink hover:text-paper hover:shadow-none",
  light: "bg-paper text-ink hover:bg-brick hover:text-paper active:bg-brick-hover",
  "outline-light":
    "text-paper shadow-[inset_0_0_0_1px_var(--color-line-dark)] hover:bg-paper hover:text-ink hover:shadow-none",
};

type Props = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  variant?: Variant;
};

/**
 * Link styled as a button. External URLs open in a new tab and show a
 * diagonal arrow; internal links use next/link.
 */
export function ButtonLink({ href, variant = "primary", className, children, ...rest }: Props) {
  const external = /^https?:\/\//.test(href);
  const Icon = external ? ArrowUpRight : ArrowRight;

  const classes = cn(
    "group type-button inline-flex min-h-13 items-center justify-center gap-3 px-7 select-none",
    "transition-[background-color,color,box-shadow,transform] duration-300 ease-out-expo active:translate-y-px",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <Icon
        aria-hidden
        strokeWidth={1.5}
        className={cn(
          "size-4 shrink-0 transition-transform duration-500 ease-out-expo",
          external
            ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            : "group-hover:translate-x-1",
        )}
      />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
