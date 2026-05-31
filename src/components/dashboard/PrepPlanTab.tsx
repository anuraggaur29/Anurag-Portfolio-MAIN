"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BaseCard {
  title: string;
  description: string;
  status: string;
  borderColor: string;
}

const baselineCards: BaseCard[] = [
  {
    title: "DSA Baseline",
    description:
      "~11-30 LC solved. Arrays/strings only. Striver = watched not practiced. Failing coding rounds.",
    status: "Failing coding rounds",
    borderColor: "border-rose-500/40 hover:border-rose-500",
  },
  {
    title: "Aptitude Baseline",
    description:
      "Weak. Failing aptitude rounds. Blocking every 10 LPA drive.",
    status: "Failing aptitude rounds",
    borderColor: "border-rose-500/40 hover:border-rose-500",
  },
  {
    title: "Sheryians Cohort",
    description:
      "1.6% in 9 months. Need 3-4 sub-modules/day to finish by October.",
    status: "Lagging behind",
    borderColor: "border-amber-500/40 hover:border-amber-500",
  },
  {
    title: "Projects & Resume",
    description:
      "Noteify+ active. Resume solid. Strongest card in the portfolio.",
    status: "Solid & active",
    borderColor: "border-emerald-500/40 hover:border-emerald-500",
  },
];

interface Phase {
  id: number;
  title: string;
  period: string;
  colorClass: string;
  details: string[];
}

const phases: Phase[] = [
  {
    id: 1,
    title: "Phase 1 — Foundation",
    period: "Jun–Jul",
    colorClass: "bg-rose-500 text-rose-500 border-rose-500/30",
    details: [
      "DSA: Striver A2Z Arrays chapter fully done. 1 problem/day min, 2 on Sunday.",
      "Aptitude: 30 min/day — IndiaBix quant + reasoning. Percentages, ratios, series, syllogisms.",
      "Sheryians: Git+GitHub + Frontend modules done by July 2.",
      "Noteify+ v2: ship before July 2.",
      "LinkedIn: 1 post/week minimum.",
    ],
  },
  {
    id: 2,
    title: "Phase 2 — Build momentum",
    period: "Aug–Sep",
    colorClass: "bg-amber-500 text-amber-500 border-amber-500/30",
    details: [
      "DSA: Linked Lists, Stacks, Queues. 2 problems/day. Target 100+ LC.",
      "Aptitude: Mock tests 3x/week — full timed tests.",
      "Sheryians: React + Backend modules completed.",
      "Interview prep: Explain all 4 resume projects out loud. Record yourself.",
      "Apply to 5+ companies/week.",
    ],
  },
  {
    id: 3,
    title: "Phase 3 — Interview mode",
    period: "Oct",
    colorClass: "bg-blue-500 text-blue-400 border-blue-500/30",
    details: [
      "DSA: Trees, Graphs basics. Revise everything.",
      "Mock Interviews: 3 mock interviews on Pramp/Interviewing.io.",
      "System design basics: 1 topic/day.",
      "HR prep: STAR format answers to common behavioral questions.",
    ],
  },
  {
    id: 4,
    title: "Phase 4 — Placements & Offers",
    period: "Nov+",
    colorClass: "bg-emerald-500 text-emerald-400 border-emerald-500/30",
    details: [
      "Direct applications: SDE / AI Engineer placement drives.",
      "Final revisions: Daily DSA mock test rounds.",
      "Refining Noteify+ and personal portfolio with analytics.",
      "Close offers: Target 10 LPA+ CTC roles.",
    ],
  },
];

const rotationCards = [
  {
    days: "Mon / Wed / Fri",
    title: "Sheryians Cohort",
    detail: "Complete 3-4 sub-modules per night block to stay on track.",
  },
  {
    days: "Tue / Thu / Sat",
    title: "Noteify+ Build",
    detail: "Code features, deploy fixes, push to GitHub daily.",
  },
  {
    days: "Sunday AM",
    title: "DSA Sprint + Aptitude",
    detail: "Solve 2 DSA problems and spend 30 minutes practicing Aptitude.",
  },
];

export default function PrepPlanTab() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  const togglePhase = (id: number) => {
    setExpandedPhase(expandedPhase === id ? null : id);
  };

  return (
    <div className="space-y-8">
      {/* Baseline Info Cards */}
      <div>
        <h3 className="text-base font-semibold text-white mb-4">
          Current Baseline
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {baselineCards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-surface-1 border rounded-card p-5 transition-all duration-300 flex flex-col justify-between ${
                card.borderColor
              }`}
            >
              <div>
                <h4 className="text-sm font-bold text-white mb-2">
                  {card.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
              <span className="text-[10px] text-text-muted mt-4 font-semibold uppercase tracking-wider">
                {card.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Phase Roadmap Bar */}
      <div>
        <h3 className="text-base font-semibold text-white mb-4">
          Phase Roadmap
        </h3>
        {/* Visual Roadmap Indicator */}
        <div className="flex w-full h-3 bg-surface-2 border border-border rounded-full overflow-hidden mb-6">
          <div className="h-full bg-rose-500/90 w-1/4" />
          <div className="h-full bg-amber-500/90 w-1/4" />
          <div className="h-full bg-blue-500/90 w-1/4" />
          <div className="h-full bg-emerald-500/90 w-1/4" />
        </div>

        {/* Phase Details Cards */}
        <div className="space-y-3">
          {phases.map((phase) => {
            const isExpanded = expandedPhase === phase.id;

            return (
              <div
                key={phase.id}
                className="bg-surface-1 border border-border rounded-card overflow-hidden"
              >
                {/* Header Header */}
                <button
                  onClick={() => togglePhase(phase.id)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-surface-2 transition-colors duration-200 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex px-2.5 py-0.5 text-xs font-semibold rounded-full bg-opacity-10 border ${
                        phase.colorClass.split(" ")[2]
                      } ${phase.colorClass.split(" ")[1]}`}
                    >
                      {phase.period}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      {phase.title}
                    </span>
                  </div>
                  <span className="text-text-muted text-xs font-semibold">
                    {isExpanded ? "Collapse" : "Expand"}
                  </span>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-border/50 bg-[#0c0c0c] space-y-2">
                        {phase.details.map((detail, idx) => (
                          <div key={idx} className="flex gap-2 text-xs sm:text-sm">
                            <span className="text-accent font-semibold select-none">•</span>
                            <span className="text-text-secondary leading-relaxed">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Evening Block Rotations */}
      <div>
        <h3 className="text-base font-semibold text-white mb-4">
          Evening Block Rotation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rotationCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-surface-1 border border-border rounded-card p-5 hover:border-text-muted transition-colors duration-300"
            >
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
                {card.days}
              </span>
              <h4 className="text-sm font-semibold text-white mb-1.5">
                {card.title}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {card.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
