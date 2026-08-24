import { FadeIn } from "@/components/animations/FadeIn";

const steps = [
  {
    number: "01",
    title: "CCCA Career Exploration Class",
    body: "Students meet and work with industry professionals across many different sectors. They complete hands-on projects with those professionals and learn about the real jobs and careers in each industry.",
  },
  {
    number: "02",
    title: "Goal Setting",
    body: "Students reflect on who they are, their strengths, weaknesses, and areas for growth. They define what they want for their future selves in terms of lifestyle, then focus on a career path that matches their interests and puts them on the road to the life they want.",
  },
  {
    number: "03",
    title: "Career Exploration — Two Job Shadows",
    body: "Students must successfully complete at least two off-campus job shadows. They are evaluated on the essential work-readiness skills employers count on every day.",
  },
  {
    number: "04",
    title: "Consistent Interest",
    body: "Throughout the process the student needs to show consistent interest in a particular career or job — not a one-time spark, but a pattern that signals real commitment.",
  },
  {
    number: "05",
    title: "Work Permit Qualifications",
    body: "To be considered for an internship, a student must have a 2.0 GPA or above, no significant behavior issues, and be 16 or older.",
  },
];

export function CourseworkSteps() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-3">
            Coursework &amp; Readiness
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-blue mb-4">
            Five Steps Before a Student Becomes an Intern
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Every CCCA Works! intern completes this pathway. By the time we
            connect them to an employer, they have already done the work.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08}>
              <div className="flex gap-6 lg:gap-8 pb-10 last:pb-0 relative">
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-7 lg:left-8 top-16 bottom-0 w-0.5 bg-brand-blue-pale"
                    aria-hidden="true"
                  />
                )}
                <div className="shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-brand-blue-dark text-brand-gold flex items-center justify-center font-bold font-display text-xl lg:text-2xl shadow-md">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl lg:text-2xl font-bold text-brand-blue-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
