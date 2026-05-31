export interface Achievement {
  title: string;
  description: string;
  icon: "trophy" | "certificate" | "badge" | "paper" | "community";
}

export const achievements: Achievement[] = [
  {
    title: "Top 50 / 10,000+ teams",
    description: "Graph-E-Thon 3.0 National Hackathon (Apr 2026)",
    icon: "trophy",
  },
  {
    title: "Microsoft Azure AI-900",
    description: "Azure AI Fundamentals Certified",
    icon: "certificate",
  },
  {
    title: "AWS Academy Generative AI",
    description: "Generative AI Foundations",
    icon: "certificate",
  },
  {
    title: "NVIDIA Deep Learning",
    description: "Fundamentals of Deep Learning",
    icon: "certificate",
  },
  {
    title: "GitHub Foundations",
    description: "GitHub Certified",
    icon: "badge",
  },
  {
    title: "IBM GenAI",
    description: "GenAI for Data Engineers",
    icon: "certificate",
  },
  {
    title: "Community Member",
    description: "GFG Student Chapter & GDSC, Chandigarh University",
    icon: "community",
  },
];
