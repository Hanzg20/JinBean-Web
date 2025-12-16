import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, MessageCircle, Calendar, Users, BarChart3, Headphones } from "lucide-react";

const ValuePropsSection = () => {
  const { t } = useLanguage();

  const userBenefits = [
    {
      icon: Shield,
      title: t('value.users.trust'),
      description: t('value.users.trust.desc'),
    },
    {
      icon: MessageCircle,
      title: t('value.users.chinese'),
      description: t('value.users.chinese.desc'),
    },
    {
      icon: Calendar,
      title: t('value.users.convenient'),
      description: t('value.users.convenient.desc'),
    },
  ];

  const providerBenefits = [
    {
      icon: Users,
      title: t('value.providers.customers'),
      description: t('value.providers.customers.desc'),
    },
    {
      icon: BarChart3,
      title: t('value.providers.schedule'),
      description: t('value.providers.schedule.desc'),
    },
    {
      icon: Headphones,
      title: t('value.providers.income'),
      description: t('value.providers.income.desc'),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* For Users */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('value.users.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {userBenefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className={`text-center p-6 animate-slide-up stagger-${index + 1}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-4 shadow-gold">
                  <benefit.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For Providers */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('value.providers.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {providerBenefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className={`text-center p-6 animate-slide-up stagger-${index + 1}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-green flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
