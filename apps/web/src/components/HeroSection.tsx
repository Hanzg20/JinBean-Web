import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Activity, Smartphone, Monitor, LayoutDashboard, CreditCard } from "lucide-react";

const HeroSection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-slate-950 pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Abstract Tech Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-xs font-bold tracking-widest uppercase">
                  {t('hero.badge')}
                </span>
              </div>

              {/* Typography: Balanced size */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tighter text-white">
                <span className="block">{t('hero.title')}</span>
                <span className="text-gradient-gold italic">{t('hero.titleHighlight')}</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white shadow-xl rounded-md px-8 py-7 text-lg font-bold transition-all hover:translate-y-[-2px]"
              >
                <Link to="/apply">
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              {/* Button Color: Updated to Golden Yellow (bg-secondary) */}
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white rounded-md px-8 py-7 text-lg font-bold shadow-lg shadow-gold/20 transition-all hover:translate-y-[-2px]"
              >
                <Link to="/innovation">
                  {t('hero.cta.secondary')}
                </Link>
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-white mb-1">20+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{t('hero.stats.exp')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{t('hero.stats.clients')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">30+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{t('hero.stats.patents')}</div>
              </div>
            </div>
          </div>

          {/* Right side - Triple Device Synergy Visualization */}
          <div className="relative hidden lg:block perspective-1000 h-[600px]">

            {/* 1. Web Management Platform (Center Back) */}
            <div className="absolute top-10 left-10 w-[420px] bg-slate-900/90 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden transform rotate-Y-[-5deg] z-10 animate-float">
               <div className="bg-slate-800 px-3 py-2 flex items-center justify-between">
                 <div className="flex gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-red-500/50" />
                   <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                   <div className="w-2 h-2 rounded-full bg-green-500/50" />
                 </div>
                 <span className="text-[10px] text-white/30 font-mono tracking-tighter">Management Platform V2.0</span>
               </div>
               <div className="p-6 space-y-4">
                 <div className="flex items-center gap-3">
                   <LayoutDashboard className="h-5 w-5 text-primary" />
                   <div className="h-2 w-32 bg-white/10 rounded" />
                 </div>
                 <div className="grid grid-cols-3 gap-3">
                   <div className="h-16 bg-white/5 rounded-xl border border-white/5" />
                   <div className="h-16 bg-white/5 rounded-xl border border-white/5" />
                   <div className="h-16 bg-white/5 rounded-xl border border-white/5" />
                 </div>
                 <div className="h-20 bg-primary/5 rounded-xl border border-primary/20 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-primary/40" />
                 </div>
               </div>
            </div>

            {/* 2. Handheld POS Terminal (Right side - Redesigned & Smaller) */}
            <div className="absolute top-44 right-10 w-[180px] bg-slate-800 rounded-2xl border-4 border-slate-700 shadow-3xl transform rotate-Y-[15deg] z-20 animate-float-delayed">
               <div className="aspect-[2/3] p-4 flex flex-col items-center gap-4 bg-slate-900 rounded-xl m-0.5 overflow-hidden">
                  {/* Terminal Screen Area */}
                  <div className="w-full h-24 bg-slate-800 rounded-lg border border-white/5 p-3 flex flex-col justify-between">
                     <div className="h-1.5 w-1/2 bg-primary/30 rounded" />
                     <div className="flex justify-center">
                        <div className="text-[10px] font-black text-primary">￥ 1,280.00</div>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded" />
                  </div>

                  {/* Handheld Device Body (Slot Detail) */}
                  <div className="w-full flex-1 flex flex-col items-center justify-center gap-4 relative">
                     <div className="w-full h-1 bg-black/40 rounded-full" title="Swipe Slot" />
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <CreditCard className="h-6 w-6 text-primary" />
                     </div>
                     <div className="grid grid-cols-3 gap-1.5 w-full px-2">
                        {[...Array(9)].map((_, i) => (
                           <div key={i} className="h-1 bg-white/5 rounded" />
                        ))}
                     </div>
                  </div>

                  {/* Mini-label */}
                  <div className="w-full py-2 bg-primary rounded-lg flex items-center justify-center font-bold text-[8px] text-white uppercase tracking-tighter">
                    Secure Payment Terminal
                  </div>
               </div>
            </div>

            {/* 3. Operational Mobile App (Front Left) */}
            <div className="absolute -bottom-6 left-0 w-[150px] bg-black rounded-[2.5rem] border-[6px] border-slate-800 shadow-3xl z-30 transform translate-Z-20 animate-float">
               <div className="aspect-[9/19] p-5 flex flex-col gap-5 bg-slate-900 rounded-[2rem] m-0.5 overflow-hidden">
                  <div className="flex justify-between items-center">
                    <Smartphone className="h-4 w-4 text-secondary" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                  </div>
                  <div className="space-y-2">
                     <div className="h-2 w-full bg-white/10 rounded" />
                     <div className="h-2 w-3/4 bg-white/10 rounded" />
                  </div>
                  <div className="mt-auto h-24 bg-secondary/20 rounded-2xl border border-secondary/30 flex flex-col p-3 justify-between">
                     <div className="h-1.5 w-8 bg-secondary/50 rounded" />
                     <div className="text-[10px] font-black text-secondary">REAL-TIME DATA</div>
                  </div>
               </div>
            </div>

            {/* Connection Effects (Synergy Particles) */}
            <div className="absolute inset-0 pointer-events-none z-0">
               <svg className="w-full h-full opacity-20" viewBox="0 0 600 600">
                  <path
                    d="M100 500 Q 300 300 500 150"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-dash"
                  />
                  <path
                    d="M450 150 Q 550 300 500 450"
                    fill="none"
                    stroke="url(#grad2)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-dash-reverse"
                  />
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'hsl(var(--primary))'}} />
                      <stop offset="100%" style={{stopColor:'hsl(var(--secondary))'}} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'hsl(var(--secondary))'}} />
                      <stop offset="100%" style={{stopColor:'hsl(var(--primary))'}} />
                    </linearGradient>
                  </defs>
               </svg>
            </div>

            {/* Floating Security Badge */}
            <div className="absolute bottom-20 right-20 bg-white p-4 rounded-2xl shadow-3xl z-40 animate-bounce-slow">
               <div className="flex items-center gap-3">
                 <ShieldCheck className="h-6 w-6 text-green-500" />
                 <div className="text-slate-900">
                   <div className="text-[8px] font-bold uppercase text-slate-400">Security Verified</div>
                   <div className="text-xs font-black">End-to-End Encryption</div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Animation Styles for Synergy Lines */}
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
        @keyframes dash-reverse {
          to { stroke-dashoffset: 100; }
        }
        .animate-dash {
          animation: dash 10s linear infinite;
        }
        .animate-dash-reverse {
          animation: dash-reverse 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
