"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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

  // Tab state synced with URL query param ?tab=
  const activeTabParam = searchParams.get("tab") as TabId;
  const activeTab: TabId = TABS.some((t) => t.id === activeTabParam)
    ? activeTabParam
    : "schedule";

  // Dynamic Date Formatting client-side to prevent SSR hydration mismatch
  useEffect(() => {
    const today = new Date();
    const formatted = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formatted);
  }, []);

  const handleTabChange = (tabId: TabId) => {
    router.push(`?tab=${tabId}`);
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
            onClick={async () => {
              await fetch("/api/dashboard/logout", { method: "POST" });
              router.replace("/dashboard");
              router.refresh();
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
