import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Button } from "@/components/ui/Button";

const advantages = [
  {
    title: "Limited Contract Scope",
    body: "Contracts are limited in scope and can be terminated for poor performance — no long-term lock-in.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    ),
  },
  {
    title: "No Liability",
    body: "Employers do not take on liability for the intern. CCCA Works! is the legal employer; workers&rsquo; comp and payroll sit with us.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 12l2 2 4-4M12 21a9 9 0 110-18 9 9 0 010 18z"
      />
    ),
  },
  {
    title: "Try Before You Hire",
    body: "Employers get to try out a future employee without going through the onboarding process or making any long-term commitments.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    ),
  },
];

export function EmployerAdvantages() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            For Employers
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8] mb-4">
            Advantages of Hosting a CCCA Works! Intern
          </h2>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {advantages.map((adv) => (
            <StaggerItem key={adv.title}>
              <div className="bg-[#F9FAFB] rounded-2xl p-8 h-full border-t-4 border-[#F5A623] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#1E3F7A] flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-[#F5A623]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {adv.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1E3F7A] mb-3">
                  {adv.title}
                </h3>
                <p className="text-[#4B5563] leading-relaxed">{adv.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center">
          <Button href="/contact" variant="primary" size="lg">
            Partner With Us
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
