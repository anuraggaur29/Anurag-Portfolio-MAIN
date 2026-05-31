"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const lastScrollY = useRef(0);

  // Scroll logic: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Confetti Logo Easter Egg
  const handleLogoClick = async () => {
    const newCount = clickCount + 1;
    if (newCount >= 5) {
      try {
        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.3 },
        });
      } catch {
        // Silent error fallback
      }
      setClickCount(0);
    } else {
      setClickCount(newCount);
    }

    // Scroll to top or navigate home
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      animate={{ y: isVisible ? 0 : -80 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-lg border-b border-border transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 text-lg font-bold text-white hover:opacity-85 transition-opacity focus:outline-none select-none"
        >
          {/* Custom Stylized Logo Icon (Linear-inspired + AI/ML Nodes theme) */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent shrink-0"
          >
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" />
            <path
              d="M35 70 L50 35 L65 70"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M40 55 L60 55"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <circle cx="50" cy="35" r="6" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" />
            <circle cx="35" cy="70" r="6" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" />
            <circle cx="65" cy="70" r="6" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" />
          </svg>
          anurag.
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hire Me Button Desktop */}
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Hire me
          </a>
        </div>

        {/* Hamburger Menu Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 text-text-secondary hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Slide Down Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-text-secondary hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center py-3"
              >
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
