"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="section-padding bg-bg relative z-10">
      <div className="section-container">
        <h2 className="section-title">Things I&apos;ve built</h2>
        <p className="section-subtitle">A selection of projects I&apos;ve worked on</p>
        <div className="h-1 w-12 bg-accent rounded-full mb-10 -mt-8"></div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-surface-1 border border-border rounded-card p-5 sm:p-6 group cursor-default transition-all duration-300 hover:shadow-[0_0_0_1px_#7C3AED,0_8px_32px_rgba(124,58,237,0.15)] hover:border-accent flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-accent-hover transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold text-accent bg-accent/10 border border-accent/30 rounded-full select-none">
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, techIdx) => (
                    <span
                      key={techIdx}
                      className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-text-secondary bg-surface-2 border border-border rounded-full select-none"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links Row */}
              <div className="flex gap-4 mt-6 pt-4 border-t border-border/50 items-center">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-xs font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-xs font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
