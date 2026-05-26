import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProblemStatement } from "@/components/the-why/ProblemStatement";
import { PaidVsUnpaidTable } from "@/components/the-why/PaidVsUnpaidTable";
import { CaliforniaPipeline } from "@/components/the-why/CaliforniaPipeline";
import { Sources } from "@/components/the-why/Sources";
import { HistorySection } from "@/components/the-why/HistorySection";
import { TeamGrid } from "@/components/the-why/TeamGrid";

export const metadata: Metadata = {
  title: "The Why",
  description:
    "Why CCCA Works! exists: 65% of high school students never get an internship. Research, the California pipeline, and the people closing the gap.",
};

export default function TheWhyPage() {
  return (
    <>
      <PageHero
        title="The Why"
        subtitle="65% of high school students never get an internship. We're changing that."
      />
      <ProblemStatement />
      <PaidVsUnpaidTable />
      <CaliforniaPipeline />
      <Sources />
      <HistorySection />
      <TeamGrid />
    </>
  );
}
