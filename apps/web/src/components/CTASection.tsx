import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-gold p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              {t('cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-background hover:bg-background/90 text-foreground rounded-xl px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all group"
              >
                <Download className="mr-2 h-5 w-5" />
                {t('cta.download')}
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl px-8 py-6 text-base transition-all group"
              >
                <Link to="/apply">
                  {t('cta.provider')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
