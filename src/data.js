// Personal Information
export const personalInfo = {
  name: "Anurag",
  title: "Full Stack Software Developer",
  intro: "I build scalable full-stack applications using React, FastAPI, PostgreSQL, and AI.",
  email: "anuraggaur29@gmail.com",
  github: "https://github.com/anuraggaur29",
  linkedin: "https://linkedin.com/in/anuraggaur29",
  resume: "/resume.pdf",
  resumeGoogleDrive: "https://drive.google.com/file/d/1J3hL4qL2l5qL4qL2l5qL4qL2l5qL4qL/view?usp=sharing"
};

// Navigation Links
export const navLinks = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
  { name: "Education", path: "#education" },
  { name: "Certifications", path: "#certifications" },
  { name: "Achievements", path: "#achievements" },
  { name: "Contact", path: "#contact" }
];

// Tech Stack - Categorized
export const techStack = {
  languages: ["JavaScript", "Python", "TypeScript", "SQL", "HTML/CSS"],
  frontend: ["React", "Material UI", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  backend: ["FastAPI", "Node.js", "Express", "REST API", "Django"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "SQLite"],
  ai: ["Machine Learning", "Computer Vision", "NLP", "TensorFlow", "PyTorch", "LLMs"],
  tools: ["Git", "Docker", "Postman", "Jupyter", "Linux", "AWS", "GitHub Actions"]
};

// Projects Data - Only 3 featured projects
export const projects = [
  {
    id: 1,
    name: "ScolAR",
    description: "Augmented Reality educational platform for interactive learning experiences.",
    liveUrl: "https://scolar.vercel.app",
    githubUrl: "https://github.com/anuraggaur29/ScolAR",
    screenshot: "/projects/scolar.png",
    tags: ["React", "AR.js", "Three.js", "Firebase", "Material UI"],
    highlights: [
      "Interactive 3D models for educational content",
      "Real-time AR visualization using AR.js",
      "User authentication and data persistence",
      "Responsive design for all devices"
    ]
  },
  {
    id: 2,
    name: "StockPulse",
    description: "Real-time stock market analysis and prediction platform with AI-powered insights.",
    liveUrl: "https://stockpulse.vercel.app",
    githubUrl: "https://github.com/anuraggaur29/StockPulse",
    screenshot: "/projects/stockpulse.png",
    tags: ["React", "FastAPI", "PostgreSQL", "Python", "Machine Learning", "Chart.js"],
    highlights: [
      "Real-time stock data fetching and visualization",
      "AI-powered price prediction models",
      "Portfolio tracking and analytics",
      "RESTful API backend with FastAPI"
    ]
  },
  {
    id: 3,
    name: "LectureCapture AI",
    description: "AI-powered lecture transcription, summarization, and note-taking platform.",
    liveUrl: "https://lecturecapture-ai.vercel.app",
    githubUrl: "https://github.com/anuraggaur29/LectureCapture-AI",
    screenshot: "/projects/lecturecapture.png",
    tags: ["React", "FastAPI", "Python", "NLP", "Whisper", "PostgreSQL"],
    highlights: [
      "Automatic speech-to-text transcription",
      "AI-generated lecture summaries",
      "Smart note organization with tags",
      "Multi-format export (PDF, DOCX, TXT)"
    ]
  }
];

// Experience
export const experience = [
  {
    id: 1,
    role: "Backend Engineering Intern",
    company: "Webstack Academy",
    duration: "Jun 2024 - Aug 2024",
    description: [
      "Developed RESTful APIs using FastAPI and PostgreSQL for various client projects",
      "Implemented authentication and authorization systems",
      "Optimized database queries for performance improvements",
      "Collaborated with frontend teams to integrate API endpoints"
    ]
  },
  {
    id: 2,
    role: "Academic Class Representative",
    company: "Chandigarh University",
    duration: "2023 - 2024",
    description: [
      "Represented class interests and coordinated with faculty for academic matters",
      "Organized and managed student events and workshops",
      "Facilitated communication between students and administration",
      "Assisted in curriculum feedback and improvement discussions"
    ]
  }
];

// Education
export const education = {
  institution: "Chandigarh University",
  degree: "Bachelor of Technology - Computer Science Engineering (AI & ML)",
  cgpa: "8.5/10",
  duration: "2022 - 2026",
  location: "Mohali, Punjab, India"
};

// Certifications
export const certifications = [
  {
    id: 1,
    name: "IBM AI Engineering Professional Certificate",
    issuer: "IBM",
    date: "2024",
    credentialUrl: "https://coursera.org/professional-certificates/ai-engineer"
  },
  {
    id: 2,
    name: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "2024",
    credentialUrl: "#"
  },
  {
    id: 3,
    name: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "https://learn.microsoft.com/en-us/certifications/exams/ai-900/"
  },
  {
    id: 4,
    name: "NVIDIA DLI Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "2024",
    credentialUrl: "https://www.nvidia.com/en-us/training/"
  },
  {
    id: 5,
    name: "GitHub Foundations",
    issuer: "GitHub",
    date: "2023",
    credentialUrl: "https://github.com/skills"
  }
];

// Achievements
export const achievements = [
  {
    id: 1,
    title: "Graph-E-Thon Top 50",
    description: "Awarded Top 50 position in the national-level Graph-E-Thon hackathon competition.",
    date: "2024"
  }
];

// Social Links
export const socialLinks = {
  github: "https://github.com/anuraggaur29",
  linkedin: "https://linkedin.com/in/anuraggaur29",
  email: "mailto:anuraggaur29@gmail.com"
};

// Contact Form Config
export const contactConfig = {
  email: "anuraggaur29@gmail.com",
  formAction: "https://formspree.io/f/YOUR_FORM_ID"
};
