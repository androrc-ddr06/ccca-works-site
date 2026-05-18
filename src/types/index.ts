export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo?: string;
  linkedin?: string;
}

export interface Partner {
  id: string;
  name: string;
  industry: string;
  logo?: string;
  website?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  organization: string;
  quote: string;
  photo?: string;
  category: "employer" | "student";
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface Document {
  id: string;
  title: string;
  description: string;
  fileType: "PDF" | "DOC" | "XLSX";
  fileSize: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  industry: string;
  audienceType: "employer" | "student";
  message: string;
}
