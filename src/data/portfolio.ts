import { Cpu, Terminal, ServerCog, Zap, Sparkles } from 'lucide-react'

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  badge: string
  link: string
  github?: string
}

export interface Skill {
  category: string
  skills: string[]
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  quote: string
  company: string
}

export interface Service {
  title: string
  description: string
  features: string[]
}

export interface NavLink {
  id: string
  label: string
}

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
  // { id: 'projects', label: 'Projects' },
  // { id: 'experience', label: 'Experience' },
  // { id: 'testimonials', label: 'Testimonials' },

export const hero = {
  name: 'Gayatri Samal',
  role: 'AI Solution Architect',
  tagline:
    'I design intelligent solutions that bridge business goals with cutting-edge AI technologies. From strategy to scalable architecture, I build solutions that create real impact.',
  roles: ['AI Strategy', 'Solution Architecture', 'Machine Learning', 'Generative AI', 'Data Analytics', 'Cloud & Data Engineering'],
  focusAreas: ['AI Automation', 'Solution Architecture', 'Generative AI', 'Machine Learning', 'MLOps', 'Cloud & Data', 'Data Analysis'],
  metrics: [
    { label: 'Projects Delivered', value: '4+', description: 'End-to-End Solutions' },
    { label: 'Impact Created', value: '98%', description: 'Client Satisfaction' },
    { label: 'System Reliability', value: '99.9%', description: 'Scalable & Reliable' },
  ],
  ctaPrimary: 'Let’s Connect',
  ctaSecondary: 'View My Work',
}

export const about = {
  heading: 'Building intelligent AI systems powered by data and machine learning.',
  summary:
    'Five years ago, I started my journey with a curiosity for technology. Since then, I have earned a degree in Artificial Intelligence, explored Flutter development, gained startup experience, and now work at an MNC. I am currently focused on creating AI-powered solutions and continuously learning something new every day.',
  highlights: [

  ],
}

export const stats = [
  { label: 'Years Experience', value: 1, suffix: '+' },
  { label: 'Products Launched', value: 28, suffix: '+' },
  { label: 'Global Clients', value: 14, suffix: '+' },
  { label: 'Open Source', value: 9, suffix: '+' },
]

export const services: Service[] = [
  {
    title: 'Product UI Systems',
    description: 'Design and build modular interfaces with polished visual systems and responsive performance.',
    features: ['Responsive layouts', 'Design system setup', 'Figma-to-code workflow'],
  },
  {
    title: 'AI Dashboard Experiences',
    description: 'Create immersive product dashboards and analytic tools for complex data flows.',
    features: ['Data visualization', 'Real-time insights', 'UX flows for AI products'],
  },
  {
    title: 'Motion & Interaction',
    description: 'Animate with intention using GSAP, scroll transitions, and interactive micro-animations.',
    features: ['Scroll-triggered reveals', 'Hover effects', 'Parallax storytelling'],
  },
]

export const skills: Skill[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Tools & Platform',
    skills: ['GitHub', 'Docker', 'Vercel', 'Figma', 'VS Code', 'CI/CD'],
  },
]

const skillDomains = [
  {
    title: 'AI Engineering',
    icon: Cpu,
    description: 'Building intelligent products powered by modern AI.',
    skills: [
      { name: 'Python', level: 5 },
      { name: 'LangChain', level: 5 },
      { name: 'OpenAI', level: 5 },
      { name: 'RAG Systems', level: 5 },
      { name: 'Vector Databases', level: 4 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Terminal,
    description: 'Crafting fast and immersive user experiences.',
    skills: [
      { name: 'React', level: 5 },
      { name: 'Next.js', level: 5 },
      { name: 'TypeScript', level: 5 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'Framer Motion', level: 4 },
    ],
  },
  {
    title: 'Backend Systems',
    icon: ServerCog,
    description: 'Scalable architectures and API design.',
    skills: [
      { name: 'Node.js', level: 5 },
      { name: 'Express', level: 4 },
      { name: 'PostgreSQL', level: 5 },
      { name: 'MongoDB', level: 4 },
      { name: 'GraphQL', level: 4 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Zap,
    description: 'Deploying resilient infrastructure at scale.',
    skills: [
      { name: 'AWS', level: 4 },
      { name: 'Docker', level: 5 },
      { name: 'Kubernetes', level: 4 },
      { name: 'CI/CD', level: 5 },
      { name: 'GitHub Actions', level: 4 },
    ],
  },
  {
    title: 'Product & Design',
    icon: Sparkles,
    description: 'Creating experiences users genuinely enjoy.',
    skills: [
      { name: 'Figma', level: 5 },
      { name: 'Design Systems', level: 4 },
      { name: 'UX Strategy', level: 4 },
      { name: 'Wireframing', level: 5 },
      { name: 'Prototyping', level: 5 },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'alpha-core',
    title: 'Alpha Core',
    badge: 'AI Product Suite',
    description: 'A data product interface with predictive workflows and intelligent automation.',
    longDescription:
      'Alpha Core combines AI decision support with a modular dashboard experience. It demonstrates a premium design system, advanced data visualization, and responsive experience for enterprise teams.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    link: 'https://example.com',
    github: 'https://github.com/example/alpha-core',
  },
  {
    id: 'nova-visual',
    title: 'Nova Visual',
    badge: 'Analytics Design',
    description: 'A futuristic analytics platform with immersive charting and soft glass UI.',
    longDescription:
      'Nova Visual delivers a modern product interface for monitoring ML pipelines with real-time status, insights, and collaborative workflows. It is built for speed and clarity.',
    technologies: ['React', 'D3.js', 'Styled Components', 'Framer Motion'],
    link: 'https://example.com',
    github: 'https://github.com/example/nova-visual',
  },
  {
    id: 'orbit-studio',
    title: 'Orbit Studio',
    badge: 'Interactive Branding',
    description: 'A creative studio experience with 3D motion and narrative storytelling.',
    longDescription:
      'Orbit Studio is a concept product that blends spatial visuals with smooth scroll transitions and interactive hover states. It showcases how premium interfaces can feel alive.',
    technologies: ['Three.js', 'React Three Fiber', 'Next.js', 'CSS'],
    link: 'https://example.com',
    github: 'https://github.com/example/orbit-studio',
  },
]

export const timeline: TimelineEvent[] = [
  {
    year: '2026',
    title: 'Senior AI Product Engineer',
    description: 'Leading product and motion experience teams for strategic AI initiatives.',
  },
  {
    year: '2024',
    title: 'AI Dashboard Launch',
    description: 'Delivered a high-performance analytics product for enterprise clients.',
  },
  {
    year: '2022',
    title: 'Design System Architect',
    description: 'Built product UI systems for multiple growth-stage startups.',
  },
  {
    year: '2021',
    title: 'Professional Launch',
    description: 'Started full-time work as a frontend and AI-focused engineer.',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Maya Chen',
    role: 'Product Lead',
    company: 'Nova Labs',
    quote:
      'The product experience feels premium and effortless. The motion and interface clarity transformed our analytics workflow.',
  },
  {
    name: 'Ethan Park',
    role: 'Founder',
    company: 'Lumen AI',
    quote:
      'The launch-ready design system and polished interactions accelerated our product roadmap by months.',
  },
  {
    name: 'Sofia Turner',
    role: 'Design Director',
    company: 'Flux Studio',
    quote:
      'The interface work balanced elegant visuals with functional structure. It feels like an Apple-level product page.',
  },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/example' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Email', href: 'mailto:hello@example.com' },
]
