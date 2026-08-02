import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Code2, Server, Globe, Key, BookOpen, Layers, Zap } from "lucide-react";

const PlatformSection = () => {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Code2,
      title: t('platform.api'),
      desc: language === 'zh' ? '标准化的支付与对账接口，支持多种编程语言快速集成。' : 'Standardized payment & reconciliation APIs for rapid integration.',
    },
    {
      icon: Zap,
      title: t('platform.sdk'),
      desc: t('platform.subtitle'),
    },
    {
      icon: BookOpen,
      title: t('platform.docs'),
      desc: language === 'zh' ? '详尽的开发指南、示例代码与硬件适配说明。' : 'Detailed developer guides, sample code, and hardware adaptation notes.',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Diagram/Visualization */}
          <div className="relative p-10 bg-slate-50 dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-white/5 order-2 lg:order-1">
             <div className="space-y-6">
                {/* Platform Layers */}
                <div className="p-6 bg-primary text-white rounded-2xl shadow-xl flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <Globe className="w-6 h-6" />
                      <span className="font-bold text-lg">Jinhongtian Logic Layer</span>
                   </div>
                   <Layers className="w-5 h-5 opacity-50" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm flex flex-col gap-3">
                      <Key className="w-5 h-5 text-primary" />
                      <span className="font-bold text-sm">Auth & Security</span>
                   </div>
                   <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm flex flex-col gap-3">
                      <Server className="w-5 h-5 text-primary" />
                      <span className="font-bold text-sm">Payment Bridge</span>
                   </div>
                </div>

                <div className="p-10 bg-slate-200 dark:bg-slate-800 rounded-2xl border border-dashed border-slate-400 dark:border-slate-600 flex items-center justify-center text-slate-600 font-bold text-sm text-center">
                   3rd-PARTY TERMINALS & VENDING MACHINES<br />(ADAPTATION SDK)
                </div>
             </div>

             {/* Floating Code Snippet Effect */}
             <div className="absolute -top-6 -right-6 p-4 bg-slate-900 rounded-xl shadow-2xl border border-white/10 hidden md:block">
                <div className="flex gap-1.5 mb-2">
                   <div className="w-2 h-2 rounded-full bg-red-500" />
                   <div className="w-2 h-2 rounded-full bg-amber-500" />
                   <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="text-[10px] text-green-400 font-mono">
                   adapter.connect(device_id)<br />
                   adapter.exec_pay(options)
                </div>
             </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-black mb-8 text-slate-900 dark:text-white leading-tight">
              {t('platform.title')}
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
              {t('platform.subtitle')}
            </p>

            <div className="space-y-8 mb-12">
              {features.map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/innovation" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
              {language === 'zh' ? '进入创新中心' : 'Innovation Center'}
              <Code2 className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
