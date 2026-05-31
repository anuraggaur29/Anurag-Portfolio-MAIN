import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anuraggaur29.netlify.app"),
  title: {
    default: "Anurag — AI/ML Engineer & Full Stack Developer",
    template: "%s | Anurag",
  },
  description:
    "I'm Anurag, a final-year CSE (AI/ML) student at Chandigarh University. I build backend systems, ship full-stack apps, and obsess over clean code.",
  keywords: [
    "Anurag",
    "Software Engineer",
    "AI/ML Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
  ],
  authors: [{ name: "Anurag", url: "https://anuraggaur29.netlify.app" }],
  creator: "Anurag",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anuraggaur29.netlify.app",
    siteName: "Anurag",
    title: "Anurag — AI/ML Engineer & Full Stack Developer",
    description:
      "I'm Anurag, a final-year CSE (AI/ML) student at Chandigarh University. I build backend systems, ship full-stack apps, and obsess over clean code.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag — AI/ML Engineer & Full Stack Developer",
    description:
      "I'm Anurag, a final-year CSE (AI/ML) student at Chandigarh University. I build backend systems, ship full-stack apps, and obsess over clean code.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-[#0A0A0A] text-white antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
