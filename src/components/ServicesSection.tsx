import { useLanguage } from "@/contexts/LanguageContext";
import { Home, Truck, Wrench, GraduationCap, Package, MoreHorizontal } from "lucide-react";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('services.cleaning'),
      description: t('services.cleaning.desc'),
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Truck,
      title: t('services.moving'),
      description: t('services.moving.desc'),
      color: 'bg-secondary/10 text-secondary',
    },
    {
      icon: Wrench,
      title: t('services.repair'),
      description: t('services.repair.desc'),
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: GraduationCap,
      title: t('services.tutoring'),
      description: t('services.tutoring.desc'),
      color: 'bg-secondary/10 text-secondary',
    },
    {
      icon: Package,
      title: t('services.rental'),
      description: t('services.rental.desc'),
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: MoreHorizontal,
      title: t('services.other'),
      description: t('services.other.desc'),
      color: 'bg-muted text-muted-foreground',
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`p-6 sm:p-8 rounded-2xl bg-card border border-border card-hover animate-slide-up stagger-${Math.min(index + 1, 6)}`}
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
