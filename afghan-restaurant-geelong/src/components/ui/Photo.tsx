import Image from "next/image";

import type { SiteImage } from "@/content/images";
import { cn } from "@/lib/cn";

type Props = {
  image: SiteImage;
  sizes: string;
  aspect?: string;
  className?: string;
  imgClassName?: string;
  /** The above-the-fold hero image: load eagerly at high priority. */
  priority?: boolean;
  quality?: number;
  /** Restrained zoom when an ancestor with `group` is hovered. */
  zoom?: boolean;
};

/** Responsive image in a space-reserving frame (no layout shift). */
export function Photo({ image, sizes, aspect, className, imgClassName, priority, quality, zoom }: Props) {
  return (
    <div className={cn("relative overflow-hidden rounded-card bg-charcoal-3", aspect, className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        quality={quality}
        preload={priority}
        loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
        placeholder="blur"
        className={cn(
          "object-cover",
          zoom && "transition-transform duration-700 ease-out-expo motion-safe:group-hover:scale-[1.05]",
          imgClassName,
        )}
      />
    </div>
  );
}
