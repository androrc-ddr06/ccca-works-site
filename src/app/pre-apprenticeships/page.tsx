import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ImageBanner } from "@/components/ui/ImageBanner";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pre-Apprenticeships & Apprenticeships",
  description:
    "CCCA Works! is building pre-apprenticeship and apprenticeship pipelines from high school into California's expanding earn-and-learn economy.",
};

const timeline = [
  {
    number: "01",
    title: "The Catalyst: The “500,000 by 2029” Goal (2018)",
    body: "The modern era of California’s apprenticeship push began when Governor Gavin Newsom took office. Facing stark income inequality and a shifting economy, his administration identified “earn-and-learn” pathways as a primary strategy for economic mobility. The state set an ambitious, nation-leading target to expand its apprenticeship ecosystem to serve 500,000 active apprentices by 2029 — a target it surpassed early, crossing over 670,000 total earn-and-learn opportunities.",
  },
  {
    number: "02",
    title: "Structural Evolution: Expansion Beyond Construction (2019–2022)",
    body: "Historically, over 80% of California apprentices were in the building trades. To scale the system, the state pivoted toward “non-traditional” sectors. The California Apprenticeship Initiative (CAI), spearheaded by the California Community Colleges Chancellor’s Office, poured tens of millions into new debt-free pathways. Between 2018 and 2024, registered apprenticeships grew by 473% in advanced manufacturing, 400% in healthcare, and 45% in IT.",
  },
  {
    number: "03",
    title: "Policy Alignment: The Five-Point Action Plan (2022)",
    body: "Realizing existing infrastructure couldn’t support half a million apprentices, the Department of Industrial Relations (DIR) and the Division of Apprenticeship Standards (DAS) released a Five-Point Action Plan. It formalized the modern framework by supporting regional and industry intermediaries (like the LAUNCH Apprenticeship Network), smoothing state registration for non-traditional industries, and centering equity to recruit more women, people of color, and foster youth.",
  },
  {
    number: "04",
    title: "Massive Funding and Institutional Integration (2023–2025)",
    body: "The movement shifted from pilot programs to a deeply funded, institutionalized mandate. Apprenticeship Innovation Funding (AIF) gave continuous support grants to non-traditional program sponsors. The Master Plan for Career Education integrated apprenticeships into the state’s core educational blueprint, connecting high schools, community colleges, and local industries. Targeted grants like the California Opportunity Youth Apprenticeship (COYA) intentionally built pre-apprenticeships for disconnected or unhoused youth.",
  },
  {
    number: "05",
    title: "Current State: The Multilateral Workforce Strategy",
    body: "The movement has evolved from “on-the-job training for trades” into a comprehensive regional economic strategy. Under the state’s Jobs First Initiative, apprenticeship programs are tied directly to regional economic priorities — clean energy in the Inland Empire, cybersecurity in Sacramento, biotech in the Bay Area. By using community colleges as academic backbones and reimbursing employers for training costs, California has turned apprenticeships into a competitive alternative to the traditional college-to-career pipeline.",
  },
];

export default function PreApprenticeshipsPage() {
  return (
    <>
      <PageHero
        title="Pre-Apprenticeships & Apprenticeships"
        subtitle="Building pipelines from high school straight into California's earn-and-learn economy."
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                CCCA Works! is developing pre-apprenticeship and apprenticeship
                programs. At present we have a Pre-Apprenticeship agreement with
                the International Brotherhood of Electrical Workers (IBEW) and are
                in discussions with many other organizations — including NextGen
                Policy and the Department of Apprenticeship Standards (DAS) — to
                create pipelines from high school straight into apprenticeships.
                We know that paid internships are a critical step in creating that
                pipeline.
              </p>
              <p>
                Since 2018 California has made a significant turn toward expanding
                traditional and non-traditional apprenticeships.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <ImageBanner
        src="/media/photos/welder-arc.jpg"
        alt="A CCCA Works! student welding in a fabrication shop"
        eyebrow="Earn While You Learn"
        title="From high school straight into the trades."
        caption="Pre-apprenticeships turn hands-on training into a debt-free path to a skilled career."
        position="center 40%"
      />

      {/* Timeline */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <FadeIn className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-3">
              How We Got Here
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue">
              California&rsquo;s Apprenticeship Expansion Since 2018
            </h2>
          </FadeIn>

          <StaggerChildren className="grid gap-6 max-w-4xl mx-auto">
            {timeline.map((item) => (
              <StaggerItem key={item.number}>
                <Card hover className="flex gap-5 lg:gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-brand-blue-dark text-brand-gold flex items-center justify-center font-bold font-display text-lg lg:text-xl shadow-md">
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-brand-blue-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">{item.body}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn>
            <div className="bg-brand-blue-dark rounded-3xl p-10 lg:p-14 text-center text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Partner With Us on the Future of Apprenticeships
              </h2>
              <p className="text-blue-200 max-w-2xl mx-auto mb-8 leading-relaxed">
                To partner with us on the development of pre-apprenticeship and
                apprenticeship programs, please reach out.
              </p>
              {/* TODO: swap mailto for a Calendly/booking link once the client provides one. */}
              <Button
                href={`mailto:${CONTACT_INFO.email}?subject=Discovery%20Call%20%E2%80%94%20Pre-Apprenticeships`}
                variant="primary"
                size="lg"
              >
                Schedule a Discovery Call
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
