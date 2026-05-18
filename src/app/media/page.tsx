import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { DocumentCard } from "@/components/media/DocumentCard";
import { DocuSignCTA } from "@/components/media/DocuSignCTA";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { documents } from "@/data/documents";

export const metadata: Metadata = {
  title: "Resources & Documents",
  description:
    "Download CCCA Works! resources including the employer handbook, student guide, and program overview. Sign agreements online via DocuSign.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        title="Resources & Documents"
        subtitle="Everything you need to get started — downloadable guides, forms, and online signing."
      />

      <section className="section-padding bg-[#F9FAFB]">
        <div className="container-wide">
          <FadeIn className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
              Downloads
            </p>
            <h2 className="text-3xl font-bold text-[#2B5BA8]">
              Downloadable Resources
            </h2>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-2 gap-5 mb-6">
            {documents.map((doc) => (
              <StaggerItem key={doc.id}>
                <DocumentCard doc={doc} />
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.3}>
            <p className="text-sm text-[#9CA3AF] text-center">
              Documents are placeholder files pending client delivery. Links will be activated upon final asset submission.
            </p>
          </FadeIn>
        </div>
      </section>

      <DocuSignCTA />
    </>
  );
}
