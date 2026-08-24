"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export function MissionStrip() {
  return (
    <section className="bg-brand-gold py-20">
      <div className="container-wide">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-dark mb-5">
              Our Vision
            </p>
            <p className="text-2xl lg:text-3xl font-semibold text-brand-blue-dark leading-snug text-balance">
              A future where every student&rsquo;s journey from school to career
              is guided by their interests, supported by student-first
              structures, and realized through sustainable access to
              post-secondary training and apprenticeships, all culminating in
              full-time employment.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
