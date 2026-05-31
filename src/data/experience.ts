export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  tags?: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Web Dev Intern",
    organization: "Webstack Academy (WSA)",
    period: "Mar 2026 – Apr 2026",
    location: "Remote",
    description:
      "Built full-stack web applications using the MERN stack. Worked on production features, API integration, and responsive UI development.",
    tags: ["MERN Stack", "Remote"],
  },
  {
    role: "Academic Class Representative",
    organization: "Chandigarh University",
    period: "Jan 2025 – Present",
    description:
      "Coordinating academic activities, liaising between students and faculty, and managing class communications for the CSE (AI/ML) batch.",
    tags: ["Leadership"],
  },
  {
    role: "Co-author, IEEE Conference Paper",
    organization: "IEEE",
    period: "2025",
    description:
      "\"The Hidden Challenges of Generative AI: Bias, Accuracy, and Ethical Concerns\" — Co-authored a research paper exploring critical challenges in generative AI systems.",
    tags: ["Research", "AI Ethics"],
  },
];
