import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";

const employerBenefits = [
  "Zero upfront placement costs",
  "Full EOR coverage — we're the employer of record",
  "Pre-screened, career-ready student candidates",
  "Workers' comp, payroll & compliance handled",
];

const studentBenefits = [
  "Paid internships during school and summers",
  "Real-world work experience in your field",
  "Transportation assistance available",
  "Professional mentorship & support",
];

export function AudienceCTA() {
  return (
    <section className="section-padding bg-[#F9FAFB]">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            Who We Serve
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8]">
            A Path Forward — For Everyone
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Employers */}
          <FadeIn direction="left">
            <div className="bg-[#2B5BA8] rounded-3xl p-8 lg:p-10 h-full flex flex-col">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/15 mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">For Employers</h3>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Build your talent pipeline with motivated, career-focused students while we handle all the HR complexity.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {employerBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-blue-100 text-sm">
                    <svg className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" size="md" className="w-full sm:w-auto">
                Become a Partner
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </FadeIn>

          {/* Students */}
          <FadeIn direction="right">
            <div className="bg-white border-2 border-[#F5A623] rounded-3xl p-8 lg:p-10 h-full flex flex-col">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FFF8E7] mb-6">
                <svg className="w-6 h-6 text-[#F5A623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2B5BA8] mb-3">For Students</h3>
              <p className="text-[#374151] mb-6 leading-relaxed">
                Gain real work experience, earn a paycheck, and launch your career while still in school.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {studentBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[#374151] text-sm">
                    <svg className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="secondary" size="md" className="w-full sm:w-auto">
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
