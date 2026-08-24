"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

type Tier = {
  count: string;
  label: string;
  sub: string;
  bar: string;
  fill: string;
  countColor: string;
};

const tiers: Tier[] = [
  {
    count: "100",
    label: "California High School Freshmen",
    sub: "The starting cohort",
    bar: "100%",
    fill: "bg-brand-blue-dark",
    countColor: "text-brand-blue-dark",
  },
  {
    count: "~87",
    label: "Graduate from High School",
    sub: "87.5% on-time graduation rate",
    bar: "87%",
    fill: "bg-brand-blue",
    countColor: "text-brand-blue",
  },
  {
    count: "~62",
    label: "Enter Higher Education",
    sub: "About 71% of HS grads — 4-year and community college combined",
    bar: "62%",
    fill: "bg-brand-blue-light",
    countColor: "text-brand-blue-light",
  },
  {
    count: "~47",
    label: "Complete A-G Requirements",
    sub: "The minimum sequence needed to apply to a UC or CSU",
    bar: "47%",
    fill: "bg-[#5B8DD6]",
    countColor: "text-brand-blue-light",
  },
  {
    count: "~35",
    label: "Hold a Bachelor's Degree by Their Late 20s",
    sub: "Combining direct enrollment + community college transfer",
    bar: "35%",
    fill: "bg-brand-gold",
    countColor: "text-brand-gold",
  },
  {
    count: "~22",
    label: "Direct 4-Year College Enrollees",
    sub: "The narrow original gateway for paid internships",
    bar: "22%",
    fill: "bg-[#D88A0F]",
    countColor: "text-[#D88A0F]",
  },
];

export function CaliforniaPipeline() {
  const reduce = useReducedMotion();
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-3">
            The California Pipeline
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
            From 100 Freshmen to ~35 Graduates
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Track a theoretical cohort of 100 California high school freshmen
            through the education system. The pipeline filters down at every
            stage — leaving most students without the four-year degree that has
            traditionally been the gateway to a paid internship.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto space-y-6 lg:space-y-5">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.label} delay={i * 0.08}>
              <div className="grid grid-cols-1 md:grid-cols-[5rem_minmax(0,16rem)_1fr] items-center gap-4 md:gap-6">
                <div
                  className={`text-4xl lg:text-5xl font-bold font-display leading-none ${tier.countColor}`}
                >
                  {tier.count}
                </div>

                <div className="min-w-0">
                  <div className="font-semibold text-base lg:text-lg text-brand-blue-dark leading-snug">
                    {tier.label}
                  </div>
                  <div className="text-xs lg:text-sm text-neutral-500 mt-1 leading-relaxed">
                    {tier.sub}
                  </div>
                </div>

                <div className="relative h-9 lg:h-10 bg-neutral-100 rounded-md overflow-hidden">
                  <motion.div
                    initial={reduce ? false : { width: 0 }}
                    whileInView={{ width: tier.bar }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { duration: 1.1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
                    }
                    className={`${tier.fill} h-full rounded-md`}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <p className="text-center text-sm text-neutral-500 mt-12 max-w-2xl mx-auto italic">
            Sources: California Department of Education (2025/2026), Public
            Policy Institute of California (April 2026).
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
