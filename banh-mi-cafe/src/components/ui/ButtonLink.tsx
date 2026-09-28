import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type Variant = "chili" | "phin" | "outline" | "rice" | "outline-light";

const variants: Record<Variant, string> = {
  chili: "bg-chili text-white hover:bg-chili-hover",
  phin: "bg-phin text-rice hover:bg-chili",
  outline: "text-phin shadow-[inset_0_0_0_1.5px_var(--color-phin)] hover:bg-phin hover:text-rice",
  rice: "bg-rice text-phin hover:bg-lantern",
  "outline-light": "text-rice shadow-[inset_0_0_0_1.5px_var(--color-line-dark)] hover:bg-rice hover:text-phin",
};

type Props = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  variant?: Variant;
  size?: "md" | "sm";
};

/**
 * Link styled as a button. External links open in a new tab; tel: links show
 * a phone icon; internal links use next/link.
 */
export function ButtonLink({ href, variant = "chili", size = "md", className, children, ...rest }: Props) {
  const external = /^https?:\/\//.test(href);
  const tel = href.startsWith("tel:");
  const Icon = tel ? Phone : external ? ArrowUpRight : ArrowRight;

  const classes = cn(
    "group type-button inline-flex items-center justify-center gap-2.5 rounded-full select-none",
    "transition-[background-color,color,box-shadow,transform] duration-300 ease-out-expo active:scale-[0.98]",
    size === "md" ? "min-h-13 px-7" : "min-h-11 px-5 text-sm",
    variants[variant],
    className,
  );

  const content = (
    <>
      {tel && <Icon aria-hidden strokeWidth={2} className="size-4 shrink-0" />}
      <span>{children}</span>
      {!tel && (
        <Icon
          aria-hidden
          strokeWidth={2}
          className={cn(
            "size-4 shrink-0 transition-transform duration-500 ease-out-expo",
            external ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5" : "group-hover:translate-x-1",
          )}
        />
      )}
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

  if (tel || href.startsWith("mailto:")) {
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
