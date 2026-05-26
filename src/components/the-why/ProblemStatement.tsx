import { FadeIn } from "@/components/animations/FadeIn";

export function ProblemStatement() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-4">
              The Problem
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1E3F7A] leading-tight text-balance">
              Paid internships have traditionally been{" "}
              <span className="text-[#F5A623]">college-only.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-[#1E3F7A] rounded-3xl p-10 lg:p-14 text-center text-white">
              <div className="text-7xl lg:text-8xl font-bold text-[#F5A623] font-display leading-none mb-4">
                65%
              </div>
              <p className="text-xl lg:text-2xl font-semibold mb-3">
                of high school students will likely never have the opportunity
                for an internship.
              </p>
              <p className="text-base text-blue-200 max-w-2xl mx-auto leading-relaxed">
                Only about 35 of every 100 students who enter high school will
                complete a four-year degree. That leaves the other 65% locked
                out of the single most powerful springboard into a real career.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
