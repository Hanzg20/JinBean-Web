import { useLanguage } from "@/contexts/LanguageContext";
import { ShieldCheck, Cpu, Clock, CheckCircle2 } from "lucide-react";

const ValuePropsSection = () => {
  const { language, t } = useLanguage();

  const advantages = [
    {
      icon: ShieldCheck,
      title: t('value.trust'),
      description: t('value.trust.desc'),
    },
    {
      icon: Cpu,
      title: t('value.tech'),
      description: t('value.tech.desc'),
    },
    {
      icon: Clock,
      title: t('value.support'),
      description: t('value.support.desc'),
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
           {/* Summary Stats */}
           <div className="grid grid-cols-2 gap-6 w-full lg:w-1/3">
              <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                 <div className="text-4xl font-black text-primary mb-2">20+</div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('hero.stats.exp')}</div>
              </div>
              <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                 <div className="text-4xl font-black text-secondary mb-2">500+</div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('hero.stats.clients')}</div>
              </div>
              <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                 <div className="text-4xl font-black text-primary mb-2">30+</div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('hero.stats.patents')}</div>
              </div>
              <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                 <div className="text-4xl font-black text-secondary mb-2">15m</div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Support Response</div>
              </div>
           </div>

           {/* Core Value Props */}
           <div className="w-full lg:w-2/3">
              <h2 className="text-3xl sm:text-4xl font-black mb-12 text-slate-900 dark:text-white leading-tight">
                {t('value.title')}
              </h2>

              <div className="grid sm:grid-cols-2 gap-8">
                {advantages.map((item) => (
                  <div key={item.title} className="flex gap-5 group">
                    <div className="shrink-0">
                       <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
