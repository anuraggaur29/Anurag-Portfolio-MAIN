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
      "Delivered 3+ full-stack features using React.js, Node.js, Express.js, and MongoDB. Covered UI components, REST APIs, and database integration within a 2-month sprint cycle.",
    tags: ["MERN Stack", "Remote"],
  },
  {
    role: "Academic Class Representative",
    organization: "Chandigarh University",
    period: "Jan 2025 – Present",
    description:
      "Represented 60+ students across 3 consecutive semesters. Tracked issues, resolved conflicts, and liaised with faculty under competing deadlines.",
    tags: ["Leadership"],
  },
  {
    role: "Member",
    organization: "GFG Chapter, Chandigarh University",
    period: "Apr 2025 – Feb 2026",
    description:
      "Contributed to peer learning and programming initiatives. Participated in problem-solving sessions as part of the campus body.",
    tags: ["Community", "Problem Solving"],
  },
  {
    role: "Member",
    organization: "GDSC, Chandigarh University",
    period: "Mar 2025 – Feb 2026",
    description:
      "Collaborated on developer community activities focusing on front-end development, C++, and project building.",
    tags: ["Community", "Frontend"],
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
