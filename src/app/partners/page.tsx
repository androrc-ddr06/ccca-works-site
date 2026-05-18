import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { LogoGrid } from "@/components/partners/LogoGrid";
import { PartnerCTA } from "@/components/partners/PartnerCTA";
import { FadeIn } from "@/components/animations/FadeIn";
import { testimonials } from "@/data/testimonials";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Industry Partners",
  description:
    "Meet the organizations partnering with CCCA Works! to build their talent pipeline through paid student internships.",
};

const employerTestimonials = testimonials.filter((t) => t.category === "employer").slice(0, 2);

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Industry Partners"
        subtitle="The organizations investing in the next generation of professionals."
      />
      <LogoGrid />

      <section className="section-padding bg-[#F9FAFB]">
        <div className="container-wide">
          <FadeIn className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
              Partner Voices
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8]">
              What Our Partners Say
            </h2>
          </FadeIn>

          <div className="space-y-8 max-w-3xl mx-auto">
            {employerTestimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.15}>
                <div className={`flex flex-col lg:flex-row gap-8 items-center bg-white rounded-3xl p-8 shadow-[var(--shadow-card)] ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="w-20 h-20 rounded-full bg-[#EEF4FF] flex items-center justify-center shrink-0 border-4 border-white shadow-md">
                    <svg className="w-9 h-9 text-[#2B5BA8]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <svg className="w-7 h-7 text-[#F5A623] mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-[#374151] leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-semibold text-[#1F2937]">{t.name}</div>
                        <div className="text-sm text-[#6B7280]">{t.title} · {t.organization}</div>
                      </div>
                      <Badge variant="blue">Employer</Badge>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PartnerCTA />
    </>
  );
}
