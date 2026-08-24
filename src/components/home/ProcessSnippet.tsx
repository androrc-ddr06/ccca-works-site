import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Career Exploration",
    description:
      "Students meet industry professionals and complete hands-on projects across multiple sectors.",
  },
  {
    number: "02",
    title: "Goal Setting",
    description:
      "Reflection on strengths, interests, and the future they want — leading to a focused career path.",
  },
  {
    number: "03",
    title: "Two Job Shadows",
    description:
      "Off-campus shadowing evaluated on work-readiness skills: punctuality, dress, communication, engagement.",
  },
  {
    number: "04",
    title: "Work Permit Qualifications",
    description:
      "2.0+ GPA, no significant behavior issues, age 16 or older — students ready for an employer.",
  },
];

export function ProcessSnippet() {
  return (
    <section className="section-padding bg-brand-blue-pale">
      <div className="container-wide">
        <FadeIn className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-3">
            The Process
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
            How a Student Becomes Intern-Ready
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Every CCCA Works! intern completes a structured pathway of
            coursework, exploration, and evaluation before stepping onto a
            partner&rsquo;s job site.
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-card)] h-full">
                <div className="text-4xl font-bold text-brand-gold font-display leading-none mb-3">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-brand-blue-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center">
          <Button href="/process" variant="secondary" size="md">
            See the Full Process
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
