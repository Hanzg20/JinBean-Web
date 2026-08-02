import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";
import { Building2, Award, Globe, History, CheckCircle2, TrendingUp } from "lucide-react";

const About = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('nav.about')} - {t('brand.name')}</title>
      </Helmet>

      <div className="min-h-screen bg-background text-slate-900 dark:text-white">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative py-32 bg-slate-950 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-7xl font-black mb-8 animate-slide-up">
                {t('about.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
                {t('about.hero.subtitle')}
              </p>
            </div>
          </section>

          {/* Company Profile & Stats */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                    <Building2 className="w-4 h-4" />
                    Company Profile
                  </div>
                  <h2 className="text-4xl font-black">{t('about.profile.title')}</h2>
                  <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                    {t('about.profile.desc')}
                  </p>
                  <div className="grid grid-cols-3 gap-6 pt-6">
                    <div className="space-y-1">
                      <div className="text-3xl font-black text-primary">2011</div>
                      <div className="text-xs font-bold text-slate-400 uppercase">{t('about.stats.founded')}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-black text-primary">500+</div>
                      <div className="text-xs font-bold text-slate-400 uppercase">{t('about.stats.clients')}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-black text-primary">30+</div>
                      <div className="text-xs font-bold text-slate-400 uppercase">{t('about.stats.solutions')}</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                   <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-[60px] border border-slate-100 dark:border-white/5 flex items-center justify-center p-20">
                      <TrendingUp className="w-full h-full text-primary opacity-5 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Growth Journey / Milestones */}
          <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-black mb-4">{t('about.history.title')}</h2>
                  <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
               </div>

               <div className="space-y-12">
                  {[
                    { year: '2011', text: t('about.history.2011') },
                    { year: '2015-2018', text: t('about.history.industry') },
                    { year: '2019-2022', text: t('about.history.tech') },
                    { year: 'Now', text: t('about.history.now') }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-8 group">
                       <div className="shrink-0 w-24 text-right pt-1 font-black text-primary group-hover:scale-110 transition-transform">
                          {item.year}
                       </div>
                       <div className="relative pb-12 pl-8 border-l border-slate-200 dark:border-white/10 last:pb-0">
                          <div className="absolute -left-1.5 top-2 w-3 h-3 bg-white dark:bg-slate-900 border-2 border-primary rounded-full group-hover:bg-primary transition-colors" />
                          <p className="text-lg font-medium text-slate-600 dark:text-slate-300">
                             {item.text}
                          </p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="p-10 rounded-[40px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:shadow-2xl transition-all">
                  <Award className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {t('about.mission.desc')}
                  </p>
                </div>
                <div className="p-10 rounded-[40px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:shadow-2xl transition-all">
                  <CheckCircle2 className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{t('about.tech.title')}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {t('about.tech.desc')}
                  </p>
                </div>
                <div className="p-10 rounded-[40px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:shadow-2xl transition-all">
                  <Globe className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {t('about.vision.desc')}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
