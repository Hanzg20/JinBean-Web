import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";
import {
  BarChart3,
  TrendingUp,
  Users2,
  Globe,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";

const Cases = () => {
  const { language, t } = useLanguage();

  const successCases = [
    {
      company: language === 'zh' ? '某北方大型热力集团' : 'Major Northern Thermal Group',
      title: language === 'zh' ? '热力计费与成本控制系统' : 'Thermal Billing & Cost Control',
      stats: [
        { label: language === 'zh' ? '结算误差' : 'Billing Error', value: '< 0.01%' },
        { label: language === 'zh' ? '收缴率' : 'Collection Rate', value: '99.5%' },
      ],
      desc: language === 'zh' ? '为大型热力企业提供全流程计费、收费及能耗监控方案，打通了从入户到财务结算的数字化闭环。' : 'Provided full-process billing, collection, and energy monitoring for thermal enterprises.',
      tags: ['Thermal', 'Management System'],
    },
    {
      company: language === 'zh' ? '某省级农业信息化平台' : 'Provincial Agricultural Platform',
      title: language === 'zh' ? '农业大数据与物联监控' : 'Agri-Big Data & IoT Monitoring',
      stats: [
        { label: language === 'zh' ? '监测覆盖面' : 'Monitoring Cover', value: '10M+ Mu' },
        { label: language === 'zh' ? '预警响应' : 'Alert Response', value: 'Real-time' },
      ],
      desc: language === 'zh' ? '构建全省农业数据资源中心，集成传感器适配与卫星遥感数据，为精准农业提供决策支撑。' : 'Built a provincial agri-data center, integrating sensor adaptation and satellite data.',
      tags: ['Agriculture', 'Big Data'],
    },
    {
      company: language === 'zh' ? '某知名连锁无人零售品牌' : 'Leading Unmanned Retail Brand',
      title: language === 'zh' ? '5G + AI 智慧零售方案' : '5G + AI Smart Retail',
      stats: [
        { label: language === 'zh' ? '结算速度提升' : 'Checkout Speed', value: '75%' },
        { label: language === 'zh' ? '异常损耗降低' : 'Shrinkage Reduction', value: '30%' },
      ],
      desc: language === 'zh' ? '利用 5G 高速网络与 AI 视觉模组适配，实现了毫秒级商品识别与刷脸支付的无缝体验。' : 'Seamless millisecond recognition and face-pay experience via 5G and AI vision adaptation.',
      tags: ['Retail', 'AI Vision'],
    },
    {
      company: language === 'zh' ? '哈尔滨某大型智慧工地项目' : 'Harbin Smart Construction Project',
      title: language === 'zh' ? '实名制管理与安全监控' : 'Attendance & Safety Monitoring',
      stats: [
        { label: language === 'zh' ? '管理效率提升' : 'Management Efficiency', value: '80%' },
        { label: language === 'zh' ? '违规预警准确率' : 'Alert Accuracy', value: '98%' },
      ],
      desc: language === 'zh' ? '部署 5G 物联接入点与 AI 人脸识别适配端，彻底解决了建筑行业实名制考勤与现场安全盲区问题。' : 'Solved attendance and safety blind spots via 5G IoT and AI face-ID adaptation.',
      tags: ['Construction', '5G IoT'],
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('cases.hero.title')} - {t('brand.name')}</title>
      </Helmet>

      <div className="min-h-screen bg-background text-slate-900 dark:text-white">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative py-32 bg-slate-950 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <BarChart3 className="absolute -bottom-20 -right-20 w-[600px] h-[600px] text-primary" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-7xl font-black mb-8 animate-slide-up">
                {t('cases.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
                {t('cases.hero.subtitle')}
              </p>
            </div>
          </section>

          {/* Cases List */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-16">
                {successCases.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-slate-900 rounded-[48px] border border-slate-100 dark:border-white/5 p-8 lg:p-16 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
                  >
                    <div className="flex flex-col lg:flex-row gap-16">
                      <div className="lg:w-2/3 space-y-8">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map(tag => (
                            <span key={tag} className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-widest">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-400 mb-2 uppercase tracking-tighter">{item.company}</h3>
                          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {item.title}
                          </h2>
                        </div>

                        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>

                        <div className="pt-4">
                          <Link to="/apply" className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                            {language === 'zh' ? '查看详细分析报告' : 'Read Case Study'}
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>

                      <div className="lg:w-1/3 grid grid-cols-1 gap-6">
                        {item.stats.map(stat => (
                          <div key={stat.label} className="p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-white/5 flex flex-col items-center justify-center text-center group-hover:bg-primary transition-all duration-300">
                            <div className="text-4xl font-black mb-2 group-hover:text-white">{stat.value}</div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white/60">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Global Footprint Summary */}
          <section className="py-24 bg-slate-950 text-white text-center">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-black mb-16">{language === 'zh' ? '服务全球数字基础设施' : 'Serving Global Digital Infrastructure'}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                   <div>
                      <Globe className="h-10 w-10 text-primary mx-auto mb-6" />
                      <div className="text-4xl font-black mb-2">10+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Countries</div>
                   </div>
                   <div>
                      <Users2 className="h-10 w-10 text-primary mx-auto mb-6" />
                      <div className="text-4xl font-black mb-2">500+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Enterprises</div>
                   </div>
                   <div>
                      <TrendingUp className="h-10 w-10 text-primary mx-auto mb-6" />
                      <div className="text-4xl font-black mb-2">1B+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Transactions</div>
                   </div>
                   <div>
                      <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-6" />
                      <div className="text-4xl font-black mb-2">99.9%</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Uptime</div>
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

export default Cases;
