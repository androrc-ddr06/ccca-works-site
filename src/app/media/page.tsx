import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { PartnerVideos } from "@/components/media/PartnerVideos";
import { PhotoGallery } from "@/components/media/PhotoGallery";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Media & Resources",
  description:
    "Watch industry partner spotlights from CCCA Works! and access program documents.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        title="Media & Resources"
        subtitle="Hear from our partners and explore program resources."
      />

      <PartnerVideos />

      <section className="bg-white pb-16 lg:pb-24">
        <div className="container-wide">
          <FadeIn>
            <div className="relative aspect-[16/9] sm:aspect-[2.4/1] rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
              <Image
                src="/media/photos/podcast.jpg"
                alt="CCCA Works! students sharing their stories on the People Coming Together podcast"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2347]/85 via-[#0F2347]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-2">
                  Student Voices
                </p>
                <p className="text-white text-xl lg:text-2xl font-bold max-w-2xl leading-snug">
                  Our students share their journeys in their own words.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <PhotoGallery />

      <section className="section-padding bg-[#F9FAFB]">
        <div className="container-wide">
          <FadeIn>
            <div className="bg-[#2B5BA8] rounded-3xl p-10 lg:p-14 text-center text-white">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
                Program Documents
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Looking for Agreements &amp; Forms?
              </h2>
              <p className="text-blue-200 max-w-xl mx-auto mb-8">
                The partner agreement, bylaws, workers&rsquo; compensation
                policy, job shadow handbook, and DocuSign signing are all on our
                dedicated Documents page.
              </p>
              <Link
                href="/documents"
                className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D4890A] text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
              >
                View All Documents
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
