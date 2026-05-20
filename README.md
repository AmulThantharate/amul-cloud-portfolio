# Amul Thantharate — Cloud & DevOps Engineer Portfolio

A production-grade personal portfolio built as a **live infrastructure dashboard** — not a generic template. This portfolio proves engineering depth through its very architecture.

![Portfolio Preview](https://img.shields.io/badge/status-production-green?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-r164-white?style=flat-square&logo=three.js)

## 🎯 Design Philosophy

> "The portfolio itself must prove engineering depth."

This is not a traditional portfolio. It is designed to feel like:
- A **live DevOps control plane**
- A **futuristic Linux workstation**
- A **Kubernetes observability dashboard**
- A **cloud infrastructure operating system**

## 🏗️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 14 App Router |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v3 |
| **3D** | Three.js + React Three Fiber + Drei |
| **Animation** | Framer Motion v11 |
| **Theme** | next-themes (Dark default) |
| **Fonts** | Inter + Geist Mono |
| **Icons** | Lucide React |
| **Deployment** | Vercel Optimized |

## 🎨 Visual System

### Dark Theme (Default)
- **Background**: `#050816` — Deep space black
- **Surface**: `#0a0f1c` — Terminal panel dark
- **Cyan Accent**: `#00d4ff` — Infrastructure highlight
- **Purple Accent**: `#7c3aed` — Secondary glow
- **Success Green**: `#10b981` — Healthy status
- **Warning Orange**: `#ff9f43` — Alert state

### Design Patterns
- **Glassmorphism**: Frosted glass panels with backdrop blur
- **Terminal Aesthetic**: Monospace typography, CLI prompts, blinking cursors
- **Grid Backgrounds**: Subtle cyan grid overlays
- **Glow Effects**: Cyan/purple ambient glow on interactive elements
- **Scanline Overlay**: Subtle CRT-style scanline effect

## 📁 Architecture

```
app/
├── layout.tsx          # Root layout with fonts & theme provider
├── page.tsx            # Main page composing all sections
├── globals.css         # Global styles, animations, utilities
├── not-found.tsx       # 404 error page (terminal style)
├── loading.tsx         # Loading state
└── error.tsx           # Error boundary

components/
├── ui/
│   └── Navbar.tsx      # Fixed navigation with active section tracking
├── terminal/
│   ├── TerminalCursor.tsx    # Blinking cursor animation
│   ├── TerminalPrompt.tsx    # Typing command animation
│   ├── TerminalWindow.tsx    # Terminal window chrome
│   └── LiveLogs.tsx          # Real-time infrastructure logs
├── three/
│   ├── InfrastructureNetwork.tsx  # 3D network visualization
│   └── MinimalBackground.tsx      # Clean gradient background
└── sections/
    ├── HeroSection.tsx         # Hero with 3D + terminal
    ├── ImpactMetrics.tsx       # Animated counters
    ├── AboutSection.tsx        # Terminal bio + info cards
    ├── SkillsSection.tsx       # Categorized skill bars
    ├── ExperienceSection.tsx   # Timeline layout
    ├── ProjectsSection.tsx     # Infrastructure service cards
    ├── CertificationsSection.tsx # Badge cards
    ├── ContactSection.tsx      # Contact + live logs terminal
    └── Footer.tsx              # Terminal-style footer

data/
└── portfolio.ts          # All portfolio data (no placeholders)

hooks/
├── useReducedMotion.ts   # Accessibility: respects prefers-reduced-motion
└── useHeroMode.ts        # Aggressive/Minimal mode persistence

lib/
└── utils.ts              # cn() helper + utilities

types/
└── index.ts              # TypeScript interfaces
```

## 🚀 Features

### Hero Section
- **Aggressive Mode**: Full 3D infrastructure network with glowing nodes, animated connections, particle systems, and star field
- **Minimal Mode**: Clean gradient background for recruiter-friendly viewing
- **Mode Persistence**: Choice saved to localStorage
- **High-Fidelity Typography**: Large white bold and glowing neon-cyan name headings with drop-shadows and a pulsing terminal block cursor
- **Infrastructure Console Card**: Sleek glassmorphic panel showcasing automated container builds (`docker build -t platform:v2 .`)
- **Resume Download Command**: Integrates a themed CLI-style resume download link: `~/resume $ curl -O resume.docx`
- **Premium Portrait Ring**: A large circular photo with a vibrant neon gradient ring and ambient background glow
- **Fluid Responsiveness**: Fluid font sizing and flex-wrap word breakers ensuring perfect layout renders on all screens (320px mobile to ultrawide desktop)

### Live Terminal Logs
- Auto-scrolling infrastructure logs
- Color-coded log levels (info, success, warning, error)
- Simulated real-time log generation
- Terminal window chrome with traffic light buttons

### Animations
- **Framer Motion**: Staggered reveals, fade-up scroll animations, parallax motion
- **Scroll-triggered**: All sections animate on viewport entry
- **Hover Effects**: Card tilt, glow borders, scale transitions
- **Reduced Motion**: Full support for `prefers-reduced-motion`

### Performance
- ✅ Green Core Web Vitals target
- ✅ Lazy-loaded Three.js (dynamic import)
- ✅ Instanced meshes for particles (200 instances)
- ✅ Animation pause on inactive tab
- ✅ Optimized particle rendering
- ✅ No layout shifts

### Accessibility
- ✅ Semantic HTML structure
- ✅ Keyboard navigation
- ✅ ARIA labels on interactive elements
- ✅ `prefers-reduced-motion` support
- ✅ Sufficient contrast ratios (WCAG AA)
- ✅ Focus indicators

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/AmulThantharate/devops-portfolio.git
cd devops-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
No environment variables required for basic operation.

## 📦 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🎭 Customization

### Adding Projects
Edit `data/portfolio.ts`:
```typescript
export const projects = [
  {
    id: "7",
    title: "Your New Project",
    description: "Project description...",
    tech: ["AWS", "Terraform", "Kubernetes"],
    metrics: "99.9% uptime | 1000+ req/s",
    category: "infrastructure" as const,
  },
];
```

### Adding Skills
Edit `data/portfolio.ts`:
```typescript
export const skills = {
  cloud: [
    { name: "GCP", icon: "SiGooglecloud", proficiency: 80 },
  ],
};
```

### Changing Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  cyan: "#00d4ff",      // Change accent color
  purple: "#7c3aed",    // Change secondary
  // ...
}
```

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type check
npx tsc --noEmit
```

## 📄 License

MIT License — feel free to use this as a template for your own portfolio.

## 🙏 Acknowledgments

- Design inspired by Warp Terminal, Hyprland, Grafana, and Kubernetes dashboards
- 3D visualization powered by Three.js and React Three Fiber
- Animations by Framer Motion

---

**Built with ❤️ and Terraform by Amul Thantharate**

```
amul@cloud:~$ terraform apply production-scale-infrastructure
✔ Infrastructure deployed successfully
```
