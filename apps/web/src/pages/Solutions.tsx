import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";
import {
  Droplet,
  ShoppingCart,
  Building2,
  ShieldCheck,
  ArrowRight,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const { language, t } = useLanguage();

  const industries = [
    {
      id: 'utility',
      title: t('solutions.utility'),
      desc: t('solutions.utility.desc'),
      icon: Droplet,
      color: "text-blue-500",
      bg: "bg-blue-50",
      features: language === 'zh'
        ? ['多维度欠费提醒', '24小时自助缴费', '自动财务对账']
        : ['Multi-channel reminders', '24/7 self-service', 'Auto reconciliation']
    },
    {
      id: 'retail',
      title: t('solutions.retail'),
      desc: t('solutions.retail.desc'),
      icon: ShoppingCart,
      color: "text-orange-500",
      bg: "bg-orange-50",
      features: language === 'zh'
        ? ['视觉识别算法适配', '库存实时同步', '无人值守运营']
        : ['Vision algorithm adaptation', 'Inventory sync', 'Autonomous operation']
    },
    {
      id: 'construction',
      title: t('solutions.construction'),
      desc: t('solutions.construction.desc'),
      icon: Building2,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      features: language === 'zh'
        ? ['实名制进场管理', '安全违规预警', '远程视频督导']
        : ['Attendance management', 'Safety alerts', 'Remote supervision']
    },
    {
      id: 'fund',
      title: t('solutions.fund'),
      desc: t('solutions.fund.desc'),
      icon: ShieldCheck,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      features: language === 'zh'
        ? ['分级权限管理', '资金流向溯源', '合规报表生成']
        : ['Tiered permissions', 'Fund tracking', 'Compliance reporting']
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('solutions.hero.title')} - {t('brand.name')}</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-black mb-8 animate-slide-up">
                {t('solutions.hero.title')}
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
                {t('solutions.hero.subtitle')}
              </p>
            </div>
          </section>

          {/* Solution Grid */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-24">
                {industries.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex flex-col lg:flex-row items-center gap-16 ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Visual Placeholder */}
                    <div className={`w-full lg:w-1/2 aspect-video ${item.bg} rounded-[40px] flex items-center justify-center border border-slate-100 dark:border-white/5`}>
                       <item.icon className={`w-24 h-24 ${item.color} opacity-20`} />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                      <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                        <Zap className="w-4 h-4" />
                        Industry Focus
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                        {item.title}
                      </h2>
                      <p className="text-lg text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>

                      <ul className="grid sm:grid-cols-2 gap-4">
                        {item.features.map(feature => (
                          <li key={feature} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4">
                        <Link
                          to="/apply"
                          className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
                        >
                          {language === 'zh' ? '获取定制化方案' : 'Get Custom Solution'}
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom Banner */}
          <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-8">
                {t('solutions.bottom.title')}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { t: t('solutions.bottom.compliance'), d: 'UnionPay & Banking Standards' },
                  { t: t('solutions.bottom.deploy'), d: 'Modular Platform & SDK' },
                  { t: t('solutions.bottom.ai_ops'), d: '7x24 Automated Monitoring' }
                ].map(stat => (
                  <div key={stat.t} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5">
                    <h3 className="text-xl font-bold mb-2 text-primary">{stat.t}</h3>
                    <p className="text-slate-500 text-sm">{stat.d}</p>
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

export default Solutions;
