import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { team } from "@/data/team";

export function TeamGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
            The People Behind the Mission
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8]">
            Meet Our Team
          </h2>
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <StaggerItem key={member.id}>
              <div className="bg-[#F9FAFB] rounded-2xl p-7 text-center group hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
                <div className="w-24 h-24 rounded-full bg-[#EEF4FF] flex items-center justify-center mx-auto mb-5 overflow-hidden border-4 border-white shadow-md">
                  {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-10 h-10 text-[#2B5BA8]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-bold text-[#1F2937] text-lg">{member.name}</h3>
                <p className="text-[#F5A623] font-semibold text-sm mb-3">{member.title}</p>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#2B5BA8] text-sm font-medium hover:text-[#F5A623] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
