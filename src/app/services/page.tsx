import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/services/ServiceCard";
import { BenefitsTable } from "@/components/services/BenefitsTable";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore CCCA Works! services — Employer of Record, paid internship placement, flexible contracts, and transportation support. Everything managed for you.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Everything you need to bring student talent into your organization — fully managed, fully compliant."
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8]">
              Full-Service Internship Management
            </h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <BenefitsTable />
      <ProcessSteps />
    </>
  );
}
