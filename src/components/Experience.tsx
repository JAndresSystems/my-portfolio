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
