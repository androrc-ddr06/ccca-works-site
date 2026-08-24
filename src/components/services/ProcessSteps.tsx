import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your organization's needs, timeline, and the type of student talent you're looking for.",
  },
  {
    number: "02",
    title: "Intake & Matching",
    description: "We gather your requirements and match you with pre-screened students from our talent pool.",
  },
  {
    number: "03",
    title: "Review & Agree",
    description: "Review and sign your partnership agreement via DocuSign. We handle all paperwork digitally.",
  },
  {
    number: "04",
    title: "Placement",
    description: "Your student intern starts their paid placement. We handle all onboarding, payroll, and compliance.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description: "We check in regularly with both you and the student intern to ensure a successful experience.",
  },
];

export function ProcessSteps() {
  return (
    <section className="section-padding bg-brand-blue">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            How It Works
          </h2>
        </FadeIn>

        <StaggerChildren className="relative">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-white/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
            {steps.map((step, i) => (
              <StaggerItem key={step.number}>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center font-bold text-brand-blue-dark text-lg font-display shadow-lg">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="lg:hidden absolute top-8 left-16 w-full h-0.5 bg-white/20" />
                    )}
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
