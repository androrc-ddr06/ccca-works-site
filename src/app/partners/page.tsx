import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { LogoGrid } from "@/components/partners/LogoGrid";
import { PartnerCTA } from "@/components/partners/PartnerCTA";

export const metadata: Metadata = {
  title: "Industry Partners",
  description:
    "Meet the Sacramento-area organizations partnering with CCCA Works! to build their talent pipeline through paid student internships.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Industry Partners"
        subtitle="The organizations investing in the next generation of professionals."
      />
      <LogoGrid />
      <PartnerCTA />
    </>
  );
}
