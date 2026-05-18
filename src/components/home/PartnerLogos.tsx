import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { partners } from "@/data/partners";

export function PartnerLogos() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            Our Community
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8] mb-4">
            Trusted By Leading Organizations
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            We partner with employers across industries who share our commitment to developing the next generation of professionals.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <StaggerItem key={partner.id}>
              <div className="group flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border border-[#E5E7EB] hover:border-[#2B5BA8]/30 hover:shadow-md transition-all duration-300 cursor-default">
                <div className="w-full h-12 bg-[#EEF4FF] rounded-lg flex items-center justify-center">
                  <span className="text-[#2B5BA8] font-bold text-xs text-center px-2 leading-tight">
                    {partner.name}
                  </span>
                </div>
                <span className="text-xs text-[#9CA3AF] uppercase tracking-wide group-hover:text-[#F5A623] transition-colors">
                  {partner.industry}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3} className="text-center mt-8 text-sm text-[#6B7280]">
          Partner logos coming soon · Client assets pending
        </FadeIn>
      </div>
    </section>
  );
}
