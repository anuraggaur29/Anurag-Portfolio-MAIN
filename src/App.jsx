import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box, Container, Grid, Typography, Button, IconButton
} from '@mui/material';
import {
  personalInfo, techStack, projects, experience, education,
  achievements, socialLinks
} from './data';

// ─── Inline SVG Icons ───────────────────────────────────────────────────────
const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

const ProjectsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
  </svg>
);

const TalkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ResumeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);


const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ZoomInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const ZoomOutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

// ─── Tech Icon Map ──────────────────────────────────────────────────────────
const techIcons = {
  'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Material UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',
  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'REST APIs': 'https://cdn.simpleicons.org/openapiinitiative',
  'JWT Auth': 'https://jwt.io/img/pic_logo.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'Schema Design': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'Query Optimization': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
  'RLS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  'Selenium': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg',
  'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
};

// ─── Animation Variants ─────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: '-60px' }
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// ─── Laptop Mockup ──────────────────────────────────────────────────────────
function LaptopMockup({ projectName, accentColor = 'var(--accent)' }) {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 460 }}>
      <div className="laptop-frame">
        <div style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
        <div className="laptop-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, #0a0a0f 0%, ${accentColor}15 50%, #0a0a0f 100%)` }}>
          <Typography sx={{ color: 'var(--accent)', fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', fontWeight: 600, opacity: 0.8, textAlign: 'center', px: 3 }}>
            {projectName}
          </Typography>
        </div>
      </div>
      <div className="laptop-base">
        <div className="laptop-notch" />
      </div>
    </div>
  );
}

// ─── Social Button ──────────────────────────────────────────────────────────
function SocialButton({ href, icon, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 44, height: 44, borderRadius: '50%',
        border: '1px solid var(--border-subtle)', background: 'var(--surface)',
        color: 'var(--muted)', transition: 'all 0.2s ease', textDecoration: 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--foreground)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--muted)'; }}
    >
      {icon}
    </a>
  );
}

// ─── Floating Dock Component ────────────────────────────────────────────────
function FloatingDock({ activeSection, onNavigate, onOpenResume, theme, onToggleTheme }) {
  const [socialOpen, setSocialOpen] = useState(false);

  const items = [
    { id: 'hero', icon: <HomeIcon />, label: 'Home' },
    { id: 'projects', icon: <ProjectsIcon />, label: 'Projects' },
    { id: 'contact', icon: <TalkIcon />, label: "Let's Talk" },
  ];

  return (
    <div className="floating-dock">
      {/* Social popup menu when hamburger is expanded */}
      <AnimatePresence>
        {socialOpen && (
          <motion.div
            className="social-popup-menu"
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <a href={socialLinks.email} target="_blank" rel="noopener noreferrer" className="social-popup-item" title="Email">
              <MailIcon />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-popup-item" title="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-popup-item" title="GitHub">
              <GithubIcon />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="dock-pill">
        {/* Nav Items */}
        {items.map(item => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              className={`dock-item ${isActive ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
              aria-label={item.label}
            >
              <span className="tooltip">{item.label}</span>
              {item.icon}
              {isActive && <div className="dock-active-dot" />}
            </button>
          );
        })}

        <div className="dock-separator" />

        {/* Resume Modal Trigger */}
        <button
          className="dock-item"
          onClick={onOpenResume}
          aria-label="Resume"
        >
          <span className="tooltip">Resume</span>
          <ResumeIcon />
        </button>

        <div className="dock-separator" />

        {/* Theme Toggle (Sun/Moon) */}
        <button
          className="dock-item"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        >
          <span className="tooltip">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        <div className="dock-separator" />

        {/* Hamburger / Social Expand Toggle */}
        <button
          className="dock-item"
          onClick={() => setSocialOpen(!socialOpen)}
          aria-label="Social Links"
        >
          <span className="tooltip">Socials</span>
          {socialOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
}

// ─── Resume Modal Component ─────────────────────────────────────────────────
function ResumeModal({ isOpen, onClose }) {
  const [zoom, setZoom] = useState(100);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="resume-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="resume-modal-content"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Sidebar */}
          <Box sx={{
            width: { xs: '100%', md: 280 },
            borderRight: { md: '1px solid var(--border-subtle)' },
            borderBottom: { xs: '1px solid var(--border-subtle)', md: 'none' },
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            background: 'var(--surface)',
            flexShrink: 0
          }}>
            <Box>
              {/* Header inside modal */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ResumeIcon />
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    RESUME
                  </Typography>
                </Box>
                <IconButton size="small" onClick={onClose} sx={{ color: 'var(--muted)', display: { md: 'none' } }}>
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* User Avatar & Info */}
              <Box sx={{ mb: 3 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  overflow: 'hidden', border: '1px solid var(--accent)',
                  marginBottom: 16
                }}>
                  <img src="/avatar.png" alt={personalInfo.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--foreground)' }}>
                  {personalInfo.name}
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'var(--muted)', mb: 0.5 }}>
                  {personalInfo.title}
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'var(--muted)', opacity: 0.7 }}>
                  📍 {personalInfo.location}
                </Typography>
              </Box>

              {/* Navigation Action Pills */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
                <Box sx={{
                  p: 1.5, borderRadius: '12px', background: 'var(--accent-glow)',
                  border: '1px solid var(--accent)', color: 'var(--accent)',
                  fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 1
                }}>
                  <ResumeIcon /> Resume
                </Box>

                <a
                  href={personalInfo.resume}
                  download="ANURAG_Resume.pdf"
                  style={{ textDecoration: 'none' }}
                >
                  <Box sx={{
                    p: 1.5, borderRadius: '12px', background: 'transparent',
                    border: '1px solid var(--border-subtle)', color: 'var(--foreground)',
                    fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 1,
                    transition: 'all 0.2s',
                    '&:hover': { background: 'var(--surface-hover)', borderColor: 'var(--accent)' }
                  }}>
                    📥 Download PDF
                  </Box>
                </a>
              </Box>
            </Box>

            {/* Last updated footer */}
            <Box sx={{ pt: 2, borderTop: '1px solid var(--border-subtle)', mt: 'auto' }}>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                LAST UPDATED
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--foreground)' }}>
                Feb 2026
              </Typography>
            </Box>
          </Box>

          {/* Main Sheet Viewer Area */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--modal-bg)', overflow: 'hidden' }}>
            {/* Top Bar */}
            <Box sx={{ p: 2, px: 3, borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted)' }}>
                {personalInfo.name} — Resume Sheet
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center' }} title="Open in new tab">
                  <ExternalLinkIcon />
                </a>
                <IconButton size="small" onClick={onClose} sx={{ color: 'var(--muted)' }}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Embedded Actual PDF Resume Document */}
            <Box sx={{ flex: 1, overflow: 'auto', p: { xs: 1, sm: 2 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{
                width: '100%',
                height: '100%',
                maxWidth: 800,
                transform: `scale(${zoom / 100})`,
                transformOrigin: 'top center',
                transition: 'transform 0.2s ease',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 20px 40px var(--card-shadow)',
                border: '1px solid var(--border-subtle)',
                background: '#fff'
              }}>
                <iframe
                  src={`${personalInfo.resume}#toolbar=0&navpanes=0`}
                  title={`${personalInfo.name} Resume`}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: 12
                  }}
                />
              </div>
            </Box>

            {/* Bottom Controls */}
            <Box sx={{ p: 1.5, px: 3, borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton size="small" onClick={() => setZoom(Math.max(70, zoom - 10))} sx={{ color: 'var(--muted)' }}>
                  <ZoomOutIcon />
                </IconButton>
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--muted)', width: 45, textAlign: 'center' }}>
                  {zoom}%
                </Typography>
                <IconButton size="small" onClick={() => setZoom(Math.min(130, zoom + 10))} sx={{ color: 'var(--muted)' }}>
                  <ZoomInIcon />
                </IconButton>
              </Box>

              <Typography sx={{ fontSize: '0.75rem', color: 'var(--muted)', fontStyle: 'italic' }}>
                scroll to view full sheet
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════════════════
function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio_theme') || 'dark');
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sections = ['hero', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Flatten tech stack for filtering
  const allTech = useMemo(() => {
    const result = [];
    Object.entries(techStack).forEach(([category, skills]) => {
      skills.forEach(skill => result.push({ name: skill, category }));
    });
    return result;
  }, []);

  const filteredTech = activeFilter === 'All'
    ? allTech
    : allTech.filter(t => t.category === activeFilter.toLowerCase());

  const filterCategories = ['All', ...Object.keys(techStack).map(k => k.charAt(0).toUpperCase() + k.slice(1))];

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>

      {/* Hatched side borders */}
      <div className="hatched-border" style={{ left: 0 }}><div className="hatched-border-inner" /></div>
      <div className="hatched-border" style={{ right: 0 }}><div className="hatched-border-inner" /></div>

      {/* Floating Bottom Dock */}
      <FloatingDock
        activeSection={activeSection}
        onNavigate={scrollTo}
        onOpenResume={() => setIsResumeOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Interactive Resume Reader Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* ════ MAIN CONTENT ════ */}
      <Box sx={{ position: 'relative', zIndex: 10, maxWidth: 1152, mx: 'auto', px: { xs: '20px', sm: '80px' } }}>
        <Box component="main" sx={{ pb: '120px' }}>

          {/* ───── HERO ───── */}
          <section id="hero" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
            <motion.div {...fadeUp}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>

                {/* Avatar Image */}
                <div className="avatar-placeholder">
                  <img src="/avatar.png" alt={personalInfo.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <Box sx={{ maxWidth: 700, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <p className="detail-label">Full Stack Developer | Chandigarh, India</p>
                  <Typography variant="h1" sx={{ fontFamily: '"Playfair Display", serif', fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4rem' }, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--foreground)' }}>
                    {personalInfo.name}
                  </Typography>
                  <p className="section-lead" style={{ maxWidth: 680 }}>
                    {personalInfo.intro}
                  </p>
                </Box>

                {/* CTA Buttons */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, pt: 1 }}>
                  <Button
                    onClick={() => setIsResumeOpen(true)}
                    startIcon={<ResumeIcon />}
                    sx={{
                      minHeight: 44, px: 2.5, py: 1.2, borderRadius: '50px',
                      border: '1px solid var(--border-subtle)', background: 'var(--surface)',
                      color: 'var(--foreground)', fontWeight: 600, fontSize: '0.875rem',
                      textTransform: 'none',
                      '&:hover': { background: 'var(--surface-hover)', borderColor: 'var(--accent)' }
                    }}
                  >
                    Resume / CV
                  </Button>

                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <SocialButton href={socialLinks.github} icon={<GithubIcon />} label="GitHub" />
                    <SocialButton href={socialLinks.linkedin} icon={<LinkedInIcon />} label="LinkedIn" />
                    <SocialButton href={socialLinks.email} icon={<MailIcon />} label="Email" />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </section>

          {/* ───── TECH STACK ───── */}
          <section id="tech-stack" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
            <motion.div {...fadeUp}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { sm: 'flex-end' }, gap: 3, mb: 5 }}>
                <Box>
                  <p className="detail-label">Capabilities</p>
                  <h2 className="section-heading">Tech Stack</h2>
                  <p className="section-lead">Core tools I use to build scalable applications.</p>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, flexShrink: 0 }}>
                  {filterCategories.map(cat => (
                    <button key={cat} className={`filter-btn ${activeFilter === cat ? 'active' : ''}`} onClick={() => setActiveFilter(cat)}>
                      {cat}
                    </button>
                  ))}
                </Box>
              </Box>

              <motion.div {...stagger} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <AnimatePresence mode="popLayout">
                  {filteredTech.map(tech => (
                    <motion.div key={tech.name} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.25 }}>
                      <div className="tech-pill">
                        {techIcons[tech.name] && (
                          <img
                            src={techIcons[tech.name]}
                            alt={tech.name}
                            width="16"
                            height="16"
                            loading="lazy"
                            style={theme === 'dark' && ['GitHub', 'Next.js', 'Vercel', 'REST APIs'].includes(tech.name) ? { filter: 'invert(1)' } : undefined}
                          />
                        )}
                        <span>{tech.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </section>

          {/* ───── PROJECTS ───── */}
          <section id="projects" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <motion.div {...fadeUp}>
              <Box sx={{ mb: 5, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { sm: 'flex-end' }, gap: 2 }}>
                <Box>
                  <p className="detail-label">Selected Work</p>
                  <h2 className="section-heading">Projects</h2>
                </Box>
                <p className="section-lead" style={{ textAlign: 'right' }}>Three production builds, live on real URLs.</p>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {projects.map((project, idx) => (
                  <motion.div key={project.id} {...staggerChild}>
                    <Box className="section-card" sx={{
                      borderRadius: '24px', p: { xs: 2.5, sm: 3 }, overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 50px var(--card-shadow)', borderColor: 'var(--accent)' }
                    }}>
                      <Grid container spacing={4} alignItems="center" direction={idx % 2 === 1 ? 'row-reverse' : 'row'}>
                        <Grid item xs={12} lg={6}>
                          <Box sx={{ display: 'flex', justifyContent: 'center', py: { xs: 2, lg: 3 } }}>
                            <LaptopMockup projectName={project.name} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pl: { lg: idx % 2 === 1 ? 0 : 1 }, pr: { lg: idx % 2 === 1 ? 1 : 0 } }}>
                            <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", serif', fontSize: { xs: '1.5rem', sm: '1.8rem' }, fontWeight: 700, color: 'var(--foreground)', lineHeight: 1.2 }}>
                              {project.name}
                            </Typography>
                            <Typography sx={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.02em' }}>
                              {project.subtitle} — {project.year}
                            </Typography>
                            <Typography sx={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                              {project.description}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pt: 0.5 }}>
                              {project.tags.map(tag => (
                                <span key={tag} style={{
                                  padding: '4px 12px', borderRadius: 8, fontSize: '0.65rem', fontWeight: 700,
                                  textTransform: 'uppercase', letterSpacing: '0.08em',
                                  border: '1px solid var(--border-subtle)', background: 'var(--surface-hover)',
                                  color: 'var(--muted)'
                                }}>
                                  {tag}
                                </span>
                              ))}
                            </Box>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5, pt: 1.5, alignItems: 'center' }}>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px',
                                borderRadius: 12, border: '1px solid var(--accent)', color: 'var(--accent)',
                                fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', transition: 'all 0.2s'
                              }}>
                                Live Demo <ArrowUpRight />
                              </a>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                color: 'var(--foreground)', fontWeight: 500, fontSize: '0.85rem', textDecoration: 'none', opacity: 0.9
                              }}>
                                Source <GithubIcon />
                              </a>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </section>

          {/* ───── EXPERIENCE ───── */}
          <section id="experience" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <motion.div {...fadeUp}>
              <p className="detail-label">Career</p>
              <h2 className="section-heading">Experience</h2>

              <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
                {experience.map(exp => (
                  <motion.div key={exp.id} {...staggerChild}>
                    <Box className="section-card" sx={{ borderRadius: '20px', p: { xs: 2.5, sm: 3.5 } }}>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                        {/* Left */}
                        <Box sx={{ minWidth: { md: 240 }, flexShrink: 0 }}>
                          <Typography sx={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--foreground)', mb: 0.5 }}>
                            {exp.role}
                          </Typography>
                          <Typography sx={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500, mb: 0.5 }}>
                            {exp.company}
                          </Typography>
                          {exp.stack && (
                            <Typography sx={{ color: 'var(--muted)', fontSize: '0.75rem', mb: 0.5 }}>
                              {exp.stack} · {exp.type}
                            </Typography>
                          )}
                          <Typography sx={{ color: 'var(--muted)', opacity: 0.7, fontSize: '0.8rem' }}>
                            {exp.duration}
                          </Typography>
                        </Box>
                        {/* Right */}
                        <Box sx={{ flex: 1 }}>
                          {exp.description.map((d, i) => (
                            <Box key={i} sx={{ display: 'flex', gap: 1.5, mb: 1.5 }}>
                              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bg: 'var(--accent)', mt: '8px', flexShrink: 0, background: 'var(--accent)', opacity: 0.6 }} />
                              <Typography sx={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                                {d}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </section>

          {/* ───── EDUCATION ───── */}
          <section id="education" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <motion.div {...fadeUp}>
              <p className="detail-label">Academic Background</p>
              <h2 className="section-heading">Education</h2>

              <Grid container spacing={3} sx={{ mt: 2 }}>
                {education.map(edu => (
                  <Grid item xs={12} md={6} key={edu.id}>
                    <motion.div {...staggerChild}>
                      <Box className="section-card" sx={{
                        borderRadius: '20px', p: { xs: 2.5, sm: 3.5 }, height: '100%', textAlign: 'center',
                        transition: 'all 0.3s',
                        '&:hover': { borderColor: 'var(--accent)' }
                      }}>
                        <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--foreground)', mb: 1 }}>
                          {edu.institution}
                        </Typography>
                        <Typography sx={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 500, mb: 1.5 }}>
                          {edu.degree}
                        </Typography>
                        <Typography sx={{ color: 'var(--foreground)', fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}>
                          {edu.score}
                        </Typography>
                        <Typography sx={{ color: 'var(--muted)', fontSize: '0.8rem', mb: 0.5 }}>
                          {edu.duration}
                        </Typography>
                        <Typography sx={{ color: 'var(--muted)', opacity: 0.7, fontSize: '0.75rem' }}>
                          {edu.location}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </section>

          {/* ───── ACHIEVEMENTS ───── */}
          <section id="achievements" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <motion.div {...fadeUp}>
              <p className="detail-label">Recognition</p>
              <h2 className="section-heading">Achievements & Certifications</h2>

              <Grid container spacing={3} sx={{ mt: 2 }}>
                {achievements.map(a => (
                  <Grid item xs={12} sm={6} md={4} key={a.id}>
                    <motion.div {...staggerChild}>
                      <Box className="section-card" sx={{
                        borderRadius: '20px', p: 3, height: '100%',
                        display: 'flex', flexDirection: 'column', gap: 1.5,
                        transition: 'all 0.3s',
                        '&:hover': { transform: 'translateY(-4px)', borderColor: 'var(--accent)' }
                      }}>
                        <Typography sx={{ color: 'var(--foreground)', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>
                          {a.title}
                        </Typography>
                        <Typography sx={{ color: 'var(--muted)', fontSize: '0.8rem', lineHeight: 1.6, flex: 1 }}>
                          {a.description}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                          <Typography sx={{ color: 'var(--muted)', opacity: 0.7, fontSize: '0.75rem' }}>{a.date}</Typography>
                          {a.credentialUrl && (
                            <a href={a.credentialUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
                              View Credential →
                            </a>
                          )}
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </section>

          {/* ───── CONTACT ───── */}
          <section id="contact" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <motion.div {...fadeUp}>
              <Box className="section-card" sx={{
                borderRadius: '24px', p: { xs: 3, sm: 5 }, maxWidth: 700, mx: 'auto', textAlign: 'center'
              }}>
                <p className="detail-label" style={{ textAlign: 'center' }}>Let's Talk</p>
                <h2 className="section-heading" style={{ textAlign: 'center' }}>Get In Touch</h2>
                <Typography sx={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, mt: 2, mb: 4, maxWidth: 500, mx: 'auto' }}>
                  I'm currently looking for SDE / full-stack roles where I can work on systems at higher scale. Feel free to reach out!
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                  <Button
                    href={`mailto:${personalInfo.email}`}
                    startIcon={<MailIcon />}
                    sx={{
                      px: 3, py: 1.5, borderRadius: '50px',
                      background: 'var(--accent)', color: 'var(--background)',
                      fontWeight: 700, textTransform: 'none',
                      '&:hover': { opacity: 0.9 }
                    }}
                  >
                    {personalInfo.email}
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5 }}>
                  <SocialButton href={socialLinks.github} icon={<GithubIcon />} label="GitHub" />
                  <SocialButton href={socialLinks.linkedin} icon={<LinkedInIcon />} label="LinkedIn" />
                </Box>

                <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid var(--border-subtle)' }}>
                  <Button
                    onClick={() => setIsResumeOpen(true)}
                    startIcon={<ResumeIcon />}
                    sx={{
                      px: 3, py: 1.2, borderRadius: '50px',
                      border: '1px solid var(--accent)', color: 'var(--accent)',
                      fontWeight: 600, textTransform: 'none', fontSize: '0.9rem',
                      '&:hover': { background: 'var(--accent-glow)' }
                    }}
                  >
                    View & Download Resume
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </section>

        </Box>

        {/* ───── FOOTER ───── */}
        <Box sx={{ borderTop: '1px solid var(--border-subtle)', py: 4, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Anurag
          </Typography>
          <Typography sx={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
            Thanks for visiting my portfolio!
          </Typography>
        </Box>
      </Box>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed', bottom: 80, right: 24, width: 44, height: 44,
              borderRadius: '50%', border: '1px solid var(--border-subtle)',
              background: 'var(--surface)', color: 'var(--foreground)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 40, transition: 'all 0.2s'
            }}
            aria-label="Back to top"
          >
            <ArrowUpIcon />
          </motion.button>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default App;
