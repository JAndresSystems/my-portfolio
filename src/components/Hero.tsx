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
