import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, QrCode } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-tech-blue text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Mission */}
          <div className="space-y-6 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <Logo size="md" className="opacity-90 grayscale brightness-200" />
              <span className="text-xl font-bold text-white tracking-tight">
                {language === 'zh' ? '哈尔滨金宏天科技' : 'Jinhongtian Tech'}
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              {language === 'zh'
                ? '懂业务的智慧支付与物联专家。深耕公用事业20年，联合加拿大 GoldSky 为全球企业提供高标准的技术底座与行业方案。'
                : 'IoT & Smart Payment experts with 20 years of experience. Global tech foundation with GoldSky Canada.'}
            </p>
            <div className="flex gap-4">
               {/* Simplified Social Icons */}
               <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                 <span className="text-[10px] font-bold">In</span>
               </div>
               <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                 <span className="text-[10px] font-bold">Wx</span>
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-white text-sm uppercase tracking-widest">
              {language === 'zh' ? '产品与服务' : 'Products'}
            </h3>
            <ul className="space-y-4 text-xs font-medium">
              <li><Link to="/solutions" className="hover:text-primary transition-colors">支付底座 SDK</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">水电气暖交费</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">智慧工地监控</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">AI 零售终端</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-white text-sm uppercase tracking-widest">
              {language === 'zh' ? '联系我们' : 'Contact'}
            </h3>
            <ul className="space-y-4 text-xs font-medium">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span>15663626777</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:services@goldsky.ca" className="hover:text-white transition-colors">services@goldsky.ca</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary shrink-0" />
                <span className="leading-tight">
                  哈尔滨市南岗区<br/>阿什河街8-6号
                </span>
              </li>
            </ul>
          </div>

          {/* QR Code Section (Very Common in CN) */}
          <div className="space-y-6">
            <h3 className="font-bold text-white text-sm uppercase tracking-widest">
              {language === 'zh' ? '关注我们' : 'Follow Us'}
            </h3>
            <div className="flex flex-col items-start gap-3">
               <div className="p-2 bg-white rounded-lg">
                 <QrCode className="h-20 w-20 text-slate-900" />
               </div>
               <span className="text-[10px] text-slate-500 uppercase tracking-tighter">微信扫码关注公众号</span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] uppercase tracking-widest text-slate-500">
            © 2026 Goldsky Tech (www.jinbean.com) All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[11px] font-bold">
            <Link to="/privacy" className="hover:text-white">隐私政策</Link>
            <Link to="/terms" className="hover:text-white">服务条款</Link>
            <span className="text-slate-600">黑ICP备230482234号-9</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
