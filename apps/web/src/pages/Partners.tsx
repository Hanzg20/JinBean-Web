import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";
import {
  Handshake,
  Cpu,
  Globe,
  Settings,
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Partners = () => {
  const { language, t } = useLanguage();

  const collaborationModels = [
    {
      title: language === 'zh' ? '硬件厂商集成合作' : 'Hardware Integration',
      desc: language === 'zh' ? '为 POS 机、自助缴费机、售货机厂商提供底层支付与物联适配 SDK，实现“开箱即用”的云端能力。' : 'Provide SDKs for POS, Kiosks, and Vending machines for out-of-the-box cloud capabilities.',
      icon: Cpu,
    },
    {
      title: language === 'zh' ? '区域代理与渠道商' : 'Regional Distributors',
      desc: language === 'zh' ? '面向不同国家和地区，提供成熟的行业垂直方案授权，共享 JHT 品牌与技术沉淀。' : 'Empowering regional partners with vertical solutions and JHT brand value.',
      icon: Globe,
    },
    {
      title: language === 'zh' ? '软件商/系统集成商' : 'ISV & SI Partners',
      desc: language === 'zh' ? '提供标准化 API，帮助软件开发商快速补齐支付与硬件交互短板，实现业务闭环。' : 'Helping ISVs bridge the gap in payment and hardware interaction via APIs.',
      icon: Settings,
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('partners.hero.title')} - {t('brand.name')}</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Handshake className="absolute -top-20 -right-20 w-[800px] h-[800px] text-primary" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-black mb-8 animate-slide-up">
                  {t('partners.hero.title')}
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed animate-slide-up stagger-1">
                  {t('partners.hero.subtitle')}
                </p>
                <div className="pt-10 flex flex-col sm:flex-row justify-center gap-4 animate-slide-up stagger-2">
                   <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl px-10 py-7 font-bold">
                      <Link to="/apply">{language === 'zh' ? '申请成为合作伙伴' : 'Apply Now'}</Link>
                   </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Collaboration Models */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold mb-4">{language === 'zh' ? '多元化的合作模式' : 'Diverse Collaboration Models'}</h2>
                 <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {collaborationModels.map((model) => (
                  <div key={model.title} className="p-10 rounded-[40px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all group text-center">
                    <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                      <model.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {model.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ecosystem Support */}
          <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-3xl sm:text-5xl font-black mb-8 leading-tight">
                    {language === 'zh' ? '全方位的伙伴赋能体系' : 'Full-scale Partner Enablement'}
                  </h2>
                  <div className="space-y-8">
                    {[
                      { t: language === 'zh' ? '技术赋能' : 'Tech Support', d: '7x24 Dedicated technical consulting and SDK integration support.', icon: Zap },
                      { t: language === 'zh' ? '品牌共享' : 'Brand Sharing', d: 'Use of Jinhongtian brand assets and success story references.', icon: ShieldCheck },
                      { t: language === 'zh' ? '市场资源' : 'Market Resources', d: 'Global lead distribution and co-marketing opportunities.', icon: Globe }
                    ].map(item => (
                      <div key={item.t} className="flex gap-6">
                        <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 p-12 rounded-[50px] relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-[100px]" />
                   <h3 className="text-2xl font-bold text-white mb-6">{language === 'zh' ? '合作伙伴激励计划' : 'Partner Incentives'}</h3>
                   <ul className="space-y-4 mb-10">
                      {[
                        language === 'zh' ? '阶梯式分成机制' : 'Tiered commission structure',
                        language === 'zh' ? '联合实验室共同研发' : 'Joint Lab R&D opportunities',
                        language === 'zh' ? '核心物联专利授权' : 'Core IoT patent licensing',
                        language === 'zh' ? '全球展会联合参展' : 'Joint global exhibition spots'
                      ].map(li => (
                        <li key={li} className="flex items-center gap-3 text-slate-400 text-sm">
                           <ArrowRight className="w-4 h-4 text-primary" />
                           {li}
                        </li>
                      ))}
                   </ul>
                   <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 py-7 text-lg font-bold">
                      {language === 'zh' ? '获取伙伴合作手册' : 'Download Brochure'}
                   </Button>
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

export default Partners;
