import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "gold" | "gray";
  className?: string;
}

const variants = {
  blue: "bg-[#EEF4FF] text-[#2B5BA8]",
  gold: "bg-[#FFF8E7] text-[#D4890A]",
  gray: "bg-[#F3F4F6] text-[#374151]",
};

export function Badge({ children, variant = "blue", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
