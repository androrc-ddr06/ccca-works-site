import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
