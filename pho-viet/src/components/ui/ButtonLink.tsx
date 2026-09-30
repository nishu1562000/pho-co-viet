import { MapPin, Phone } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type Variant = "red" | "outline" | "cream" | "outline-light";

const variants: Record<Variant, string> = {
  red: "bg-red text-white hover:bg-red-hover shadow-[0_8px_20px_-10px_rgb(161_29_33/0.7)]",
  outline: "text-wood shadow-[inset_0_0_0_1.5px_var(--color-wood)] hover:bg-wood hover:text-cream",
  cream: "bg-cream text-wood hover:bg-gold",
  "outline-light": "text-cream shadow-[inset_0_0_0_1.5px_var(--color-line-dark)] hover:bg-cream hover:text-wood",
};

type Props = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  variant?: Variant;
  icon?: "phone" | "map";
  size?: "md" | "sm";
};

/** Anchor styled as a button. External links open in a new tab. */
export function ButtonLink({ href, variant = "red", icon, size = "md", className, children, ...rest }: Props) {
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
