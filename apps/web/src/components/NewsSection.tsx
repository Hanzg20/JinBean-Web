import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Bookmark } from "lucide-react";

const NewsSection = () => {
  const { language } = useLanguage();

  const news = [
    {
      date: '2026-07-28',
      category: language === 'zh' ? '企业荣誉' : 'Awards',
      title: language === 'zh' ? '金宏天科技入选“十四五”数字化转型示范案例' : 'Selected as 14th Five-Year Digital Transformation Case',
      desc: language === 'zh' ? '凭借在公用事业交费领域的突出贡献，我司方案被正式纳入国家级数字化转型库。' : 'Recognized for contributions in the utility payment sector.',
    },
    {
      date: '2026-07-15',
      category: language === 'zh' ? '技术动态' : 'Tech',
      title: language === 'zh' ? '联合加拿大 GoldSky 发布 AI 智能语音交互支付 SDK V2.0' : 'Joint Release of AI Voice Payment SDK V2.0',
      desc: language === 'zh' ? '新版本显著提升了在嘈杂环境下的语音识别率，支持多方言交互。' : 'Significantly improved recognition in noisy environments.',
    },
    {
      date: '2026-06-30',
      category: language === 'zh' ? '行业资讯' : 'Industry',
      title: language === 'zh' ? '助力黑龙江省某市实现全城供暖自助交费全覆盖' : 'Enabled City-wide Heating Self-service Coverage',
      desc: language === 'zh' ? '项目上线后，市民缴费排队时间缩短了 85%，大大提升了民生服务效率。' : 'Queue time reduced by 85%, improving service efficiency.',
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {language === 'zh' ? '新闻动态' : 'News & Insights'}
            </h2>
            <p className="text-slate-500">{language === 'zh' ? '了解金宏天科技的最新成果与行业洞察' : 'Latest updates and industry insights.'}</p>
          </div>
          <Link to="/news" className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
            {language === 'zh' ? '更多新闻' : 'More News'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-900 rounded-2xl mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-[10px] font-bold text-primary shadow-sm uppercase tracking-widest border border-slate-100 dark:border-white/5">
                  {item.category}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
