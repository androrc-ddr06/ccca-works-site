import type { Metadata } from "next";
import Link from "next/link";
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
