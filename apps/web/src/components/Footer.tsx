import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <Logo size="md" />
              <span className="text-2xl font-black tracking-tighter">{t('brand.name')}</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Products & Solutions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">
              {language === 'zh' ? '产品与解决方案' : 'Solutions'}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/solutions/utility" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t('solutions.utility')}
                </Link>
              </li>
              <li>
                <Link to="/solutions/retail" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t('solutions.retail')}
                </Link>
              </li>
              <li>
                <Link to="/solutions/construction" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t('solutions.construction')}
                </Link>
              </li>
              <li>
                <Link to="/solutions/fund" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t('solutions.fund')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Developers */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">
              {language === 'zh' ? '开发者与资源' : 'Resources'}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/docs" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  {t('platform.docs')}
                </Link>
              </li>
              <li>
                <Link to="/innovation" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  {t('nav.innovation')}
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  {t('nav.partners')}
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  {language === 'zh' ? '商务洽谈' : 'Business Inquiry'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Contact */}
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
                {language === 'zh' ? '公司信息' : 'Company'}
              </h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">{t('nav.about')}</Link></li>
                <li><Link to="/cases" className="text-slate-400 hover:text-white transition-colors">{t('nav.cases')}</Link></li>
                <li><Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">{language === 'zh' ? '隐私政策' : 'Privacy Policy'}</Link></li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm font-bold">15663626777</div>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm text-slate-400">support@goldsky.ca</div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-500 leading-tight">
                  {t('footer.address')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & ICP */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
            {t('footer.rights')}
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] text-slate-600">
             <span className="hover:text-slate-400 transition-colors cursor-default">ICP备案号：黑ICP备2025010668号-1</span>
             <span className="hover:text-slate-400 transition-colors cursor-default">黑公网安备 23010002000668号</span>
             <Link to="/terms" className="hover:text-white transition-colors">{language === 'zh' ? '服务条款' : 'Terms'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
