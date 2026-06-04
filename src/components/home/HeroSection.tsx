"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

// Curated landscape photos that read well as full-bleed hero backgrounds.
const heroImages = [
  { src: "/media/photos/trades-day.jpg", alt: "Students in hard hats at a CCCA Works! trades day", position: "center 40%" },
  { src: "/media/photos/welder-arc.jpg", alt: "A student welding in a fabrication shop", position: "center 45%" },
  { src: "/media/photos/career-fair.jpg", alt: "An industry partner meeting students at a career fair", position: "center 35%" },
  { src: "/media/photos/it-class-group.jpg", alt: "Students collaborating on a hands-on technology project", position: "center 40%" },
  { src: "/media/photos/metal-fab.jpg", alt: "Students fabricating metal in a workshop", position: "center 50%" },
];

const SLIDE_MS = 5000;

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1E3F7A]">
      {/* Looping photo background */}
      <div className="absolute inset-0">
        {heroImages.map((img, i) => {
          const active = i === index;
          return (
            <motion.div
              key={img.src}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: active ? 1 : 0, scale: active ? 1.08 : 1 }}
              transition={{
                opacity: { duration: 1.6, ease: "easeInOut" },
                scale: { duration: SLIDE_MS / 1000 + 1.6, ease: "linear" },
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: img.position }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Branded scrim — dark enough for legible text, light enough to show the photos */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2347]/80 via-[#0F2347]/55 to-[#0F2347]/85" />

      {/* Content */}
      <div className="relative z-10 container-wide text-center px-4 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 max-w-full text-center bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm text-white/90 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse shrink-0" />
          Now Accepting Employer Partners &amp; Student Applications
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6 [text-shadow:0_2px_18px_rgba(0,0,0,0.6)]"
        >
          Connecting{" "}
          <span className="text-[#F5A623]">Talent</span>
          <br />
          With Opportunity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]"
        >
          CCCA Works! stands at the intersection of school and career. We
          transition young people into the world of work through paid internships,
          creating a direct pipeline to high-quality careers and apprenticeships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/contact" variant="primary" size="lg">
            Partner With Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Apply as a Student
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-blue-100"
        >
          {["Workers' Comp Included", "Payroll Managed", "No Upfront Cost", "Flexible Terms"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              {item}
            </div>
          ))}
        </motion.div>

        {/* Slide indicators */}
        <div className="mt-12 flex items-center justify-center gap-2.5">
          {heroImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[#F5A623]" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
