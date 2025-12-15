import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold">
              <span className="text-primary-foreground font-bold text-lg sm:text-xl">金</span>
            </div>
            <span className="text-lg sm:text-xl font-bold">
              {language === 'zh' ? '金豆荚' : 'GoldPod'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/60"
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/providers" 
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/60"
            >
              {t('nav.providers')}
            </Link>
            <Link 
              to="/apply" 
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/60"
            >
              {t('nav.join')}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-sm font-medium rounded-lg border border-border hover:bg-muted/60 transition-all"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted/60 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            
            <Button 
              asChild
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 shadow-gold hover:shadow-lg transition-all"
            >
              <Link to="/apply">{t('nav.join')}</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              <Link 
                to="/" 
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-3 rounded-lg hover:bg-muted/60"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/providers" 
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-3 rounded-lg hover:bg-muted/60"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.providers')}
              </Link>
              <Link 
                to="/apply" 
                className="text-sm font-medium hover:text-primary transition-colors px-4 py-3 rounded-lg hover:bg-muted/60"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.join')}
              </Link>
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg mt-2 shadow-gold"
              >
                <Link to="/apply" onClick={() => setIsMenuOpen(false)}>{t('nav.join')}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
