# Anurag - Full Stack Software Developer Portfolio

A clean, modern, and professional portfolio website built with React, Material UI, and Vite.

## Features

- **Dark Theme**: Professional dark theme by default
- **Responsive Design**: Fully responsive for all screen sizes
- **Subtle Animations**: Framer Motion animations for smooth transitions
- **SEO Optimized**: Complete meta tags and Open Graph support
- **Accessible**: High contrast and keyboard navigable

## Sections

1. **Hero Section** - Name, title, intro, and action buttons
2. **About** - Professional bio and background
3. **Tech Stack** - Categorized skills with clean chip display
4. **Featured Projects** - ScolAR, StockPulse, LectureCapture AI
5. **Experience** - Webstack Academy internship, Class Representative
6. **Education** - Chandigarh University details
7. **Certifications** - IBM, AWS, Microsoft, NVIDIA, GitHub
8. **Achievements** - Graph-E-Thon Top 50
9. **Contact** - Email, LinkedIn, GitHub, Resume download
10. **Footer** - Minimal and clean

## Tech Stack

- **Frontend**: React 18, Material UI v5, Framer Motion
- **Build Tool**: Vite
- **Styling**: Material UI with custom theme, CSS
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/anuraggaur29/Anurag-Portfolio-MAIN.git

# Navigate to the project
cd Anurag-Portfolio-MAIN

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Push to GitHub
2. Connect Netlify to your repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## Project Structure

```
portfolio_anurag_website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── theme.js
│   └── data.js
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

## Customization

Edit `src/data.js` to update all content:

- Personal information (name, title, intro, etc.)
- Navigation links
- Tech stack categories and skills
- Projects (name, description, links, tags, highlights)
- Experience
- Education
- Certifications
- Achievements
- Social links

## Styling

The portfolio uses:
- **Primary Color**: #646cff (Blue)
- **Secondary Color**: #00d4aa (Teal)
- **Background**: #0a0a1a (Dark)
- **Card Background**: #1a1a2e (Darker blue)

## Accessibility

- All interactive elements are keyboard navigable
- High contrast colors for readability
- Semantic HTML structure
- ARIA labels where needed

## Performance

- Lazy loading for images (when added)
- Optimized animations
- Minimal dependencies
- Fast load times

## License

MIT License - Feel free to use this template for your own portfolio!

## Live Demo

[https://anuraggaur29.netlify.app](https://anuraggaur29.netlify.app)
