"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ScheduleBlock {
  time: string;
  type: "focus" | "rest" | "warn" | "danger" | "neutral";
  description: string;
  notes?: string;
}

const weekdaySchedule: ScheduleBlock[] = [
  {
    time: "06:00 AM",
    type: "warn",
    description: "Wake up. Alarm across the room. No snooze.",
    notes: "you wake at 8:30 now — moving to 6 AM in week 1",
  },
  {
    time: "06:00–06:20",
    type: "neutral",
    description: "Brush, water, 5-min stretch. Phone stays face down.",
  },
  {
    time: "06:20–07:50",
    type: "focus",
    description: "Deep work block 1 — DSA only (Striver A2Z, 1 problem min)",
    notes: "laptop open before you're fully awake. starting = winning.",
  },
  {
    time: "07:50–08:30",
    type: "neutral",
    description: "Breakfast at mess (mandatory — no skipping) + get ready",
    notes: "eat even if not hungry. skipping = energy crash by noon.",
  },
  {
    time: "08:30–09:20",
    type: "neutral",
    description: "Walk to college — listen to aptitude shortcuts / CS concepts",
    notes: "IndiaBix, aptitude YouTube — passive prep during commute",
  },
  {
    time: "09:30–04:25",
    type: "neutral",
    description: "College — sit front, stay engaged, ask questions",
    notes: "don't waste 7 hours. CGPA matters for 10 LPA+ shortlists.",
  },
  {
    time: "04:25–05:00",
    type: "rest",
    description: "Walk back + decompress. No reels, no YouTube.",
  },
  {
    time: "05:00–05:30",
    type: "rest",
    description: "Eat something. Rest. Short nap if needed.",
    notes: "mandatory reset",
  },
  {
    time: "05:30–07:30",
    type: "focus",
    description: "Deep work block 2 — rotating (Mon/Wed/Fri = Sheryians | Tue/Thu/Sat = Noteify+)",
  },
  {
    time: "07:30–08:00",
    type: "rest",
    description: "Dinner at mess. Eat properly.",
  },
  {
    time: "08:00–09:00",
    type: "warn",
    description: "Buffer — LinkedIn post/week, GitHub push, light review",
    notes: "NOT scrolling.",
  },
  {
    time: "09:00–10:30",
    type: "danger",
    description: "GF time — Discord / VC. Hard stop at 10:30 PM.",
    notes: "was midnight. cutting 1.5hrs.",
  },
  {
    time: "10:30–10:45",
    type: "neutral",
    description: "3-line journal + plan tomorrow's 3 tasks",
  },
  {
    time: "10:45 PM",
    type: "danger",
    description: "Phone in drawer. Sleep.",
    notes: "7h 15min sleep. non-negotiable.",
  },
];

const sundaySchedule: ScheduleBlock[] = [
  {
    time: "07:00 AM",
    type: "neutral",
    description: "Wake up (slightly relaxed)",
  },
  {
    time: "07:00–08:00",
    type: "rest",
    description: "Gym — first time this week you actually go",
  },
  {
    time: "08:00–09:00",
    type: "neutral",
    description: "Breakfast + shower",
  },
  {
    time: "09:00–12:00",
    type: "focus",
    description: "DSA sprint — 2 problems + aptitude practice (30 min)",
  },
  {
    time: "12:00–01:00",
    type: "neutral",
    description: "Lunch + break",
  },
  {
    time: "01:00–04:00",
    type: "focus",
    description: "Noteify+ sprint OR mock interview practice",
  },
  {
    time: "04:00–06:00",
    type: "rest",
    description: "Personal time — errands, rest, family",
  },
  {
    time: "06:00–09:30",
    type: "warn",
    description: "Extended GF time",
  },
  {
    time: "09:30–10:30",
    type: "focus",
    description: "Weekly review — next 7 days mapped out",
  },
  {
    time: "11:00 PM",
    type: "danger",
    description: "Sleep",
  },
];

const badgeColors: Record<ScheduleBlock["type"], string> = {
  focus: "bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/30",
  rest: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  warn: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  danger: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
  neutral: "bg-[#1A1A1A] text-text-secondary border border-border",
};

export default function ScheduleTab() {
  const [activeSubTab, setActiveSubTab] = useState<"weekday" | "sunday">("weekday");

  const currentSchedule = activeSubTab === "weekday" ? weekdaySchedule : sundaySchedule;

  return (
    <div className="space-y-6">
      {/* Sub-tabs Selector */}
      <div className="flex bg-[#111111] border border-border p-1 rounded-card w-fit select-none">
        <button
          onClick={() => setActiveSubTab("weekday")}
          className={`px-4 py-2 text-xs font-semibold rounded-btn transition-all duration-200 ${
            activeSubTab === "weekday"
              ? "bg-[#1A1A1A] text-white border border-border"
              : "text-text-muted hover:text-white"
          }`}
        >
          Weekday (Mon–Sat)
        </button>
        <button
          onClick={() => setActiveSubTab("sunday")}
          className={`px-4 py-2 text-xs font-semibold rounded-btn transition-all duration-200 ${
            activeSubTab === "sunday"
              ? "bg-[#1A1A1A] text-white border border-border"
              : "text-text-muted hover:text-white"
          }`}
        >
          Sunday
        </button>
      </div>

      {/* Timeline Blocks */}
      <div className="relative border-l border-border pl-6 space-y-4">
        {currentSchedule.map((block, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.03 }}
            className="relative group"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[31px] top-2.5 w-2.5 h-2.5 rounded-full bg-border border border-bg group-hover:border-accent group-hover:bg-accent-hover transition-colors duration-200" />

            {/* Block Card */}
            <div className="card hover:border-text-muted transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                {/* Time Badge */}
                <span className="font-mono text-sm font-semibold text-white min-w-[100px]">
                  {block.time}
                </span>

                {/* Badge Type */}
                <span
                  className={`inline-flex px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded w-fit select-none ${
                    badgeColors[block.type]
                  }`}
                >
                  {block.type}
                </span>

                {/* Description */}
                <span className="text-sm text-text-primary">
                  {block.description}
                </span>
              </div>

              {/* Notes */}
              {block.notes && (
                <div className="md:max-w-xs text-xs text-text-muted font-medium bg-[#1A1A1A] border border-border/55 px-3 py-1.5 rounded-btn italic">
                  {block.notes}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
