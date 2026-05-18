import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const differentiators = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    title: "Employer of Record Model",
    description:
      "We take on the full legal employer relationship — workers' comp, payroll taxes, and compliance are entirely our responsibility. Employers benefit from intern labor without any of the HR overhead.",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: "No Upfront Employer Cost",
    description:
      "There are no placement fees or upfront costs for employer partners. Our model is designed to remove every financial barrier so more organizations can participate in the program.",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
    title: "High-Touch Matching",
    description:
      "We don't just send resumes. We personally match students to employers based on industry interest, skill set, and cultural fit — then provide ongoing support for both parties throughout the placement.",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    title: "Transportation Support",
    description:
      "Transportation should never be a barrier to opportunity. We provide transportation assistance to ensure students can reliably reach their placement site, no matter where they live.",
  },
];

export function Differentiators() {
  return (
    <section className="section-padding bg-[#F9FAFB]">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            Why CCCA Works!
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8]">
            What Sets Us Apart
          </h2>
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 gap-6">
          {differentiators.map((item) => (
            <StaggerItem key={item.title}>
              <div className="bg-white rounded-2xl p-7 shadow-[var(--shadow-card)] group hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] flex items-center justify-center mb-5 group-hover:bg-[#2B5BA8] transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-[#2B5BA8] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-3">{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
