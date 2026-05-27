import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProblemStatement } from "@/components/the-why/ProblemStatement";
import { PaidVsUnpaidTable } from "@/components/the-why/PaidVsUnpaidTable";
import { CaliforniaPipeline } from "@/components/the-why/CaliforniaPipeline";
import { Sources } from "@/components/the-why/Sources";
import { HistorySection } from "@/components/the-why/HistorySection";
export const metadata: Metadata = {
  title: "The Why",
  description:
    "Why CCCA Works! exists: only 35% of high school graduates earn a bachelor's degree. Research, the California pipeline, and the history behind closing the gap.",
};

export default function TheWhyPage() {
  return (
    <>
      <PageHero
        title="The Why"
        subtitle="Only 35% of high school graduates earn a bachelor's degree. We're closing the gap."
      />
      <ProblemStatement />
      <PaidVsUnpaidTable />
      <CaliforniaPipeline />
      <Sources />
      <HistorySection />
    </>
  );
}
