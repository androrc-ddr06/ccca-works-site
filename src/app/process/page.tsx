import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CourseworkSteps } from "@/components/process/CourseworkSteps";
import { WorkReadinessSkills } from "@/components/process/WorkReadinessSkills";
import { EmployerHandoff } from "@/components/process/EmployerHandoff";
import { EmployerAdvantages } from "@/components/process/EmployerAdvantages";

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
      <WorkReadinessSkills />
      <EmployerHandoff />
      <EmployerAdvantages />
    </>
  );
}
