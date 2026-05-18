import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Badge } from "@/components/ui/Badge";
import { partners } from "@/data/partners";

export function LogoGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            Our Network
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8] mb-4">
            Our Partner Organizations
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            We work with organizations across industries who share a commitment to developing the next generation of professionals.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {partners.map((partner) => (
            <StaggerItem key={partner.id}>
              <div className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 border-[#E5E7EB] hover:border-[#2B5BA8]/40 hover:shadow-[var(--shadow-card)] transition-all duration-300 cursor-default text-center">
                <div className="w-full h-16 bg-[#EEF4FF] rounded-xl flex items-center justify-center group-hover:bg-[#2B5BA8]/5 transition-colors">
                  <span className="text-[#2B5BA8] font-bold text-xs px-3">
                    {partner.name}
                  </span>
                </div>
                <Badge variant="blue">{partner.industry}</Badge>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.4} className="text-center mt-8 text-sm text-[#9CA3AF]">
          Partner logos will be displayed here once provided by the client.
        </FadeIn>
      </div>
    </section>
  );
}
