"use client";

import React, { useState } from "react";
import { experience } from "@/data/experience";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section-padding bg-bg relative z-10">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle mt-4">
          Building skills through internships, leadership, and community involvement.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-8 md:mt-16 max-w-3xl mx-auto">
          {/* Left: Tabs */}
          <div className="flex flex-row md:flex-col relative overflow-x-auto md:overflow-x-visible md:w-48 shrink-0 pb-4 md:pb-0 z-20">
            <div className="hidden md:block absolute -left-6 w-px h-full bg-zinc-800 overflow-hidden">
              <div className="meteor-line"></div>
            </div>
            {experience.map((item, idx) => (
              <div className="relative my-1" key={idx}>
                <button
                  className={`exp-tab ${activeTab === idx ? "active" : ""}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <div className="exp-tab-icon">
                    {item.organization.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="truncate">{item.organization.split(",")[0]}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Right: Details */}
          <div className="md:pl-10 flex-1 min-h-[300px]">
            {experience.map((item, idx) => (
              <div
                key={idx}
                className={`exp-detail flex flex-col space-y-2 fade-in ${
                  activeTab === idx ? "block" : "hidden"
                }`}
              >
                <h3 className="text-2xl font-bold text-zinc-100">
                  {item.role} <span className="text-cyan-500">@{item.organization.split(",")[0]}</span>
                </h3>
                <div className="text-zinc-400 text-sm tracking-widest">{item.period}</div>
                {item.location && <p className="text-zinc-400 text-sm">{item.location}</p>}
                
                <div className="mt-4">
                  {item.description.split(". ").filter(p => p.length > 0).map((point, pointIdx) => (
                    <div className="check-item" key={pointIdx}>
                      <svg className="check-icon" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                      </svg>
                      <span className="text-zinc-400 text-sm">{point.endsWith('.') ? point : point + '.'}</span>
                    </div>
                  ))}
                </div>
                
                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-text-secondary bg-surface-2 border border-border rounded-full select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
