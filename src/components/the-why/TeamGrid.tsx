import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { team } from "@/data/team";

export function TeamGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-3">
            The People Behind the Mission
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue">
            Board of Directors
          </h2>
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <StaggerItem key={member.id}>
              <div className="bg-neutral-50 rounded-2xl p-7 text-center group hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
                <div className="relative w-24 h-24 rounded-full bg-brand-blue-pale flex items-center justify-center mx-auto mb-5 overflow-hidden border-4 border-white shadow-md">
                  {member.photo ? (
                    <Image src={member.photo} alt={member.name} fill sizes="96px" className="object-cover" />
                  ) : (
                    <svg className="w-10 h-10 text-brand-blue/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-bold text-neutral-800 text-lg">{member.name}</h3>
                <p className="text-brand-gold font-semibold text-sm mb-3">{member.title}</p>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5">{member.bio}</p>
                <div className="flex items-center justify-center gap-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-medium hover:text-brand-gold transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-medium hover:text-brand-gold transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
                      </svg>
                      Website
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
