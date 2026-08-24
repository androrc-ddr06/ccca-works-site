import { FadeIn } from "@/components/animations/FadeIn";

export function EmployerHandoff() {
  return (
    <section className="section-padding bg-brand-blue-dark text-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-4">
              The Handoff
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-balance">
              Once a student is ready, we handle the rest.
            </h2>
            <p className="text-lg text-blue-200 leading-relaxed mb-4">
              When a potential intern has met all the requirements, CCCA Works!
              connects with an employer to develop a contract.
            </p>
            <p className="text-lg text-blue-200 leading-relaxed">
              Interns are covered under the CCCA Works! workers&rsquo;
              compensation policy. We handle payroll services and support both
              the intern and the employer as questions or concerns come up on
              site.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
