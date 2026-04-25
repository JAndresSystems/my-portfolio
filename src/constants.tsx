/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Code2, 
  Database, 
  Cloud, 
  Terminal, 
  Cpu, 
  Globe, 
  Server, 
  Github, 
  Layers, 
  Bot, 
  Zap,
  Box,
  Binary,
  Anchor,
  Shield,
  Search,
  MessageSquare,
  Flame,
  LayoutDashboard,
  ShoppingCart,
  Heart
} from 'lucide-react';

export const TRANSLATIONS = {
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Herramientas',
      projects: 'Proyectos',
      experience: 'Experiencia',
      ai: 'IA',
      contact: 'Contacto'
    },
    hero: {
      status: 'Disponible para nuevos retos',
      title: 'Ingeniero de',
      subtitle: 'Sistemas & IA',
      description: 'Especializado en arquitecturas de alto rendimiento y sistemas avanzados de IA Generativa. Transformo retos complejos en productos digitales de alta calidad.',
      cta1: 'Ver proyectos',
      cta2: 'Contactar',
      exp: '5+ Años'
    },
    skills: {
      topTitle: 'Tech Stack',
      mainTitle: 'Tools and Technologies',
      description: 'From low-level languages to modern cloud architectures. Solid experience in scalable ecosystems.',
      categories: {
        languages: 'Languages',
        frameworks: 'Frameworks',
        devops: 'DevOps & Cloud',
        databases: 'Databases',
        analytics: 'BI & Analytics'
      }
    },
    projects: {
      title: 'Proyectos Destacados',
      description: 'Una selección de trabajos que combinan innovación técnica con impacto real.',
      viewCode: 'Ver Código',
      liveDemo: 'Demo en Vivo'
    },
    ai: {
      topTitle: 'Especialidad en IA',
      mainTitle: 'Impulsando el futuro con Inteligencia Artificial',
      llmTitle: 'Experiencia con Modelos de Lenguaje (LLMs)',
      llmDesc: 'Experiencia integrando y optimizando flujos avanzados con Gemini, Claude, GPT y Gemma. Enfoque en procesamiento multimodal y agentes autónomos.'
    },
    experience: {
      title: 'Experiencia Profesional',
      remote: 'Remoto',
      present: 'Actualidad'
    },
    footer: {
      title: 'Hablemos del',
      subtitle: 'próximo proyecto',
      desc: 'Estoy abierto a colaboraciones, consultoría o simplemente a charlar sobre tecnología.',
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      ai: 'AI',
      contact: 'Contact'
    },
    hero: {
      status: 'Available for new challenges',
      title: 'Systems & AI',
      subtitle: 'Engineer',
      description: 'Specialized in high-performance architectures and advanced Generative AI systems. I transform complex challenges into high-quality digital products.',
      cta1: 'View Projects',
      cta2: 'Contact Me',
      exp: '5+ Years'
    },
    skills: {
      topTitle: 'Tech Stack',
      mainTitle: 'Tools and Technologies',
      description: 'From low-level languages to modern cloud architectures. Solid experience in scalable ecosystems.',
      categories: {
        languages: 'Languages',
        frameworks: 'Frameworks',
        devops: 'DevOps & Cloud',
        databases: 'Databases'
      }
    },
    projects: {
      title: 'Featured Projects',
      description: 'A selection of works that combine technical innovation with real impact.',
      viewCode: 'View Code',
      liveDemo: 'Live Demo'
    },
    ai: {
      topTitle: 'AI Specialization',
      mainTitle: 'Driving the future with Artificial Intelligence',
      llmTitle: 'Experience with Large Language Models (LLMs)',
      llmDesc: 'Experience integrating and optimizing advanced flows with Gemini, Claude, GPT, and Gemma. Focus on multimodal processing and autonomous agents.'
    },
    experience: {
      title: 'Professional Experience',
      remote: 'Remote',
      present: 'Present'
    },
    footer: {
      title: "Let's talk about the",
      subtitle: 'next project',
      desc: "I'm open to collaborations, consulting, or just chatting about technology.",
      rights: 'All rights reserved.'
    }
  }
};

export const LENGUAJES = [
  { name: 'Python', icon: Code2, color: 'text-blue-400' },
  { name: 'JavaScript', icon: Globe, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: Globe, color: 'text-blue-500' },
  { name: 'Go', icon: Anchor, color: 'text-cyan-400' },
  { name: 'Rust', icon: Cpu, color: 'text-orange-500' },
  { name: 'Java', icon: Server, color: 'text-red-500' },
  { name: 'PHP', icon: Code2, color: 'text-indigo-400' },
  { name: 'C', icon: Binary, color: 'text-gray-400' }
];

export const FRAMEWORKS = [
  { name: 'FastAPI', icon: Zap },
  { name: 'Next.js', icon: Globe },
  { name: 'React', icon: Box },
  { name: 'Angular', icon: Globe },
  { name: 'Vue', icon: Globe },
  { name: 'Spring Boot', icon: LeafIcon }
];

function LeafIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2.5 7.5a7 7 0 0 1-10.5 10.5Z" />
      <path d="M17 7c-2 3-7 10-7 10" />
    </svg>
  );
}

export const DEVOPS_CLOUDS = [
  { name: 'Azure DevOps', icon: Cloud },
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Box },
  { name: 'Git', icon: Terminal },
  { name: 'GitHub Actions', icon: Github },
  { name: 'Linux', icon: Terminal }
];

export const DATABASES = [
  { name: 'PostgreSQL', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'SQLite', icon: Database }
];

export const ANALYTICS = [
  { name: 'Power BI', icon: LayoutDashboard, color: 'text-yellow-600' }
];

export const PROJECTS = [
  {
    title: 'LegalMind AI',
    description: {
      es: 'Ecosistema de agentes inteligentes para automatización legal mediante LangGraph. Pipeline RAG multimodal con FastAPI y ChromaDB.',
      en: 'Intelligent agent ecosystem for legal automation using LangGraph. Multimodal RAG pipeline with FastAPI and ChromaDB.'
    },
    icon: Bot,
    // RUTA CORREGIDA: Empieza con / y usa barras normales
    image: '/img-proyects/ia-laws-agent.jpg', 
    tags: ['LangGraph', 'FastAPI', 'ChromaDB', 'Python'],
    color: 'from-blue-500/20 to-indigo-500/20',
    link: 'https://github.com/JAndresSystems/asistente_legal_multimodal',
    type: 'AI / LegalTech'
  },
  {
    title: 'SatFire Detect',
    description: {
      es: 'Detección satelital de incendios con YOLOv9 para respuesta rápida. Análisis satelital preciso y dashboard interactivo en Flask.',
      en: 'Satellite fire detection with YOLOv9 for rapid response. Precise satellite analysis and interactive dashboard in Flask.'
    },
    icon: Flame,
    image: '/img-proyects/yolo.jpg', // Ejemplo: '/img/img-proyects/satfire.jpg'
    tags: ['YOLOv9', 'Flask', 'OpenCV', 'Satellite AI'],
    color: 'from-orange-500/20 to-red-500/20',
    link: 'https://github.com/JAndresSystems/Yolo-v9-',
    type: 'Computer Vision'
  },
  {
    title: 'ClinicaSolidaria',
    description: {
      es: 'Plataforma de donaciones descentralizada (dApp) con blockchain. Transacciones inmutables, transparentes y audibles.',
      en: 'Decentralized donation platform (dApp) with blockchain. Immutable, transparent, and audible transactions.'
    },
    icon: Heart,
    image: '/img-proyects/clinica.jpg', 
    tags: ['Web3.js', 'Solidity', 'Node.js', 'React'],
    color: 'from-emerald-500/20 to-teal-500/20',
    link: 'https://github.com/JAndresSystems/ClinicaSolidaria',
    type: 'Blockchain'
  },
  {
    title: 'SistemtaPos',
    description: {
      es: 'Sistema POS intuitivo y robusto. Gestión de ventas, inventario en tiempo real y análisis detallado para comercios.',
      en: 'Intuitive and robust POS system. Sales management, real-time inventory, and detailed analytics for businesses.'
    },
    icon: ShoppingCart,
    image: '/img-proyects/pos.jpg', 
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'from-pink-500/20 to-rose-500/20',
    link: 'https://github.com/JAndresSystems/SistemtaPos',
    type: 'FinTech'
  },
  {
    title: 'FireOps Management',
    description: {
      es: 'Plataforma de gestión de emergencias con georreferenciación, JWT y PostgreSQL para incidentes críticos.',
      en: 'Emergency management platform with georeferencing, JWT, and PostgreSQL for critical incidents.'
    },
    icon: Shield,
    image: '/img-proyects/bombero.jpg', 
    tags: ['PostgreSQL', 'JWT', 'React', 'Fullstack'],
    color: 'from-slate-500/20 to-gray-500/20',
    link: 'https://github.com/lestebanv/serviciosBomberos/tree/Implementa-el-env%C3%ADo-de-correos-en-PQR%2C-Inscripciones%2C-Cursos-e-Inspecciones-',
    type: 'GovTech'
  }
];


export const EXPERIENCE = [
  {
    company: 'University of Pamplona',
    role: {
      es: 'Especialista AI & Fullstack',
      en: 'AI & Fullstack Specialist'
    },
    period: '2024 - 2025',
    bullets: {
      es: [
        'Lideré el desarrollo de un ecosistema de agentes inteligentes legales.',
        'Implementé un pipeline RAG multimodal con FastAPI.',
        'Optimización de recuperación de leyes con ChromaDB.'
      ],
      en: [
        'Led the development of a legal intelligent agents ecosystem.',
        'Implemented a multimodal RAG pipeline with FastAPI.',
        'Optimization of law retrieval with ChromaDB.'
      ]
    }
  },
  {
    company: 'Independent',
    role: {
      es: 'Desarrollador Fullstack & IA',
      en: 'Fullstack & AI Developer'
    },
    period: '2023 - Actualidad',
    bullets: {
      es: [
        'Diseño de aplicaciones web empresariales MERN.',
        'Despliegue de microservicios con Docker y AWS.',
        'Automatización de procesos con scripts de Python.'
      ],
      en: [
        'Design of MERN enterprise web applications.',
        'Microservices deployment with Docker and AWS.',
        'Process automation with Python scripts.'
      ]
    }
  }
];

export const AI_SPECIALTIES = [
  {
    title: { es: 'Arquitecturas', en: 'Architectures' },
    skills: ['Agentic RAG', 'Agentes Autónomos', 'Grafos de Estado (LangGraph)']
  },
  {
    title: { es: 'Modelos (LLMs)', en: 'Models (LLMs)' },
    skills: ['Gemini', 'Claude', 'GPT', 'Gemma']
  },
  {
    title: { es: 'Enfoque', en: 'Focus' },
    skills: ['Procesamiento Multimodal', 'Automatización de Procesos']
  }
];
