import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { testimonials } from "@/data/testimonials";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function TestimonialsSnippet() {
  const featured = [testimonials[0], testimonials[2]];

  return (
    <section className="section-padding bg-[#EEF4FF]">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            Success Stories
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8]">
            Real Results, Real Impact
          </h2>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6 mb-10">
          {featured.map((t) => (
            <StaggerItem key={t.id}>
              <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] h-full flex flex-col">
                <svg className="w-8 h-8 text-[#F5A623] mb-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#374151] leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#1F2937]">{t.name}</div>
                    <div className="text-sm text-[#6B7280]">
                      {t.title} · {t.organization}
                    </div>
                  </div>
                  <Badge variant={t.category === "employer" ? "blue" : "gold"}>
                    {t.category === "employer" ? "Employer" : "Student"}
                  </Badge>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center">
          <Button href="/testimonials" variant="secondary" size="md">
            View All Stories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
