"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1E3F7A]">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3F7A] via-[#2B5BA8] to-[#1E3F7A]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(to right, #F5A623 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#F5A623]/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#3D74C8]/30 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
          Now Accepting Employer Partners & Student Applications
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6"
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
          className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          CCCA Works! bridges the gap between high school students and meaningful
          careers — placing student interns with employer partners through a fully
          managed, compliant EOR model.
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
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-blue-200"
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs"
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
