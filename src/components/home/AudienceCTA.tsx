import Image from "next/image";
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
            <div className="bg-[#2B5BA8] rounded-3xl overflow-hidden h-full flex flex-col">
              <div className="relative h-48 lg:h-56">
                <Image
                  src="/media/photos/career-fair.jpg"
                  alt="A CCCA Works! industry partner meeting students at a career fair"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B5BA8] via-[#2B5BA8]/20 to-transparent" />
              </div>
              <div className="p-8 lg:p-10 pt-6 flex flex-col flex-1">
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
            </div>
          </FadeIn>

          {/* Students */}
          <FadeIn direction="right">
            <div className="bg-white border-2 border-[#F5A623] rounded-3xl overflow-hidden h-full flex flex-col">
              <div className="relative h-48 lg:h-56">
                <Image
                  src="/media/photos/interns-onsite.jpg"
                  alt="Two CCCA Works! student interns in safety gear at a construction job site"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
              <div className="p-8 lg:p-10 pt-6 flex flex-col flex-1">
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
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
