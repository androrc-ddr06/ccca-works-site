export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "The Why", href: "/the-why" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "The Process", href: "/process" },
  { label: "Apprenticeships", href: "/pre-apprenticeships" },
  { label: "Media", href: "/media" },
  { label: "Documents", href: "/documents" },
  { label: "Board of Directors", href: "/board" },
];

export const DOCUSIGN_URL =
  process.env.NEXT_PUBLIC_DOCUSIGN_POWERFORM_URL ?? "#";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/cccaworks",
  facebook: "https://www.facebook.com/cccaworks",
  instagram: "https://www.instagram.com/cccaworks",
};

export const CONTACT_INFO = {
  phone: "(916) 234-0583",
  email: "info@cccaworks.org",
  address: "Sacramento, CA",
};

export const INDUSTRIES = [
  "Healthcare",
  "Education",
  "Technology",
  "Retail & Hospitality",
  "Government & Public Sector",
  "Finance & Insurance",
  "Construction & Trades",
  "Logistics & Transportation",
  "Non-Profit",
  "Other",
];
