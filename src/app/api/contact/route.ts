import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const base = {
  name: z.string().min(1, "Name is required").max(200),
  phone: z.string().min(1, "Phone is required").max(40),
  email: z.string().email("Valid email required").max(254),
  industry: z.string().min(1, "Industry is required").max(100),
  message: z.string().min(1, "Message is required").max(5000, "Message is too long"),
};

// Escape user-supplied values before interpolating into the notification email.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const schema = z.discriminatedUnion("audienceType", [
  z.object({
    audienceType: z.literal("employer"),
    ...base,
    companyName: z.string().min(1, "Company name is required"),
    interestType: z.enum([
      "Career Exposure",
      "Career Exploration",
      "Career Preparation",
      "Not sure",
    ]),
  }),
  z.object({
    audienceType: z.literal("student"),
    ...base,
  }),
]);

const MAX_RESUME_BYTES = 5 * 1024 * 1024;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Collect text fields (everything except the file) into a plain object.
    const fields: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") fields[key] = value;
    }

    // Honeypot: a real user never fills this. Pretend success, send nothing.
    if (fields.company_website && fields.company_website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    const data = schema.parse(fields);

    // Resume attachment (student only).
    let resume: { filename: string; content: string } | null = null;
    const resumeFile = formData.get("resume");
    if (resumeFile instanceof File && resumeFile.size > 0) {
      if (resumeFile.size > MAX_RESUME_BYTES) {
        return NextResponse.json(
          { success: false, error: "Resume too large" },
          { status: 400 }
        );
      }
      if (!ALLOWED_RESUME_TYPES.includes(resumeFile.type)) {
        return NextResponse.json(
          { success: false, error: "Unsupported file type — upload a PDF, DOC, or DOCX" },
          { status: 400 }
        );
      }
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      resume = { filename: resumeFile.name, content: buffer.toString("base64") };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail =
      data.audienceType === "employer"
        ? process.env.CONTACT_EMAIL_EMPLOYER ?? "info@cccaworks.org"
        : process.env.CONTACT_EMAIL_STUDENT ?? "info@cccaworks.org";
    const fromEmail = process.env.FROM_EMAIL ?? "no-reply@cccaworks.org";

    if (!apiKey) {
      // Dev mode: log and succeed without sending.
      console.log("[Contact Form] No RESEND_API_KEY — form data:", data, {
        resume: resume?.filename ?? null,
      });
      return NextResponse.json({ success: true });
    }

    const rows: [string, string][] = [
      ["Name", data.name],
      ...(data.audienceType === "employer"
        ? ([
            ["Company", data.companyName],
            ["Interested In", data.interestType],
          ] as [string, string][])
        : []),
      ["Phone", data.phone],
      ["Email", data.email],
      ["Industry", data.industry],
      ["Type", data.audienceType === "employer" ? "Employer" : "Student"],
      ...(data.audienceType === "student"
        ? ([["Resume", resume ? resume.filename : "Not attached"]] as [string, string][])
        : []),
    ];

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2B5BA8; border-bottom: 2px solid #F5A623; padding-bottom: 12px;">
          New ${data.audienceType === "employer" ? "Employer" : "Student"} Inquiry — CCCA Works!
        </h2>
        <table style="width:100%; border-collapse:collapse;">
          ${rows
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:8px 12px; font-weight:600; color:#374151; background:#F9FAFB; border:1px solid #E5E7EB; width:140px;">${escapeHtml(k)}</td>
              <td style="padding:8px 12px; border:1px solid #E5E7EB;">${escapeHtml(v)}</td>
            </tr>`
            )
            .join("")}
          <tr>
            <td style="padding:8px 12px; font-weight:600; color:#374151; background:#F9FAFB; border:1px solid #E5E7EB; vertical-align:top;">Message</td>
            <td style="padding:8px 12px; border:1px solid #E5E7EB; white-space:pre-wrap;">${escapeHtml(data.message)}</td>
          </tr>
        </table>
        <p style="color:#6B7280; font-size:12px; margin-top:24px;">
          Reply directly to this email to respond to ${escapeHtml(data.name)}.
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        reply_to: data.email,
        subject: `[CCCA Works!] New ${data.audienceType === "employer" ? "Employer" : "Student"} Inquiry from ${data.name}`,
        html,
        ...(resume ? { attachments: [resume] } : {}),
      }),
    });

    if (!res.ok) {
      console.error("[Contact Form] Resend error:", await res.text());
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: err.issues }, { status: 400 });
    }
    console.error("[Contact Form] Unexpected error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
