"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="section-padding bg-bg relative z-10">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Where I&apos;ve worked and contributed</p>
        <div className="h-1 w-12 bg-accent rounded-full mb-10 -mt-8"></div>

        <div ref={containerRef} className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[7px] top-1.5 bottom-1.5 w-px bg-border"></div>

          <div className="space-y-0">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 pb-10 last:pb-0"
              >
                {/* Timeline Node Dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent bg-bg z-10"></div>

                {/* Content Box */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <div className="text-sm font-medium text-accent mt-0.5">
                    {item.organization}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-text-muted mt-1.5">
                    <span>{item.period}</span>
                    {item.location && (
                      <>
                        <span className="text-border">•</span>
                        <span>{item.location}</span>
                      </>
                    )}
                  </div>

                  <p className="text-sm text-text-secondary mt-3 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
