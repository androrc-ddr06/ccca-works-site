import { FadeIn } from "@/components/animations/FadeIn";

export function HistorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3">
              Our History
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B5BA8]">
              How CCCA Works! Came Together
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="prose-content space-y-6 text-[#374151] leading-relaxed text-lg">
              <p>
                Before John Pellman joined forces with Kevin Dobson, Founder
                and Executive Director of{" "}
                <a
                  href="http://capcca.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2B5BA8] underline hover:text-[#F5A623] transition-colors"
                >
                  Capital College &amp; Career Academy
                </a>
                , he was working on his doctorate at the UC Davis CANDEL
                program. His dissertation,{" "}
                <a
                  href="https://www.proquest.com/openview/b526ff7fa46af479809955ef890c106a/1?pq-origsite=gscholar&cbl=18750&diss=y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2B5BA8] underline hover:text-[#F5A623] transition-colors"
                >
                  Why Am I Here? Making Career Education a Focal Point in
                  Secondary Education
                </a>
                , looked at how to make school more engaging by embedding
                high-quality career education into secondary school. Since
                opening CCCA in 2023, it has built one of the most innovative
                and comprehensive career education programs anywhere in public
                education. It is not based on pathways — it is based on
                exploration and building{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Social_capital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2B5BA8] underline hover:text-[#F5A623] transition-colors"
                >
                  social capital
                </a>
                .
              </p>

              <p>
                CCCA Works! came together to support the mission of Capital
                College &amp; Career Academy of providing paid internships
                within its high school program. From the moment Dr. Pellman,
                Founder and CEO of CCCA Works!, joined with Kevin Dobson, the
                development of this nonprofit organization became a goal. Since
                the school was founded in 2023, Dr. Pellman in collaboration
                with Kevin and the CCCA board members have worked tirelessly to
                come up with a program, establish nonprofit status, and secure
                a workers&rsquo; compensation policy. All of these pieces came
                together in early 2026.
              </p>

              <p>
                Since January 2026, CCCA Works! has been placing high school
                student interns in the field. We are continually looking for
                more partners who understand the need and the benefits of
                bringing on interns.
              </p>

              <p className="italic text-[#1E3F7A] font-semibold">
                As we always say, we cannot do this work without you.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 pt-8 border-t border-[#E5E7EB]">
              <p className="text-[#1E3F7A] font-bold text-lg">John Pellman</p>
              <p className="text-[#6B7280] text-sm">Founder &amp; CEO · May 2026</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
