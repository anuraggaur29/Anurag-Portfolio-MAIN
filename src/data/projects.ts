export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Noteify+",
    description:
      "Exam prep platform for CS university students. Built around the 60-mark EST format.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/anuraggaur29",
    live: "https://noteifyplus.vercel.app",
    featured: true,
  },
  {
    title: "RookHide",
    description:
      "Steganography engine that hides encrypted data inside Chess PGN files using Rust, PyO3, and AES-256.",
    tech: ["Rust", "Python", "PyO3", "AES-256"],
    github: "https://github.com/anuraggaur29",
    featured: true,
  },
  {
    title: "Lecture AI",
    description:
      "AI-powered lecture-to-notes app using React, FastAPI, SQLite, and Python. Converts uploaded content into structured, searchable notes.",
    tech: ["Python", "FastAPI", "SQLite", "React"],
    github: "https://github.com/anuraggaur29",
    live: "https://lecturecapture-ai.netlify.app/",
  },
  {
    title: "News Authenticity Classifier",
    description:
      "Fake-news detection pipeline using TF-IDF, Naive Bayes, and Logistic Regression, deployed via Telegram bot.",
    tech: ["Python", "Scikit-learn", "NLP"],
    github: "https://github.com/anuraggaur29",
  },
  {
    title: "Web Money Tracker",
    description:
      "Full-stack finance tracker with SQL-backed CRUD, multi-category analytics, and separated frontend/API/DB layers.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/anuraggaur29",
  },
];
