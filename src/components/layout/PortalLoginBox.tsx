"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { PORTAL_URL } from "@/lib/constants";

/**
 * Entry point to the CCCA Career Portal, where students log their work hours and
 * employers confirm them.
 *
 * This deliberately links out rather than embedding a login form. The portal
 * holds records on minors, and a real credential form here would mean a password
 * field for that system living in a public marketing repo, on a different
 * origin, needing the portal's clickjacking protection relaxed and cross-site
 * cookies that browsers increasingly refuse. A link costs nothing and keeps
 * every password on the portal's own domain.
 */

type Props = {
  /** `nav` is the compact desktop header pill; `panel` is the boxed version. */
  variant?: "nav" | "panel";
  className?: string;
};

export function PortalLoginBox({ variant = "nav", className }: Props) {
  if (variant === "nav") {
    return (
      <Link
        href={PORTAL_URL}
        className={cn(
          "inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg",
          "text-neutral-700 hover:text-brand-blue hover:bg-brand-blue-pale",
          "transition-colors duration-200",
          className
        )}
      >
        <LockIcon />
        Portal Login
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm",
        className
      )}
    >
      <div className="flex items-center gap-2 text-brand-blue">
        <LockIcon />
        <h3 className="font-semibold">Career Portal</h3>
      </div>
      <p className="mt-2 text-sm text-neutral-600">
        Students log their work hours here. Employers confirm them.
      </p>
      <Link
        href={PORTAL_URL}
        className={cn(
          "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl",
          "bg-brand-blue px-6 py-3 font-semibold text-white shadow-sm",
          "hover:bg-brand-blue-dark transition-colors duration-200"
        )}
      >
        Sign in
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 1a4 4 0 00-4 4v2H5a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2h-1V5a4 4 0 00-4-4zm2 6V5a2 2 0 10-4 0v2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
}
