import { FadeIn } from "@/components/animations/FadeIn";

const rows = [
  { feature: "Employer of Record coverage", with: true, without: false },
  { feature: "Workers' compensation insurance", with: true, without: false },
  { feature: "Payroll processing & tax filing", with: true, without: false },
  { feature: "Labor law compliance management", with: true, without: false },
  { feature: "Pre-screened, career-ready candidates", with: true, without: false },
  { feature: "Ongoing placement support", with: true, without: false },
  { feature: "Transportation assistance for interns", with: true, without: false },
  { feature: "No upfront placement fees", with: true, without: false },
];

function Cell({ included }: { included: boolean }) {
  return (
    <>
      {included ? (
        <svg aria-hidden="true" className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
        </svg>
      ) : (
        <svg aria-hidden="true" className="w-5 h-5 text-red-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
        </svg>
      )}
      <span className="sr-only">{included ? "Included" : "Not included"}</span>
    </>
  );
}

export function BenefitsTable() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-wide">
        <FadeIn className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
            Why Partner With CCCA Works!?
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            See what&apos;s included when you partner with us versus handling student hiring on your own.
          </p>
        </FadeIn>

        {/* Mobile: stacked cards (no horizontal scroll) */}
        <FadeIn className="md:hidden space-y-3">
          {rows.map((row) => (
            <div key={row.feature} className="bg-white rounded-xl p-5 shadow-[var(--shadow-card)]">
              <p className="font-semibold text-neutral-800 mb-3">{row.feature}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center justify-between rounded-lg bg-brand-blue-pale px-3 py-2">
                  <span className="font-medium text-brand-blue">With us</span>
                  <Cell included={row.with} />
                </div>
                <div className="flex items-center justify-between rounded-lg bg-neutral-100 px-3 py-2">
                  <span className="font-medium text-neutral-600">Without</span>
                  <Cell included={row.without} />
                </div>
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Desktop: full comparison table */}
        <FadeIn className="hidden md:block">
          <div className="overflow-x-auto rounded-2xl shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[480px]">
              <caption className="sr-only">
                Comparison of what&apos;s included with CCCA Works! versus handling student hiring on your own
              </caption>
              <thead>
                <tr className="bg-brand-blue">
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-white">Feature</th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-brand-gold">With CCCA Works!</th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-blue-200">Without Us</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}
                  >
                    <th scope="row" className="px-6 py-4 text-left text-sm font-normal text-neutral-700">{row.feature}</th>
                    <td className="px-6 py-4 text-center"><Cell included={row.with} /></td>
                    <td className="px-6 py-4 text-center"><Cell included={row.without} /></td>
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
