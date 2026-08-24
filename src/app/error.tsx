"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error for debugging / monitoring.
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-brand-blue-pale px-6 py-24">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 rounded-full bg-brand-gold/15 flex items-center justify-center mx-auto mb-6">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-brand-gold-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M12 9v3.75m0 3.5h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
            />
          </svg>
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-neutral-800">
          Something went wrong
        </h1>
        <p className="mt-3 text-neutral-600 leading-relaxed">
          An unexpected error occurred. You can try again, or head back home and
          we&apos;ll keep things moving.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="primary" size="lg">
            Try Again
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
