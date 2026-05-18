"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { FilterTabs } from "@/components/testimonials/FilterTabs";
import { StoryCard } from "@/components/testimonials/StoryCard";
import { testimonials } from "@/data/testimonials";
import { FadeIn } from "@/components/animations/FadeIn";

type Category = "all" | "employer" | "student";

export default function TestimonialsPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? testimonials : testimonials.filter((t) => t.category === active);

  return (
    <>
      <PageHero
        title="Success Stories"
        subtitle="Real results from the employers and students who've experienced CCCA Works! firsthand."
      />

      <section className="section-padding bg-[#F9FAFB]">
        <div className="container-wide">
          <FadeIn className="mb-10">
            <FilterTabs active={active} onChange={setActive} />
          </FadeIn>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((t) => (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <StoryCard t={t} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
