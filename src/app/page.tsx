import { HeroSection } from "@/components/home/HeroSection";
import { MissionStrip } from "@/components/home/MissionStrip";
import { AudienceCTA } from "@/components/home/AudienceCTA";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { ProcessSnippet } from "@/components/home/ProcessSnippet";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionStrip />
      <AudienceCTA />
      <PartnerLogos />
      <ProcessSnippet />
    </>
  );
}
