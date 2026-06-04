import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CourseworkSteps } from "@/components/process/CourseworkSteps";
import { WorkReadinessSkills } from "@/components/process/WorkReadinessSkills";
import { EmployerHandoff } from "@/components/process/EmployerHandoff";
import { EmployerAdvantages } from "@/components/process/EmployerAdvantages";
import { ImageBanner } from "@/components/ui/ImageBanner";

export const metadata: Metadata = {
  title: "The Process",
  description:
    "How a CCCA Works! student becomes intern-ready: coursework, goal setting, two off-campus job shadows, and the work-readiness skills employers count on.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="The Process"
        subtitle="How a student becomes intern-ready."
      />
      <CourseworkSteps />
      <ImageBanner
        src="/media/photos/welding-shop.jpg"
        alt="A CCCA Works! student working hands-on in a welding shop during a job shadow"
        eyebrow="Hands-On From Day One"
        title="Two job shadows. Real worksites. Real feedback."
        caption="Before any placement, students prove their work-readiness in the field — not just the classroom."
        position="center 45%"
      />
      <WorkReadinessSkills />
      <EmployerHandoff />
      <EmployerAdvantages />
    </>
  );
}
