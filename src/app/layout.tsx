import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cccaworks.org"),
  title: {
    default: "CCCA Works! | Workforce Development & Internship Placement",
    template: "%s | CCCA Works!",
  },
  description:
    "CCCA Works! connects student interns with employer partners through a fully managed EOR model. Flexible, compliant, and cost-effective internship placement.",
  keywords: [
    "internship placement",
    "employer of record",
    "workforce development",
    "student internships",
    "EOR staffing",
    "Capra College",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cccaworks.org",
    siteName: "CCCA Works!",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCCA Works! | Workforce Development & Internship Placement",
    description:
      "Paid internships and a fully managed Employer of Record model connecting student talent with employer partners.",
  },
  robots: { index: true, follow: true },
};

// Organization structured data for rich search results.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CCCA Works!",
  alternateName: "Capra College Career Academy Works!",
  url: "https://www.cccaworks.org",
  logo: "https://www.cccaworks.org/logo.png",
  description:
    "Workforce development organization placing student interns with employer partners through a fully managed Employer of Record model.",
  email: CONTACT_INFO.email,
  telephone: "+1-916-234-0583",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sacramento",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
