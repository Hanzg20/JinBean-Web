import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Tablet, Scan, Cpu, Settings } from "lucide-react";

const ProductsSection = () => {
  const { language, t } = useLanguage();

  const products = [
    {
      title: t('products.kiosk'),
      icon: Monitor,
      features: language === 'zh'
        ? ['适配多种品牌自助终端', '环境感知与硬件状态监控', '银联认证支付组件集成']
        : ['Adapts to multiple brands', 'Environment & health monitoring', 'UnionPay component integration'],
      image: "bg-slate-100",
    },
    {
      title: t('products.pos'),
      icon: Tablet,
      features: language === 'zh'
        ? ['第三方 POS 协议层打通', '业务系统深度融合适配', '多品牌终端统一管控']
        : ['POS protocol bridging', 'Business system integration', 'Unified terminal management'],
      image: "bg-slate-200",
    },
    {
      title: t('products.nfc'),
      icon: Scan,
      features: language === 'zh'
        ? ['跨平台读卡驱动适配', '加密算法硬件加固集成', '复杂物理环境兼容']
        : ['Cross-platform drivers', 'Crypto algorithm integration', 'Environmental compatibility'],
      image: "bg-slate-100",
    },
    {
      title: t('products.face'),
      icon: Cpu,
      features: language === 'zh'
        ? ['视觉算法适配主流模组', '无人售货机集成套件', '秒级离线识别适配']
        : ['Vision algorithm adaptation', 'Vending machine kits', 'Offline recognition adaptation'],
      image: "bg-slate-200",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-slate-900 dark:text-white">
            {t('products.title')}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((item) => (
            <div
              key={item.title}
              className="flex flex-col lg:flex-row bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden shadow-sm border border-slate-100 dark:border-white/5 group hover:shadow-2xl transition-all duration-500"
            >
              {/* Product Visual */}
              <div className={`lg:w-1/2 ${item.image} flex items-center justify-center p-12 group-hover:scale-105 transition-transform duration-700`}>
                 <div className="relative">
                    <item.icon className="w-24 h-24 text-slate-300 dark:text-slate-600" />
                    <Settings className="absolute -bottom-2 -right-2 w-8 h-8 text-primary opacity-50 animate-spin-slow" />
                 </div>
              </div>

              {/* Product Info */}
              <div className="lg:w-1/2 p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{item.title}</h3>
                  <ul className="space-y-4 mb-8">
                    {item.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                >
                  {language === 'zh' ? '查看集成方案' : 'View Integration'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* OEM/ODM Banner */}
        <div className="mt-20 p-12 rounded-[40px] bg-tech-blue relative overflow-hidden text-center lg:text-left">
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                 <h3 className="text-3xl font-bold text-white mb-4">
                   {language === 'zh' ? '支持第三方终端集成适配' : 'Support 3rd-party Terminal Integration'}
                 </h3>
                 <p className="text-white/60 text-lg">
                   {language === 'zh'
                     ? '我们与知名终端厂商合作，提供环境适配器与底层系统协议打通服务。'
                     : 'We partner with leading vendors to provide hardware adapters and low-level protocol integration.'}
                 </p>
              </div>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 py-7 text-lg font-bold">
                 {language === 'zh' ? '立即申请方案' : 'Request Solution'}
              </Button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
