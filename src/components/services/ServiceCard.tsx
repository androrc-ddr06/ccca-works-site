import { Service } from "@/types";

const iconPaths: Record<string, React.ReactNode> = {
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  users: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  ),
  document: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  ),
  truck: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17a2 2 0 100-4 2 2 0 000 4zm9 0a2 2 0 100-4 2 2 0 000 4zm-9-5h9m-9 0l-1-5h11l-1 5M3 7h4" />
  ),
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] group hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="w-14 h-14 rounded-2xl bg-brand-blue-pale flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300 shrink-0">
        <svg
          className="w-7 h-7 text-brand-blue group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {iconPaths[service.icon]}
        </svg>
      </div>
      <h3 className="text-xl font-bold text-neutral-800 mb-3">{service.title}</h3>
      <p className="text-neutral-500 leading-relaxed text-sm mb-5 flex-1">{service.description}</p>
      <ul className="space-y-2 mt-auto">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-neutral-700">
            <svg className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
