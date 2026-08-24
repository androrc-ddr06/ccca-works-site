import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "gold" | "gray";
  className?: string;
}

const variants = {
  blue: "bg-brand-blue-pale text-brand-blue",
  gold: "bg-[#FFF8E7] text-brand-gold-dark",
  gray: "bg-neutral-100 text-neutral-700",
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
