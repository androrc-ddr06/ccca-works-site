# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

Client website for **CCCA Works!** (Capra College Career Academy Works!) — a workforce development org that places student interns with employer partners via an Employer of Record (EOR) model. Client: John Pellman, Founder/CEO. Target domain: `cccaworks.org`.

This is the **active** project. A sibling directory `../site/` is an earlier prototype that has been superseded.

---

## Stack

- **Next.js 16.2.6** with App Router — **this version has breaking changes vs. training data.** Before writing any Next.js-specific code (routing, metadata, server components, fetch), read the relevant guide in `node_modules/next/dist/docs/`.
- **React 19**, **TypeScript 5**
- **Tailwind CSS v4** — uses `@theme {}` block in `globals.css` instead of `tailwind.config.js`. All brand tokens live there.
- **Framer Motion 12** for animations
- **Resend** for transactional email (contact form)
- **Zod** for form validation

---

## Dev Commands

```bash
npm run dev      # dev server on port 3001
npm run build    # production build
npm run lint     # ESLint
```

---

## Environment Variables (`.env.local`)

```
RESEND_API_KEY=                          # from resend.com — required to send emails
CONTACT_EMAIL_EMPLOYER=info@cccaworks.org
CONTACT_EMAIL_STUDENT=info@cccaworks.org
FROM_EMAIL=no-reply@cccaworks.org
NEXT_PUBLIC_DOCUSIGN_POWERFORM_URL=      # PowerForm URL from John's DocuSign account
```

Without `RESEND_API_KEY`, the contact API logs submissions to console and returns success (intentional dev behavior).

---

## Architecture

### Page Routes
| Route | Purpose |
|---|---|
| `/` | Home — hero, mission strip, partner logos, audience CTA, process snippet, testimonials snippet |
| `/services` | EOR model details, service cards, benefits table, process steps |
| `/partners` | Industry partner logo grid + CTA |
| `/process` | Student workflow — coursework steps, work-readiness skills, employer handoff |
| `/the-why` | Mission/story — problem statement, history, California pipeline, paid vs. unpaid internship data |
| `/media` | Document downloads + DocuSign CTA |
| `/contact` | Contact form (routes to employer or student inbox) |

### Data Layer
All site content lives in `src/data/` as typed TypeScript arrays — no CMS. Edit these files to update content:
- `team.ts`, `partners.ts`, `testimonials.ts`, `services.ts`, `documents.ts`

Types for all data shapes are in `src/types/index.ts`.

### Component Organization
- `src/components/ui/` — reusable atoms: `Button`, `Card`, `Badge`, `PageHero`
- `src/components/layout/` — `Navbar`, `Footer`
- `src/components/animations/` — `FadeIn`, `StaggerChildren` (Framer Motion wrappers)
- `src/components/{page}/` — page-specific sections, co-located with their route

### Shared Utilities (`src/lib/`)
- `cn()` — `clsx` + `tailwind-merge` class merger
- `formatPhone()` — formats 10-digit input as `(XXX) XXX-XXXX`
- `constants.ts` — `NAV_LINKS`, `DOCUSIGN_URL`, `SOCIAL_LINKS`, `CONTACT_INFO`, `INDUSTRIES`

### Contact API
`src/app/api/contact/route.ts` — POST handler that validates with Zod, then routes to employer or student inbox via Resend. Field `audienceType: "employer" | "student"` controls routing.

---

## Brand Tokens

Defined in `src/app/globals.css` via Tailwind v4 `@theme {}`:

| Token | Value | Use |
|---|---|---|
| `--color-brand-blue` | `#2B5BA8` | Primary brand color |
| `--color-brand-gold` | `#F5A623` | CTA / accent |
| `--font-sans` | Inter | Body text |
| `--font-display` | Poppins | Headings |

Custom layout utilities: `section-padding` (5rem/7rem block padding) and `container-wide` (80rem max-width with responsive inline padding).

---

## DocuSign Integration

Wired as a PowerForm URL via `NEXT_PUBLIC_DOCUSIGN_POWERFORM_URL`. The `DocuSignCTA` component reads from `DOCUSIGN_URL` in `constants.ts`. Until John provides the PowerForm URL, the button links to `"#"`.
