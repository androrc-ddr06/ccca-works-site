import { HeroSection } from "@/components/home/HeroSection";
import { MissionStrip } from "@/components/home/MissionStrip";
import { AudienceCTA } from "@/components/home/AudienceCTA";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { ProcessSnippet } from "@/components/home/ProcessSnippet";
import { ImageBanner } from "@/components/ui/ImageBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionStrip />
      <AudienceCTA />
      <PartnerLogos />
      <ImageBanner
        src="/media/photos/trades-day.jpg"
        alt="Hundreds of students in hard hats and safety vests at a CCCA Works! trades day"
        eyebrow="Why We Do This"
        title="Opening doors to real careers — one student at a time."
        caption="From the classroom to the job site, we connect young people with the experiences that launch lasting careers."
        position="center 35%"
      />
      <ProcessSnippet />
    </>
  );
}
