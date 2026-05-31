"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";

const posts = [
  {
    title: "Why I chose Rust for my steganography engine",
    date: "Coming Soon",
    tag: "Engineering",
  },
  {
    title: "What 9 months of inconsistency taught me about building",
    date: "Coming Soon",
    tag: "Personal",
  },
  {
    title: "Breaking into AI engineering as a student — what actually works",
    date: "Coming Soon",
    tag: "Career",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-bg relative z-10">
      <div className="section-container">
        <h2 className="section-title">Writing & thoughts</h2>
        <p className="section-subtitle">
          I write about AI, full-stack dev, and the grind of building things as a
          student.
        </p>
        <div className="h-1 w-12 bg-accent rounded-full mb-10 -mt-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post, idx) => (
            <AnimatedSection
              key={idx}
              delay={idx * 0.1}
              className="relative bg-surface-1 border border-border rounded-card p-5 sm:p-6 opacity-60 transition-all duration-300 hover:opacity-80 flex flex-col justify-between h-48 select-none"
            >
              {/* Coming Soon Pill */}
              <span className="absolute top-3 right-3 inline-flex items-center px-2 py-0.5 text-[10px] font-semibold text-accent bg-accent/10 border border-accent/30 rounded-full">
                Coming Soon
              </span>

              {/* Tag & Title */}
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-medium text-text-secondary bg-surface-2 border border-border rounded-full">
                  {post.tag}
                </span>
                <h3 className="text-sm sm:text-base font-semibold text-white mt-4 leading-snug tracking-tight">
                  {post.title}
                </h3>
              </div>

              {/* Date */}
              <span className="text-xs text-text-muted">{post.date}</span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
