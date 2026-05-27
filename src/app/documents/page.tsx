import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { DocumentCard } from "@/components/media/DocumentCard";
import { DocuSignCTA } from "@/components/media/DocuSignCTA";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { documents } from "@/data/documents";

export const metadata: Metadata = {
  title: "Program Documents",
  description:
    "Access CCCA Works! program documents — the partner agreement, bylaws, workers' compensation policy, and job shadow handbook.",
};

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        title="Program Documents"
        subtitle="Access the agreements and resources that govern the CCCA Works! program."
      />

      <section className="section-padding bg-[#F9FAFB]">
        <div className="container-wide">
          <FadeIn className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
              Resources &amp; Forms
            </p>
            <h2 className="text-3xl font-bold text-[#2B5BA8]">
              All Documents
            </h2>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-2 gap-5">
            {documents.map((doc) => (
              <StaggerItem key={doc.id}>
                <DocumentCard doc={doc} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <DocuSignCTA />
    </>
  );
}
