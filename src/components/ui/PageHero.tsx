import { FadeIn } from "@/components/animations/FadeIn";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[#2B5BA8] py-20 lg:py-28">
      <div className="container-wide text-center">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
