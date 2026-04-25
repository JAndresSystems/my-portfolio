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
