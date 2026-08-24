import { FadeIn } from "@/components/animations/FadeIn";

const sourceGroups = [
  {
    org: "National Association of Colleges and Employers (NACE)",
    items: [
      "2026 Internship & Co-op Report — intern-to-full-time conversion rate hit a five-year high at 63.1%; student acceptance rate of 88.3%.",
      "2026 Retention Metrics Data — over 75% of intern hires retained after one year vs. under 50% for hires with no internship.",
      "Historical Student Surveys (Classes of 2015–2024) — paid interns receive offers at over 60% vs. unpaid interns at ~35–37%.",
      "2025 Recruiting Benchmarks Report — traditional sourcing takes ~27 days from interview to offer plus ~9 days for acceptance.",
    ],
  },
  {
    org: "Public Policy Institute of California (PPIC)",
    items: [
      "College Completion in California (April 2026) — 4-year and 6-year completion breakdowns across UC, CSU, and private institutions.",
      "How Does College Completion in California Compare to Other States? (February 2026) — historical bachelor's attainment rates.",
    ],
  },
  {
    org: "California Department of Education",
    items: [
      "2025/2026 Dashboard and Graduation Release — state-level high school cohort graduation rate of 87.5% and A-G completion metrics.",
    ],
  },
  {
    org: "Society for Human Resource Management (SHRM)",
    items: [
      "2025/2026 Benchmarking Reports — national baseline Cost-Per-Hire of $5,475 for non-executive roles; $6,200–$12,000+ for technical roles.",
    ],
  },
  {
    org: "OECD & Education and Employers Taskforce",
    items: [
      "Longitudinal studies — students with 4+ structured employer encounters in school were 86% less likely to be NEET and earned up to 16% more in their mid-20s.",
    ],
  },
  {
    org: "Harvard Business Review & Human Capital Institute",
    items: [
      "Internship Premium studies (Journal of Vocational Behavior, HBR) — relevant internships yield a 14–20% callback and offer-rate advantage.",
      "Standard external hires take 3–6 months to reach full productivity vs. interns who hit peak productivity on day one.",
    ],
  },
];

export function Sources() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-wide">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <details className="group bg-white rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
              <summary className="cursor-pointer list-none px-8 py-6 flex items-center justify-between hover:bg-neutral-50 transition-colors">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-1">
                    Methodology
                  </p>
                  <h3 className="text-xl lg:text-2xl font-bold text-brand-blue-dark">
                    Sources &amp; Further Reading
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-brand-blue transition-transform duration-300 group-open:rotate-180 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <div className="px-8 pb-8 space-y-8 border-t border-neutral-200 pt-6">
                {sourceGroups.map((group) => (
                  <div key={group.org}>
                    <h4 className="font-bold text-brand-blue-dark text-base mb-3">
                      {group.org}
                    </h4>
                    <ul className="space-y-2">
                      {group.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-neutral-600 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-brand-gold before:font-bold"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
