import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const videos = [
  { id: "ae-Ts_7EFT4", title: "Industry Partner Spotlight" },
  { id: "1LmrLIKg2SQ", title: "Industry Partner Spotlight" },
  { id: "pojWAKlDgp8", title: "Industry Partner Spotlight" },
  { id: "T6qMK9gEQlg", title: "Industry Partner Spotlight" },
];

export function PartnerVideos() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            Industry Partners
          </p>
          <h2 className="text-3xl font-bold text-[#2B5BA8]">
            Voices From the Field
          </h2>
          <p className="text-base text-[#4B5563] mt-3 max-w-2xl">
            Hear directly from the industry partners building the next
            generation of Sacramento&rsquo;s workforce.
          </p>
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 gap-6">
          {videos.map((video) => (
            <StaggerItem key={video.id}>
              <div className="relative aspect-video bg-[#1E3F7A] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
