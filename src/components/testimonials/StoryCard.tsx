import { Testimonial } from "@/types";
import { Badge } from "@/components/ui/Badge";

export function StoryCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-[var(--shadow-card)] flex flex-col h-full group hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
      <svg className="w-7 h-7 text-[#F5A623] mb-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-[#374151] leading-relaxed flex-1 italic text-sm mb-6">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center justify-between gap-3 mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#EEF4FF] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-[#2B5BA8]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[#1F2937] text-sm">{t.name}</div>
            <div className="text-xs text-[#6B7280]">
              {t.title} · {t.organization}
            </div>
          </div>
        </div>
        <Badge variant={t.category === "employer" ? "blue" : "gold"}>
          {t.category === "employer" ? "Employer" : "Student"}
        </Badge>
      </div>
    </div>
  );
}
