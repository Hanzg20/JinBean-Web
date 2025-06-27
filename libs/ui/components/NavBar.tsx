import React from 'react';
import Logo from './Logo';

interface NavBarProps {
  navItems?: { label: string; href: string }[];
  onLangChange?: (lang: string) => void;
  currentLang?: string;
}

const NavBar: React.FC<NavBarProps> = ({ navItems = [], onLangChange, currentLang = 'zh' }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow">
      <div className="flex items-center gap-2">
        <Logo size={32} />
        <span className="font-bold text-lg text-[#2E8B57]">JinBean</span>
      </div>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="text-gray-700 hover:text-[#2E8B57] font-medium">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <select
          value={currentLang}
          onChange={(e) => onLangChange && onLangChange(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="zh">中文</option>
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
      </div>
    </nav>
  );
};

export default NavBar; 