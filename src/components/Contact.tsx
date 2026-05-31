"use client";

import React, { useState } from "react";
import { FORMSPREE_ID } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import StatusBadge from "./StatusBadge";
import { saveContactSubmission } from "@/lib/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Please fill out this field.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please fill out this field.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");
    try {
      // 1. Submit to Formspree
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      // 2. Backup to Supabase
      await saveContactSubmission(formData.name, formData.email, formData.message);

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <AnimatedSection id="contact" className="section-padding bg-bg relative z-10">
      <div className="section-container">
        <h2 className="section-title">Let&apos;s work together</h2>
        <div className="h-1 w-12 bg-accent rounded-full mb-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              I&apos;m currently open to SDE, AI Engineer, and Full Stack roles. If you
              have an opportunity or just want to talk tech — reach out.
            </p>

            <div className="mt-6">
              <StatusBadge />
            </div>

            <div className="mt-8 space-y-4">
              {/* Email */}
              <a
                href="mailto:anuragshakalya@gmail.com"
                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-white transition-colors duration-200"
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
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                anuragshakalya@gmail.com
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/anuraggaur29"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-white transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                linkedin.com/in/anuraggaur29
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-surface-1 border border-border rounded-card p-5 sm:p-6 w-full">
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#1A1A1A] border rounded-btn px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none transition-colors ${
                    errors.name ? "border-rose-500 focus:border-rose-500" : "border-border focus:border-accent"
                  }`}
                />
                {errors.name && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-btn mt-1.5 select-none font-medium">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#1A1A1A] border rounded-btn px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none transition-colors ${
                    errors.email ? "border-rose-500 focus:border-rose-500" : "border-border focus:border-accent"
                  }`}
                />
                {errors.email && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-btn mt-1.5 select-none font-medium">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {errors.email}
                  </span>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-[#1A1A1A] border rounded-btn px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none transition-colors resize-none ${
                    errors.message ? "border-rose-500 focus:border-rose-500" : "border-border focus:border-accent"
                  }`}
                />
                {errors.message && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-btn mt-1.5 select-none font-medium">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-btn transition-colors duration-200 hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send message"}
              </button>

              {status === "success" && (
                <p className="text-emerald-500 text-xs mt-2 font-medium">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-xs mt-2 font-medium">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
