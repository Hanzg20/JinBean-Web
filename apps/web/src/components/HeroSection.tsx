import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star, MapPin, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import decorativeBg from "@/assets/decorative-bg.jpg";
import Logo from "@/components/Logo";

const HeroSection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 dark:from-background/98 dark:via-background/90 dark:to-background/60" />
      </div>

      {/* Floating particles - using design tokens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500/20 dark:bg-gold-500/30 backdrop-blur-sm border border-gold-400/30 rounded-full text-gold-600 dark:text-gold-300 text-sm font-medium shadow-lg">
                <Sparkles className="w-4 h-4" />
                {t('hero.badge')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                {language === 'zh' ? (
                  <>
                    <span className="text-foreground">北美华人家庭的</span>
                    <span className="text-gradient-gold">一站式</span>
                    <span className="text-gradient-green">生活服务</span>
                    <span className="text-foreground">平台</span>
                  </>
                ) : (
                  <>
                    <span className="text-foreground">Life Services </span>
                    <span className="text-gradient-green">for Chinese Families </span>
                    <span className="text-foreground">in </span>
                    <span className="text-gradient-gold">North America</span>
                  </>
                )}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-gold hover:opacity-90 text-primary-foreground shadow-gold rounded-full px-8 py-7 text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
              >
                <Link to="/apply">
                  {t('hero.cta.provider')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="rounded-full px-8 py-7 text-lg font-semibold border-2 border-gold-300/50 hover:bg-gold-50 dark:hover:bg-gold-950/30 backdrop-blur-sm"
              >
                <Link to="/providers">
                  {t('hero.cta.learn')}
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="glass-card p-4 rounded-2xl text-center">
                <div className="flex items-center justify-center gap-1 text-gold-600 dark:text-gold-400">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl md:text-3xl font-bold">500+</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t('hero.stats.providers')}</p>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <div className="flex items-center justify-center gap-1 text-green-600 dark:text-green-400">
                  <Star className="w-5 h-5" />
                  <span className="text-2xl md:text-3xl font-bold">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t('hero.stats.rating')}</p>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <div className="flex items-center justify-center gap-1 text-gold-600 dark:text-gold-400">
                  <MapPin className="w-5 h-5" />
                  <span className="text-2xl md:text-3xl font-bold">3</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t('hero.stats.cities')}</p>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative animate-scale-in hidden lg:block">
            <div className="relative">
              {/* Decorative background image */}
              <div className="absolute -inset-8 opacity-60 blur-sm">
                <img 
                  src={decorativeBg} 
                  alt="" 
                  className="w-full h-full object-cover rounded-[3rem] transform rotate-6"
                />
              </div>
              
              {/* Main content card */}
              <div className="relative glass-card rounded-3xl p-8 space-y-6 shadow-elegant">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto flex items-center justify-center transform hover:scale-110 transition-transform">
                    <Logo size="lg" className="w-20 h-20" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{t('hero.card.title')}</h3>
                  <p className="text-muted-foreground">{t('hero.card.subtitle')}</p>
                </div>
                
                {/* Service icons grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { emoji: '🏠', label: 'Home' },
                    { emoji: '🧹', label: 'Clean' },
                    { emoji: '🚚', label: 'Move' },
                    { emoji: '🔧', label: 'Repair' },
                    { emoji: '🎨', label: 'Art' },
                    { emoji: '📚', label: 'Tutor' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="aspect-square bg-gradient-to-br from-muted to-muted/50 dark:from-muted/50 dark:to-muted/30 rounded-2xl flex items-center justify-center text-3xl hover:scale-110 transition-all cursor-pointer shadow-sm hover:shadow-md border border-border/50"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.emoji}
                    </div>
                  ))}
                </div>

                {/* Trust badge */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <div className="flex -space-x-3">
                    {['李', '王', '张', '刘', '陈'].map((initial, i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 border-2 border-card shadow-md flex items-center justify-center text-xs font-semibold text-primary-foreground"
                      >
                        {initial}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{t('hero.card.trust')}</span>
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
