import Image from "next/image";

import type { SiteImage } from "@/content/images";
import { cn } from "@/lib/cn";

type Props = {
  image: SiteImage;
  sizes: string;
  /** Tailwind aspect class for the frame, e.g. "aspect-[4/5]". Omit when the parent sizes the frame. */
  aspect?: string;
  className?: string;
  imgClassName?: string;
  preload?: boolean;
  /** Restrained zoom when an ancestor with `group` is hovered. */
  zoom?: boolean;
  /** CSS scroll-driven parallax (no JS). */
  parallax?: boolean;
};

/** A cropped, responsive image frame. The frame reserves space, so no CLS. */
export function Photo({
  image,
  sizes,
  aspect,
  className,
  imgClassName,
  preload,
  zoom,
  parallax,
}: Props) {
  return (
    <div className={cn("relative overflow-hidden bg-paper-3", aspect, parallax && "parallax", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={preload}
        placeholder="blur"
        className={cn(
          "object-cover",
          zoom &&
            "transition-transform duration-[1200ms] ease-out-expo motion-safe:group-hover:scale-[1.04]",
          imgClassName,
        )}
      />
    </div>
  );
}
