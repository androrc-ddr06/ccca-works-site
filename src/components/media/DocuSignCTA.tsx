import { FadeIn } from "@/components/animations/FadeIn";
import { DOCUSIGN_URL } from "@/lib/constants";

export function DocuSignCTA() {
  return (
    <section className="section-padding bg-brand-blue-pale">
      <div className="container-wide">
        <FadeIn>
          <div className="bg-brand-blue rounded-3xl p-10 lg:p-14 text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Ready to Sign Your Agreement?
            </h2>
            <p className="text-blue-200 mb-8 max-w-md mx-auto leading-relaxed">
              Complete your partnership or enrollment agreement online in minutes using our secure DocuSign PowerForm.
            </p>
            <a
              href={DOCUSIGN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-neutral-800 font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg mb-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Sign Now via DocuSign
            </a>
            <div className="flex items-center justify-center gap-2 text-blue-300 text-sm mt-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secured by DocuSign · 256-bit encryption
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
