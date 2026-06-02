import type { Document } from "@/types";

export const documents: Document[] = [
  // ── Job Shadow ──────────────────────────────────────────────
  {
    id: "livescan",
    title: "Livescan",
    description:
      "Livescan background-check form required before a student begins a job shadow placement.",
    fileType: "PDF",
    fileSize: "",
    // TODO: replace with real document link from client.
    href: "#",
    category: "Job Shadow",
  },
  {
    id: "job-shadow-company-agreement",
    title: "Job Shadow Company Agreement",
    description:
      "Agreement between CCCA Works! and the host company outlining the terms of a student job shadow.",
    fileType: "PDF",
    fileSize: "",
    // TODO: replace with real document link from client.
    href: "#",
    category: "Job Shadow",
  },
  {
    id: "job-shadow-handbook",
    title: "CCCA Job Shadow Handbook",
    description:
      "The handbook used to prepare students for their off-campus job shadow experiences with industry partners.",
    fileType: "PDF",
    fileSize: "",
    href: "https://drive.google.com/file/d/1-hHKtAwMZx4oVo5wD06kQodDhcjrwMRI/view?usp=sharing",
    category: "Job Shadow",
  },

  // ── Paid Internship ─────────────────────────────────────────
  {
    id: "partner-services-agreement",
    title: "Sample Partner Workforce Services Agreement",
    description:
      "Review the standard agreement that defines the partnership between CCCA Works! and employer partners hosting student interns.",
    fileType: "PDF",
    fileSize: "",
    href: "https://drive.google.com/file/d/1p5Faa4VUOO1VgSJZfp_KQIAbo-Lb7Odj/view?usp=sharing",
    category: "Paid Internship",
  },
  {
    id: "bylaws",
    title: "CCCA Works! Bylaws",
    description:
      "The governing bylaws of CCCA Works! as a 501(c)(3) nonprofit organization.",
    fileType: "PDF",
    fileSize: "",
    href: "https://drive.google.com/file/d/1p5Faa4VUOO1VgSJZfp_KQIAbo-Lb7Odj/view?usp=sharing",
    category: "Paid Internship",
  },
  {
    id: "workers-comp-policy",
    title: "Workers' Compensation Policy",
    description:
      "Proof of the active workers' compensation policy that covers every CCCA Works! intern placement.",
    fileType: "PDF",
    fileSize: "",
    href: "https://drive.google.com/file/d/1GAkNIuHohacHdMfaJeqzrlp7FkyQ1tro/view?usp=sharing",
    category: "Paid Internship",
  },
];
