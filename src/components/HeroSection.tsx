import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star, MapPin } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold-50 via-background to-green-50 dark:from-gold-950/20 dark:via-background dark:to-green-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 dark:bg-gold-900/30 rounded-full text-gold-700 dark:text-gold-300 text-sm font-medium">
                <MapPin className="w-4 h-4" />
                {t('hero.badge')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-gold hover:opacity-90 text-primary-foreground shadow-gold rounded-full px-8 py-6 text-base font-semibold transition-all hover:scale-105"
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
                className="rounded-full px-8 py-6 text-base font-semibold border-2 hover:bg-accent"
              >
                <Link to="/providers">
                  {t('hero.cta.learn')}
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-gold-600 dark:text-gold-400">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl md:text-3xl font-bold">500+</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t('hero.stats.providers')}</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-green-600 dark:text-green-400">
                  <Star className="w-5 h-5" />
                  <span className="text-2xl md:text-3xl font-bold">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t('hero.stats.rating')}</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-gold-600 dark:text-gold-400">
                  <MapPin className="w-5 h-5" />
                  <span className="text-2xl md:text-3xl font-bold">3</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t('hero.stats.cities')}</p>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative animate-scale-in">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-200 to-green-200 dark:from-gold-800/30 dark:to-green-800/30 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-green-200 to-gold-200 dark:from-green-800/30 dark:to-gold-800/30 rounded-3xl transform -rotate-3"></div>
              
              {/* Main content card */}
              <div className="relative bg-card rounded-3xl shadow-elegant p-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold">
                    <span className="text-3xl font-bold text-primary-foreground">金</span>
                  </div>
                  <h3 className="text-xl font-semibold">{t('hero.card.title')}</h3>
                  <p className="text-muted-foreground text-sm">{t('hero.card.subtitle')}</p>
                </div>
                
                {/* Service icons grid */}
                <div className="grid grid-cols-3 gap-4">
                  {['🏠', '🧹', '🚚', '🔧', '🎨', '📚'].map((emoji, index) => (
                    <div 
                      key={index}
                      className="aspect-square bg-muted rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>

                {/* Trust badge */}
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 border-2 border-card"></div>
                    ))}
                  </div>
                  <span>{t('hero.card.trust')}</span>
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
