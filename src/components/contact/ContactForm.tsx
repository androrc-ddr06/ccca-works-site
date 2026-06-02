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

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(emptyForm);
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData | "resume", string>>>({});
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
    if (resume && resume.size > MAX_RESUME_BYTES) {
      e.resume = "File is too large (max 5 MB)";
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
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 text-sm">
          Thank you for reaching out. We&apos;ll be in touch within 1 business day.
        </p>
      </div>
    );
  }

  const field = "block w-full rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] focus:border-[#2B5BA8] focus:ring-2 focus:ring-[#2B5BA8]/20 outline-none transition-all";
  const errorField = "border-red-400 focus:border-red-400 focus:ring-red-100";
  const label = "block text-sm font-semibold text-[#374151] mb-1.5";
  const errMsg = "text-xs text-red-500 mt-1";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
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
                  ? "border-[#2B5BA8] bg-[#EEF4FF]"
                  : "border-[#E5E7EB] hover:border-[#D1D5DB]"
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
                  form.audienceType === type ? "border-[#2B5BA8]" : "border-[#D1D5DB]"
                }`}
              >
                {form.audienceType === type && (
                  <div className="w-2 h-2 rounded-full bg-[#2B5BA8]" />
                )}
              </div>
              <span className="text-sm font-medium capitalize text-[#374151]">
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
            value={form.companyName}
            onChange={(e) => setForm((f) => ({ ...f, companyName: e.target.value }))}
            className={`${field} ${errors.companyName ? errorField : ""}`}
          />
          {errors.companyName && <p className={errMsg}>{errors.companyName}</p>}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className={label}>Full Name *</label>
        <input
          id="name"
          type="text"
          placeholder="Jane Smith"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className={`${field} ${errors.name ? errorField : ""}`}
        />
        {errors.name && <p className={errMsg}>{errors.name}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className={label}>Phone Number *</label>
          <input
            id="phone"
            type="tel"
            placeholder="(555) 000-0000"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: formatPhone(e.target.value) }))}
            className={`${field} ${errors.phone ? errorField : ""}`}
          />
          {errors.phone && <p className={errMsg}>{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={label}>Email Address *</label>
          <input
            id="email"
            type="email"
            placeholder="jane@company.com"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className={`${field} ${errors.email ? errorField : ""}`}
          />
          {errors.email && <p className={errMsg}>{errors.email}</p>}
        </div>
      </div>

      {/* Industry */}
      <div>
        <label htmlFor="industry" className={label}>Industry / Sector *</label>
        <select
          id="industry"
          value={form.industry}
          onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
          className={`${field} ${errors.industry ? errorField : ""}`}
        >
          <option value="">Select your industry...</option>
          {INDUSTRIES.map((ind) => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>
        {errors.industry && <p className={errMsg}>{errors.industry}</p>}
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
                    ? "border-[#2B5BA8] bg-[#EEF4FF]"
                    : "border-[#E5E7EB] hover:border-[#D1D5DB]"
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
                    form.interestType === opt.value ? "border-[#2B5BA8]" : "border-[#D1D5DB]"
                  }`}
                >
                  {form.interestType === opt.value && (
                    <div className="w-2 h-2 rounded-full bg-[#2B5BA8]" />
                  )}
                </div>
                <span className="text-sm text-[#374151]">
                  <span className="font-semibold block">{opt.label}</span>
                  <span className="text-[#6B7280]">{opt.description}</span>
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
            onChange={(e) => setResume(e.target.files?.[0] ?? null)}
            className="block w-full text-sm text-[#374151] file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#EEF4FF] file:text-[#2B5BA8] hover:file:bg-[#dbe7fb] cursor-pointer"
          />
          <p className="text-xs text-[#9CA3AF] mt-1">PDF, DOC, or DOCX — up to 5 MB.</p>
          {errors.resume && <p className={errMsg}>{errors.resume}</p>}
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
          placeholder={
            isEmployer
              ? "Tell us about your organization, your hiring needs, or any questions you have..."
              : "Share what you're hoping to learn, the skills you want to build, or the career you're curious about..."
          }
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className={`${field} resize-none ${errors.message ? errorField : ""}`}
        />
        {errors.message && <p className={errMsg}>{errors.message}</p>}
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
