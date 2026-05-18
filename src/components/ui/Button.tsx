"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#F5A623] text-[#1F2937] hover:bg-[#D4890A] font-semibold shadow-sm",
  secondary:
    "bg-[#2B5BA8] text-white hover:bg-[#1E3F7A] font-semibold shadow-sm",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-[#2B5BA8] font-semibold",
  ghost:
    "text-[#2B5BA8] hover:bg-[#EEF4FF] font-medium",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className,
  disabled,
  loading,
  type = "button",
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {children}
    </motion.button>
  );
}
