import { FadeIn } from "@/components/animations/FadeIn";

const tiers = [
  {
    count: "100",
    label: "California High School Freshmen",
    sub: "The starting cohort",
    accent: "bg-[#1E3F7A] text-white",
    barWidth: "w-full",
  },
  {
    count: "~87",
    label: "Graduate from High School",
    sub: "87.5% graduation rate",
    accent: "bg-[#2B5BA8] text-white",
    barWidth: "w-[87%]",
  },
  {
    count: "~62",
    label: "Enter Higher Education",
    sub: "About 71% of graduates",
    accent: "bg-[#3D74C8] text-white",
    barWidth: "w-[62%]",
  },
  {
    count: "~22",
    label: "Enroll Directly in a 4-Year College",
    sub: "Roughly 20–25 students",
    accent: "bg-[#5B8DD6] text-white",
    barWidth: "w-[22%]",
  },
  {
    count: "~35",
    label: "Hold a Bachelor's Degree by Their Late 20s",
    sub: "Combining direct + community college transfer pathways",
    accent: "bg-[#F5A623] text-[#1E3F7A]",
    barWidth: "w-[35%]",
  },
];

export function CaliforniaPipeline() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            The California Pipeline
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8] mb-4">
            From 100 Freshmen to ~35 Graduates
          </h2>
          <p className="text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
            Track a theoretical cohort of 100 California high school freshmen
            through the education system. The pipeline filters down at every
            stage — leaving most students without the four-year degree that has
            traditionally been the gateway to a paid internship.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.label} delay={i * 0.1}>
              <div
                className={`${tier.accent} ${tier.barWidth} rounded-r-2xl rounded-l-md px-6 py-5 shadow-md`}
              >
                <div className="flex items-baseline gap-4">
                  <div className="text-3xl lg:text-4xl font-bold font-display leading-none">
                    {tier.count}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-base lg:text-lg leading-tight">
                      {tier.label}
                    </div>
                    <div className="text-xs lg:text-sm opacity-80 mt-0.5">
                      {tier.sub}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <p className="text-center text-sm text-[#6B7280] mt-10 max-w-2xl mx-auto italic">
            Sources: California Department of Education (2025/2026), Public
            Policy Institute of California (April 2026).
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
