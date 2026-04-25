================================================
FILE: README.md
================================================
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/a6b9cc9d-f644-47b0-abaa-716ec16bb6f2

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`



================================================
FILE: DOCUMENTATION.md
================================================
# Documentación del Proyecto: Portfolio Jairo Andrés

Este documento explica cómo funciona el proyecto y cómo puedes realizar los cambios más comunes.

## 1. Estructura del Proyecto

El proyecto está construido con **React 18**, **Vite**, **Tailwind CSS** y **Framer Motion** para animaciones.

- `src/`: Contiene todo el código fuente.
  - `App.tsx`: Punto de entrada principal que organiza las secciones.
  - `constants.tsx`: **El archivo más importante**. Aquí es donde vive toda la información (textos, proyectos, habilidades, experiencia).
  - `components/`: Contiene los archivos individuales de cada sección (Hero, Proyectos, Experiencia, etc.).
  - `AppContext.tsx`: Maneja el estado global, como el idioma (Español/Inglés).
  - `index.css`: Estilos globales y configuración de temas (Claro/Oscuro).

---

## 2. Cómo cambiar la Foto de Perfil

Actualmente se muestra un icono por defecto. Sigue estos pasos para poner tu foto:

1. **Sube tu imagen**: Pon tu archivo de imagen (ej: `foto-jairo.jpg`) en la carpeta `public/`.
2. **Edita el código**: Abre el archivo `src/components/Hero.tsx`.
3. Busca el comentario que dice `¿Quieres cambiar tu foto?`.
4. Descomenta la línea `<img src="/foto-jairo.jpg" ... />` y asegúrate de que el nombre del archivo coincida con el que subiste.

---

## 3. Cómo cambiar las Imágenes de los Proyectos

Los proyectos se definen en `src/constants.tsx`. He añadido un campo `image` para que puedas usar imágenes reales:

1. **Sube las imágenes**: Pon las capturas de pantalla de tus proyectos en la carpeta `public/`.
2. **Edita constants.tsx**: Busca la constante `PROJECTS`.
3. En el proyecto que desees cambiar, pon la ruta de la imagen en el campo `image`:
   ```typescript
   {
     title: 'LegalMind AI',
     image: '/captura-legalmind.png', // Añade la ruta aquí
     ...
   }
   ```
4. Si el campo `image` está vacío, el sistema mostrará automáticamente el icono configurado.

---

## 4. Cómo cambiar Textos y Traducciones

Todo el contenido textual está centralizado en `src/constants.tsx` dentro del objeto `TRANSLATIONS`.

- Si quieres cambiar algo en español, busca la sección `es: { ... }`.
- Si quieres cambiar algo en inglés, busca la sección `en: { ... }`.
- Simplemente cambia el valor de la propiedad correspondiente (ej: `hero.description`) y guarda el archivo.

---

## 5. Cómo añadir nuevas Habilidades o Experiencia

- **Habilidades**: Edita las constantes `LENGUAJES`, `FRAMEWORKS`, `DEVOPS_CLOUDS` o `DATABASES` en `constants.tsx`. Puedes usar iconos de la librería `lucide-react`.
- **Experiencia**: Añade un nuevo objeto al array `EXPERIENCE` en `constants.tsx`. Recuerda añadir las balas de texto tanto para `es` como para `en`.

---

## 6. Colores y Estilos

El proyecto utiliza **Tailwind CSS**. Los colores principales se definen en `src/index.css` a través de variables de entorno de Tailwind y clases de utilidad.
- El color de "acento" (cian/azul) se puede buscar como `text-accent` o `bg-accent`.

---

## 7. Flujo de Funcionamiento (Carga)

1. `main.tsx` renderiza `App.tsx` envuelto en `AppProvider`.
2. `AppProvider` carga las traducciones de `constants.tsx` según el idioma del navegador.
3. `App.tsx` organiza los componentes, los cuales leen su contenido directamente de `AppContext` o `constants.tsx`.
4. Al hacer scroll, las animaciones de `motion` (Framer Motion) se activan gracias a la propiedad `whileInView`.



## 🛠️ Requisitos Previos (Prerequisites)

Antes de comenzar, asegúrate de tener instalado lo siguiente:
- **Node.js**: Versión 18.0 o superior (Recomendado LTS).
- **npm**: Viene instalado con Node.js.

## 🚀 Instalación y Uso (Setup)

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repo.git
   cd nombre-del-repo



================================================
FILE: index.html
================================================
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Google AI Studio App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>




================================================
FILE: metadata.json
================================================
{
  "name": "Developer Portfolio Pro",
  "description": "Portafolio profesional de ingeniería de software con especialidad en IA, Go, Rust y DevOps.",
  "requestFramePermissions": [],
  "majorCapabilities": []
}



================================================
FILE: package.json
================================================
{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@google/genai": "^1.29.0",
    "@tailwindcss/vite": "^4.1.14",
    "@vitejs/plugin-react": "^5.0.4",
    "lucide-react": "^0.546.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "vite": "^6.2.0",
    "express": "^4.21.2",
    "dotenv": "^17.2.3",
    "motion": "^12.23.24"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "autoprefixer": "^10.4.21",
    "tailwindcss": "^4.1.14",
    "tsx": "^4.21.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0",
    "@types/express": "^4.17.21"
  }
}



================================================
FILE: tsconfig.json
================================================
{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}



================================================
FILE: vite.config.ts
================================================
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});



================================================
FILE: .env.example
================================================
# GEMINI_API_KEY: Required for Gemini AI API calls.
# AI Studio automatically injects this at runtime from user secrets.
# Users configure this via the Secrets panel in the AI Studio UI.
GEMINI_API_KEY="MY_GEMINI_API_KEY"

# APP_URL: The URL where this applet is hosted.
# AI Studio automatically injects this at runtime with the Cloud Run service URL.
# Used for self-referential links, OAuth callbacks, and API endpoints.
APP_URL="MY_APP_URL"



================================================
FILE: src/App.tsx
================================================
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppProvider } from './AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AISpecialization from './components/AISpecialization';
import Footer from './components/Footer';

export default function App() {
  return (
    <AppProvider>
      <main className="relative">
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <AISpecialization />
        <Footer />
      </main>
    </AppProvider>
  );
}



================================================
FILE: src/AppContext.tsx
================================================
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from './constants';

type Language = 'es' | 'en';
type Theme = 'dark' | 'light';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es');
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const t = TRANSLATIONS[lang];

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};



================================================
FILE: src/constants.tsx
================================================
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



================================================
FILE: src/index.css
================================================
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@1,300;1,700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --font-serif: "Playfair Display", serif;
  
  --color-accent: #00e5ff; /* Hyper Cyan */
  --color-accent-dark: #0082ff;
  --color-bg-dark: #030712; 
  --color-bg-light: #cbd5e1; /* Much softer, more elegant slate for light mode */
}

@layer base {
  body {
    @apply bg-slate-950 text-slate-200 antialiased selection:bg-accent/30 selection:text-white transition-colors duration-500 overflow-x-hidden;
  }

  .dark body {
    @apply bg-slate-950 text-slate-200;
  }

  :root:not(.dark) body {
    @apply bg-slate-200 text-slate-900;
  }
}

.glass {
  @apply backdrop-blur-2xl bg-white/[0.03] border border-white/5 dark:bg-black/40 transition-all duration-500;
}

:root:not(.dark) .glass {
  @apply bg-slate-900/[0.05] border-slate-900/10;
}

.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 font-bold tracking-tighter;
}

.card-shine {
  @apply relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_4s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/[0.03] before:to-transparent;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}



================================================
FILE: src/main.tsx
================================================
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);



================================================
FILE: src/components/AISpecialization.tsx
================================================
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Bot, Sparkles, Zap, BrainCircuit } from 'lucide-react';
import { AI_SPECIALTIES } from '../constants';
import { useAppContext } from '../AppContext';

export default function AISpecialization() {
  const { lang, t } = useAppContext();

  return (
    <section id="ai" className="py-24 px-6 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-blue-500/20">
            <Bot className="w-5 h-5 text-blue-400" />
          </div>
          <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">{t.ai.topTitle}</p>
        </div>

        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-slate-900 dark:text-white">
          {lang === 'es' ? (
            <>Impulsando el futuro con <br /><span className="text-gradient">Inteligencia Artificial</span></>
          ) : (
            <>Driving the future with <br /><span className="text-gradient">Artificial Intelligence</span></>
          )}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {AI_SPECIALTIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-8 rounded-3xl glass border-neutral-200 dark:border-white/5 overflow-hidden group shadow-sm hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity dark:text-white text-neutral-900">
                {idx === 0 ? <Zap className="w-24 h-24" /> : idx === 1 ? <BrainCircuit className="w-24 h-24" /> : <Sparkles className="w-24 h-24" />}
              </div>

              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 dark:text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                {category.title[lang]}
              </h3>

              <div className="space-y-3 font-bold text-slate-800 dark:text-slate-300">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 text-sm">
                    <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-blue-500/5 dark:bg-slate-900 border border-blue-200 dark:border-blue-400/30 relative overflow-hidden shadow-sm">
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h4 className="text-xl font-black mb-4 text-blue-600 dark:text-accent italic">{t.ai.llmTitle}</h4>
              <p className="text-slate-800 dark:text-slate-100 text-sm md:text-base max-w-2xl leading-relaxed font-bold">
                {t.ai.llmDesc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Gemini', 'Claude', 'GPT', 'Gemma'].map((m) => (
                <span key={m} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-400/20 text-[10px] font-bold uppercase text-blue-700 dark:text-blue-300 shadow-sm">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



================================================
FILE: src/components/Experience.tsx
================================================
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';
import { useAppContext } from '../AppContext';
import { Calendar, Building2, ChevronRight } from 'lucide-react';

export default function Experience() {
  const { lang, t } = useAppContext();

  return (
    <section id="experience" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">Journey</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">{t.experience.title}</h2>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent -translate-x-1/2 hidden md:block" />

          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 border-4 border-slate-950 z-10 shadow-[0_0_15px_rgba(0,210,255,0.5)] hidden md:block" />

              <div className="flex-1 w-full">
                <div className="group p-10 rounded-[3rem] glass border-accent/10 dark:border-white/10 hover:border-accent/30 transition-all duration-500 shadow-2xl bg-accent/5 dark:bg-slate-900 shadow-xl card-shine">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 text-accent mb-2">
                          <div className="p-2 rounded-xl bg-accent/10 border border-accent/20">
                            <Building2 className="w-5 h-5" />
                          </div>
                          <h3 className="font-black text-xl text-slate-950 dark:text-white uppercase tracking-tighter">{exp.company}</h3>
                        </div>
                        <p className="font-mono text-[10px] text-accent/80 font-black uppercase tracking-[0.3em]">{exp.role[lang]}</p>
                      </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-mono text-[10px] font-black bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-white/10 px-4 py-2 rounded-2xl w-fit shadow-sm">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />

                    <ul className="space-y-5">
                      {exp.bullets[lang].map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-4 text-slate-950 dark:text-white text-sm leading-relaxed font-medium">
                          <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



================================================
FILE: src/components/Footer.tsx
================================================
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';
import { useAppContext } from '../AppContext';

export default function Footer() {
  const { t } = useAppContext();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-24 pb-12 px-6 border-t border-neutral-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic font-serif dark:text-white">
              {t.footer.title} <br />
              <span className="text-gradient not-italic font-sans">{t.footer.subtitle}</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-md mb-8">
              {t.footer.desc}
            </p>
            <a 
              href="mailto:jairoandresme@gmail.com" 
              className="text-2xl md:text-3xl font-medium hover:text-accent transition-colors underline underline-offset-8 decoration-accent/30 dark:text-white"
            >
              jairoandresme@gmail.com
            </a>
          </div>

          <div className="flex flex-col justify-end items-start lg:items-end gap-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-4 w-full lg:w-auto">
              <SocialLink icon={Github} href="https://github.com/JAndresSystems" label="GitHub" />
              <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/jairo-andres-mendoza-p-487363303/" label="LinkedIn" />
              <SocialLink icon={Mail} href="https://www.linkedin.com/in/jairo-andres-mendoza-p-487363303/" label="Email" />
            </div>
            <div className="flex flex-col lg:items-end gap-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">{t.hero.status}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-neutral-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-neutral-400 dark:text-neutral-600 uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} Jairo Andrés Mendoza Parada. {t.footer.rights}
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] text-neutral-400 hover:text-accent transition-colors uppercase tracking-[0.2em] font-bold"
          >
            Volver arriba
            <div className="p-2 rounded-full border border-neutral-200 dark:border-white/10 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
              <ChevronUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, href, label }: { icon: any, href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noreferrer"
      className="flex-1 lg:flex-none p-5 rounded-3xl border border-neutral-200 dark:border-white/5 hover:border-accent hover:bg-accent/5 transition-all group flex flex-col items-center gap-3"
    >
      <Icon className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-accent group-hover:scale-110 transition-all" />
      <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-600 group-hover:text-accent">{label}</span>
    </a>
  );
}



================================================
FILE: src/components/Hero.tsx
================================================
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Camera, User } from 'lucide-react';
import { useAppContext } from '../AppContext';

export default function Hero() {
  const { lang, t } = useAppContext();

  return (
    <section id="about" className="relative pt-44 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Background */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] -z-10" />
      
      {/* Unique Floating Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff10_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:40px_40px] -z-20" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_400px] gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {t.hero.status}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 italic font-serif">
            {lang === 'es' ? (
              <>
                Ingeniero de <br />
                <span className="text-gradient not-italic font-sans">Software & IA</span>
              </>
            ) : (
              <>
                <span className="text-gradient not-italic font-sans">Software & AI</span> <br />
                Engineer
              </>
            )}
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-neutral-500 font-light leading-relaxed mb-10 dark:text-neutral-400">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-all active:scale-95 text-center flex-1 sm:flex-none">
              {t.hero.cta1}
            </a>
            <a href="#contact" className="px-8 py-4 border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all rounded-full font-semibold active:scale-95 text-center flex-1 sm:flex-none">
              {t.hero.cta2}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[4/5] w-full max-w-[400px] mx-auto group"
        >
          <div className="absolute inset-0 bg-accent rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
          
          <div className="relative h-full w-full rounded-[2rem] overflow-hidden glass border-neutral-200 dark:border-white/10 flex items-center justify-center">
            {/* Espacio para la foto */}
            <div className="flex flex-col items-center gap-4 text-neutral-300 dark:text-neutral-600">
              <div className="p-10 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/5">
                <User className="w-16 h-16" />
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Jairo Andrés</p>
                <p className="text-[10px] italic text-neutral-400 mt-2 px-12">Sistemas | IA | Fullstack</p>
              </div>
            </div>
            
            {/* Si tienes una foto real, úsala así: */}
             <img   src="public\img-profile\Img-Perfil2.jpg"   alt="Jairo Andrés"    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-10" />
          </div>

          {/* Labels deck */}
          <div className="absolute -top-4 -right-4 glass px-6 py-3 rounded-2xl border-neutral-200 dark:border-white/10 rotate-3 shadow-2xl">
            <p className="font-mono text-[9px] text-accent font-black uppercase tracking-[0.3em]">EXPERIENCE</p>
            <p className="text-sm font-black dark:text-white">{t.hero.exp}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



================================================
FILE: src/components/Navbar.tsx
================================================
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Terminal, Github, Linkedin, Mail, Sun, Moon, Languages } from 'lucide-react';
import { useAppContext } from '../AppContext';

export default function Navbar() {
  const { lang, setLang, theme, toggleTheme, t } = useAppContext();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 glass rounded-[2rem] border-white/10 dark:border-white/5 w-[95%] max-w-7xl shadow-2xl"
    >
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-2xl bg-accent shadow-[0_0_20px_rgba(0,210,255,0.3)]">
          <Terminal className="w-5 h-5 text-white" />
        </div>
        <span className="font-black text-xs font-mono tracking-[0.2em] uppercase hidden sm:block dark:text-white">
          Jairo Andres Mendoza Parada .Dev
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-10 text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">
        <a href="#about" className="hover:text-accent transition-all hover:scale-110 tracking-tighter">{t.nav.about}</a>
        <a href="#experience" className="hover:text-accent transition-all hover:scale-110 tracking-tighter">{t.nav.experience}</a>
        <a href="#skills" className="hover:text-accent transition-all hover:scale-110 tracking-tighter">{t.nav.skills}</a>
        <a href="#projects" className="hover:text-accent transition-all hover:scale-110 tracking-tighter">{t.nav.projects}</a>
        <a href="#contact" className="hover:text-accent transition-all hover:scale-110 tracking-tighter">{t.nav.contact}</a>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        <button 
          onClick={toggleTheme}
          className="p-2.5 rounded-xl hover:bg-accent/10 text-slate-400 hover:text-accent transition-all shadow-inner"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <button 
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="flex items-center gap-2 text-[10px] font-black p-2.5 rounded-xl hover:bg-accent/10 text-slate-400 hover:text-accent transition-all uppercase tracking-widest shadow-inner border border-transparent hover:border-accent/20"
        >
          <Languages className="w-4 h-4" />
          <span>{lang}</span>
        </button>
      </div>
    </motion.nav>
  );
}



================================================
FILE: src/components/Projects.tsx
================================================
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ExternalLink, Github, Monitor, Smartphone, Video } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useAppContext } from '../AppContext';

export default function Projects() {
  const { lang, t } = useAppContext();

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">{t.projects.title}</h2>
          </div>
          <p className="max-w-md text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
            {t.projects.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative flex flex-col h-full rounded-[3rem] overflow-hidden border border-neutral-200 dark:border-white/5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className={`h-60 relative overflow-hidden bg-gradient-to-br ${project.color} flex items-center justify-center`}>
  {/* Lógica de Imagen: Si existe project.image, la muestra. Si no, muestra el icono */}
  {project.image ? (
    <img 
      src={project.image} 
      alt={project.title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  ) : (
    <project.icon className="w-24 h-24 text-slate-800 dark:text-white/10 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12" />
  )}

  {/* Overlay de color al pasar el mouse */}
  <div className="absolute inset-0 bg-accent/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
  
  {/* Botones de acción (Github y Link) */}
  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
    <a href={project.link} className="p-4 rounded-full bg-white text-black hover:bg-accent hover:text-white transition-all transform translate-y-10 group-hover:translate-y-0 delay-[0.1s]">
      <Github className="w-6 h-6" />
    </a>
    <a href={project.link} className="p-4 rounded-full bg-accent text-white hover:scale-110 transition-all transform translate-y-10 group-hover:translate-y-0 delay-[0.2s]">
      <ExternalLink className="w-6 h-6" />
    </a>
  </div>

  {/* Etiqueta del tipo de proyecto */}
  <div className="absolute top-6 left-6">
    <span className="px-4 py-1.5 rounded-full glass border-white/20 text-[10px] font-black uppercase text-white tracking-[0.2em] backdrop-blur-xl">
      {project.type}
    </span>
  </div>
</div>

              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-black mb-4 text-slate-800 dark:text-white flex items-center justify-between tracking-tighter">
                  {project.title}
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent/30" />
                    <div className="w-2 h-2 rounded-full bg-accent/10" />
                  </div>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-1 font-medium italic">
                  "{project.description[lang]}"
                </p>
                <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-100 dark:border-white/5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg bg-slate-50 dark:bg-accent/5 text-slate-500 dark:text-accent/80 border border-slate-200 dark:border-accent/10 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



================================================
FILE: src/components/Skills.tsx
================================================
import { motion } from 'motion/react';
import { LENGUAJES, FRAMEWORKS, DEVOPS_CLOUDS, DATABASES, ANALYTICS } from '../constants';
import { useAppContext } from '../AppContext';

export default function Skills() {
  const { t } = useAppContext();

  return (
    <section id="skills" className="py-24 px-6 bg-neutral-100/50 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">{t.skills.topTitle}</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">{t.skills.mainTitle}</h2>
          </div>
          <p className="max-w-md text-slate-950 dark:text-slate-200 text-sm leading-relaxed font-medium">
            {t.skills.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          <SkillCategory title={t.skills.categories.languages} items={LENGUAJES} delay={0} />
          <SkillCategory title={t.skills.categories.frameworks} items={FRAMEWORKS} delay={0.1} />
          <SkillCategory title={t.skills.categories.devops} items={DEVOPS_CLOUDS} delay={0.2} />
          <SkillCategory title={t.skills.categories.databases} items={DATABASES} delay={0.3} />
          <SkillCategory title={t.skills.categories.analytics} items={ANALYTICS} delay={0.4} />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, items, delay }: { title: string, items: any[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-[2.5rem] glass border-indigo-500/10 dark:border-white/5 bg-indigo-500/10 dark:bg-slate-900/40 hover:bg-accent/10 dark:hover:bg-accent/10 hover:border-accent/30 transition-all duration-500 group shadow-lg hover:shadow-cyan-500/10 card-shine"
    >
      <h3 className="text-[11px] font-black font-mono text-indigo-600 dark:text-neutral-400 uppercase tracking-[0.3em] mb-10 group-hover:text-accent transition-colors flex items-center gap-3">
        <span className="w-8 h-[1px] bg-accent/30 group-hover:w-12 transition-all"></span>
        {title}
      </h3>
      <div className="grid md:grid-cols-1 gap-5">
        {items.map((item, idx) => (
          <motion.div 
            key={idx} 
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 py-1"
          >
            <div className={`p-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-inner transition-transform group-hover:rotate-6 ${item.color || 'text-cyan-400'}`}>
              <item.icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-black text-slate-900 dark:text-white transition-colors group-hover:text-black dark:group-hover:text-white">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

