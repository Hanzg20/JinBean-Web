import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { newsData } from "@/lib/newsData";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

const News = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{language === 'zh' ? '新闻动态' : 'News & Insights'} - {t('brand.name')}</title>
      </Helmet>

      <div className="min-h-screen bg-background text-slate-900 dark:text-white">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-black mb-6 animate-slide-up">
                {language === 'zh' ? '新闻动态' : 'News & Insights'}
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
                {language === 'zh' ? '探索技术前沿，了解 JHT 在 AI 与支付领域的最新进展' : 'Exploring the frontier of technology and payment solutions.'}
              </p>
            </div>
          </section>

          {/* News List */}
          <section className="py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-16">
                {newsData.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="group block"
                  >
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                      <div className="md:w-1/3 aspect-[16/10] bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden relative border border-slate-100 dark:border-white/5">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-[10px] font-bold text-primary shadow-sm uppercase tracking-widest">
                          {item.category[language]}
                        </div>
                      </div>

                      <div className="md:w-2/3 space-y-4">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors leading-tight">
                          {item.title[language]}
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed line-clamp-3">
                          {item.desc[language]}
                        </p>
                        <div className="flex items-center gap-2 text-primary font-bold">
                          <span>{language === 'zh' ? '阅读全文' : 'Read Full Article'}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
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

export default News;
