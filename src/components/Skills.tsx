"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg relative z-10">
      <div className="section-container">
        <h2 className="section-title">What I work with</h2>
        <p className="section-subtitle">Technologies and tools I use daily</p>
        <div className="h-1 w-12 bg-accent rounded-full mb-10 -mt-8"></div>

        <div className="space-y-8 sm:space-y-10">
          {skills.map((category, catIdx) => (
            <AnimatedSection
              key={catIdx}
              delay={catIdx * 0.1}
              className="border-b border-border/30 pb-6 sm:pb-8 last:border-b-0 last:pb-0"
            >
              <h3 className="text-xs font-semibold text-text-muted mb-4 uppercase tracking-widest">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.items.map((skill, pillIdx) => (
                  <motion.span
                    key={pillIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIdx * 0.1 + pillIdx * 0.03,
                      duration: 0.3,
                    }}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-text-secondary bg-[#111111] border border-border rounded-full hover:text-white hover:border-text-muted hover:bg-surface-2 transition-all duration-200 select-none cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
