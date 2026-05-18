import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";

export function PartnerCTA() {
  return (
    <section className="bg-[#F5A623] py-16">
      <div className="container-wide text-center">
        <FadeIn>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3F7A] mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-[#1E3F7A]/80 max-w-xl mx-auto mb-8 text-lg">
            Join our growing network of employer partners and start building your talent pipeline today.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
