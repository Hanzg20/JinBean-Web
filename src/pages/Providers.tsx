import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  Users, 
  BarChart3, 
  DollarSign, 
  Headphones,
  ClipboardList,
  CheckCircle,
  Rocket,
  ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Providers = () => {
  const { language, t } = useLanguage();

  const providerTypes = [
    t('provider.who.cleaning'),
    t('provider.who.mover'),
    t('provider.who.repair'),
    t('provider.who.tutor'),
    t('provider.who.other'),
  ];

  const benefits = [
    {
      icon: Users,
      title: t('provider.benefits.customers'),
      description: t('provider.benefits.customers.desc'),
    },
    {
      icon: BarChart3,
      title: t('provider.benefits.tools'),
      description: t('provider.benefits.tools.desc'),
    },
    {
      icon: DollarSign,
      title: t('provider.benefits.payment'),
      description: t('provider.benefits.payment.desc'),
    },
    {
      icon: Headphones,
      title: t('provider.benefits.support'),
      description: t('provider.benefits.support.desc'),
    },
  ];

  const steps = [
    {
      icon: ClipboardList,
      title: t('provider.steps.1'),
      description: t('provider.steps.1.desc'),
    },
    {
      icon: CheckCircle,
      title: t('provider.steps.2'),
      description: t('provider.steps.2.desc'),
    },
    {
      icon: Rocket,
      title: t('provider.steps.3'),
      description: t('provider.steps.3.desc'),
    },
  ];

  const faqs = [
    { q: t('provider.faq.1.q'), a: t('provider.faq.1.a') },
    { q: t('provider.faq.2.q'), a: t('provider.faq.2.a') },
    { q: t('provider.faq.3.q'), a: t('provider.faq.3.a') },
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'zh' ? '成为服务者 - 金豆荚' : 'Become a Provider - GoldPod'}</title>
        <meta 
          name="description" 
          content={language === 'zh' 
            ? '加入金豆荚服务者团队，获得稳定客源、便捷管理工具和透明收入结算。' 
            : 'Join GoldPod as a service provider. Get steady customers, management tools, and transparent payments.'
          } 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero */}
          <section className="py-16 sm:py-24 bg-gradient-hero relative overflow-hidden">
            <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
                {t('provider.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up stagger-1">
                {t('provider.hero.subtitle')}
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl px-10 py-6 text-base shadow-lg animate-slide-up stagger-2"
              >
                <Link to="/apply">{t('provider.cta')}</Link>
              </Button>
            </div>
          </section>

          {/* Who we're looking for */}
          <section className="py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-10">{t('provider.who.title')}</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {providerTypes.map((type, index) => (
                  <span 
                    key={type}
                    className={`px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium animate-scale-in stagger-${Math.min(index + 1, 5)}`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 sm:py-20 bg-card/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">{t('provider.benefits.title')}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className={`flex gap-4 p-6 rounded-2xl bg-background border border-border card-hover animate-slide-up stagger-${Math.min(index + 1, 4)}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-green flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Steps */}
          <section className="py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">{t('provider.steps.title')}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div 
                    key={step.title}
                    className={`text-center animate-slide-up stagger-${index + 1}`}
                  >
                    <div className="relative inline-block mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold">
                        <step.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-10 py-6 text-base shadow-gold"
                >
                  <Link to="/apply">{t('provider.cta')}</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 sm:py-20 bg-card/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-10">{t('provider.faq.title')}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-background border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Providers;
