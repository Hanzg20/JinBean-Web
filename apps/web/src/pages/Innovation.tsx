import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";
import {
  Code2,
  Cpu,
  Globe,
  Lightbulb,
  Database,
  Terminal,
  ArrowRight,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const Innovation = () => {
  const { t } = useLanguage();

  const rdCapabilities = [
    {
      title: t('innovation.rd.title'),
      desc: t('innovation.rd.desc'),
      icon: Cpu,
    },
    {
      title: t('innovation.lab.title'),
      desc: t('innovation.lab.desc'),
      icon: Lightbulb,
    },
    {
      title: t('innovation.llm.title'),
      desc: t('innovation.llm.desc'),
      icon: Database,
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('innovation.hero.title')} - {t('brand.name')}</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative py-24 bg-tech-blue text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-black mb-8 animate-slide-up">
                  {t('innovation.hero.title')}
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed animate-slide-up stagger-1">
                  {t('innovation.hero.subtitle')}
                </p>
              </div>
            </div>
          </section>

          {/* R&D Strength */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-12">
                {rdCapabilities.map((cap) => (
                  <div key={cap.title} className="p-10 rounded-[40px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:border-primary/30 transition-all">
                    <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center mb-8">
                      <cap.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{cap.title}</h3>
                    <p className="text-slate-500 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SDK & Developer Experience */}
          <section className="py-24 bg-slate-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                    <Code2 className="w-4 h-4" />
                    Developer Experience
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-black leading-tight">
                    {t('innovation.dev_exp.title')}
                  </h2>
                  <p className="text-slate-400 text-lg">
                    {t('innovation.dev_exp.desc')}
                  </p>

                  <div className="bg-slate-900 rounded-2xl p-6 border border-white/5 font-mono text-sm space-y-2">
                     <div className="text-slate-500">// Initialize Adapter</div>
                     <div className="text-primary">const adapter = new JHTAdapter(device_config);</div>
                     <div className="text-slate-500">// Execute Payment</div>
                     <div className="text-primary">await adapter.pay({'{'} amount: 100.00 {'}'});</div>
                  </div>

                  <div className="pt-4">
                    <Link to="/docs" className="inline-flex items-center gap-2 text-white font-bold hover:gap-3 transition-all">
                      {t('innovation.dev_exp.link')}
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </Link>
                  </div>
                </div>

                <div className="relative p-12 bg-slate-900 rounded-[60px] border border-white/10">
                   <div className="absolute inset-0 bg-primary/5 rounded-[60px] blur-3xl" />
                   <div className="relative space-y-6">
                      <div className="p-6 bg-slate-800 rounded-2xl border border-white/5 flex items-center gap-4 shadow-xl">
                         <Shield className="w-6 h-6 text-green-500" />
                         <span className="font-bold">E2E Secure Tunnel</span>
                      </div>
                      <div className="p-6 bg-slate-800 rounded-2xl border border-white/5 flex items-center gap-4 shadow-xl">
                         <Terminal className="w-6 h-6 text-primary" />
                         <span className="font-bold">Omni-terminal Bridge</span>
                      </div>
                      <div className="p-6 bg-slate-800 rounded-2xl border border-white/5 flex items-center gap-4 shadow-xl">
                         <Globe className="w-6 h-6 text-blue-500" />
                         <span className="font-bold">Global Cloud Sync</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Patents */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-12">{t('innovation.patents.title')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {[1, 2, 3, 4].map(i => (
                   <div key={i} className="aspect-[3/4] bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-white/5 p-6 flex flex-col justify-end text-left">
                      <div className="h-1 w-12 bg-primary mb-4" />
                      <div className="text-xs text-slate-400 mb-2">Patent ID: CN10XXXXXX</div>
                      <div className="font-bold text-sm">
                        {t('innovation.patents.name')}
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Innovation;
