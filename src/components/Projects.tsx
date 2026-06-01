"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { projects } from "@/data/projects";
import Project3DCard from "./Project3DCard";

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
            <div
              key={idx}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "none" : "translateY(30px)",
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) " + idx * 0.1 + "s"
              }}
            >
              <Project3DCard
                title={project.title}
                desc={project.description}
                url={project.live || project.github}
                badge={project.badge || project.tech[0] || "Project"}
                img={project.img || "/profile.jpg"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
