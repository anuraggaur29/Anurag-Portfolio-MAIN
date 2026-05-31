"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error caught by boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-4 font-sans">
      <div className="text-center max-w-md">
        <h2 className="text-4xl font-bold text-accent tracking-tight">Oops!</h2>
        <p className="text-lg text-white mt-4 font-medium">
          Something went wrong
        </p>
        <p className="text-sm text-text-secondary mt-2">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-btn transition-colors duration-200 hover:bg-accent-hover mt-6 focus:outline-none"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
