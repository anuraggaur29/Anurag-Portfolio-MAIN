export type HighlightKind = "number" | "keyword" | "impact";

export type HighlightPart = {
  text: string;
  kind?: HighlightKind;
};

const focusTerms = [
  "Full Stack Development",
  "Full Stack",
  "Software Engineer",
  "Product Engineer",
  "Computer Science Engineering",
  "Machine Learning",
  "Data Analysis",
  "Generative AI",
  "Deep Learning",
  "Data Structures & Algorithms",
  "Problem Solving",
  "rapid prototyping",
  "user value",
  "full-stack web apps",
  "web apps",
  "ML models",
  "Telegram Bot",
  "Graph-E-Thon",
  "MERN Stack",
  "MERN",
  "REST APIs",
  "Prompt Engineering",
  "Cloud SQL",
  "BigQuery",
  "GitHub Actions",
  "CI/CD",
  "DevOps",
  "RookHide",
  "real-time",
  "React.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "MongoDB",
  "MySQL",
  "SQLite",
  "Scikit-learn",
  "TensorFlow",
  "NumPy",
  "Pandas",
  "Microsoft Azure",
  "Google Cloud",
  "Postman",
  "Linux/Unix",
  "Python",
  "Rust",
  "C++",
  "JavaScript",
  "React",
  "SQL",
  "SWE",
  "NLP",
  "AI",
  "ML",
  "SDE",
];

const impactTerms = [
  "built",
  "designed",
  "implemented",
  "delivered",
  "represented",
  "reduced",
  "trained",
  "benchmarked",
  "deployed",
  "achieved",
  "identified",
  "resolved",
  "placed",
  "collaborating",
  "active member",
  "open to internships",
  "insights",
  "decisions",
];

const escapeRegex = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const focusPattern = new RegExp(
  `\\b(${focusTerms.map(escapeRegex).join("|")})\\b`,
  "gi"
);

const impactPattern = new RegExp(
  `\\b(${impactTerms.map(escapeRegex).join("|")})\\b`,
  "gi"
);

const numberPattern =
  /\b(?:\d+(?:\.\d+)?%?|\d{4}|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|Present)\b/g;

export function highlightTextParts(text = ""): HighlightPart[] {
  const matches: Array<{ start: number; end: number; kind: HighlightKind }> = [];

  const collect = (pattern: RegExp, kind: HighlightKind) => {
    for (const match of Array.from(text.matchAll(pattern))) {
      if (match.index === undefined) continue;
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        kind,
      });
    }
  };

  collect(numberPattern, "number");
  collect(focusPattern, "keyword");
  collect(impactPattern, "impact");

  matches.sort((a, b) => a.start - b.start || b.end - a.end);

  const parts: HighlightPart[] = [];
  let cursor = 0;

  for (const match of matches) {
    if (match.start < cursor) continue;
    if (match.start > cursor) {
      parts.push({ text: text.slice(cursor, match.start) });
    }
    parts.push({ text: text.slice(match.start, match.end), kind: match.kind });
    cursor = match.end;
  }

  if (cursor < text.length) {
    parts.push({ text: text.slice(cursor) });
  }

  return parts;
}
