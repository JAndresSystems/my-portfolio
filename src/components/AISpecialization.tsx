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
