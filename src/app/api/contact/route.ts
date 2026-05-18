import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Valid email required"),
  industry: z.string().min(1, "Industry is required"),
  audienceType: z.enum(["employer", "student"]),
  message: z.string().min(1, "Message is required"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail =
      data.audienceType === "employer"
        ? process.env.CONTACT_EMAIL_EMPLOYER ?? "info@cccaworks.org"
        : process.env.CONTACT_EMAIL_STUDENT ?? "info@cccaworks.org";
    const fromEmail = process.env.FROM_EMAIL ?? "no-reply@cccaworks.org";

    if (!apiKey) {
      // Dev mode: log and succeed without sending
      console.log("[Contact Form] No RESEND_API_KEY — form data:", data);
      return NextResponse.json({ success: true });
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2B5BA8; border-bottom: 2px solid #F5A623; padding-bottom: 12px;">
          New ${data.audienceType === "employer" ? "Employer" : "Student"} Inquiry — CCCA Works!
        </h2>
        <table style="width:100%; border-collapse:collapse;">
          ${[
            ["Name", data.name],
            ["Phone", data.phone],
            ["Email", data.email],
            ["Industry", data.industry],
            ["Type", data.audienceType === "employer" ? "Employer" : "Student"],
          ]
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:8px 12px; font-weight:600; color:#374151; background:#F9FAFB; border:1px solid #E5E7EB; width:140px;">${k}</td>
              <td style="padding:8px 12px; border:1px solid #E5E7EB;">${v}</td>
            </tr>`
            )
            .join("")}
          <tr>
            <td style="padding:8px 12px; font-weight:600; color:#374151; background:#F9FAFB; border:1px solid #E5E7EB; vertical-align:top;">Message</td>
            <td style="padding:8px 12px; border:1px solid #E5E7EB; white-space:pre-wrap;">${data.message}</td>
          </tr>
        </table>
        <p style="color:#6B7280; font-size:12px; margin-top:24px;">
          Reply directly to this email to respond to ${data.name}.
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
