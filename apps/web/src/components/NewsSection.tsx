import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { newsData } from "@/lib/newsData";

const NewsSection = () => {
  const { language } = useLanguage();

  // Show only the 3 most recent items
  const featuredNews = newsData.slice(0, 3);

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
          {featuredNews.map((item) => (
            <Link key={item.id} to={`/news/${item.id}`} className="group cursor-pointer">
              <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-900 rounded-2xl mb-6 overflow-hidden border border-slate-100 dark:border-white/5">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-[10px] font-bold text-primary shadow-sm uppercase tracking-widest border border-slate-100 dark:border-white/5">
                  {item.category[language]}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {item.title[language]}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                  {item.desc[language]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
