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
