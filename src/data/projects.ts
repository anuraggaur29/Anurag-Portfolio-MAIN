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
      "Steganography engine using chess PGN data + AES-256 encryption.",
    tech: ["Rust", "Python", "PyO3"],
    github: "https://github.com/anuraggaur29",
    featured: true,
  },
  {
    title: "Lecture AI",
    description:
      "FastAPI backend that converts lecture files into structured searchable notes.",
    tech: ["Python", "FastAPI", "SQLite"],
    github: "https://github.com/anuraggaur29",
  },
  {
    title: "News Authenticity Classifier",
    description:
      "End-to-end NLP pipeline with REST API + Telegram bot.",
    tech: ["Python", "Scikit-learn", "NLP"],
    github: "https://github.com/anuraggaur29",
  },
  {
    title: "Web Money Tracker",
    description:
      "Full-stack finance app with SQL/MongoDB data layer.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/anuraggaur29",
  },
];
