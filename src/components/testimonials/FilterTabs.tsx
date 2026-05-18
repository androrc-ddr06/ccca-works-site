"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Category = "all" | "employer" | "student";

interface FilterTabsProps {
  active: Category;
  onChange: (c: Category) => void;
}

const tabs: { label: string; value: Category }[] = [
  { label: "All Stories", value: "all" },
  { label: "Employer Partners", value: "employer" },
  { label: "Student Interns", value: "student" },
];

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div className="flex gap-1 bg-[#F3F4F6] p-1 rounded-xl w-fit mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 focus:outline-none",
            active === tab.value
              ? "text-[#2B5BA8]"
              : "text-[#6B7280] hover:text-[#374151]"
          )}
        >
          {active === tab.value && (
            <motion.span
              layoutId="tab-bg"
              className="absolute inset-0 bg-white rounded-lg shadow-sm"
              style={{ zIndex: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
