# Anurag — Personal Portfolio

A modern, dark-themed personal portfolio built with Next.js 14, Tailwind CSS, Framer Motion, and TypeScript. Designed with a Linear.app-inspired aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?style=flat-square)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/anuraggaur29/portfolio)

## Features

- ⚡ **Next.js 14 App Router** — Server components, metadata API, OG image generation
- 🎨 **Linear-inspired dark theme** — Clean, sharp, minimal design
- 🎬 **Framer Motion v11** — Scroll-triggered animations, stagger effects, hover interactions
- 📱 **Mobile-first responsive** — Optimized for 375px, 768px, and 1280px breakpoints
- 📬 **Working contact form** — Powered by Formspree (free tier)
- 🥚 **Easter eggs** — Konami code terminal overlay + confetti burst on logo
- 🔍 **SEO optimized** — Full metadata, OG tags, dynamic OG image generation

## Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/anuraggaur29/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Configuration

### 1. Replace Formspree Form ID

The contact form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month).

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID (e.g., `xabcdefg`)
4. Open `src/lib/constants.ts` **(line 32)**
5. Replace `"FORMSPREE_ID"` with your actual form ID:

```typescript
export const FORMSPREE_ID = "xabcdefg"; // Replace with your ID
```

### 2. Replace Resume PDF

Replace the placeholder file at `public/resume.pdf` with your actual resume.

### 3. Update OG Tags for Custom Domain

If deploying to a custom domain (instead of `anuraggaur29.netlify.app`):

1. Open `src/app/layout.tsx`
2. Update the `metadataBase` URL:

```typescript
metadataBase: new URL('https://yourdomain.com'),
```

3. Update `openGraph.url` and `authors.url` to match.

4. Update `src/lib/constants.ts`:

```typescript
url: "https://yourdomain.com",
```

## Deploy to Vercel

### One-Click Deploy

Click the **"Deploy with Vercel"** button at the top of this README.

### Manual Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Inter font, metadata, grain overlay)
│   ├── page.tsx            # Home page (assembles all sections)
│   ├── globals.css         # Tailwind + custom styles + grain texture
│   ├── error.tsx           # Global error boundary
│   ├── not-found.tsx       # Custom 404 page
│   └── opengraph-image.tsx # Dynamic OG image generation
├── components/
│   ├── Navbar.tsx          # Fixed navbar + mobile menu + confetti easter egg
│   ├── Hero.tsx            # Hero section + animated heading
│   ├── About.tsx           # Bio + stats cards + SVG avatar
│   ├── Projects.tsx        # Project cards grid
│   ├── Skills.tsx          # Grouped skills pills
│   ├── Experience.tsx      # Timeline layout
│   ├── Achievements.tsx    # Achievement icon cards
│   ├── Blog.tsx            # Coming soon blog cards
│   ├── Contact.tsx         # Formspree contact form
│   ├── Footer.tsx          # Footer with social links
│   ├── KonamiEasterEgg.tsx # ↑↑↓↓←→←→BA terminal overlay
│   ├── AnimatedSection.tsx # Reusable scroll animation wrapper
│   ├── GridBackground.tsx  # Animated grid dots
│   └── StatusBadge.tsx     # "Open to opportunities" badge
├── data/
│   ├── projects.ts         # Project data
│   ├── skills.ts           # Skills by category
│   ├── experience.ts       # Timeline entries
│   └── achievements.ts     # Achievement cards
└── lib/
    └── constants.ts        # Site config, contact info, Formspree ID
```

## Easter Eggs

- **Konami Code**: Press `↑ ↑ ↓ ↓ ← → ← → B A` on your keyboard to reveal a terminal overlay with a secret message.
- **Logo Confetti**: Click the "anurag." logo 5 times for a confetti burst.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion v11 |
| Contact Form | Formspree |
| Font | Inter (Google Fonts) |
| Deploy | Vercel |

## License

MIT © Anurag
