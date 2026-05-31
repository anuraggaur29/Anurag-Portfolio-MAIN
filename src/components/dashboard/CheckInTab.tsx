"use client";

import React, { useState } from "react";

const DAILY_QUESTIONS = [
  "Did I do my DSA problem today?",
  "Did I open Sheryians / work on Noteify+?",
  "Did phone go in drawer during work blocks?",
  "Did GF call end by 10:30?",
  "Did I eat breakfast?",
];

const WEEKLY_PROMPTS = [
  "How many DSA problems this week?",
  "How many Sheryians sub-modules done?",
  "Did Noteify+ get any code pushed?",
  "What was my biggest failure this week?",
  "What is my single most important task next week?",
];

export default function CheckInTab() {
  const [dailyAnswers, setDailyAnswers] = useState<(boolean | null)[]>(
    new Array(DAILY_QUESTIONS.length).fill(null)
  );

  const handleAnswerToggle = (idx: number, val: boolean) => {
    const updated = dailyAnswers.map((ans, i) => (i === idx ? val : ans));
    setDailyAnswers(updated);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Daily Check-In */}
      <div className="card space-y-6">
        <div>
          <h3 className="text-base font-semibold text-white">Daily Check-In</h3>
          <p className="text-xs text-text-muted mt-0.5">
            Quick audit of your commitment targets for today.
          </p>
        </div>

        <div className="space-y-4">
          {DAILY_QUESTIONS.map((question, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-surface-2 border border-border/80 rounded-btn transition-colors duration-200 hover:border-text-muted"
            >
              <span className="text-xs sm:text-sm font-medium text-text-secondary">
                {question}
              </span>

              {/* Yes / No Toggles */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleAnswerToggle(idx, true)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-btn border transition-all duration-200 select-none active:scale-95 ${
                    dailyAnswers[idx] === true
                      ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-bold"
                      : "bg-surface-1 border-border/70 text-text-muted hover:text-text-secondary"
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => handleAnswerToggle(idx, false)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-btn border transition-all duration-200 select-none active:scale-95 ${
                    dailyAnswers[idx] === false
                      ? "bg-rose-500/10 border-rose-500/40 text-rose-400 font-bold"
                      : "bg-surface-1 border-border/70 text-text-muted hover:text-text-secondary"
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Review Prompts */}
      <div className="card space-y-6">
        <div>
          <h3 className="text-base font-semibold text-white">Weekly Review</h3>
          <p className="text-xs text-text-muted mt-0.5">
            Use these prompts for manual journaling and mapping goals.
          </p>
        </div>

        <div className="space-y-3.5">
          {WEEKLY_PROMPTS.map((prompt, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 bg-surface-2 border border-border/60 rounded-btn select-text"
            >
              <span className="text-accent font-bold font-mono text-xs shrink-0 select-none">
                0{idx + 1}.
              </span>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
                {prompt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
