"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

const stats = [
  { value: 50, suffix: "+", label: "Employer Partners" },
  { value: 200, suffix: "+", label: "Students Placed" },
  { value: 5, suffix: "+", label: "Years of Impact" },
  { value: 95, suffix: "%", label: "Completion Rate" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function MissionStrip() {
  return (
    <section className="bg-[#F5A623] py-14">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} direction="up">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#1E3F7A] font-display leading-none mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-[#1E3F7A]/80 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
