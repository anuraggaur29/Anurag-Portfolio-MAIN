export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C", "C++", "Rust", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    category: "Data & ML",
    items: ["Scikit-learn", "TensorFlow", "Pandas", "NLP"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "GitHub Actions", "Linux", "Postman"],
  },
  {
    category: "Cloud & AI",
    items: ["Azure AI (AI-900)", "AWS GenAI", "NVIDIA Deep Learning"],
  },
];
