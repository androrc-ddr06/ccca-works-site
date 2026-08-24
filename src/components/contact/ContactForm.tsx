"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { INDUSTRIES } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";
import type { ContactFormData, EmployerInterest } from "@/types";

type Status = "idle" | "loading" | "success" | "error";

const emptyForm: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  industry: "",
  audienceType: "employer",
  message: "",
  companyName: "",
  interestType: "",
};

const INTEREST_OPTIONS: { value: EmployerInterest; label: string; description: string }[] = [
  {
    value: "Career Exposure",
    label: "Career Exposure",
    description:
      "Coming to campus, speaking with students, and doing a hands-on project with them. A 3–6 hour commitment over 2 days.",
  },
  {
    value: "Career Exploration",
    label: "Career Exploration",
    description:
      "Hosting two (or more) students for a Job Shadow at my company. A 12-week commitment — we provide the transportation and work with you to develop the program.",
  },
  {
    value: "Career Preparation",
    label: "Career Preparation",
    description: "Hiring students to be paid interns on site.",
  },
  {
    value: "Not sure",
    label: "Not sure which suits us best",
    description: "I’d like more information.",
  },
];

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(emptyForm);
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData | "resume", string>>>({});
  // Honeypot — real users never see or fill this; bots that auto-fill get dropped.
  const [honeypot, setHoneypot] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isEmployer = form.audienceType === "employer";

  function validate(): boolean {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.industry) e.industry = "Please select your industry";
    if (!form.message.trim()) e.message = "This field is required";
    if (isEmployer) {
      if (!form.companyName.trim()) e.companyName = "Company name is required";
      if (!form.interestType) e.interestType = "Please choose an option";
    }
    if (resume) {
      if (resume.size > MAX_RESUME_BYTES) {
        e.resume = "File is too large (max 5 MB)";
      } else if (!ALLOWED_RESUME_TYPES.includes(resume.type)) {
        e.resume = "Please upload a PDF, DOC, or DOCX file";
      }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const body = new FormData();
      body.append("name", form.name);
      body.append("phone", form.phone);
      body.append("email", form.email);
      body.append("industry", form.industry);
      body.append("audienceType", form.audienceType);
      body.append("message", form.message);
      body.append("company_website", honeypot); // honeypot
      if (isEmployer) {
        body.append("companyName", form.companyName);
        body.append("interestType", form.interestType);
      } else if (resume) {
        body.append("resume", resume);
      }

      const res = await fetch("/api/contact", { method: "POST", body });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  function setAudience(type: "employer" | "student") {
    setForm((f) => ({ ...f, audienceType: type }));
    setErrors({});
  }

  if (status === "success") {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg aria-hidden="true" className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 text-sm">
          {isEmployer
            ? "Thank you for your interest in partnering with us. Our team will reach out within 1 business day to talk through next steps."
            : "Thank you for applying! We'll review your submission and email you within 1 business day with your next steps — keep an eye on your inbox."}
        </p>
      </div>
    );
  }

  const field = "block w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all";
  const errorField = "border-red-400 focus:border-red-400 focus:ring-red-100";
  const label = "block text-sm font-semibold text-neutral-700 mb-1.5";
  const errMsg = "text-xs text-red-500 mt-1";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot: hidden from sighted + assistive users; only bots fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden" style={{ position: "absolute" }}>
        <label htmlFor="company_website">Company website (leave blank)</label>
        <input
          id="company_website"
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {status === "error" && (
        <div role="alert" className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:info@cccaworks.org" className="underline font-medium">
            info@cccaworks.org
          </a>
        </div>
      )}

      {/* Audience type */}
      <div>
        <label className={label}>I am...</label>
        <div className="flex gap-3">
          {(["employer", "student"] as const).map((type) => (
            <label
              key={type}
              className={`flex-1 flex items-center gap-2.5 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                form.audienceType === type
                  ? "border-brand-blue bg-brand-blue-pale"
                  : "border-neutral-200 hover:border-neutral-300"
              }`}
            >
              <input
                type="radio"
                name="audienceType"
                value={type}
                checked={form.audienceType === type}
                onChange={() => setAudience(type)}
                className="hidden"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  form.audienceType === type ? "border-brand-blue" : "border-neutral-300"
                }`}
              >
                {form.audienceType === type && (
                  <div className="w-2 h-2 rounded-full bg-brand-blue" />
                )}
              </div>
              <span className="text-sm font-medium capitalize text-neutral-700">
                {type === "employer" ? "An Employer" : "A Student"}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Company name (employer only) */}
      {isEmployer && (
        <div>
          <label htmlFor="companyName" className={label}>Company Name *</label>
          <input
            id="companyName"
            type="text"
            placeholder="Acme Co."
            autoComplete="organization"
            aria-required={true}
            aria-invalid={!!errors.companyName}
            aria-describedby={errors.companyName ? "companyName-error" : undefined}
            value={form.companyName}
            onChange={(e) => setForm((f) => ({ ...f, companyName: e.target.value }))}
            className={`${field} ${errors.companyName ? errorField : ""}`}
          />
          {errors.companyName && <p id="companyName-error" className={errMsg}>{errors.companyName}</p>}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className={label}>Full Name *</label>
        <input
          id="name"
          type="text"
          placeholder="Jane Smith"
          autoComplete="name"
          aria-required={true}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className={`${field} ${errors.name ? errorField : ""}`}
        />
        {errors.name && <p id="name-error" className={errMsg}>{errors.name}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className={label}>Phone Number *</label>
          <input
            id="phone"
            type="tel"
            placeholder="(555) 000-0000"
            autoComplete="tel"
            aria-required={true}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: formatPhone(e.target.value) }))}
            className={`${field} ${errors.phone ? errorField : ""}`}
          />
          {errors.phone && <p id="phone-error" className={errMsg}>{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={label}>Email Address *</label>
          <input
            id="email"
            type="email"
            placeholder="jane@company.com"
            autoComplete="email"
            aria-required={true}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className={`${field} ${errors.email ? errorField : ""}`}
          />
          {errors.email && <p id="email-error" className={errMsg}>{errors.email}</p>}
        </div>
      </div>

      {/* Industry */}
      <div>
        <label htmlFor="industry" className={label}>Industry / Sector *</label>
        <select
          id="industry"
          aria-required={true}
          aria-invalid={!!errors.industry}
          aria-describedby={errors.industry ? "industry-error" : undefined}
          value={form.industry}
          onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
          className={`${field} ${errors.industry ? errorField : ""}`}
        >
          <option value="">Select your industry...</option>
          {INDUSTRIES.map((ind) => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>
        {errors.industry && <p id="industry-error" className={errMsg}>{errors.industry}</p>}
      </div>

      {/* Employer interest (employer only) */}
      {isEmployer && (
        <div>
          <label className={label}>I&apos;m interested in... *</label>
          <div className="space-y-2.5">
            {INTEREST_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  form.interestType === opt.value
                    ? "border-brand-blue bg-brand-blue-pale"
                    : "border-neutral-200 hover:border-neutral-300"
                }`}
              >
                <input
                  type="radio"
                  name="interestType"
                  value={opt.value}
                  checked={form.interestType === opt.value}
                  onChange={() => setForm((f) => ({ ...f, interestType: opt.value }))}
                  className="hidden"
                />
                <div
                  className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    form.interestType === opt.value ? "border-brand-blue" : "border-neutral-300"
                  }`}
                >
                  {form.interestType === opt.value && (
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  )}
                </div>
                <span className="text-sm text-neutral-700">
                  <span className="font-semibold block">{opt.label}</span>
                  <span className="text-neutral-500">{opt.description}</span>
                </span>
              </label>
            ))}
          </div>
          {errors.interestType && <p className={errMsg}>{errors.interestType}</p>}
        </div>
      )}

      {/* Resume upload (student only) */}
      {!isEmployer && (
        <div>
          <label htmlFor="resume" className={label}>Resume (optional)</label>
          <input
            ref={fileInputRef}
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            aria-invalid={!!errors.resume}
            aria-describedby={errors.resume ? "resume-help resume-error" : "resume-help"}
            onChange={(e) => setResume(e.target.files?.[0] ?? null)}
            className="block w-full text-sm text-neutral-700 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-blue-pale file:text-brand-blue hover:file:bg-[#dbe7fb] cursor-pointer"
          />
          <p id="resume-help" className="text-xs text-neutral-400 mt-1">PDF, DOC, or DOCX — up to 5 MB.</p>
          {errors.resume && <p id="resume-error" className={errMsg}>{errors.resume}</p>}
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className={label}>
          {isEmployer
            ? "Comments / Message *"
            : "Tell us why you want a paid internship aside from earning a paycheck. *"}
        </label>
        <textarea
          id="message"
          rows={4}
          maxLength={5000}
          placeholder={
            isEmployer
              ? "Tell us about your organization, your hiring needs, or any questions you have..."
              : "Share what you're hoping to learn, the skills you want to build, or the career you're curious about..."
          }
          aria-required={true}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className={`${field} resize-none ${errors.message ? errorField : ""}`}
        />
        {errors.message && <p id="message-error" className={errMsg}>{errors.message}</p>}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
