import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const skills = [
  {
    title: "Being on time",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Proper dress",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M16 4l-4 3-4-3-5 4 4 5v8h10v-8l4-5z"
      />
    ),
  },
  {
    title: "Following directions",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    ),
  },
  {
    title: "Being engaged",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "Effective communication",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
  },
];

export function WorkReadinessSkills() {
  return (
    <section className="section-padding bg-[#F9FAFB]">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            What We Evaluate
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8] mb-4">
            Essential Work-Readiness Skills
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            During each job shadow, students are evaluated on the
            non-negotiables that make any internship successful.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <StaggerItem key={skill.title}>
              <div className="bg-white rounded-2xl p-6 text-center shadow-[var(--shadow-card)] h-full hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#2B5BA8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {skill.icon}
                  </svg>
                </div>
                <p className="font-semibold text-[#1E3F7A] text-sm leading-snug">
                  {skill.title}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
