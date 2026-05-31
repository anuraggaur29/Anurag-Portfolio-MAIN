"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getDailyHabits, setDailyHabits, getWeeklyStreak, setWeeklyStreak as dbSetWeeklyStreak } from "@/lib/supabase";

const HABITS_LIST = [
  { label: "Woke up by 6:00 AM", sub: "alarm across the room" },
  { label: "No phone first 20 minutes", sub: "friction = success" },
  { label: "DSA morning block done", sub: "1 problem minimum" },
  { label: "Ate breakfast at mess", sub: "no skipping" },
  { label: "Evening deep work block done", sub: "Sheryians or Noteify+" },
  { label: "Aptitude practice done", sub: "30 min — IndiaBix" },
  { label: "Drank 2L water", sub: "hydration is key" },
  { label: "Phone in drawer during work blocks", sub: "not silent — in drawer" },
  { label: "GF call ended by 10:30 PM", sub: "hard stop" },
  { label: "GitHub push today", sub: "even 1 commit counts" },
  { label: "3-line journal written", sub: "mental dump" },
  { label: "Slept by 10:45 PM", sub: "non-negotiable" },
];

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type StreakState = "empty" | "done" | "partial" | "missed";

export default function HabitsTab() {
  const [mounted, setMounted] = useState(false);
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(HABITS_LIST.length).fill(false)
  );
  const [weeklyStreak, setWeeklyStreak] = useState<StreakState[]>(
    new Array(7).fill("empty")
  );

  // Helper to get YYYY-MM-DD
  const getTodayKey = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  // Helper to get ISO Week number key
  const getWeekKey = () => {
    const today = new Date();
    const d = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    return `week_streak_${weekNo}_${d.getUTCFullYear()}`;
  };

  // Initialize and load state on mount
  useEffect(() => {
    setMounted(true);
    const loadData = async () => {
      try {
        const todayKey = getTodayKey();
        const savedHabits = await getDailyHabits(todayKey);
        if (savedHabits) {
          setCheckedState(savedHabits);
        } else {
          // Fallback to local storage migration
          const localHabits = localStorage.getItem(`habits_${todayKey}`);
          if (localHabits) {
            const parsed = JSON.parse(localHabits);
            if (Array.isArray(parsed) && parsed.length === HABITS_LIST.length) {
              setCheckedState(parsed);
              await setDailyHabits(todayKey, parsed);
            }
          }
        }

        const weekKey = getWeekKey();
        const savedStreak = await getWeeklyStreak(weekKey);
        if (savedStreak) {
          setWeeklyStreak(savedStreak as StreakState[]);
        } else {
          // Fallback to local storage migration
          const localStreak = localStorage.getItem(weekKey);
          if (localStreak) {
            const parsed = JSON.parse(localStreak);
            if (Array.isArray(parsed) && parsed.length === 7) {
              setWeeklyStreak(parsed);
              await dbSetWeeklyStreak(weekKey, parsed);
            }
          }
        }
      } catch {
        // Fail silent
      }
    };
    loadData();
  }, []);

  // Update Habit Check state
  const handleHabitToggle = async (index: number) => {
    const updated = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );
    setCheckedState(updated);
    try {
      localStorage.setItem(`habits_${getTodayKey()}`, JSON.stringify(updated));
      await setDailyHabits(getTodayKey(), updated);
    } catch {
      // Fail silent
    }
  };

  // Cycle Weekly Streak state: empty -> done -> partial -> missed -> empty
  const handleCycleStreak = async (index: number) => {
    const currentState = weeklyStreak[index];
    let nextState: StreakState = "empty";
    if (currentState === "empty") nextState = "done";
    else if (currentState === "done") nextState = "partial";
    else if (currentState === "partial") nextState = "missed";
    else if (currentState === "missed") nextState = "empty";

    const updated = weeklyStreak.map((state, idx) =>
      idx === index ? nextState : state
    );
    setWeeklyStreak(updated);
    try {
      localStorage.setItem(getWeekKey(), JSON.stringify(updated));
      await dbSetWeeklyStreak(getWeekKey(), updated);
    } catch {
      // Fail silent
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center font-sans text-text-secondary text-sm">
        Loading habits...
      </div>
    );
  }

  const completedCount = checkedState.filter(Boolean).length;
  const progressPercentage = Math.round(
    (completedCount / HABITS_LIST.length) * 100
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Daily Habits List */}
      <div className="lg:col-span-2 card space-y-6">
        <div>
          <h3 className="text-base font-semibold text-white">Daily Checklist</h3>
          <p className="text-xs text-text-muted mt-0.5">
            Reset automatically each new day.
          </p>
        </div>

        {/* List */}
        <div className="space-y-3">
          {HABITS_LIST.map((habit, idx) => (
            <label
              key={idx}
              className={`flex items-start gap-3 p-3 rounded-btn border transition-all duration-200 cursor-pointer ${
                checkedState[idx]
                  ? "bg-[#7C3AED]/5 border-[#7C3AED]/35 text-white"
                  : "bg-surface-2 border-border/60 text-text-secondary hover:border-text-muted hover:text-white"
              }`}
            >
              <input
                type="checkbox"
                checked={checkedState[idx]}
                onChange={() => handleHabitToggle(idx)}
                className="mt-1 accent-accent h-4 w-4 rounded border-border"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium leading-none sm:leading-normal">
                  {habit.label}
                </span>
                <span className="text-[10px] text-text-muted mt-0.5">
                  {habit.sub}
                </span>
              </div>
            </label>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="pt-4 border-t border-border space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-text-secondary font-medium">Daily Progress</span>
            <span className="text-accent font-semibold font-mono">
              {completedCount} / {HABITS_LIST.length} ({progressPercentage}%)
            </span>
          </div>
          <div className="w-full h-2 bg-surface-2 rounded-full overflow-hidden border border-border">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-accent"
            />
          </div>
        </div>
      </div>

      {/* Weekly Streak Grid */}
      <div className="card space-y-6 self-start">
        <div>
          <h3 className="text-base font-semibold text-white">Weekly Habits Streak</h3>
          <p className="text-xs text-text-muted mt-0.5">
            Tap daily cells to cycle progress status.
          </p>
        </div>

        {/* Grid Cells */}
        <div className="grid grid-cols-7 gap-2">
          {DAYS_OF_WEEK.map((day, idx) => {
            const state = weeklyStreak[idx];
            let cellBg = "bg-surface-2 border-border hover:border-text-muted text-text-secondary";
            let statusText = "~";
            if (state === "done") {
              cellBg = "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold";
              statusText = "✓";
            } else if (state === "partial") {
              cellBg = "bg-amber-500/10 border-amber-500/30 text-amber-400 font-bold";
              statusText = "~";
            } else if (state === "missed") {
              cellBg = "bg-rose-500/10 border-rose-500/30 text-rose-400 font-bold";
              statusText = "✗";
            } else {
              statusText = "";
            }

            return (
              <button
                key={day}
                onClick={() => handleCycleStreak(idx)}
                className={`h-12 flex flex-col items-center justify-between py-1.5 rounded-btn border text-center transition-colors duration-200 select-none ${cellBg}`}
              >
                <span className="text-[10px] text-text-muted font-medium uppercase">
                  {day}
                </span>
                <span className="text-xs leading-none font-bold">
                  {statusText}
                </span>
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="pt-4 border-t border-border space-y-2 text-xs text-text-secondary">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[8px] text-emerald-400 font-bold">
              ✓
            </span>
            <span>Crushed (Full Completion)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[8px] text-amber-400 font-bold">
              ~
            </span>
            <span>Partial (Partially Done)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-[8px] text-rose-400 font-bold">
              ✗
            </span>
            <span>Missed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
