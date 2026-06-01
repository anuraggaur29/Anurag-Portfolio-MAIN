export const SITE_CONFIG = {
  name: "Anurag",
  title: "Anurag — AI/ML Engineer & Full Stack Developer",
  description:
    "I'm Anurag, a final-year CSE (AI/ML) student at Chandigarh University. I build backend systems, ship full-stack apps, and obsess over clean code.",
  url: "https://anuraggaur29.netlify.app",
  ogImage: "/opengraph-image.png",
} as const;

export const CONTACT = {
  email: "anuragshakalya@gmail.com",
  github: "https://github.com/anuraggaur29",
  linkedin: "https://linkedin.com/in/anuraggaur29",
  location: "Chandigarh, India",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
] as const;

/** 
 * Replace with your Formspree form ID.
 * Sign up at https://formspree.io (free tier: 50 submissions/month).
 * Create a form and copy the form ID (e.g., "xabcdefg").
 */
export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "FORMSPREE_ID";
