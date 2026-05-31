"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import ScheduleTab from "./ScheduleTab";
import HabitsTab from "./HabitsTab";
import PrepPlanTab from "./PrepPlanTab";
import RulesTab from "./RulesTab";
import TrackerTab from "./TrackerTab";
import CheckInTab from "./CheckInTab";

type TabId = "schedule" | "habits" | "prep" | "rules" | "tracker" | "checkin";

interface TabItem {
  id: TabId;
  label: string;
}

const TABS: TabItem[] = [
  { id: "schedule", label: "Daily Schedule" },
  { id: "habits", label: "Habits" },
  { id: "prep", label: "Prep Plan" },
  { id: "rules", label: "Rules" },
  { id: "tracker", label: "Tracker" },
  { id: "checkin", label: "Check-in" },
];

export default function DashboardInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentDate, setCurrentDate] = useState("");
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [mounted, setMounted] = useState(false);

  const correctUsername = process.env.NEXT_PUBLIC_DASHBOARD_USERNAME || "anuragshakalaya";
  const correctPasscode = process.env.NEXT_PUBLIC_DASHBOARD_PASSCODE || "anuraggaur001";

  // Tab state synced with URL query param ?tab=
  const activeTabParam = searchParams.get("tab") as TabId;
  const activeTab: TabId = TABS.some((t) => t.id === activeTabParam)
    ? activeTabParam
    : "schedule";

  // Dynamic Date Formatting client-side to prevent SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
    const today = new Date();
    const formatted = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formatted);

    // Check passcode auth
    const savedUser = localStorage.getItem("dashboard_user");
    const savedPass = localStorage.getItem("dashboard_passcode");
    if (savedUser === correctUsername && savedPass === correctPasscode) {
      setIsAuthenticated(true);
    }
  }, [correctUsername, correctPasscode]);

  const handleTabChange = (tabId: TabId) => {
    router.push(`?tab=${tabId}`);
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === correctUsername && passcode === correctPasscode) {
      localStorage.setItem("dashboard_user", username);
      localStorage.setItem("dashboard_passcode", passcode);
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid username or password.");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "schedule":
        return <ScheduleTab />;
      case "habits":
        return <HabitsTab />;
      case "prep":
        return <PrepPlanTab />;
      case "rules":
        return <RulesTab />;
      case "tracker":
        return <TrackerTab />;
      case "checkin":
        return <CheckInTab />;
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center font-sans text-text-secondary text-sm">
        <span className="animate-pulse">Loading Dashboard...</span>
      </div>
    );
  }

  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, -5, 5, 0],
      transition: { duration: 0.4 },
    },
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
        <motion.div
          animate={isShaking ? "shake" : ""}
          variants={shakeVariants}
          className="bg-surface-1 border border-border rounded-card p-6 sm:p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(124,58,237,0.1)] relative overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

          <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 border border-accent/20 select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h2 className="text-lg font-bold text-white tracking-tight">Protected Dashboard</h2>
          <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
            Authorized access only. Enter your credentials to manage the placement prep logs.
          </p>

          <form onSubmit={handleUnlock} className="mt-6 space-y-4">
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (error) setError("");
                }}
                className={`w-full bg-surface-2 border rounded-btn px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all ${
                  error ? "border-rose-500" : "border-border"
                }`}
                autoFocus
              />

              <input
                type="password"
                placeholder="Password"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  if (error) setError("");
                }}
                className={`w-full bg-surface-2 border rounded-btn px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all ${
                  error ? "border-rose-500" : "border-border"
                }`}
              />

              {error && (
                <p className="text-rose-400 text-[11px] mt-2 font-medium select-none">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-btn transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98] focus:outline-none"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-bg relative z-10 text-white font-sans max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white select-text">
              My Placement Dashboard
            </h1>
            {/* Status Pill */}
            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold text-accent bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-full select-none shrink-0">
              Placements active
            </span>
          </div>
          <p className="text-text-secondary text-sm mt-1.5 leading-relaxed">
            Tracking the grind to 20+ LPA — updated daily.
          </p>
        </div>

        {/* Dynamic Date & Sign Out */}
        <div className="flex items-center gap-3 self-stretch md:self-auto justify-between md:justify-start">
          {currentDate && (
            <div className="text-xs sm:text-sm text-text-muted font-mono bg-surface-1 border border-border px-3.5 py-2 rounded-btn select-none">
              {currentDate}
            </div>
          )}
          <button
            onClick={() => {
              localStorage.removeItem("dashboard_user");
              localStorage.removeItem("dashboard_passcode");
              setIsAuthenticated(false);
              setUsername("");
              setPasscode("");
            }}
            className="text-xs font-semibold text-text-secondary bg-surface-1 border border-border hover:bg-surface-2 hover:text-white px-3.5 py-2.5 rounded-btn transition-colors duration-200 focus:outline-none"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Navigation Tabs Header */}
      <div className="mb-8 border-b border-border/80">
        <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none gap-2 pb-px select-none">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 py-3 text-sm font-semibold border-b-2 transition-all duration-200 focus:outline-none -mb-px shrink-0 ${
                  isActive
                    ? "border-accent text-white font-bold"
                    : "border-transparent text-text-muted hover:text-text-secondary"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Render active tab content */}
      <div className="pb-16">{renderTabContent()}</div>
    </div>
  );
}
