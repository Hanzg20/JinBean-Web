import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";
import { CheckCircle } from "lucide-react";

const Apply = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    wechat: '',
    email: '',
    city: '',
    services: [] as string[],
    availability: [] as string[],
    intro: '',
  });

  const serviceOptions = [
    { id: 'cleaning', label: t('form.services.cleaning') },
    { id: 'moving', label: t('form.services.moving') },
    { id: 'repair', label: t('form.services.repair') },
    { id: 'tutoring', label: t('form.services.tutoring') },
    { id: 'rental', label: t('form.services.rental') },
    { id: 'other', label: t('form.services.other') },
  ];

  const availabilityOptions = [
    { id: 'weekday', label: t('form.availability.weekday') },
    { id: 'weekend', label: t('form.availability.weekend') },
    { id: 'daytime', label: t('form.availability.daytime') },
    { id: 'evening', label: t('form.availability.evening') },
  ];

  const cityOptions = [
    { value: 'toronto', label: t('form.city.toronto') },
    { value: 'vancouver', label: t('form.city.vancouver') },
    { value: 'calgary', label: t('form.city.calgary') },
    { value: 'other', label: t('form.city.other') },
  ];

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleAvailabilityToggle = (availId: string) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(availId)
        ? prev.availability.filter(a => a !== availId)
        : [...prev.availability, availId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || formData.services.length === 0) {
      toast({
        title: language === 'zh' ? '请填写必填项' : 'Please fill required fields',
        description: language === 'zh' ? '姓名、邮箱和服务类型为必填' : 'Name, email and service types are required',
        variant: 'destructive',
      });
      return;
    }

    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>{language === 'zh' ? '申请已提交 - 金豆荚' : 'Application Submitted - GoldPod'}</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="py-20 sm:py-32">
            <div className="max-w-md mx-auto px-4 text-center">
              <div className="w-20 h-20 bg-gradient-green rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                <CheckCircle className="h-10 w-10 text-secondary-foreground" />
              </div>
              <h1 className="text-3xl font-bold mb-4 animate-slide-up">{t('form.success')}</h1>
              <p className="text-muted-foreground mb-8 animate-slide-up stagger-1">{t('form.success.desc')}</p>
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl animate-slide-up stagger-2"
              >
                <a href="/">{language === 'zh' ? '返回首页' : 'Back to Home'}</a>
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{language === 'zh' ? '服务者申请 - 金豆荚' : 'Provider Application - GoldPod'}</title>
        <meta 
          name="description" 
          content={language === 'zh' 
            ? '申请成为金豆荚服务者，填写您的信息，我们将尽快与您联系。' 
            : 'Apply to become a GoldPod service provider. Fill in your details and we will contact you soon.'
          } 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-12 sm:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('form.title')}</h1>
              <p className="text-muted-foreground">{t('form.subtitle')}</p>
              <p className="text-sm text-muted-foreground mt-2 italic">{t('form.note')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-card rounded-2xl p-6 sm:p-8 border border-border">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">{t('form.name')} *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder={t('form.name.placeholder')}
                  className="rounded-xl"
                  required
                />
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <Label>{t('form.contact')}</Label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm text-muted-foreground">{t('form.phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder={t('form.phone.placeholder')}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wechat" className="text-sm text-muted-foreground">{t('form.wechat')}</Label>
                    <Input
                      id="wechat"
                      value={formData.wechat}
                      onChange={(e) => setFormData(prev => ({ ...prev, wechat: e.target.value }))}
                      placeholder={t('form.wechat.placeholder')}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-muted-foreground">{t('form.email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder={t('form.email.placeholder')}
                    className="rounded-xl"
                    required
                  />
                </div>
              </div>

              {/* City */}
              <div className="space-y-2">
                <Label>{t('form.city')}</Label>
                <div className="flex flex-wrap gap-2">
                  {cityOptions.map((city) => (
                    <button
                      key={city.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, city: city.value }))}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        formData.city === city.value
                          ? 'bg-primary text-primary-foreground shadow-gold'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      {city.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="space-y-3">
                <Label>{t('form.services')} *</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceOptions.map((service) => (
                    <div 
                      key={service.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        formData.services.includes(service.id)
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <Checkbox 
                        id={service.id}
                        checked={formData.services.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <Label htmlFor={service.id} className="cursor-pointer text-sm">
                        {service.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-3">
                <Label>{t('form.availability')}</Label>
                <div className="flex flex-wrap gap-3">
                  {availabilityOptions.map((avail) => (
                    <div 
                      key={avail.id}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                        formData.availability.includes(avail.id)
                          ? 'border-secondary bg-secondary/10'
                          : 'border-border hover:border-secondary/50'
                      }`}
                      onClick={() => handleAvailabilityToggle(avail.id)}
                    >
                      <Checkbox 
                        id={avail.id}
                        checked={formData.availability.includes(avail.id)}
                        onCheckedChange={() => handleAvailabilityToggle(avail.id)}
                      />
                      <Label htmlFor={avail.id} className="cursor-pointer text-sm">
                        {avail.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Introduction */}
              <div className="space-y-2">
                <Label htmlFor="intro">{t('form.intro')}</Label>
                <Textarea
                  id="intro"
                  value={formData.intro}
                  onChange={(e) => setFormData(prev => ({ ...prev, intro: e.target.value }))}
                  placeholder={t('form.intro.placeholder')}
                  className="rounded-xl min-h-[120px]"
                />
              </div>

              {/* Submit */}
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-base shadow-gold hover:shadow-lg transition-all"
              >
                {t('form.submit')}
              </Button>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Apply;
