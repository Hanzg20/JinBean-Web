import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";
import { CheckCircle, Building2, User, Mail, Phone, Briefcase, MessageSquare } from "lucide-react";

const Apply = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      toast({
        title: language === 'zh' ? '请填写必填项' : 'Please fill required fields',
        description: language === 'zh' ? '姓名、公司和邮箱为必填' : 'Name, Company and Email are required',
        variant: 'destructive',
      });
      return;
    }

    console.log('B2B Inquiry submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>{t('form.success')} - {t('brand.name')}</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="py-20 sm:py-32">
            <div className="max-w-md mx-auto px-4 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4 animate-slide-up">{t('form.success')}</h1>
              <p className="text-slate-500 mb-8 animate-slide-up stagger-1">{t('form.success.desc')}</p>
              <Button 
                asChild
                className="bg-slate-900 text-white rounded-xl px-10 py-6 font-bold animate-slide-up stagger-2"
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
        <title>{t('form.title')} - {t('brand.name')}</title>
        <meta name="description" content={t('form.subtitle')} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 bg-white dark:bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 dark:border-white/5">

              {/* Left side - Context */}
              <div className="p-12 bg-slate-900 text-white flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-6">{t('form.title')}</h1>
                  <p className="text-slate-400 mb-10 leading-relaxed">
                    {t('form.subtitle')}
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">{language === 'zh' ? '热线' : 'Hotline'}</div>
                        <div className="font-bold">15663626777</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</div>
                        <div className="font-bold">support@jinhongtian.com</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/10 mt-10">
                   <div className="text-sm text-slate-500 italic">
                     {language === 'zh' ? '“我们深知您的业务需求，致力于提供最精准的物联集成方案。”' : '"We understand your business needs and are committed to providing precise IoT integration."'}
                   </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                      <User className="w-3 h-3" /> {t('form.name')} *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder={t('form.name.placeholder')}
                      className="rounded-xl border-slate-200"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                      <Building2 className="w-3 h-3" /> {t('form.company')} *
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      placeholder={t('form.company.placeholder')}
                      className="rounded-xl border-slate-200"
                      required
                    />
                  </div>

                  {/* Industry & Email */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <Briefcase className="w-3 h-3" /> {t('form.industry')}
                      </Label>
                      <Input
                        id="industry"
                        value={formData.industry}
                        onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                        className="rounded-xl border-slate-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <Mail className="w-3 h-3" /> {t('form.email')} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="rounded-xl border-slate-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Interest */}
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                      <Briefcase className="w-3 h-3" /> {t('form.interest')}
                    </Label>
                    <Input
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData(prev => ({ ...prev, interest: e.target.value }))}
                      className="rounded-xl border-slate-200"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                      <MessageSquare className="w-3 h-3" /> {language === 'zh' ? '详细需求描述' : 'Requirements'}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="rounded-xl min-h-[100px] border-slate-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-7 text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:translate-y-[-2px]"
                  >
                    {t('form.submit')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Apply;
