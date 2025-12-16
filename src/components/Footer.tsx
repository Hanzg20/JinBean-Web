import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="JinBeanPod" className="h-10 w-auto" />
              <span className="text-lg font-bold">
                {language === 'zh' ? '金豆荚' : 'JinBeanPod'}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.company')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{t('footer.email')}: contact@goldpod.ca</span>
              </li>
              <li>
                <span>{t('footer.wechat')}: GoldPodService</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 GoldSky Technologies. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
