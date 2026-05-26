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
    <section className="section-padding bg-[#F9FAFB]">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            Paid vs. Unpaid Internships
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8] mb-4">
            The Catch
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            This is the most critical distinction in the modern workforce. The
            effectiveness of an internship drops drastically if it is unpaid.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
              <thead>
                <tr className="bg-[#1E3F7A] text-white">
                  <th className="text-left text-sm font-semibold uppercase tracking-wide px-6 py-5">
                    Metric
                  </th>
                  <th className="text-left text-sm font-semibold uppercase tracking-wide px-6 py-5 bg-[#F5A623] text-[#1E3F7A]">
                    Paid Internships
                  </th>
                  <th className="text-left text-sm font-semibold uppercase tracking-wide px-6 py-5">
                    Unpaid Internships
                  </th>
                  <th className="text-left text-sm font-semibold uppercase tracking-wide px-6 py-5">
                    No Internship
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}
                  >
                    <td className="px-6 py-5 font-semibold text-[#1F2937]">
                      {row.metric}
                    </td>
                    <td className="px-6 py-5 text-[#1E3F7A] font-semibold bg-[#FFF7E6]">
                      {row.paid}
                    </td>
                    <td className="px-6 py-5 text-[#4B5563]">{row.unpaid}</td>
                    <td className="px-6 py-5 text-[#4B5563]">{row.none}</td>
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
