"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "li";
}

export function Card({ children, className, hover = false, as: Tag = "div" }: CardProps) {
  const reduce = useReducedMotion();
  const base = cn(
    "bg-white rounded-2xl p-6 shadow-[var(--shadow-card)]",
    hover && "transition-shadow duration-300",
    className
  );

  if (hover && !reduce) {
    return (
      <motion.div
        whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(43 91 168 / 0.12), 0 10px 10px -5px rgb(43 91 168 / 0.06)" }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={base}
      >
        {children}
      </motion.div>
    );
  }

  return <Tag className={base}>{children}</Tag>;
}
