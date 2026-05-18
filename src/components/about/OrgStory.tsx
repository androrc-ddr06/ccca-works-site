import { FadeIn } from "@/components/animations/FadeIn";

export function OrgStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-[4/3] bg-[#EEF4FF] rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-[#2B5BA8]/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-[#2B5BA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-[#6B7280] text-sm">Photo coming soon</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-[#F5A623]/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-[#2B5BA8]/10 -z-10" />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
                Our Story
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8] mb-6">
                Built to Close the Gap
              </h2>
              <div className="space-y-4 text-[#374151] leading-relaxed">
                <p>
                  CCCA Works! was founded with a clear mission: to eliminate the barriers
                  that prevent high school students from entering the workforce with
                  confidence. Too many talented young people graduate without real
                  experience, professional networks, or a clear path forward.
                </p>
                <p>
                  As an operating division of the Capra College Career Academy, we leverage
                  our deep roots in education to create internship placements that are
                  genuinely meaningful — not just resume fillers. We match students with
                  employers who are committed to mentorship and development.
                </p>
                <p>
                  By acting as the Employer of Record, we remove every administrative
                  obstacle that might prevent an employer from participating. Workers&apos; comp,
                  payroll, compliance — we own it all. That means employers can focus on
                  what matters: growing talent.
                </p>
              </div>
              <div className="mt-8 inline-flex items-center gap-3 bg-[#EEF4FF] rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-[#2B5BA8] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#1F2937] text-sm">John Pellman</div>
                  <div className="text-xs text-[#6B7280]">Founder & CEO, CCCA Works!</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
