import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <Logo size="md" />
              <span className="text-lg font-bold bg-gradient-to-r from-primary via-amber-500 to-emerald-600 bg-clip-text text-transparent">
                {language === 'zh' ? '金豆荚' : 'JinBeanPod'}
              </span>
            </Link>
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
                <span>{t('footer.email')}: contact@jinbeanpod.com</span>
              </li>
              <li>
                <span>{t('footer.wechat')}: JinBeanPodService</span>
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
