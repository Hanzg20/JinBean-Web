import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  zh: {
    // Brand
    'brand.name': '金宏天科技',
    'brand.tagline': 'AI 支付与物联解决方案专家',

    // Header (Restored to Si-Tech style)
    'nav.home': '首页',
    'nav.solutions': '产品与解决方案',
    'nav.innovation': '创新中心',
    'nav.cases': '案例展示',
    'nav.partners': '生态合作',
    'nav.about': '关于金宏天',
    'nav.demo': '预约演示',

    // Hero
    'hero.badge': '20年沉淀 · 金融级安全',
    'hero.title': '收钱稳、管账准',
    'hero.titleHighlight': '活儿省心',
    'hero.subtitle': '懂业务的智慧支付与物联专家，帮您省下人工，守好账目。为公用事业、智能零售提供全链路数字化方案。',
    'hero.cta.primary': '获取解决方案',
    'hero.cta.secondary': '了解更多',
    'hero.stats.exp': '行业经验',
    'hero.stats.clients': '服务企业',
    'hero.stats.patents': '发明专利',
    
    // Solutions
    'solutions.title': '垂直行业场景解决方案',
    'solutions.subtitle': '深度理解业务，解决核心痛点',
    'solutions.utility': '水电气暖交费',
    'solutions.utility.desc': '支持自助机、App、小程序全渠道，提升收缴率',
    'solutions.retail': '无人值守零售',
    'solutions.retail.desc': '智能识别商品，24小时不打烊，降本增效',
    'solutions.construction': '智慧工地',
    'solutions.construction.desc': '实名制考勤与安全预警，利用AI提升管理水平',
    'solutions.fund': '维修资金监管',
    'solutions.fund.desc': '全流程资金监管，透明合规，账目清晰',
    'solutions.edtech': 'AI 助学终端',
    'solutions.edtech.desc': '大模型驱动的智能辅导，为教育赋能',
    'solutions.other': '更多定制方案',
    'solutions.other.desc': '基于您的需求，定制专属物联与支付逻辑',
    
    // Products (Refocused on Integration & Adapters)
    'products.title': '硬件适配与集成方案',
    'products.subtitle': '联合主流硬件厂商，为多种终端提供环境适配器与完整集成能力',
    'products.kiosk': '自助缴费集成件',
    'products.pos': '智能 POS 适配方案',
    'products.nfc': 'NFC 读卡适配组件',
    'products.face': 'AI 视觉集成方案',
    
    // Value Props
    'value.title': '为什么选择金宏天？',
    'value.trust': '银行级合规',
    'value.trust.desc': '符合银联标准，最高等级网安备案，确保资金安全',
    'value.tech': '核心技术自研',
    'value.tech.desc': '拥有数十项支付协议与物联交互专利，软硬一体化',
    'value.support': '本地化服务',
    'value.support.desc': '7x24 小时快速响应，提供从咨询到维护的全生命周期支持',
    
    // Platform
    'platform.title': '开发者与生态平台',
    'platform.subtitle': '开放 API 与 SDK，作为软件与第三方硬件的交互桥梁',
    'platform.api': '开放接口',
    'platform.sdk': '硬件适配 SDK',
    'platform.docs': '技术文档',

    // Solutions Page
    'solutions.hero.title': '全场景智慧物联解决方案',
    'solutions.hero.subtitle': '基于 AI 支付与 5G 通讯技术，为垂直行业提供从终端适配到云端管理的全链路方案',
    'solutions.matrix.title': '业务矩阵',
    'solutions.bottom.title': '不仅是软件，更是懂业务的行业专家',
    'solutions.bottom.compliance': '安全合规',
    'solutions.bottom.deploy': '快速部署',
    'solutions.bottom.ai_ops': '智能运维',

    // Innovation Page
    'innovation.hero.title': '技术创新中心',
    'innovation.hero.subtitle': '探索 AI 与支付技术的无限可能，为行业伙伴提供领先的技术支撑',
    'innovation.rd.title': '研发实力',
    'innovation.rd.desc': '哈尔滨研发中心与加拿大实验室深度协同，持续突破 AI 算法与物联协议。',
    'innovation.lab.title': '物联协议实验室',
    'innovation.lab.desc': '自主研发的 hardware-bridge 技术，支持秒级适配第三方支付终端。',
    'innovation.llm.title': '大模型场景应用',
    'innovation.llm.desc': '基于大模型的智能客服与运维机器人，提升公用事业服务效率。',
    'innovation.dev_exp.title': '极简的硬件接入体验',
    'innovation.dev_exp.desc': '我们提供的 Adaptation SDK 隐藏了底层协议的复杂性，开发者只需几行代码即可完成支付与物联交互。',
    'innovation.dev_exp.link': '查看开发者文档',
    'innovation.patents.title': '核心技术专利',
    'innovation.patents.name': '一种智能支付网关的分布式处理系统',

    // Cases Page
    'cases.hero.title': '赋能成功案例',
    'cases.hero.subtitle': '见证技术如何转化为真实的业务价值与增长',

    // Partners Page
    'partners.hero.title': '生态合作伙伴',
    'partners.hero.subtitle': '与全球硬件厂商、支付机构及渠道商共建智慧物联生态',

    // Application Form (B2B Refined)
    'form.title': '业务咨询与合作申请',
    'form.subtitle': '请填写您的需求，我们的专家将在 24 小时内与您联系',
    'form.company': '公司名称',
    'form.company.placeholder': '请输入您的公司全称',
    'form.industry': '所属行业',
    'form.interest': '合作意向',
    'form.submit': '提交需求',
    'form.success': '需求已收到',
    'form.success.desc': '您的业务顾问正在准备方案，将尽快联系您',
    'form.hotline': '热线',
    'form.requirements': '详细需求描述',
    'form.quote': '“我们深知您的业务需求，致力于提供最精准的物联集成方案。”',

    // CTA Section
    'cta.title': 'B端生态合作，共赢 AI 未来',
    'cta.subtitle': '面向硬件厂商与支付机构，提供从 POS 协议适配到 AI 场景重构的软硬一体化赋能方案。',
    'cta.button.partner': '申请成为合作伙伴',
    'cta.button.demo': '预约演示',

    // About Page
    'about.hero.title': '关于金宏天',
    'about.hero.subtitle': '哈尔滨金宏天科技开发有限公司（JHT）成立于2011年，是领先的高新技术应用服务提供商。',
    'about.profile.title': '公司简介',
    'about.profile.desc': '金宏天科技深耕信息化领域十余年，专注于为政府、公共事业单位及大型国有企业提供深度的行业解决方案。公司在热力行业计费、农业信息化及设备资产管理等领域拥有核心技术积累。',
    'about.history.title': '成长历程',
    'about.history.2011': '公司正式成立，进入软件开发市场',
    'about.history.industry': '深耕热力与农业信息化，服务数百家政企客户',
    'about.history.tech': '获得高新技术企业认定，拥有数十项软著与专利',
    'about.history.now': '启动 AI + 物联战略，联合北美实验室探索前沿技术',
    'about.stats.founded': '成立于',
    'about.stats.clients': '服务政企',
    'about.stats.solutions': '核心方案',
    'about.mission.title': '企业使命',
    'about.mission.desc': '深耕物联技术，为企业提供最高效、最安全的数字化交互底座。',
    'about.tech.title': '技术核心',
    'about.tech.desc': '拥有数十项支付协议与物联交互专利，软硬一体化解决方案专家。',
    'about.vision.title': '全球视野',
    'about.vision.desc': '哈尔滨研发中心与加拿大 GoldSky 实验室深度协同，服务全球数字化转型。',

    // Footer
    'footer.company': '哈尔滨金宏天科技有限公司',
    'footer.description': '专注于 AI 自助支付、POS 协议打通及物联解决方案的高新技术企业。',
    'footer.contact': '联系我们',
    'footer.email': '邮箱：support@goldsky.ca',
    'footer.address': '地址：黑龙江省哈尔滨市高新区',
    'footer.rights': '© 2025 金宏天科技. 版权所有.',
    'footer.sections.solutions': '产品与解决方案',
    'footer.sections.resources': '开发者与资源',
    'footer.sections.company': '公司信息',
  },
  en: {
    // Brand
    'brand.name': 'GoldSky',
    'brand.tagline': 'AI Payment & IoT Solutions Expert',

    // Header (Restored to Si-Tech style)
    'nav.home': 'Home',
    'nav.solutions': 'Products & Solutions',
    'nav.innovation': 'Innovation Center',
    'nav.cases': 'Cases',
    'nav.partners': 'Partners',
    'nav.about': 'About',
    'nav.demo': 'Request Demo',

    // Hero
    'hero.badge': '20 Years · Financial Security',
    'hero.title': 'Reliable Payments',
    'hero.titleHighlight': 'Effortless Ops',
    'hero.subtitle': 'Expert smart payment & IoT solutions. Save labor, secure accounts. Digital infrastructure for Utilities and Smart Retail.',
    'hero.cta.primary': 'Get Solutions',
    'hero.cta.secondary': 'Learn More',
    'hero.stats.exp': 'Years Exp.',
    'hero.stats.clients': 'Global Clients',
    'hero.stats.patents': 'Patents',
    
    // Solutions
    'solutions.title': 'Vertical Industry Solutions',
    'solutions.subtitle': 'Understanding business, solving core problems',
    'solutions.utility': 'Utility Payments',
    'solutions.utility.desc': 'Self-service kiosks, App, and Mini-programs for utilities',
    'solutions.retail': 'Smart Retail',
    'solutions.retail.desc': '24/7 autonomous shopping with AI recognition',
    'solutions.construction': 'Smart Construction',
    'solutions.construction.desc': '5G+AI attendance and safety alerts for job sites',
    'solutions.fund': 'Fund Management',
    'solutions.fund.desc': 'Compliant fund tracking for real estate',
    'solutions.edtech': 'EdTech AI',
    'solutions.edtech.desc': 'LLM-powered smart tutoring terminals',
    'solutions.other': 'Custom Solutions',
    'solutions.other.desc': 'Tailored IoT & payment logic for your needs',
    
    // Products (Refocused on Integration & Adapters)
    'products.title': 'Adaptation & Integration',
    'products.subtitle': 'Partnering with hardware vendors to provide adapters and integrated solutions for various terminals',
    'products.kiosk': 'Kiosk Integration',
    'products.pos': 'Smart POS Adaptation',
    'products.nfc': 'NFC/IoT Adaptation',
    'products.face': 'AI Vision Integration',
    
    // Value Props
    'value.title': 'Why GoldSky?',
    'value.trust': 'Banking Compliance',
    'value.trust.desc': 'UnionPay standard compliant with top-tier security',
    'value.tech': 'Proprietary Tech',
    'value.tech.desc': 'Patented payment protocols and IoT interaction',
    'value.support': 'Global Support',
    'value.support.desc': '24/7 rapid response and full lifecycle maintenance',
    
    // Platform
    'platform.title': 'Developer Ecosystem',
    'platform.subtitle': 'Bridging the gap between software and third-party hardware via APIs & SDKs',
    'platform.api': 'Open API',
    'platform.sdk': 'Hardware Adapter SDK',
    'platform.docs': 'Documentation',

    // Solutions Page
    'solutions.hero.title': 'Smart IoT Solutions',
    'solutions.hero.subtitle': 'End-to-end solutions from terminal adaptation to cloud management based on AI & 5G.',
    'solutions.matrix.title': 'Business Matrix',
    'solutions.bottom.title': 'More Than Software, We Understand Your Business',
    'solutions.bottom.compliance': 'Compliance',
    'solutions.bottom.deploy': 'Fast Deploy',
    'solutions.bottom.ai_ops': 'AI Ops',

    // Innovation Page
    'innovation.hero.title': 'Innovation Center',
    'innovation.hero.subtitle': 'Exploring possibilities in AI and payment tech to empower industry partners.',
    'innovation.rd.title': 'R&D Strength',
    'innovation.rd.desc': 'Deep collaboration between Harbin R&D center and Canadian labs.',
    'innovation.lab.title': 'IoT Protocol Lab',
    'innovation.lab.desc': 'Self-developed hardware-bridge tech for millisecond adaptation.',
    'innovation.llm.title': 'LLM Application',
    'innovation.llm.desc': 'LLM-powered smart support and ops robots for utilities.',
    'innovation.dev_exp.title': 'Minimalist Hardware Integration',
    'innovation.dev_exp.desc': 'Our Adaptation SDK hides protocol complexity. Complete integration with just a few lines of code.',
    'innovation.dev_exp.link': 'View Developer Docs',
    'innovation.patents.title': 'Core Technology Patents',
    'innovation.patents.name': 'Distributed processing system for smart payment gateways',

    // Cases Page
    'cases.hero.title': 'Success Stories',
    'cases.hero.subtitle': 'Witness how technology translates into real business value and growth.',

    // Partners Page
    'partners.hero.title': 'Ecosystem Partners',
    'partners.hero.subtitle': 'Building a smart IoT ecosystem with hardware vendors and payment institutions.',

    // Application Form (B2B Refined)
    'form.title': 'Business Inquiry',
    'form.subtitle': 'Tell us your needs, our experts will contact you within 24 hours.',
    'form.company': 'Company Name',
    'form.company.placeholder': 'Enter your company name',
    'form.industry': 'Industry',
    'form.interest': 'Business Interest',
    'form.submit': 'Submit Inquiry',
    'form.success': 'Inquiry Received',
    'form.success.desc': 'Our business consultant is preparing a solution for you.',
    'form.hotline': 'Hotline',
    'form.requirements': 'Requirements',
    'form.quote': '"We understand your business needs and are committed to providing precise IoT integration."',

    // CTA Section
    'cta.title': 'Join Our B2B Ecosystem',
    'cta.subtitle': 'Providing integrated solutions for hardware vendors and payment institutions from POS protocol adaptation to AI scene reconstruction.',
    'cta.button.partner': 'Apply for Partnership',
    'cta.button.demo': 'Request Demo',

    // About Page
    'about.hero.title': 'About JHT',
    'about.hero.subtitle': 'Harbin Jinhongtian Tech Development Co., Ltd. (JHT), founded in 2011, is a leading high-tech application service provider.',
    'about.profile.title': 'Company Profile',
    'about.profile.desc': 'With over a decade of expertise, JHT specializes in deep industry solutions for government, public utilities, and large state-owned enterprises. We hold core technology in thermal billing systems, agricultural informatics, and asset management.',
    'about.history.title': 'Milestones',
    'about.history.2011': 'Company founded, entering the software development market.',
    'about.history.industry': 'Specialized in thermal & agricultural systems, serving hundreds of clients.',
    'about.history.tech': 'Certified as High-Tech Enterprise with numerous patents and software copyrights.',
    'about.history.now': 'Launching AI + IoT strategy, collaborating with North American labs.',
    'about.stats.founded': 'Founded in',
    'about.stats.clients': 'Enterprise Clients',
    'about.stats.solutions': 'Core Solutions',
    'about.mission.title': 'Mission',
    'about.mission.desc': 'Deepening IoT technology to provide the most efficient and secure digital interaction foundation.',
    'about.tech.title': 'Core Tech',
    'about.tech.desc': 'Patented payment protocols and IoT interaction, experts in integrated hardware-software solutions.',
    'about.vision.title': 'Global Vision',
    'about.vision.desc': 'Harbin R&D Center collaborates with GoldSky Lab in Canada to serve global digital transformation.',

    // Footer
    'footer.company': 'GoldSky Technology Co., Ltd.',
    'footer.description': 'High-tech enterprise focusing on AI payment, POS protocols, and IoT solutions.',
    'footer.contact': 'Contact Us',
    'footer.email': 'Email: support@goldsky.ca',
    'footer.address': 'Harbin High-tech Zone, HLJ, China',
    'footer.rights': '© 2025 GoldSky. All rights reserved.',
    'footer.sections.solutions': 'Solutions',
    'footer.sections.resources': 'Resources',
    'footer.sections.company': 'Company',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
