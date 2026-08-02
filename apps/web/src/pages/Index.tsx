import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import CTASection from "@/components/CTASection";
import NewsSection from "@/components/NewsSection";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{language === 'zh' ? '哈尔滨金宏天科技 - AI自助支付与物联解决方案' : 'Jinhongtian Tech - AI Payment & IoT Solutions'}</title>
        <meta 
          name="description" 
          content={language === 'zh' 
            ? '专注于公用事业自助支付、POS/网关协议打通、AI 自助购物机系统及 5G+智慧工地解决方案。'
            : 'Focusing on public utility self-service payments, POS protocols, and AI retail systems.'
          } 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <ValuePropsSection />
          <NewsSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
