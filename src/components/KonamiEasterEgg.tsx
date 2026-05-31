"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiEasterEgg() {
  const [isActive, setIsActive] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const keySequence = useRef<string[]>([]);
  const textTimer = useRef<NodeJS.Timeout | null>(null);

  const message =
    "Hello, recruiter. You found the Easter egg. Here's a secret: I'm more stubborn than your toughest interview. — Anurag";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Record keypress
      keySequence.current.push(e.key);
      if (keySequence.current.length > KONAMI_CODE.length) {
        keySequence.current.shift();
      }

      // Check match
      if (
        keySequence.current.length === KONAMI_CODE.length &&
        keySequence.current.every((key, idx) => key.toLowerCase() === KONAMI_CODE[idx].toLowerCase())
      ) {
        setIsActive(true);
        setDisplayedText("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Typewriter effect trigger
  useEffect(() => {
    if (!isActive) {
      if (textTimer.current) clearInterval(textTimer.current);
      setDisplayedText("");
      return;
    }

    let charIdx = 0;
    textTimer.current = setInterval(() => {
      if (charIdx < message.length) {
        setDisplayedText(message.slice(0, charIdx + 1));
        charIdx++;
      } else {
        if (textTimer.current) clearInterval(textTimer.current);
      }
    }, 40);

    return () => {
      if (textTimer.current) clearInterval(textTimer.current);
    };
  }, [isActive]);

  // Handle Escape key to close
  useEffect(() => {
    if (!isActive) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsActive(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsActive(false)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full mx-4 bg-[#111111] border border-border rounded-card overflow-hidden"
          >
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-border">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-xs text-text-muted ml-2 font-mono select-none">
                  terminal
                </span>
              </div>
              <button
                onClick={() => setIsActive(false)}
                className="text-text-muted hover:text-white font-mono text-xs focus:outline-none"
              >
                esc
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-sm leading-relaxed text-emerald-400 min-h-[120px]">
              <span className="text-text-muted select-none">&gt; </span>
              {displayedText}
              <span className="animate-pulse text-accent ml-0.5 font-bold">|</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
