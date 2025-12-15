import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{language === 'zh' ? '金豆荚 - 北美华人生活服务平台' : 'GoldPod - Life Services for Chinese Families'}</title>
        <meta 
          name="description" 
          content={language === 'zh' 
            ? '金豆荚连接优质服务者与北美华人家庭，提供家政清洁、搬家、维修、兴趣班等一站式生活服务。' 
            : 'GoldPod connects quality service providers with Chinese families in North America. Cleaning, moving, repair, tutoring and more.'
          } 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <ValuePropsSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
