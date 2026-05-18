import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { OrgStory } from "@/components/about/OrgStory";
import { Differentiators } from "@/components/about/Differentiators";
import { TeamGrid } from "@/components/about/TeamGrid";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CCCA Works!'s founding mission, our team, and why leading organizations trust us for workforce development and student internship placement.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About CCCA Works!"
        subtitle="Closing the gap between high school and successful entry into the workforce."
      />
      <OrgStory />
      <Differentiators />
      <TeamGrid />
    </>
  );
}
