"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { INDUSTRIES } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";
import type { ContactFormData } from "@/types";

type Status = "idle" | "loading" | "success" | "error";

const emptyForm: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  industry: "",
  audienceType: "employer",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  function validate(): boolean {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.industry) e.industry = "Please select your industry";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
                onChange={() => setForm((f) => ({ ...f, audienceType: type }))}
                className="hidden"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  form.audienceType === type
                    ? "border-[#2B5BA8]"
                    : "border-[#D1D5DB]"
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

      {/* Message */}
      <div>
        <label htmlFor="message" className={label}>Comments / Message *</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your organization, your hiring needs, or any questions you have..."
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
