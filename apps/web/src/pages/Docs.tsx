import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";
import { Book, Code, Terminal, Cpu } from "lucide-react";

const Docs = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{language === 'zh' ? '技术文档' : 'Documentation'} - JHT</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-black mb-4">{language === 'zh' ? '开发者文档中心' : 'Developer Documentation'}</h1>
              <p className="text-slate-500 text-lg">{language === 'zh' ? '获取最新的 API 参考与硬件适配指南' : 'Access latest API references and hardware integration guides'}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                <Terminal className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Adaptation SDK</h3>
                <p className="text-sm text-slate-500 mb-6">Learn how to use our bridge to connect with 3rd-party terminals.</p>
                <div className="text-primary font-bold text-sm cursor-pointer">Coming Soon →</div>
              </div>
              <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                <Code className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Payment API</h3>
                <h4 className="text-sm text-slate-500 mb-6">Standardized interfaces for cross-platform payment processing.</h4>
                <div className="text-primary font-bold text-sm cursor-pointer">Coming Soon →</div>
              </div>
              <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                <Cpu className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Hardware Specs</h3>
                <p className="text-sm text-slate-500 mb-6">Detailed specifications for supported kiosks and POS devices.</p>
                <div className="text-primary font-bold text-sm cursor-pointer">Coming Soon →</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Docs;
