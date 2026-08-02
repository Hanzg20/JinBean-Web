import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Zap, Activity, Cpu, Laptop, Smartphone, CreditCard } from "lucide-react";

const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-tech-blue">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold tracking-widest uppercase">
                JINHONGTIAN × GOLDSKY TECHNOLOGY
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
                {language === 'zh' ? (
                  <>
                    <span className="block mb-2">收钱稳、管账准</span>
                    <span className="text-gradient-gold">活儿省心</span>
                  </>
                ) : (
                  <>
                    <span className="block mb-2">Reliable Payments</span>
                    <span className="text-gradient-gold">Effortless Ops</span>
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-xl">
                {language === 'zh'
                  ? '懂业务的智慧支付与物联专家，帮您省下人工，守好账目。'
                  : 'Expert smart payment & IoT solutions. Save labor, secure accounts.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                asChild
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl rounded-md px-10 py-8 text-xl font-bold transition-all hover:scale-105"
              >
                <Link to="/apply">
                  {language === 'zh' ? '获取解决方案' : 'Get Solutions'}
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="rounded-md px-10 py-8 text-xl font-bold border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link to="/demo">
                  {language === 'zh' ? '预约演示' : 'Watch Demo'}
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-4 grayscale opacity-50 contrast-125">
              <div className="text-white font-mono text-sm tracking-tighter border border-white/20 px-2 py-1">银联标准集成</div>
              <div className="text-white font-mono text-sm tracking-tighter border border-white/20 px-2 py-1">20年行业经验</div>
              <div className="text-white font-mono text-sm tracking-tighter border border-white/20 px-2 py-1">金融级安全</div>
            </div>
          </div>

          {/* Right side - Multi-device Synergy Visualization */}
          <div className="relative hidden lg:block h-[500px]">
            {/* Desktop Shadow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />

            {/* Desktop Mockup */}
            <div className="absolute top-10 left-0 w-[420px] bg-slate-800 rounded-xl border-4 border-slate-700 shadow-2xl overflow-hidden animate-slide-up stagger-1">
              <div className="bg-slate-700 px-3 py-1 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
              <div className="p-4 bg-slate-900 h-60 flex flex-col gap-4">
                <div className="h-4 w-1/3 bg-slate-800 rounded" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-slate-800 rounded border border-white/5 p-3 flex flex-col justify-between">
                    <Activity className="h-4 w-4 text-green-400" />
                    <div className="h-2 w-full bg-slate-700 rounded" />
                  </div>
                  <div className="h-20 bg-slate-800 rounded border border-white/5 p-3 flex flex-col justify-between">
                    <Zap className="h-4 w-4 text-secondary" />
                    <div className="h-2 w-full bg-slate-700 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Smartphone Mockup */}
            <div className="absolute bottom-10 right-20 w-[180px] h-[360px] bg-black rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden z-20 animate-slide-up stagger-2">
              <div className="h-full bg-slate-900 p-6 flex flex-col gap-6">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-secondary" />
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-slate-800 rounded" />
                  <div className="h-2 w-3/4 bg-slate-800 rounded" />
                </div>
                <div className="mt-auto h-12 w-full bg-secondary rounded-xl" />
              </div>
            </div>

            {/* Floating POS/Card Icon */}
            <div className="absolute top-1/4 right-0 bg-white p-4 rounded-2xl shadow-2xl z-30 animate-float">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                   <ShieldCheck className="h-6 w-6" />
                 </div>
                 <div className="text-slate-900">
                   <div className="text-[10px] font-bold uppercase text-slate-400">Payment Success</div>
                   <div className="text-sm font-extrabold">￥1,280.00</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
