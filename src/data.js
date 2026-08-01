// Personal Information
export const personalInfo = {
  name: "Anurag",
  title: "Full Stack Software Developer",
  intro: "Full-stack developer who has shipped three production web apps (React/FastAPI/PostgreSQL) live on real URLs, not just localhost demos. Comfortable owning a feature end-to-end: schema design, API, RLS/auth, and deployment.",
  email: "anuragshakalya@gmail.com",
  phone: "+91 7988019566",
  location: "Chandigarh, India",
  github: "https://github.com/anuraggaur29",
  linkedin: "https://linkedin.com/in/anuraggaur29",
  website: "https://anuraggaur29.netlify.app",
  resume: "/resume.pdf",
};

// Navigation Links
export const navLinks = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
  { name: "Education", path: "#education" },
  { name: "Achievements", path: "#achievements" },
  { name: "Contact", path: "#contact" },
];

// Tech Stack - Categorized (from resume)
export const techStack = {
  languages: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Material UI"],
  backend: ["FastAPI", "Node.js", "REST APIs", "JWT Auth"],
  databases: ["PostgreSQL", "Supabase", "MongoDB", "Schema Design", "Query Optimization", "RLS"],
  tools: ["Git", "GitHub", "Postman", "Docker", "Linux", "Selenium", "Vercel"],
};

// Projects Data — real data from resume
export const projects = [
  {
    id: 1,
    name: "ScolAR",
    subtitle: "AI-Powered Exam Preparation Platform",
    image: "/projects/scolar.png",
    description:
      "Full-stack exam prep platform with multi-tenant PostgreSQL schemas secured via Row-Level Security so each student/institution only sees their own data.",
    liveUrl: "https://getscolar.vercel.app/",
    githubUrl: "https://github.com/anuraggaur29/ScolAR",
    year: "2026",
    tags: ["React 19", "FastAPI", "PostgreSQL", "Supabase", "Selenium", "Razorpay"],
    highlights: [
      "Multi-tenant PostgreSQL schemas secured via Row-Level Security (RLS)",
      "Automated academic data sync with Selenium, replacing a manual process",
      "Integrated Razorpay for payments",
      "Built an admin dashboard for platform operations",
    ],
  },
  {
    id: 2,
    name: "StockPulse",
    subtitle: "Retail Inventory Analytics Platform",
    image: "/projects/stockpulse.png",
    description:
      "Inventory analytics platform over 3,700+ products using CTEs, window functions (RANK, LAG), materialized views, and triggers to compute stock trends and reorder signals in real time.",
    liveUrl: "https://retail-inventory-analytics-platform.vercel.app/",
    githubUrl: "https://github.com/anuraggaur29/Retail-Inventory-Analytics-Platform",
    year: "2026",
    tags: ["React", "FastAPI", "PostgreSQL", "Material UI", "JWT", "RBAC"],
    highlights: [
      "Analytics over 3,700+ products using CTEs, window functions (RANK, LAG), materialized views",
      "JWT-based RBAC so managers and staff see role-appropriate views of the same data",
      "Triggers to compute stock trends and reorder signals in real time",
      "Normalized schema and REST API layer supporting the full dashboard",
    ],
  },
  {
    id: 3,
    name: "LectureCapture AI",
    subtitle: "AI-Powered Study Sheet Generator",
    image: "/projects/lecturecapture.png",
    description:
      "Pipeline converting uploaded video/audio/PDF lectures into structured study sheets via a provider-abstracted LLM layer — swap AI providers without touching calling code.",
    liveUrl: "https://lecturecapture-ai.vercel.app/",
    githubUrl: "https://github.com/anuraggaur29/LectureCapture.ai",
    year: "2026",
    tags: ["React", "FastAPI", "Mistral AI", "Material UI", "Vercel"],
    highlights: [
      "Provider-abstracted LLM layer — swap AI providers without touching calling code",
      "Converts video/audio/PDF lectures into structured study sheets",
      "PDF export, Markdown copy — live and usable end-to-end, not a notebook demo",
      "CI/CD via Vercel",
    ],
  },
];

// Experience — real data from resume
export const experience = [
  {
    id: 1,
    role: "Full Stack Web Development Intern",
    company: "Webstack Academy",
    stack: "MERN Stack",
    type: "Remote",
    duration: "Mar 2026 – Apr 2026",
    description: [
      "Built and shipped REST APIs consumed by the React frontend; fixed data-consistency bugs caused by mismatched frontend/backend schema assumptions.",
      "Designed SQL and MongoDB schemas and CRUD endpoints; validated all endpoints in Postman before handoff, cutting integration bugs caught late in the cycle.",
    ],
  },
];

// Education — real data from resume (both entries)
export const education = [
  {
    id: 1,
    institution: "Chandigarh University",
    degree: "B.E. Computer Science Engineering (AI & ML Specialization)",
    score: "CGPA: 8.16",
    duration: "Aug 2023 – Jan 2027",
    location: "Mohali, Punjab",
  },
  {
    id: 2,
    institution: "Hari Bhoomi Sr. Sec. School",
    degree: "Class XII",
    score: "84%",
    duration: "2023",
    location: "Jind, Haryana",
  },
];

// Achievements & Certifications — real data from resume only
export const achievements = [
  {
    id: 1,
    title: "Top 50 — Graph-E-Thon 3.0 National Hackathon",
    description: "Ranked Top 50 out of 10,000+ teams in the national-level Graph-E-Thon 3.0 hackathon competition.",
    date: "2026",
  },
  {
    id: 2,
    title: "Class Representative",
    description: "Represented 70+ students as Class Representative — primary faculty-student liaison for 1.5+ years.",
    date: "2023 – 2025",
  },
  {
    id: 3,
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    description: "Certified by Microsoft in Azure AI Fundamentals.",
    date: "2024",
    credentialUrl: "https://learn.microsoft.com/en-us/certifications/exams/ai-900/",
  },
];

// Social Links
export const socialLinks = {
  github: "https://github.com/anuraggaur29",
  linkedin: "https://linkedin.com/in/anuraggaur29",
  email: "mailto:anuragshakalya@gmail.com",
};
