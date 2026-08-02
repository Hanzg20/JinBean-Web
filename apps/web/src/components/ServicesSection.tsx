import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Droplet,
  ShoppingCart,
  Building2,
  ShieldCheck,
  BookOpen,
  PlusCircle,
  Smartphone,
  Cpu,
  Database
} from "lucide-react";

const ServicesSection = () => {
  const { language, t } = useLanguage();

  const solutions = [
    {
      icon: Droplet,
      title: t('solutions.utility'),
      desc: t('solutions.utility.desc'),
      path: "/solutions/utility",
      color: "bg-blue-500",
    },
    {
      icon: ShoppingCart,
      title: t('solutions.retail'),
      desc: t('solutions.retail.desc'),
      path: "/solutions/retail",
      color: "bg-orange-500",
    },
    {
      icon: Building2,
      title: t('solutions.construction'),
      desc: t('solutions.construction.desc'),
      path: "/solutions/construction",
      color: "bg-emerald-500",
    },
    {
      icon: ShieldCheck,
      title: t('solutions.fund'),
      desc: t('solutions.fund.desc'),
      path: "/solutions/fund",
      color: "bg-indigo-500",
    },
    {
      icon: BookOpen,
      title: t('solutions.edtech'),
      desc: t('solutions.edtech.desc'),
      path: "/solutions/edtech",
      color: "bg-rose-500",
    },
    {
      icon: PlusCircle,
      title: t('solutions.other'),
      desc: t('solutions.other.desc'),
      path: "/solutions/custom",
      color: "bg-slate-500",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl font-black mb-6 text-slate-900 dark:text-white leading-tight">
                {t('solutions.title')}
              </h2>
              <p className="text-slate-500 text-lg">
                {t('solutions.subtitle')}
              </p>
            </div>
            <Link to="/solutions" className="group text-primary font-bold flex items-center gap-2">
              {language === 'zh' ? '查看所有场景' : 'Explore All'}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-900 p-8 hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${item.color} opacity-[0.03] rounded-bl-[100px] transition-all group-hover:opacity-[0.08]`} />

              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white mb-8 shadow-lg shadow-current/20 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <item.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <span>{language === 'zh' ? '了解方案详情' : 'Solution Details'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Infrastructure Layer (Summary) */}
        <div className="mt-32 p-10 rounded-[40px] bg-slate-900 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <Cpu className="w-full h-full transform translate-x-1/4 translate-y-1/4" />
           </div>

           <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                 <h3 className="text-3xl font-bold mb-4">{language === 'zh' ? '全链路支付物联底座' : 'End-to-End Infrastructure'}</h3>
                 <p className="text-slate-400 leading-relaxed">
                   {language === 'zh'
                     ? '从终端硬件到云端平台，提供一站式支付与数据管理服务。'
                     : 'From terminal hardware to cloud platform, providing one-stop payment and data services.'}
                 </p>
              </div>

              <div className="lg:col-span-2 grid sm:grid-cols-3 gap-8">
                 <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                       <Smartphone className="w-5 h-5" />
                    </div>
                    <div className="font-bold">{language === 'zh' ? '多终端适配' : 'Multi-Terminal'}</div>
                    <div className="text-xs text-slate-500">POS, Kiosks, Mobile</div>
                 </div>
                 <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                       <Database className="w-5 h-5" />
                    </div>
                    <div className="font-bold">{language === 'zh' ? '分布式网关' : 'Distributed Gateway'}</div>
                    <div className="text-xs text-slate-500">High-concurrency Ready</div>
                 </div>
                 <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                       <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="font-bold">{language === 'zh' ? '金融级合规' : 'Financial Security'}</div>
                    <div className="text-xs text-slate-500">UnionPay & PCI DSS</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
