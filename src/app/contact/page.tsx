import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/animations/FadeIn";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CCCA Works! to start a partnership, apply as a student, or ask any questions about our internship placement program.",
};

const contactItems = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
    label: "Phone",
    value: CONTACT_INFO.phone,
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    label: "Email",
    value: CONTACT_INFO.email,
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    label: "Location",
    value: CONTACT_INFO.address,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Whether you're an employer looking to partner or a student ready to apply — we'd love to hear from you."
      />

      <section className="section-padding bg-[#F9FAFB]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="bg-[#2B5BA8] rounded-3xl p-8 text-white sticky top-28">
                <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                <p className="text-blue-200 text-sm mb-8">
                  Reach us directly or fill out the form and we&apos;ll be in touch within 1 business day.
                </p>
                <ul className="space-y-5">
                  {contactItems.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-[#F5A623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-blue-300 uppercase tracking-wide font-semibold mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-white text-sm">{item.value}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right" className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[var(--shadow-card)]">
                <h2 className="text-2xl font-bold text-[#1F2937] mb-1">Send Us a Message</h2>
                <p className="text-[#6B7280] text-sm mb-7">
                  Tell us about yourself and we&apos;ll connect you with the right team.
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
