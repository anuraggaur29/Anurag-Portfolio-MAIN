"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.1 });

  const stats = [
    { value: "8.1", label: "CGPA" },
    { value: "50", label: "out of 10,000+ teams", prefix: "Top" },
    { value: "5+", label: "Certifications" },
    { value: "2+", label: "Years building" },
  ];

  return (
    <AnimatedSection id="about" className="section-padding bg-bg relative z-10">
      <div className="section-container">
        <h2 className="section-title">About me</h2>
        <div className="h-1 w-12 bg-accent rounded-full mb-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Bio & Motto */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Profile Photo */}
              <div className="relative w-[120px] h-[120px] shrink-0 rounded-full overflow-hidden border-2 border-accent/40 shadow-[0_0_20px_rgba(124,58,237,0.25)]">
                <Image
                  src="/profile.jpg"
                  alt="Anurag"
                  fill
                  className="object-cover select-none pointer-events-none"
                  priority
                />
              </div>

              <div className="flex-1">
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  I&apos;m Anurag, a final-year CSE (AI/ML) student at Chandigarh
                  University building things that solve real problems. I work across
                  backend systems, full-stack apps, and ML pipelines. Currently
                  shipping Noteify+ — an exam prep platform for CS students. Previously
                  interned at Webstack Academy (MERN Stack). Top 50 in Graph-E-Thon
                  3.0 out of 10,000+ teams.
                </p>
              </div>
            </div>

            {/* Motto Card */}
            <div className="bg-surface-1 border border-border rounded-card p-5 relative overflow-hidden">
              <span className="absolute top-2 left-3 text-accent/20 text-5xl font-serif select-none pointer-events-none">
                “
              </span>
              <p className="text-white font-medium text-base relative z-10 pl-4 italic">
                Too stubborn to quit.
              </p>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-surface-1 border border-border rounded-card p-5 flex flex-col justify-center items-start hover:border-text-muted transition-colors duration-300"
              >
                {stat.prefix && (
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                    {stat.prefix}
                  </span>
                )}
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-text-muted mt-1 leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
