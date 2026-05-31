"use client";

import React from "react";

export default function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#111111] border border-[#27272A] rounded-full text-xs sm:text-sm text-text-secondary select-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 ring-2 ring-emerald-500/20"></span>
      </span>
      Open to opportunities
    </span>
  );
}
