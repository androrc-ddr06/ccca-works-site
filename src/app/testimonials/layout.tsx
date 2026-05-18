import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real results from the employers and students who've experienced CCCA Works! firsthand. Filter by employer or student testimonials.",
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
