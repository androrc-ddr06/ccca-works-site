import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { partners } from "@/data/partners";

export function PartnerLogos() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-3">
            Our Community
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
            Trusted By Leading Organizations
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            We partner with employers across industries who share our commitment to developing the next generation of professionals.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <StaggerItem key={partner.id}>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border border-neutral-200 hover:border-brand-blue/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-full h-12 bg-brand-blue-pale rounded-lg flex items-center justify-center">
                  <span className="text-brand-blue font-bold text-xs text-center px-2 leading-tight">
                    {partner.name}
                  </span>
                </div>
                <span className="text-xs text-neutral-400 uppercase tracking-wide group-hover:text-brand-gold transition-colors">
                  {partner.industry}
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
