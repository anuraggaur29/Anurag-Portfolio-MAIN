"use client";

import React from "react";
import { motion } from "framer-motion";

interface RuleItem {
  type: "do" | "dont";
  text: string;
}

interface RuleCard {
  title: string;
  description: string;
  items: RuleItem[];
}

const ruleCards: RuleCard[] = [
  {
    title: "Phone Rules",
    description: "Hard stops to eliminate digital distraction",
    items: [
      {
        type: "dont",
        text: "Instagram and YouTube deleted from home screen. Friction = less usage.",
      },
      {
        type: "dont",
        text: "Phone physically in drawer during both deep work blocks. Not silent. In drawer.",
      },
      {
        type: "dont",
        text: "No reels before 9 PM. Ever.",
      },
      {
        type: "dont",
        text: "YouTube only for learning content before 9 PM.",
      },
      {
        type: "do",
        text: "Use phone timer for work blocks. 90-min focus, 10-min break.",
      },
    ],
  },
  {
    title: "Procrastination Rules",
    description: "Rules to bypass hesitation and escape loops",
    items: [
      {
        type: "do",
        text: "Can't start: open laptop, navigate to task, set 5-min timer. Just 5 mins.",
      },
      {
        type: "do",
        text: "Avoid hard tasks: do hard task FIRST in block, not last.",
      },
      {
        type: "do",
        text: "Distracted mid-task: write distraction on paper, return to task.",
      },
      {
        type: "dont",
        text: "Never redesign system when you fail 2 days. Just resume.",
      },
    ],
  },
  {
    title: "GF Rules",
    description: "Strict VC boundaries to preserve deep sleep sleep cycle",
    items: [
      {
        type: "do",
        text: "Weekday window: 9:00–10:30 PM. Hard stop. Not 10:45. 10:30.",
      },
      {
        type: "do",
        text: "Sunday window: 6:00–9:30 PM. Longer, quality time.",
      },
      {
        type: "do",
        text: "Tell her your daily plan every morning on Discord.",
      },
      {
        type: "dont",
        text: "No 'just 10 more mins' at 10:30. Say goodnight, close Discord, done.",
      },
    ],
  },
  {
    title: "Hostel & Health Rules",
    description: "Physical preservation for cognitive stamina",
    items: [
      {
        type: "do",
        text: "Breakfast every day — no excuse.",
      },
      {
        type: "do",
        text: "Gym Sunday — 45 min. Squats, push, pull.",
      },
      {
        type: "do",
        text: "2L water daily.",
      },
      {
        type: "dont",
        text: "No outside food after 9 PM.",
      },
    ],
  },
];

export default function RulesTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ruleCards.map((card, cardIdx) => (
        <motion.div
          key={cardIdx}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: cardIdx * 0.08 }}
          className="bg-surface-1 border border-border rounded-card p-5 sm:p-6 hover:border-text-muted transition-colors duration-300"
        >
          {/* Card Header */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-white tracking-tight">
              {card.title}
            </h3>
            <p className="text-xs text-text-muted mt-0.5">{card.description}</p>
          </div>

          {/* Rules List */}
          <div className="space-y-3">
            {card.items.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className="flex items-start gap-2.5 text-xs sm:text-sm"
              >
                {/* Icon indicator */}
                {item.type === "do" ? (
                  <span className="inline-flex items-center justify-center text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full h-5 w-5 font-bold select-none text-[10px] shrink-0 mt-0.5">
                    ✓
                  </span>
                ) : (
                  <span className="inline-flex items-center justify-center text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-full h-5 w-5 font-bold select-none text-[9px] shrink-0 mt-0.5">
                    ✗
                  </span>
                )}

                <span
                  className={
                    item.type === "do"
                      ? "text-text-primary leading-relaxed font-medium"
                      : "text-text-secondary leading-relaxed"
                  }
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
