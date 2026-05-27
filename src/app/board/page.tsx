import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { TeamGrid } from "@/components/the-why/TeamGrid";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Meet the Board of Directors behind CCCA Works! — the people driving workforce development and closing the gap between high school and career.",
};

export default function BoardPage() {
  return (
    <>
      <PageHero
        title="Board of Directors"
        subtitle="The people driving the mission to close the gap between high school and the workforce."
      />
      <TeamGrid />
    </>
  );
}
