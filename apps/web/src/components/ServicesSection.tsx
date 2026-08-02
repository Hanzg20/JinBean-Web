import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { CreditCard, Cpu, MessageSquare, Landmark, Construction, School, Database, Smartphone, ShieldCheck, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const { language } = useLanguage();

  const techStack = [
    {
      icon: Database,
      title: language === 'zh' ? '5G 业务支撑底座' : '5G Business Engine',
      points: language === 'zh' ? ['高并发支付网关', '银联/银行直连标准', '金融级加密传输'] : ['High-concurrency gateway', 'Bank direct connection', 'Secure transmission'],
      desc: language === 'zh' ? '为公用事业提供稳如泰山的交易支撑。' : 'Solid transaction support for utilities.',
    },
    {
      icon: Smartphone,
      title: language === 'zh' ? 'POS/NFC 协议适配' : 'POS/NFC Protocols',
      points: language === 'zh' ? ['多品牌 POS SDK', 'NFC 写卡交互中间件', '嵌入式系统定制'] : ['Multi-brand POS SDK', 'NFC interaction', 'Embedded systems'],
      desc: language === 'zh' ? '打通软硬件连接的“最后一公里”。' : 'Bridge the gap between hardware & software.',
    },
    {
      icon: ShieldCheck,
      title: language === 'zh' ? '聚合支付集成' : 'Payment Integration',
      points: language === 'zh' ? ['微信/支付宝公用事业接口', '线下扫码与刷卡聚合', '自动对账与清算'] : ['WeChat/Alipay utility API', 'QR & Card aggregation', 'Auto-reconciliation'],
      desc: language === 'zh' ? '一站式解决所有收款与管账难题。' : 'One-stop solution for collection & accounting.',
    }
  ];

  const solutions = [
    {
      icon: CreditCard,
      title: language === 'zh' ? '水电气暖交费系统' : 'Utility Payment',
      desc: language === 'zh' ? '客户少跑腿，收钱更快。支持自助机、App、小程序全渠道交费。' : 'Less travel for customers, faster collection.',
      image: "bg-green-500/5",
    },
    {
      icon: Cpu,
      title: language === 'zh' ? '无人值守店系统' : 'AI Self-Service',
      desc: language === 'zh' ? '省去人工费，24小时卖货。智能识别商品，扫码/刷脸即走。' : 'Save labor, 24/7 sales. Smart recognition.',
      image: "bg-amber-500/5",
    },
    {
      icon: MessageSquare,
      title: language === 'zh' ? '24小时自动客服' : 'AI Support',
      desc: language === 'zh' ? '报修/催费电话一个不漏。AI 语音精准识别需求，自动派单。' : 'Never miss a report. AI voice recognition.',
      image: "bg-green-500/5",
    },
    {
      icon: Landmark,
      title: language === 'zh' ? '房产维修金管理' : 'Fund Management',
      desc: language === 'zh' ? '账目清清楚楚，合规好用。全流程监管资金流向，透明高效。' : 'Clear accounts, regulatory compliance.',
      image: "bg-amber-500/5",
    },
    {
      icon: Construction,
      title: language === 'zh' ? '工地实名制监控' : 'Site Monitoring',
      desc: language === 'zh' ? '刷脸进场，违规自动报警。利用 5G+AI 提升工地安全等级。' : 'Face-ID entry, auto-alerts for violations.',
      image: "bg-green-500/5",
    },
    {
      icon: School,
      title: language === 'zh' ? 'AI 助学机器人' : 'EdTech AI',
      desc: language === 'zh' ? '孩子身边的全天候辅导老师。基于大模型的个性化知识库管理。' : 'All-day tutor for students. personalized KB.',
      image: "bg-amber-500/5",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: Tech Foundation (Matrix A) */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-3">
                <div className="w-2 h-8 bg-primary rounded-full" />
                {language === 'zh' ? '核心支付与协议底座' : 'Core Payment Foundation'}
              </h2>
              <p className="text-slate-500 text-lg">
                {language === 'zh' ? '20年技术沉淀，构建稳健、安全、合规的软硬件交互基石。' : '20 years of tech expertise for secure hardware-software interaction.'}
              </p>
            </div>
            <Link to="/innovation" className="text-primary font-bold flex items-center gap-2 hover:underline">
              {language === 'zh' ? '查看技术文档' : 'View Docs'} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{item.desc}</p>
                <ul className="space-y-3">
                  {item.points.map(point => (
                    <li key={point} className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Industry Solutions (Matrix B) */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              {language === 'zh' ? '垂直行业场景解决方案' : 'Vertical Industry Solutions'}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-900 hover:border-primary/50 transition-all duration-300"
              >
                <div className={`h-40 ${item.image} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                  <item.icon className="w-16 h-16 text-slate-200 dark:text-slate-800" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <Link to={`/solutions/${index}`} className="text-xs font-bold text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {language === 'zh' ? '了解方案详情' : 'Learn More'} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
