import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { newsData } from "@/lib/newsData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";

const NewsDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const article = newsData.find(item => item.id === id);

  if (!article) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{article.title[language]} - {t('brand.name')}</title>
        <meta name="description" content={article.desc[language]} />
      </Helmet>

      <div className="min-h-screen bg-background text-slate-900 dark:text-white">
        <Header />

        <main className="pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navigation & Action */}
            <div className="flex justify-between items-center mb-12">
              <Link to="/news" className="flex items-center gap-2 text-slate-500 hover:text-primary font-bold transition-colors">
                <ArrowLeft className="w-4 h-4" />
                {language === 'zh' ? '返回列表' : 'Back to News'}
              </Link>
              <button className="p-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:bg-slate-100 transition-colors">
                <Share2 className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Article Header */}
            <div className="space-y-6 mb-12 border-b border-slate-100 dark:border-white/5 pb-12">
              <div className="inline-flex px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest">
                {article.category[language]}
              </div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight">
                {article.title[language]}
              </h1>
              <div className="flex items-center gap-2 text-slate-400 font-medium">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
            </div>

            {/* Article Content */}
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-h3:text-2xl prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content[language] }}
            />

            {/* Article Footer */}
            <div className="mt-20 p-10 bg-slate-50 dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-white/5 text-center">
               <h4 className="text-xl font-bold mb-4">{language === 'zh' ? '对我们的技术感兴趣？' : 'Interested in our technology?'}</h4>
               <p className="text-slate-500 mb-8">{language === 'zh' ? '联系我们的专家，获取为您定制的智慧物联方案。' : 'Contact our experts for a customized smart IoT solution.'}</p>
               <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all"
               >
                 {language === 'zh' ? '预约咨询' : 'Book a Consultation'}
               </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NewsDetail;
