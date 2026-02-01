# PrepStack - Placement Preparation Website

A highly interactive, animated, multi-page placement preparation website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Premium dark theme with neon accents
- ✨ Smooth animations and transitions
- 🎯 8 comprehensive pages covering all aspects of placement prep
- 📱 Fully responsive design
- 🎭 Glassmorphism UI elements
- 🖱️ Mouse parallax effects
- 🎪 3D floating objects with Three.js

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Three.js / React Three Fiber** - 3D graphics

## Pages

1. **Home** - Hero section with 3D objects, features, stats, and company logos
2. **Roadmaps** - Interactive roadmap cards with expandable timelines
3. **Practice** - Category-based practice sections
4. **DSA Detail** - Comprehensive DSA guide with language selectors
5. **Programming Languages** - Detailed language guides
6. **Resources** - Downloadable resources (resumes, cheat sheets, PDFs)
7. **About** - Mission, vision, and story
8. **Contact** - Animated contact form

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Scene3D.jsx
│   ├── FloatingCube.jsx
│   ├── AnimatedCard.jsx
│   └── StatCounter.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Roadmaps.jsx
│   ├── Practice.jsx
│   ├── DSADetail.jsx
│   ├── ProgrammingLanguages.jsx
│   ├── Resources.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── hooks/           # Custom hooks
│   └── useMouse.js
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Assets

Make sure the following assets are in the public folder:
- `pp.png` - Main logo
- `L1.png`, `L2.png`, `L3.png` - Company logos

## Design System

- **Background**: #222222 (dark gray, not pure black)
- **Neon Colors**:
  - Blue: #00D9FF
  - Purple: #B026FF
  - Cyan: #00FFFF

## License

MIT
