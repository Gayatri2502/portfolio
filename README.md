# Portfolio

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 Fast and performant with Next.js 15
- 💎 Beautiful UI with Tailwind CSS
- 🎨 Smooth animations and scroll effects
- 🌌 3D space scene background
- 📱 Fully responsive design
- ♿ Accessible components

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: CSS animations, Intersection Observer

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── hooks/           # Custom React hooks
├── data/            # Data and constants
public/
├── images/          # Image assets
├── models/          # 3D models
└── textures/        # Texture files
```

## Sections

- **Hero**: Welcome section with 3D background
- **About**: Introduction and highlights
- **Skills**: Technical skills by category
- **Projects**: Featured projects showcase
- **Timeline**: Experience and milestones
- **Contact**: Contact form and social links

## Customization

Edit the following files to customize your portfolio:

- `src/data/portfolio.ts` - Update projects, skills, and timeline data
- `src/components/*.tsx` - Modify component content
- `tailwind.config.ts` - Customize color scheme and theme

## License

MIT
