import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { photos } from "@/data/photos";

export function PhotoGallery() {
  // Hide the whole section until the client provides photos.
  if (photos.length === 0) return null;

  return (
    <section className="section-padding bg-[#F9FAFB]">
      <div className="container-wide">
        <FadeIn className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            In the Field
          </p>
          <h2 className="text-3xl font-bold text-[#2B5BA8]">Photo Gallery</h2>
          <p className="text-base text-[#4B5563] mt-3 max-w-2xl">
            Moments from CCCA Works! events, job shadows, and intern placements.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <StaggerItem key={photo.src}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
