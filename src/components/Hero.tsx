"use client";

import React from "react";
import GridBackground from "./GridBackground";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      <GridBackground />

      <div className="block relative lg:flex max-w-5xl mx-auto mt-20 px-8 w-full z-10 pt-16 pb-20 items-center">
        <div className="flex-1 fade-in">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-zinc-50 max-w-3xl tracking-tight">
            Trust me, I&apos;m a{" "}
            <span className="hero-gradient-text block mt-2">software engineer.</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">
            Meet Anurag, a CS (AI/ML) student at Chandigarh University with an 8.1 CGPA, building full-stack web apps, ML models, and tools that solve real problems. Top 50 at Graph-E-Thon 3.0 among 10,000+ teams.
          </p>
          <p className="text-zinc-600 text-sm mt-2">~ Portfolio</p>

          <div className="mt-8 text-zinc-400 text-sm md:text-base max-w-2xl leading-loose tracking-wide">
            Open to <a className="text-zinc-200 font-bold hover:text-cyan-500 transition duration-150" href="#about">SWE, ML, and AI Engineer</a> roles ✨
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a target="_blank" rel="noopener noreferrer" className="whatsapp-btn" href="https://wa.me/917988019566">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Contact Me</span>
            </a>
            <a className="cta-btn" href="/resume.pdf" download>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 lg:ml-10 flex-shrink-0 fade-in fade-in-delay-2">
          <Image
            alt="Anurag"
            width={500}
            height={500}
            className="hero-avatar w-full max-w-[320px] lg:max-w-[400px] mx-auto rounded-[2rem] border border-accent/20 shadow-[0_0_40px_rgba(124,58,237,0.15)]"
            src="/profile.jpg"
          />
          <div className="flex flex-row justify-start md:justify-center space-x-1 mt-6">
            <a href="https://linkedin.com/in/anuraggaur29" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path></svg>
            </a>
            <a href="https://github.com/anuraggaur29" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
