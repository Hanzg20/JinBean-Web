import { useState, useEffect } from "react";
import { Menu, X, PhoneCall, Search, ChevronDown, Globe, Cpu, CreditCard, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegamenu, setActiveMegamenu] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageToggle = () => {
    if (language === 'zh') {
      window.location.href = "https://www.goldsky.ca";
    } else {
      setLanguage('zh');
    }
  };

  const solutions = [
    { icon: Globe, title: t('solutions.utility'), desc: t('solutions.utility.desc'), path: "/solutions/utility" },
    { icon: CreditCard, title: t('solutions.retail'), desc: t('solutions.retail.desc'), path: "/solutions/retail" },
    { icon: Cpu, title: t('solutions.construction'), desc: t('solutions.construction.desc'), path: "/solutions/construction" },
    { icon: ShieldCheck, title: t('solutions.fund'), desc: t('solutions.fund.desc'), path: "/solutions/fund" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-sm border-b' : 'bg-transparent'
      }`}
      onMouseLeave={() => setActiveMegamenu(null)}
    >
      {/* Top Bar */}
      <div className={`hidden lg:block py-1.5 text-xs border-b border-white/10 transition-colors ${
        isScrolled ? 'bg-slate-50 text-slate-500' : 'bg-black/20 text-white/70'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6">
          <div className="flex items-center gap-2">
            <PhoneCall className="h-3 w-3" />
            <span>{language === 'zh' ? '服务热线：15663626777' : 'Hotline: +86 15663626777'}</span>
          </div>
          <div className="h-3 w-[1px] bg-current opacity-20" />
          <button onClick={handleLanguageToggle} className="flex items-center gap-1 hover:text-primary transition-colors">
            <Globe className="h-3 w-3" />
            {language === 'zh' ? 'English' : '中文'}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <Logo size="md" className="transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className={`text-lg lg:text-xl font-bold leading-tight tracking-tight transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                {t('brand.name')}
              </span>
              <span className={`text-[9px] tracking-widest uppercase font-semibold transition-colors ${
                isScrolled ? 'text-muted-foreground' : 'text-white/60'
              }`}>
                AI Payment & IoT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Restored to Si-Tech structure) */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link 
              to="/" 
              className={`text-[15px] font-semibold transition-colors px-4 py-2 hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.home')}
            </Link>

            <div
              className="relative py-2"
              onMouseEnter={() => setActiveMegamenu('solutions')}
            >
              <button className={`flex items-center gap-1 text-[15px] font-semibold transition-colors px-4 py-2 hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                {t('nav.solutions')}
                <ChevronDown className={`h-4 w-4 transition-transform ${activeMegamenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link
              to="/innovation"
              className={`text-[15px] font-semibold transition-colors px-4 py-2 hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.innovation')}
            </Link>

            <Link
              to="/cases"
              className={`text-[15px] font-semibold transition-colors px-4 py-2 hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.cases')}
            </Link>

            <Link
              to="/partners"
              className={`text-[15px] font-semibold transition-colors px-4 py-2 hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.partners')}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className={`hidden sm:flex p-2 rounded-full hover:bg-muted transition-colors ${
              isScrolled ? 'text-muted-foreground' : 'text-white/80 hover:bg-white/10'
            }`}>
              <Search className="h-5 w-5" />
            </button>
            
            <Button
              asChild
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-white rounded-md px-6 font-semibold"
            >
              <Link to="/apply">{t('nav.demo')}</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Megamenu Overlay */}
      {activeMegamenu === 'solutions' && (
        <div
          className="absolute top-full left-0 right-0 bg-white border-b shadow-xl animate-fade-in"
          onMouseEnter={() => setActiveMegamenu('solutions')}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-4 gap-8">
              {solutions.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="flex flex-col gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 py-6 border-t animate-fade-in bg-background">
          <nav className="flex flex-col gap-1 px-4">
            <Link to="/" className="text-base font-semibold py-3 border-b">{t('nav.home')}</Link>
            <Link to="/solutions" className="text-base font-semibold py-3 border-b">{t('nav.solutions')}</Link>
            <Link to="/innovation" className="text-base font-semibold py-3 border-b">{t('nav.innovation')}</Link>
            <Link to="/cases" className="text-base font-semibold py-3 border-b">{t('nav.cases')}</Link>
            <Link to="/partners" className="text-base font-semibold py-3 border-b">{t('nav.partners')}</Link>
            <Button asChild className="mt-6 w-full py-6">
              <Link to="/apply">{t('nav.demo')}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
