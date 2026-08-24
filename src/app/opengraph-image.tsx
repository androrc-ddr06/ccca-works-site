import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Code-generated social share card — no static binary asset to maintain.
export const runtime = "nodejs";
export const alt = "CCCA Works! — Connecting Talent with Opportunity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1E3F7A 0%, #0F2347 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#ffffff",
            borderRadius: 32,
            padding: "44px 72px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          }}
        >
          <img src={logoSrc} alt="CCCA Works!" width={560} height={560 * (234 / 644)} />
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 52,
            fontSize: 50,
            fontWeight: 700,
            color: "#F5A623",
            letterSpacing: -0.5,
          }}
        >
          Connecting Talent with Opportunity
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 27,
            color: "#C7D7F0",
          }}
        >
          Paid Internships&nbsp;&nbsp;•&nbsp;&nbsp;Employer of Record&nbsp;&nbsp;•&nbsp;&nbsp;Workforce Development
        </div>
      </div>
    ),
    { ...size }
  );
}
