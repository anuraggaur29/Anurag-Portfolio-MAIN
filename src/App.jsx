import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box, Container, Grid, Typography, Button, Card, CardContent, Link, IconButton
} from '@mui/material';
import {
  personalInfo, navLinks, techStack, projects, experience, education,
  achievements, socialLinks
} from './data';

// ─── Icon Components (inline SVGs for dock + social) ───────────────────────
const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
const ProjectsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
  </svg>
);
const ExpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const AwardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const FileIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8l6 6v12a2 2 0 0 1-2 2z" /><path d="M14 2v6h6" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
  </svg>
);
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const ArrowUpRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
  </svg>
);
const ArrowUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 15-6-6-6 6"/>
  </svg>
);
const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
);

// ─── Tech stack icon URLs (devicons CDN) ────────────────────────────────────
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

// ─── Animation variants ─────────────────────────────────────────────────────
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

// ─── Floating Dock ──────────────────────────────────────────────────────────
function FloatingDock({ onNavigate }) {
  const items = [
    { icon: <HomeIcon />, label: 'Home', target: 'hero' },
    { icon: <ProjectsIcon />, label: 'Projects', target: 'projects' },
    { icon: <ExpIcon />, label: 'Experience', target: 'experience' },
    { icon: <AwardIcon />, label: 'Achievements', target: 'achievements' },
    { icon: <MailIcon />, label: 'Contact', target: 'contact' },
  ];

  return (
    <div className="floating-dock">
      <div className="dock-pill">
        {items.map((item, i) => (
          <div key={i} className="dock-item" onClick={() => onNavigate(item.target)} role="button" tabIndex={0} aria-label={item.label}>
            <span className="tooltip">{item.label}</span>
            {item.icon}
          </div>
        ))}
        <div className="dock-separator" />
        <a href={personalInfo.resume} download="ANURAG_Resume.pdf" className="dock-item" aria-label="Resume" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="tooltip">Resume</span>
          <FileIcon />
        </a>
      </div>
    </div>
  );
}

// ─── Laptop Mockup Component ────────────────────────────────────────────────
function LaptopMockup({ projectName, accentColor = '#d4a574' }) {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 460 }}>
      <div className="laptop-frame">
        <div style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
        <div className="laptop-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, #0a0a0f 0%, ${accentColor}10 50%, #0a0a0f 100%)` }}>
          <Typography sx={{ color: accentColor, fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', fontWeight: 600, opacity: 0.7, textAlign: 'center', px: 3 }}>
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

// ─── Social Icon Button ─────────────────────────────────────────────────────
function SocialButton({ href, icon, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 44, height: 44, borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.06)', background: 'var(--surface)',
        color: 'var(--muted)', transition: 'all 0.2s ease', textDecoration: 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,165,116,0.4)'; e.currentTarget.style.color = 'var(--foreground)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--muted)'; }}
    >
      {icon}
    </a>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════════════════
function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
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

      {/* Hatched side borders (desktop only) */}
      <div className="hatched-border" style={{ left: 0 }}><div className="hatched-border-inner" /></div>
      <div className="hatched-border" style={{ right: 0 }}><div className="hatched-border-inner" /></div>

      {/* Floating Bottom Dock */}
      <FloatingDock onNavigate={scrollTo} />

      {/* ════ MAIN CONTENT ════ */}
      <Box sx={{ position: 'relative', zIndex: 10, maxWidth: 1152, mx: 'auto', px: { xs: '20px', sm: '80px' } }}>
        <Box component="main" sx={{ pb: '120px' }}>

          {/* ───── HERO ───── */}
          <section id="hero" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
            <motion.div {...fadeUp}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>

                {/* Avatar placeholder */}
                <div className="avatar-placeholder">
                  <span className="initials">A</span>
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
                    href={personalInfo.resume}
                    download="ANURAG_Resume.pdf"
                    startIcon={<FileIcon />}
                    sx={{
                      minHeight: 44, px: 2.5, py: 1.2, borderRadius: '50px',
                      border: '1px solid var(--border-subtle)', background: 'var(--surface)',
                      color: 'var(--foreground)', fontWeight: 600, fontSize: '0.875rem',
                      textTransform: 'none',
                      '&:hover': { background: 'var(--background)', borderColor: 'rgba(212,165,116,0.3)' }
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
                          <img src={techIcons[tech.name]} alt={tech.name} width="16" height="16" loading="lazy"
                            style={['GitHub', 'Next.js', 'Vercel', 'REST APIs'].includes(tech.name) ? { filter: 'invert(1)' } : undefined}
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
                <p className="section-lead" style={{ textAlign: 'right' }}>Three production apps, live on real URLs.</p>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {projects.map((project, idx) => (
                  <motion.div key={project.id} {...staggerChild}>
                    <Box className="section-card" sx={{
                      borderRadius: '24px', p: { xs: 2.5, sm: 3 }, overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 50px rgba(0,0,0,0.4)', borderColor: 'rgba(212,165,116,0.3)' }
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
                                  border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)',
                                  color: 'var(--muted)'
                                }}>
                                  {tag}
                                </span>
                              ))}
                            </Box>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5, pt: 1.5, alignItems: 'center' }}>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px',
                                borderRadius: 12, border: '1px solid rgba(212,165,116,0.5)', color: 'var(--accent)',
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
                          <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
                            {exp.duration}
                          </Typography>
                        </Box>
                        {/* Right */}
                        <Box sx={{ flex: 1 }}>
                          {exp.description.map((d, i) => (
                            <Box key={i} sx={{ display: 'flex', gap: 1.5, mb: 1.5 }}>
                              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bg: 'var(--accent)', mt: '8px', flexShrink: 0, background: 'var(--accent)', opacity: 0.5 }} />
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
                        '&:hover': { borderColor: 'rgba(212,165,116,0.3)' }
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
                        <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
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
                        '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(212,165,116,0.3)' }
                      }}>
                        <Typography sx={{ color: 'var(--foreground)', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>
                          {a.title}
                        </Typography>
                        <Typography sx={{ color: 'var(--muted)', fontSize: '0.8rem', lineHeight: 1.6, flex: 1 }}>
                          {a.description}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                          <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>{a.date}</Typography>
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
                      background: 'var(--accent)', color: '#0a0a0b',
                      fontWeight: 700, textTransform: 'none',
                      '&:hover': { background: 'rgba(212,165,116,0.85)' }
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
                    href={personalInfo.resume}
                    download="ANURAG_Resume.pdf"
                    startIcon={<FileIcon />}
                    sx={{
                      px: 3, py: 1.2, borderRadius: '50px',
                      border: '1px solid rgba(212,165,116,0.3)', color: 'var(--accent)',
                      fontWeight: 600, textTransform: 'none', fontSize: '0.9rem',
                      '&:hover': { background: 'rgba(212,165,116,0.08)', borderColor: 'rgba(212,165,116,0.5)' }
                    }}
                  >
                    Download Resume
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </section>

        </Box>

        {/* ───── FOOTER ───── */}
        <Box sx={{ borderTop: '1px solid var(--border-subtle)', py: 4, textAlign: 'center' }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem', mb: 0.5 }}>
            © {new Date().getFullYear()} Anurag. All rights reserved.
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.75rem' }}>
            Designed & Built by Anurag
          </Typography>
        </Box>
      </Box>

      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed', bottom: 80, right: 24, width: 44, height: 44,
              borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)',
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
