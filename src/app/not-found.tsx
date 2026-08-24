import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-brand-blue-pale px-6 py-24">
      <div className="text-center max-w-lg">
        <p className="text-7xl lg:text-8xl font-bold text-brand-blue font-display leading-none">
          404
        </p>
        <h1 className="mt-5 text-2xl lg:text-3xl font-bold text-neutral-800">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-3 text-neutral-600 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
