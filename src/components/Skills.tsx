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