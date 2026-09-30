import { MapPin, Phone } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type Variant = "pomegranate" | "outline" | "saffron" | "outline-light";

const variants: Record<Variant, string> = {
  pomegranate: "bg-pomegranate text-white hover:bg-pomegranate-hover shadow-[0_10px_24px_-12px_rgb(179_35_47/0.8)]",
  outline: "text-charcoal shadow-[inset_0_0_0_1.5px_var(--color-charcoal)] hover:bg-charcoal hover:text-cream",
  saffron: "bg-saffron text-charcoal hover:bg-cream",
  "outline-light": "text-cream shadow-[inset_0_0_0_1.5px_rgb(246_236_219/0.35)] hover:bg-cream hover:text-charcoal",
};

type Props = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  variant?: Variant;
  icon?: "phone" | "map";
  size?: "md" | "sm";
};

/** Anchor styled as a button. External links open in a new tab. */
export function ButtonLink({ href, variant = "pomegranate", icon, size = "md", className, children, ...rest }: Props) {
  const external = /^https?:\/\//.test(href);
  const Icon = icon === "phone" ? Phone : icon === "map" ? MapPin : null;

  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold select-none",
        "transition-[background-color,color,box-shadow,transform] duration-300 ease-out-expo active:scale-[0.97]",
        size === "md" ? "min-h-13 px-7 text-[0.975rem]" : "min-h-11 px-5 text-sm",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {Icon && <Icon aria-hidden className="size-4.5 shrink-0" strokeWidth={2} />}
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
