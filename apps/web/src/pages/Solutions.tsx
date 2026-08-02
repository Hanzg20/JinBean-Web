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
  CheckCircle2,
  Server,
  Cpu,
  Layers,
  Smartphone,
  ScanFace,
  PackageCheck,
  Lock,
  CreditCard
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

  const landingSteps = [
    { icon: ScanFace, title: t('solutions.landing.flow.step1.title'), desc: t('solutions.landing.flow.step1.desc') },
    { icon: Lock, title: t('solutions.landing.flow.step2.title'), desc: t('solutions.landing.flow.step2.desc') },
    { icon: PackageCheck, title: t('solutions.landing.flow.step3.title'), desc: t('solutions.landing.flow.step3.desc') },
    { icon: CreditCard, title: t('solutions.landing.flow.step4.title'), desc: t('solutions.landing.flow.step4.desc') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('solutions.hero.title')} - {t('brand.name')}</title>
      </Helmet>

      <div className="min-h-screen bg-background text-slate-900 dark:text-white">
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

          {/* Featured Landing Solution: Autonomous Micro-Commerce */}
          <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-widest uppercase mb-4">
                   Featured Solution
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                  {t('solutions.landing.title')}
                </h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                  {t('solutions.landing.subtitle')}
                </p>
              </div>

              {/* Architecture Diagram */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                <div className="relative p-8 bg-white dark:bg-slate-950 rounded-[40px] shadow-xl border border-slate-100 dark:border-white/5 space-y-4">
                  {/* Cloud Layer */}
                  <div className="p-6 bg-slate-900 text-white rounded-2xl flex items-center justify-between group hover:bg-slate-800 transition-colors">
                     <div className="flex items-center gap-4">
                        <Server className="w-6 h-6 text-blue-400" />
                        <span className="font-bold">{t('solutions.landing.layer.cloud')}</span>
                     </div>
                     <span className="text-[10px] text-slate-500 font-mono">Inventory & Analytics</span>
                  </div>

                  {/* Bridge Arrow */}
                  <div className="flex justify-center h-8">
                     <div className="w-px h-full bg-gradient-to-b from-slate-200 to-primary" />
                  </div>

                  {/* Platform Layer (GoldSky Base) */}
                  <div className="p-10 bg-primary text-white rounded-3xl flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[80px] -mr-10 -mt-10 group-hover:scale-110 transition-transform" />
                     <div className="flex items-center gap-4">
                        <Layers className="w-8 h-8" />
                        <h4 className="text-2xl font-black italic">{t('solutions.landing.layer.platform')}</h4>
                     </div>
                     <div className="grid grid-cols-2 gap-4 text-xs font-bold text-white/70">
                        <div className="flex items-center gap-2">
                           <Zap className="w-3 h-3 text-secondary" /> Visual AI Identification
                        </div>
                        <div className="flex items-center gap-2">
                           <Zap className="w-3 h-3 text-secondary" /> Biometric Payment Rail
                        </div>
                     </div>
                  </div>

                  {/* Bridge Arrow */}
                  <div className="flex justify-center h-8">
                     <div className="w-px h-full bg-gradient-to-b from-primary to-slate-200" />
                  </div>

                  {/* Edge Layer */}
                  <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-between border-2 border-dashed border-slate-300 dark:border-slate-600">
                     <div className="flex items-center gap-4">
                        <Cpu className="w-6 h-6 text-slate-500" />
                        <span className="font-bold text-slate-600 dark:text-slate-300">{t('solutions.landing.layer.edge')}</span>
                     </div>
                     <div className="flex gap-2">
                        <Smartphone className="w-4 h-4 text-slate-400" />
                        <CreditCard className="w-4 h-4 text-slate-400" />
                     </div>
                  </div>
                </div>

                <div className="space-y-10">
                   <h3 className="text-2xl font-bold">{language === 'zh' ? '核心技术优势' : 'Core Tech Advantages'}</h3>
                   <div className="space-y-6">
                      {[
                        { t: language === 'zh' ? '极简硬件集成' : 'Simplified Integration', d: language === 'zh' ? '通过 Adaptation SDK，快速适配主流自动售货机及智慧冷柜，实现“软件定义零售”。' : 'Quickly adapt to major vending machines and smart fridges via our SDK.' },
                        { t: language === 'zh' ? '视觉+重量融合感知' : 'Visual + Weight Fusion', d: language === 'zh' ? '结合 3D 视觉识别与高精度重力传感，单次识别准确率高达 99.9% 以上。' : 'Combining 3D vision and gravity sensing for 99.9%+ accuracy.' },
                        { t: language === 'zh' ? '金融级无感结算' : 'Financial Frictionless Pay', d: language === 'zh' ? '符合 PCI-DSS 标准的支付隧道，支持人脸、聚合扫码等多种无感代扣模式。' : 'PCI-DSS compliant tunnel supporting Face-pay and auto-deduction.' }
                      ].map(adv => (
                        <div key={adv.t} className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-white/5 hover:border-primary transition-colors">
                           <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-5 h-5 text-primary" />
                           </div>
                           <div>
                              <h4 className="font-bold mb-1">{adv.t}</h4>
                              <p className="text-sm text-slate-500 leading-relaxed">{adv.d}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Technical Flow Walkthrough */}
              <div className="bg-slate-900 rounded-[50px] p-12 lg:p-20 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                 <h3 className="text-3xl font-black mb-16 text-center">{language === 'zh' ? '用户交互流程：拿了就走' : 'User Journey: Grab and Go'}</h3>

                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {landingSteps.map((step, idx) => (
                      <div key={idx} className="relative group text-center lg:text-left">
                         <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500 group-hover:scale-110">
                            <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                         </div>
                         <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                         <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>

                         {idx < 3 && (
                            <div className="hidden lg:block absolute top-8 -right-4 text-white/10">
                               <ArrowRight className="w-8 h-8" />
                            </div>
                         )}
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </section>

          {/* Industry Solution Grid (The "Software" Logic) */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-20 text-center">
                 <h2 className="text-3xl md:text-5xl font-black mb-6">{t('solutions.matrix.title')}</h2>
                 <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              </div>

              <div className="space-y-24">
                {industries.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex flex-col lg:flex-row items-center gap-16 ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Visual Placeholder */}
                    <div className={`w-full lg:w-1/2 aspect-video ${item.bg} rounded-[40px] flex items-center justify-center border border-slate-100 dark:border-white/5 group overflow-hidden`}>
                       <item.icon className={`w-24 h-24 ${item.color} opacity-20 group-hover:scale-110 transition-transform duration-500`} />
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
                      <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
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
              <h2 className="text-3xl font-black mb-12">
                {t('solutions.bottom.title')}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { t: t('solutions.bottom.compliance'), d: 'UnionPay & Banking Standards' },
                  { t: t('solutions.bottom.deploy'), d: 'Modular Platform & SDK' },
                  { t: t('solutions.bottom.ai_ops'), d: '7x24 Automated Monitoring' }
                ].map(stat => (
                  <div key={stat.t} className="bg-white dark:bg-slate-800 p-10 rounded-[40px] shadow-sm border border-slate-100 dark:border-white/5 hover:border-primary/30 transition-colors">
                    <h3 className="text-2xl font-black mb-3 text-primary">{stat.t}</h3>
                    <p className="text-slate-500 text-sm font-medium">{stat.d}</p>
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
