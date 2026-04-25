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
