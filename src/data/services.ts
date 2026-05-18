import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "eor",
    icon: "shield",
    title: "Employer of Record (EOR)",
    description:
      "CCCA Works! serves as the legal employer for all student interns, transferring liability and administrative burden away from your organization entirely.",
    bullets: [
      "Full workers' compensation coverage",
      "Payroll processing & tax withholding",
      "Labor law compliance management",
      "Unemployment insurance handled",
    ],
  },
  {
    id: "placement",
    icon: "users",
    title: "Paid Internship Placement",
    description:
      "We match pre-vetted student candidates to your open positions, handling the intake, screening, and onboarding process from start to finish.",
    bullets: [
      "Part-time during the school year",
      "Full-time summer placements available",
      "Industry-matched candidate screening",
      "Dedicated placement coordinator",
    ],
  },
  {
    id: "contracts",
    icon: "document",
    title: "Flexible Contract Terms",
    description:
      "Choose a contract length that fits your project timeline — from short-term semester placements to extended co-op arrangements, with early termination options built in.",
    bullets: [
      "Semester, quarterly, or custom terms",
      "Early termination clause included",
      "Renewal and extension options",
      "No long-term commitments required",
    ],
  },
  {
    id: "benefits",
    icon: "truck",
    title: "Transportation & Support",
    description:
      "We go beyond placement — providing transportation assistance and ongoing support to ensure student interns show up ready to contribute from day one.",
    bullets: [
      "Transportation stipend assistance",
      "Ongoing intern check-ins",
      "Professional development resources",
      "Issue resolution & mediation",
    ],
  },
];
