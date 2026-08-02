import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] bg-tech-blue p-8 sm:p-12 lg:p-20 overflow-hidden border border-white/10 shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[80px] -ml-40 -mb-40" />
          
          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/50 mb-6 uppercase tracking-widest">
              Partnership Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {language === 'zh' ? 'B端生态合作，共赢 AI 未来' : 'Join Our B2B Ecosystem'}
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              {language === 'zh'
                ? '面向硬件厂商与支付机构，提供从 POS 协议适配到 AI 场景重构的软硬一体化赋能方案。'
                : 'Providing integrated solutions for hardware vendors and payment institutions.'}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button 
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-10 py-7 text-lg font-bold shadow-xl transition-all hover:scale-105 group"
              >
                <Link to="/apply">
                  {language === 'zh' ? '申请成为合作伙伴' : 'Apply for Partnership'}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-semibold transition-all"
              >
                <Link to="/demo">
                  <Send className="mr-2 h-5 w-5 opacity-50" />
                  {language === 'zh' ? '预约演示' : 'Request Demo'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
