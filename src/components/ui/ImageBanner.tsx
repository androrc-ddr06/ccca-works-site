import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

interface ImageBannerProps {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  caption?: string;
  /** Tailwind height classes for the banner. */
  heightClass?: string;
  /** Vertical focus of the image (object-position). */
  position?: string;
}

/**
 * Full-bleed photo band with a dark gradient overlay and optional caption.
 * Used to break up text-heavy pages with a moment of imagery.
 */
export function ImageBanner({
  src,
  alt,
  eyebrow,
  title,
  caption,
  heightClass = "h-[52vh] min-h-[340px] lg:h-[64vh] lg:max-h-[600px]",
  position = "center",
}: ImageBannerProps) {
  const hasText = eyebrow || title || caption;
  return (
    <section className="relative w-full overflow-hidden">
      <div className={`relative ${heightClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
        {hasText && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2347]/90 via-[#0F2347]/45 to-[#0F2347]/15" />
            <div className="absolute inset-0 flex items-end">
              <div className="container-wide pb-10 lg:pb-16">
                <FadeIn>
                  {eyebrow && (
                    <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-3">
                      {eyebrow}
                    </p>
                  )}
                  {title && (
                    <h2 className="text-3xl lg:text-5xl font-bold text-white max-w-3xl text-balance leading-tight">
                      {title}
                    </h2>
                  )}
                  {caption && (
                    <p className="text-blue-100 mt-4 max-w-2xl text-lg leading-relaxed">
                      {caption}
                    </p>
                  )}
                </FadeIn>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
