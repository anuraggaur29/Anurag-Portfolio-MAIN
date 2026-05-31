"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getMetric, setMetric, getWeeklyStreak, setWeeklyStreak, getDailyHabits } from "@/lib/supabase";

type TrackerDayState = "empty" | "crushed" | "partial" | "missed";
const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function TrackerTab() {
  const [mounted, setMounted] = useState(false);
  const [lcCount, setLcCount] = useState(11);
  const [sheryProgress, setSheryProgress] = useState(36);
  const [trackerDays, setTrackerDays] = useState<TrackerDayState[]>(
    new Array(7).fill("empty")
  );
  const [habitsCompletedToday, setHabitsCompletedToday] = useState(0);

  // Helper keys
  const getTodayKey = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const getWeekKey = () => {
    const today = new Date();
    const d = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    return `tracker_week_${weekNo}_${d.getUTCFullYear()}`;
  };

  // Load variables on mount
  useEffect(() => {
    setMounted(true);
    const loadData = async () => {
      try {
        // 1. LC Count
        const dbLc = await getMetric("lc_count", 11);
        setLcCount(dbLc);
        localStorage.setItem("lc_count", String(dbLc));

        // 2. Sheryians progress
        const dbShery = await getMetric("shery_progress", 36);
        setSheryProgress(dbShery);
        localStorage.setItem("shery_progress", String(dbShery));

        // 3. Weekly tracker days
        const weekKey = getWeekKey();
        const dbTracker = await getWeeklyStreak(weekKey);
        if (dbTracker) {
          setTrackerDays(dbTracker as TrackerDayState[]);
        } else {
          // Fallback to local storage migration
          const localTracker = localStorage.getItem(weekKey);
          if (localTracker) {
            const parsed = JSON.parse(localTracker);
            if (Array.isArray(parsed) && parsed.length === 7) {
              setTrackerDays(parsed);
              await setWeeklyStreak(weekKey, parsed);
            }
          }
        }

        // 4. Habits completed today
        const todayKey = getTodayKey();
        const dbHabits = await getDailyHabits(todayKey);
        if (dbHabits) {
          setHabitsCompletedToday(dbHabits.filter(Boolean).length);
        } else {
          const localHabits = localStorage.getItem(`habits_${todayKey}`);
          if (localHabits) {
            const parsed = JSON.parse(localHabits);
            if (Array.isArray(parsed)) {
              setHabitsCompletedToday(parsed.filter(Boolean).length);
            }
          }
        }
      } catch {
        // Fail silent
      }
    };
    loadData();
  }, []);

  // Update LC counter
  const handleLcChange = async (val: number) => {
    const nextVal = Math.max(0, lcCount + val);
    setLcCount(nextVal);
    try {
      localStorage.setItem("lc_count", String(nextVal));
      await setMetric("lc_count", nextVal);
    } catch {
      // Fail silent
    }
  };

  // Cycle day in week tracker grid
  const handleCycleDay = async (index: number) => {
    const current = trackerDays[index];
    let next: TrackerDayState = "empty";
    if (current === "empty") next = "crushed";
    else if (current === "crushed") next = "partial";
    else if (current === "partial") next = "missed";
    else if (current === "missed") next = "empty";

    const updated = trackerDays.map((val, idx) => (idx === index ? next : val));
    setTrackerDays(updated);
    try {
      localStorage.setItem(getWeekKey(), JSON.stringify(updated));
      await setWeeklyStreak(getWeekKey(), updated);
    } catch {
      // Fail silent
    }
  };

  // Update Sheryians slider
  const handleSheryiansSlider = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setSheryProgress(val);
    try {
      localStorage.setItem("shery_progress", String(val));
      await setMetric("shery_progress", val);
    } catch {
      // Fail silent
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center font-sans text-text-secondary text-sm">
        Loading tracker metrics...
      </div>
    );
  }

  // Calculations
  // 1. Day streak (calculated as consecutive crushed days)
  let dayStreak = 0;
  for (let i = 0; i < trackerDays.length; i++) {
    if (trackerDays[i] === "crushed") {
      dayStreak++;
    } else if (trackerDays[i] === "empty") {
      break;
    } else {
      // partial or missed resets streak for consecutive
      break;
    }
  }

  // 2. Week score % = (crushed*1 + partial*0.5) / 7 * 100
  const crushedCount = trackerDays.filter((x) => x === "crushed").length;
  const partialCount = trackerDays.filter((x) => x === "partial").length;
  const weekScore = Math.round(((crushedCount * 1 + partialCount * 0.5) / 7) * 100);

  // 3. Sheryians completion stats
  const totalSheryModules = 317;
  const sheryPercentage = Math.round((sheryProgress / totalSheryModules) * 100);

  // Y sub-modules/day calculation
  const today = new Date();
  const targetDate = new Date(2026, 9, 1); // Oct 1, 2026 (month is 0-indexed, so 9 is Oct)
  const timeDiff = targetDate.getTime() - today.getTime();
  const daysRemaining = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));
  const modulesRemaining = Math.max(0, totalSheryModules - sheryProgress);
  const subModulesPerDay = (modulesRemaining / daysRemaining).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Metric Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Day Streak */}
        <div className="card flex flex-col justify-between p-5">
          <span className="text-xs text-text-muted font-medium uppercase tracking-wider">
            Day Streak
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 font-mono">
            {dayStreak} <span className="text-sm font-semibold text-accent">days</span>
          </span>
          <span className="text-[10px] text-text-secondary mt-1">
            Consecutive crushed days
          </span>
        </div>

        {/* Habits Today */}
        <div className="card flex flex-col justify-between p-5">
          <span className="text-xs text-text-muted font-medium uppercase tracking-wider">
            Habits Done Today
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 font-mono">
            {habitsCompletedToday} <span className="text-sm font-semibold text-accent">/ 12</span>
          </span>
          <span className="text-[10px] text-text-secondary mt-1">
            Checked in habits tab
          </span>
        </div>

        {/* Week Score */}
        <div className="card flex flex-col justify-between p-5">
          <span className="text-xs text-text-muted font-medium uppercase tracking-wider">
            Week Score
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 font-mono">
            {weekScore}%
          </span>
          <span className="text-[10px] text-text-secondary mt-1">
            Weighted progress average
          </span>
        </div>

        {/* LC Problems Solved */}
        <div className="card flex flex-col justify-between p-5">
          <span className="text-xs text-text-muted font-medium uppercase tracking-wider">
            LC Solved
          </span>
          <div className="flex items-center justify-between mt-2">
            <span className="text-3xl font-extrabold text-white font-mono">
              {lcCount}
            </span>
            <div className="flex gap-1.5 shrink-0">
              <button
                onClick={() => handleLcChange(-1)}
                aria-label="Undo"
                className="w-7 h-7 flex items-center justify-center bg-surface-2 border border-border rounded-btn text-text-secondary hover:text-white hover:border-text-muted active:scale-95 transition-all text-xs font-semibold"
              >
                -
              </button>
              <button
                onClick={() => handleLcChange(1)}
                aria-label="Increment"
                className="w-7 h-7 flex items-center justify-center bg-accent text-white rounded-btn hover:bg-accent-hover active:scale-95 transition-all text-xs font-semibold"
              >
                +1
              </button>
            </div>
          </div>
          <span className="text-[10px] text-text-secondary mt-1">
            Persistent counter
          </span>
        </div>
      </div>

      {/* Week Days Tracker Grid */}
      <div className="card space-y-6">
        <div>
          <h3 className="text-base font-semibold text-white">Daily Grind Tracker</h3>
          <p className="text-xs text-text-muted mt-0.5">
            Click cells to track day progress score.
          </p>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {DAYS_OF_WEEK.map((day, idx) => {
            const state = trackerDays[idx];
            let cellBg = "bg-surface-2 border-border hover:border-text-muted text-text-secondary";
            let iconText = "";
            if (state === "crushed") {
              cellBg = "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold";
              iconText = "✓";
            } else if (state === "partial") {
              cellBg = "bg-amber-500/10 border-amber-500/30 text-amber-400 font-bold";
              iconText = "~";
            } else if (state === "missed") {
              cellBg = "bg-rose-500/10 border-rose-500/30 text-rose-400 font-bold";
              iconText = "✗";
            }

            return (
              <button
                key={day}
                onClick={() => handleCycleDay(idx)}
                className={`h-12 flex flex-col items-center justify-between py-1.5 rounded-btn border text-center transition-all duration-200 select-none ${cellBg}`}
              >
                <span className="text-[10px] text-text-muted font-medium uppercase">
                  {day}
                </span>
                <span className="text-xs font-bold leading-none">
                  {iconText}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sheryians Progress Slider Tracker */}
      <div className="card space-y-6">
        <div>
          <h3 className="text-base font-semibold text-white">
            Sheryians Cohort Tracker
          </h3>
          <p className="text-xs text-text-muted mt-0.5">
            Adjust the slider to update completed sub-modules count.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="text-text-secondary font-medium">Completed Modules</span>
            <span className="text-accent font-semibold font-mono">
              {sheryProgress} / {totalSheryModules} ({sheryPercentage}%)
            </span>
          </div>

          {/* Slider */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-muted font-mono select-none">36</span>
            <input
              type="range"
              min="36"
              max="317"
              step="1"
              value={sheryProgress}
              onChange={handleSheryiansSlider}
              className="w-full h-1.5 bg-surface-2 rounded-lg border border-border appearance-none cursor-pointer accent-accent"
            />
            <span className="text-xs text-text-muted font-mono select-none">317</span>
          </div>

          {/* Progress Bar (Visual representation mirroring percentage) */}
          <div className="w-full h-2.5 bg-surface-2 rounded-full overflow-hidden border border-border">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${sheryPercentage}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-accent"
            />
          </div>

          {/* Dynamic calculation text */}
          <p className="text-xs sm:text-sm text-text-secondary bg-surface-2 border border-border p-4 rounded-btn italic font-medium text-center">
            {sheryPercentage}% complete — you need{" "}
            <span className="text-accent font-bold font-mono">{subModulesPerDay}</span>{" "}
            sub-modules/day to finish by Oct 1 2026 ({daysRemaining} days remaining).
          </p>
        </div>
      </div>
    </div>
  );
}
