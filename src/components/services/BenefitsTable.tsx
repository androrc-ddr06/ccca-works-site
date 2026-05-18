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

function Check() {
  return (
    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
    </svg>
  );
}

function X() {
  return (
    <svg className="w-5 h-5 text-red-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
    </svg>
  );
}

export function BenefitsTable() {
  return (
    <section className="section-padding bg-[#F9FAFB]">
      <div className="container-wide">
        <FadeIn className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8] mb-4">
            Why Partner With CCCA Works!?
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            See what&apos;s included when you partner with us versus handling student hiring on your own.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="overflow-x-auto rounded-2xl shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="bg-[#2B5BA8]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#F5A623]">With CCCA Works!</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-200">Without Us</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}
                  >
                    <td className="px-6 py-4 text-sm text-[#374151]">{row.feature}</td>
                    <td className="px-6 py-4 text-center">{row.with ? <Check /> : <X />}</td>
                    <td className="px-6 py-4 text-center">{row.without ? <Check /> : <X />}</td>
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
