import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-4 font-sans">
      <div className="text-center max-w-md">
        <h1 className="text-6xl sm:text-8xl font-bold text-accent select-none">
          404
        </h1>
        <h2 className="text-xl font-semibold text-white mt-4">
          Page not found
        </h2>
        <p className="text-sm text-text-secondary mt-2">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-btn transition-colors duration-200 hover:bg-accent-hover mt-6 focus:outline-none"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
