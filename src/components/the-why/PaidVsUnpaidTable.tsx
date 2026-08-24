import { FadeIn } from "@/components/animations/FadeIn";

const rows = [
  {
    metric: "Full-Time Job Offers",
    paid: "~60–65% receive an offer",
    unpaid: "~35–40% receive an offer",
    none: "~35–37% receive an offer",
  },
  {
    metric: "Starting Salary",
    paid: "Significantly higher",
    unpaid: "On par with no internship",
    none: "Baseline",
  },
];

export function PaidVsUnpaidTable() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-3">
            Paid vs. Unpaid Internships
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
            The Catch
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            This is the most critical distinction in the modern workforce. The
            effectiveness of an internship drops drastically if it is unpaid.
          </p>
        </FadeIn>

        {/* Mobile: stacked cards (no horizontal scroll) */}
        <FadeIn delay={0.15} className="md:hidden max-w-md mx-auto space-y-4">
          {rows.map((row) => (
            <div key={row.metric} className="bg-white rounded-2xl p-5 shadow-[var(--shadow-card)]">
              <p className="font-bold text-neutral-800 mb-3">{row.metric}</p>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between gap-3 rounded-lg bg-[#FFF7E6] px-3 py-2">
                  <dt className="font-semibold text-brand-blue-dark">Paid Internships</dt>
                  <dd className="text-right font-medium text-brand-blue-dark">{row.paid}</dd>
                </div>
                <div className="flex justify-between gap-3 px-3 py-1">
                  <dt className="text-neutral-500">Unpaid Internships</dt>
                  <dd className="text-right text-neutral-600">{row.unpaid}</dd>
                </div>
                <div className="flex justify-between gap-3 px-3 py-1">
                  <dt className="text-neutral-500">No Internship</dt>
                  <dd className="text-right text-neutral-600">{row.none}</dd>
                </div>
              </dl>
            </div>
          ))}
        </FadeIn>

        {/* Desktop: full comparison table */}
        <FadeIn delay={0.15} className="hidden md:block">
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
              <caption className="sr-only">
                Outcomes by internship type: paid internships versus unpaid internships versus no internship
              </caption>
              <thead>
                <tr className="bg-brand-blue-dark text-white">
                  <th scope="col" className="text-left text-sm font-semibold uppercase tracking-wide px-6 py-5">
                    Metric
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold uppercase tracking-wide px-6 py-5 bg-brand-gold text-brand-blue-dark">
                    Paid Internships
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold uppercase tracking-wide px-6 py-5">
                    Unpaid Internships
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold uppercase tracking-wide px-6 py-5">
                    No Internship
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}
                  >
                    <th scope="row" className="text-left px-6 py-5 font-semibold text-neutral-800">
                      {row.metric}
                    </th>
                    <td className="px-6 py-5 text-brand-blue-dark font-semibold bg-[#FFF7E6]">
                      {row.paid}
                    </td>
                    <td className="px-6 py-5 text-neutral-600">{row.unpaid}</td>
                    <td className="px-6 py-5 text-neutral-600">{row.none}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
