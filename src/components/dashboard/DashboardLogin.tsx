"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function DashboardLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("anuragshakalaya");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/dashboard/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        setError(payload?.error || "Invalid username or password.");
        return;
      }

      router.replace("/dashboard");
      router.refresh();
    } catch {
      setError("Unable to sign in right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="bg-surface-1 border border-border rounded-card p-6 sm:p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(124,58,237,0.1)] relative overflow-hidden"
      >
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

        <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 border border-accent/20 select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <h2 className="text-lg font-bold text-white tracking-tight">Protected Dashboard</h2>
        <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
          Sign in with the private dashboard credentials to continue.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4 text-left">
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
                if (error) {
                  setError("");
                }
              }}
              className="w-full bg-surface-2 border border-border rounded-btn px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
              autoComplete="username"
              autoFocus
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) {
                  setError("");
                }
              }}
              className="w-full bg-surface-2 border border-border rounded-btn px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
              autoComplete="current-password"
            />

            {error && <p className="text-rose-400 text-[11px] mt-2 font-medium select-none">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-btn transition-colors duration-200 hover:bg-accent-hover disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98] focus:outline-none"
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}