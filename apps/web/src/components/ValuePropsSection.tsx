import { useLanguage } from "@/contexts/LanguageContext";
import { ShieldCheck, Cpu, Globe, CreditCard, Box, Zap, Award, Users2, Clock } from "lucide-react";

const ValuePropsSection = () => {
  const { language } = useLanguage();

  const stats = [
    { label: language === 'zh' ? '行业经验' : 'Years Exp.', value: '20+' },
    { label: language === 'zh' ? '服务企业' : 'Clients', value: '500+' },
    { label: language === 'zh' ? '知识产权' : 'Patents', value: '30+' },
    { label: language === 'zh' ? '响应速度' : 'Response', value: '15min' },
  ];

  const advantages = [
    {
      icon: Award,
      title: language === 'zh' ? '20年深厚积淀' : '20 Years Accumulation',
      description: language === 'zh' ? '自2011年成立以来，深耕公用事业软件开发，拥有数十项自主知识产权与核心发明专利。' : 'Specialized in utility software since 2011 with numerous patents.',
    },
    {
      icon: ShieldCheck,
      title: language === 'zh' ? '银行直连合规标准' : 'Bank-Direct Compliance',
      description: language === 'zh' ? '精通银联及各大主流银行支付接口协议，符合国家最高等级网安备案要求，资金安全有保障。' : 'Mastering payment protocols with top-tier security compliance.',
    },
    {
      icon: Clock,
      title: language === 'zh' ? '本地化快速响应' : 'Local Fast Response',
      description: language === 'zh' ? '哈尔滨本土技术团队，提供 7x24 小时远程及 4 小时内上门服务，解决您的后顾之忧。' : 'Harbin-based team providing 24/7 remote and 4h on-site support.',
    },
    {
      icon: Globe,
      title: language === 'zh' ? '中加技术协同' : 'China-Canada Synergy',
      description: language === 'zh' ? '联合加拿大 GoldSky 实验室，引入北美领先的 AI 算法模型，并结合国内复杂场景深度优化。' : 'Partnered with GoldSky Canada for advanced AI algorithm integration.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
              {language === 'zh' ? '为什么选择金宏天科技？' : 'Why Choose Jinhongtian?'}
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
              {language === 'zh'
                ? '我们不仅提供软件，更提供深度理解业务的行业解决方案。以支付为基石，以 AI 为驱动，助力企业数字化转型。'
                : 'We provide more than software; we provide business-centric industry solutions driven by payments and AI.'}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
                  <div className="text-3xl font-extrabold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {advantages.map((item) => (
              <div key={item.title} className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 hover:border-primary/30 transition-colors group">
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
