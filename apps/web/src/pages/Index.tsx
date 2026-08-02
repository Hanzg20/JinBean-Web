import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import PlatformSection from "@/components/PlatformSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import CTASection from "@/components/CTASection";
import NewsSection from "@/components/NewsSection";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('brand.name')} - {t('brand.tagline')}</title>
        <meta 
          name="description" 
          content={language === 'zh' 
            ? '专注于公用事业自助支付、智能 POS、AI 无人零售系统及 5G 智慧物联解决方案。'
            : 'Focusing on utility self-service payments, smart POS, AI retail systems, and 5G IoT solutions.'
          } 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Main Hero & Introduction */}
          <HeroSection />

          {/* Core Value Pillars */}
          <ValuePropsSection />

          {/* Industry Solutions (The "Software" Logic) */}
          <ServicesSection />

          {/* Professional Platform Capabilities */}
          <PlatformSection />

          {/* Smart Hardware Terminals */}
          <ProductsSection />

          {/* Latest Insights & Updates */}
          <NewsSection />

          {/* Action Call */}
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
