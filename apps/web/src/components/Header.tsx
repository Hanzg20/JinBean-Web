import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, PhoneCall, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-md' : 'bg-background/80 backdrop-blur-sm'}`}>
      {/* Top Hotline Bar (Optional but common in CN B2B) */}
      <div className="hidden lg:block bg-tech-blue py-1.5 text-white/70 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6">
          <div className="flex items-center gap-2">
            <PhoneCall className="h-3 w-3 text-secondary" />
            <span>服务热线：15663626777</span>
          </div>
          <div className="h-3 w-[1px] bg-white/20" />
          <Link to="/about" className="hover:text-secondary transition-colors">关于金宏天</Link>
          <div className="h-3 w-[1px] bg-white/20" />
          <button onClick={toggleLanguage} className="hover:text-secondary transition-colors">
            {language === 'zh' ? 'English' : '中文'}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="flex items-center gap-2">
              <Logo size="md" className="transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-bold text-foreground leading-tight tracking-tight">
                  {language === 'zh' ? '金宏天科技' : 'Jinhongtian Tech'}
                </span>
                <span className="text-[9px] text-muted-foreground tracking-widest uppercase font-semibold">
                  Payment & IoT Solutions
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link 
              to="/" 
              className="text-[15px] font-semibold hover:text-primary transition-colors px-4 py-2"
            >
              {language === 'zh' ? '首页' : 'Home'}
            </Link>
            <Link 
              to="/solutions"
              className="text-[15px] font-semibold hover:text-primary transition-colors px-4 py-2"
            >
              {language === 'zh' ? '产品与解决方案' : 'Solutions'}
            </Link>
            <Link 
              to="/innovation"
              className="text-[15px] font-semibold hover:text-primary transition-colors px-4 py-2"
            >
              {language === 'zh' ? '创新中心' : 'Innovation'}
            </Link>
            <Link
              to="/cases"
              className="text-[15px] font-semibold hover:text-primary transition-colors px-4 py-2"
            >
              {language === 'zh' ? '案例展示' : 'Cases'}
            </Link>
            <Link
              to="/partners"
              className="text-[15px] font-semibold hover:text-primary transition-colors px-4 py-2"
            >
              {language === 'zh' ? '生态合作' : 'Partners'}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex p-2 rounded-full hover:bg-muted transition-colors">
              <Search className="h-5 w-5 text-muted-foreground" />
            </button>
            
            <div className="h-6 w-[1px] bg-border mx-2 hidden sm:block" />

            <Button
              asChild
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-white rounded-md px-6 font-bold tracking-wide"
            >
              <Link to="/apply">{language === 'zh' ? '预约演示' : 'Request Demo'}</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fade-in bg-background">
            <nav className="flex flex-col gap-1">
              <Link 
                to="/" 
                className="text-base font-semibold hover:text-primary transition-colors px-4 py-3 rounded-lg hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'zh' ? '首页' : 'Home'}
              </Link>
              <Link 
                to="/solutions"
                className="text-base font-semibold hover:text-primary transition-colors px-4 py-3 rounded-lg hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'zh' ? '产品与解决方案' : 'Solutions'}
              </Link>
              <Link 
                to="/innovation"
                className="text-base font-semibold hover:text-primary transition-colors px-4 py-3 rounded-lg hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'zh' ? '创新中心' : 'Innovation'}
              </Link>
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-white w-full mt-4"
              >
                <Link to="/apply" onClick={() => setIsMenuOpen(false)}>{language === 'zh' ? '预约演示' : 'Request Demo'}</Link>
              </Button>
              <div className="flex items-center gap-2 mt-6 px-4 py-3 bg-muted rounded-xl">
                <PhoneCall className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold">15663626777</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
