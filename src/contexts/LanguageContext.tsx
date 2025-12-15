import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  zh: {
    // Header
    'nav.home': '首页',
    'nav.providers': '服务者专区',
    'nav.join': '成为服务者',
    'nav.about': '关于我们',
    
    // Hero
    'hero.badge': '多伦多试运行中',
    'hero.title': '北美华人家庭的一站式生活服务平台',
    'hero.titleHighlight': '生活服务平台',
    'hero.subtitle': '连接优质服务者与华人家庭，家政清洁、搬家维修、兴趣辅导，让生活更简单',
    'hero.cta.download': '下载 App',
    'hero.cta.provider': '成为服务者',
    'hero.cta.learn': '了解更多',
    'hero.stats.providers': '认证服务者',
    'hero.stats.rating': '平均评分',
    'hero.stats.cities': '开放城市',
    'hero.card.title': '金豆荚服务',
    'hero.card.subtitle': '一键预约，安心服务',
    'hero.card.trust': '已有 1000+ 家庭信赖',
    
    // Services
    'services.title': '我们提供的服务',
    'services.subtitle': '一站式满足您的生活需求',
    'services.cleaning': '家政清洁',
    'services.cleaning.desc': '专业家庭清洁、深度保洁服务',
    'services.moving': '搬家服务',
    'services.moving.desc': '本地搬家、长途搬运一站式解决',
    'services.repair': '维修服务',
    'services.repair.desc': '水电维修、家电安装等专业服务',
    'services.tutoring': '兴趣班/辅导',
    'services.tutoring.desc': '钢琴、美术、语言等课程预约',
    'services.rental': '工具租赁',
    'services.rental.desc': '家用工具、设备短期租用',
    'services.other': '更多服务',
    'services.other.desc': '即将开放更多服务类别',
    
    // Value Props - Users
    'value.users.title': '为什么选择金豆荚？',
    'value.users.trust': '信任保障',
    'value.users.trust.desc': '服务者经过审核认证，服务有保障',
    'value.users.chinese': '中文沟通',
    'value.users.chinese.desc': '无语言障碍，沟通更顺畅',
    'value.users.convenient': '便捷预约',
    'value.users.convenient.desc': '在线预约，时间地点灵活选择',
    
    // Value Props - Providers
    'value.providers.title': '成为金豆荚服务者',
    'value.providers.customers': '稳定客源',
    'value.providers.customers.desc': '平台推荐精准客户，无需自己找客',
    'value.providers.schedule': '日程管理',
    'value.providers.schedule.desc': '智能排班系统，高效管理预约',
    'value.providers.income': '收入透明',
    'value.providers.income.desc': '清晰结算流程，收入有保障',
    
    // Social Proof
    'proof.title': '平台动态',
    'proof.cities': '首批开放城市：多伦多（试运行）',
    'proof.upcoming': '后续将开放温哥华、卡尔加里',
    
    // CTA
    'cta.title': '开启您的金豆荚之旅',
    'cta.subtitle': '无论您是寻找服务还是提供服务，我们都欢迎您',
    'cta.download': '下载 App',
    'cta.provider': '申请成为服务者',
    
    // Footer
    'footer.company': 'GoldSky Technologies',
    'footer.description': '为北美华人打造的数字生活基础设施',
    'footer.contact': '联系我们',
    'footer.email': '邮箱',
    'footer.wechat': '微信客服',
    'footer.legal': '法律条款',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.rights': '版权所有',
    
    // Provider Page
    'provider.hero.title': '加入金豆荚',
    'provider.hero.subtitle': '与我们一起服务北美华人家庭',
    'provider.who.title': '我们在寻找',
    'provider.who.cleaning': '家政保洁员',
    'provider.who.mover': '搬家服务团队',
    'provider.who.repair': '维修技术人员',
    'provider.who.tutor': '兴趣班老师/家教',
    'provider.who.other': '其他专业服务者',
    'provider.benefits.title': '加入我们，您将获得',
    'provider.benefits.customers': '稳定的客户来源',
    'provider.benefits.customers.desc': '平台为您匹配精准客户，告别自己找客的烦恼',
    'provider.benefits.tools': '便捷的管理工具',
    'provider.benefits.tools.desc': '日程管理、订单跟踪、客户沟通一站式解决',
    'provider.benefits.payment': '透明的收入结算',
    'provider.benefits.payment.desc': '清晰的费率规则，及时的收入结算',
    'provider.benefits.support': '专业的平台支持',
    'provider.benefits.support.desc': '运营团队全程支持，助您成功',
    'provider.steps.title': '加入流程',
    'provider.steps.1': '在线申请',
    'provider.steps.1.desc': '填写基本信息和服务类型',
    'provider.steps.2': '资质审核',
    'provider.steps.2.desc': '平台审核您的资质和经验',
    'provider.steps.3': '开始接单',
    'provider.steps.3.desc': '通过审核后即可接收订单',
    'provider.cta': '立即申请',
    'provider.faq.title': '常见问题',
    'provider.faq.1.q': '需要什么条件才能加入？',
    'provider.faq.1.a': '您需要在北美本地、有合法工作身份或营业身份、能提供稳定服务时段。',
    'provider.faq.2.q': '平台如何收费？',
    'provider.faq.2.a': '平台将在正式合作前与您确认具体费率与规则。',
    'provider.faq.3.q': '多久能开始接单？',
    'provider.faq.3.a': '提交申请后，我们将在3-5个工作日内与您联系，审核通过后即可开始。',
    
    // Application Form
    'form.title': '服务者申请',
    'form.subtitle': '请填写以下信息，我们将尽快与您联系',
    'form.name': '姓名/称呼',
    'form.name.placeholder': '请输入您的姓名',
    'form.contact': '联系方式',
    'form.phone': '手机号码',
    'form.phone.placeholder': '请输入手机号码',
    'form.wechat': '微信号',
    'form.wechat.placeholder': '请输入微信号',
    'form.email': '电子邮箱',
    'form.email.placeholder': '请输入邮箱地址',
    'form.city': '所在城市',
    'form.city.placeholder': '请选择或输入城市',
    'form.city.toronto': '多伦多',
    'form.city.vancouver': '温哥华',
    'form.city.calgary': '卡尔加里',
    'form.city.other': '其他城市',
    'form.services': '服务类型（可多选）',
    'form.services.cleaning': '家政/清洁',
    'form.services.moving': '搬家',
    'form.services.repair': '维修',
    'form.services.tutoring': '兴趣班/家教',
    'form.services.rental': '工具租赁',
    'form.services.other': '其他',
    'form.availability': '可服务时间',
    'form.availability.weekday': '工作日',
    'form.availability.weekend': '周末',
    'form.availability.daytime': '白天',
    'form.availability.evening': '晚上',
    'form.intro': '自我介绍/经验说明',
    'form.intro.placeholder': '请简单介绍您的相关经验和服务特点',
    'form.submit': '提交申请',
    'form.success': '申请已提交',
    'form.success.desc': '我们将在3-5个工作日内与您联系',
    'form.note': 'Provider Application Form - We will contact you within 3-5 business days.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.providers': 'For Providers',
    'nav.join': 'Become a Provider',
    'nav.about': 'About',
    
    // Hero
    'hero.badge': 'Now in Toronto',
    'hero.title': 'Life Services for Chinese Families in North America',
    'hero.titleHighlight': 'for Chinese Families',
    'hero.subtitle': 'Connecting quality service providers with Chinese families. Cleaning, moving, repair, tutoring and more.',
    'hero.cta.download': 'Download App',
    'hero.cta.provider': 'Become a Provider',
    'hero.cta.learn': 'Learn More',
    'hero.stats.providers': 'Verified Providers',
    'hero.stats.rating': 'Avg Rating',
    'hero.stats.cities': 'Cities',
    'hero.card.title': 'GoldPod Services',
    'hero.card.subtitle': 'Book with confidence',
    'hero.card.trust': '1000+ families trust us',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'One-stop solution for your daily needs',
    'services.cleaning': 'Cleaning',
    'services.cleaning.desc': 'Professional home cleaning services',
    'services.moving': 'Moving',
    'services.moving.desc': 'Local and long-distance moving',
    'services.repair': 'Repair',
    'services.repair.desc': 'Plumbing, electrical, appliance installation',
    'services.tutoring': 'Tutoring',
    'services.tutoring.desc': 'Music, art, language classes',
    'services.rental': 'Tool Rental',
    'services.rental.desc': 'Short-term equipment rental',
    'services.other': 'More',
    'services.other.desc': 'More services coming soon',
    
    // Value Props - Users
    'value.users.title': 'Why GoldPod?',
    'value.users.trust': 'Trusted',
    'value.users.trust.desc': 'Verified service providers you can trust',
    'value.users.chinese': 'Chinese-Friendly',
    'value.users.chinese.desc': 'Communicate in Chinese, no barriers',
    'value.users.convenient': 'Convenient',
    'value.users.convenient.desc': 'Easy online booking, flexible scheduling',
    
    // Value Props - Providers
    'value.providers.title': 'Become a Provider',
    'value.providers.customers': 'Steady Customers',
    'value.providers.customers.desc': 'Platform matches you with clients',
    'value.providers.schedule': 'Smart Scheduling',
    'value.providers.schedule.desc': 'Efficient booking management',
    'value.providers.income': 'Clear Income',
    'value.providers.income.desc': 'Transparent payment process',
    
    // Social Proof
    'proof.title': 'Updates',
    'proof.cities': 'Now available: Toronto (Pilot)',
    'proof.upcoming': 'Coming soon: Vancouver, Calgary',
    
    // CTA
    'cta.title': 'Get Started with GoldPod',
    'cta.subtitle': 'Whether you need services or provide them, we welcome you',
    'cta.download': 'Download App',
    'cta.provider': 'Apply as Provider',
    
    // Footer
    'footer.company': 'GoldSky Technologies',
    'footer.description': 'Digital infrastructure for Chinese communities in North America',
    'footer.contact': 'Contact',
    'footer.email': 'Email',
    'footer.wechat': 'WeChat',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.rights': 'All rights reserved',
    
    // Provider Page
    'provider.hero.title': 'Join GoldPod',
    'provider.hero.subtitle': 'Serve Chinese families in North America with us',
    'provider.who.title': "Who We're Looking For",
    'provider.who.cleaning': 'Cleaners',
    'provider.who.mover': 'Movers',
    'provider.who.repair': 'Repair Technicians',
    'provider.who.tutor': 'Tutors & Teachers',
    'provider.who.other': 'Other Professionals',
    'provider.benefits.title': 'Benefits of Joining',
    'provider.benefits.customers': 'Steady Customer Flow',
    'provider.benefits.customers.desc': 'We match you with the right clients',
    'provider.benefits.tools': 'Management Tools',
    'provider.benefits.tools.desc': 'Schedule, orders, and communication in one place',
    'provider.benefits.payment': 'Clear Payments',
    'provider.benefits.payment.desc': 'Transparent rates and timely payouts',
    'provider.benefits.support': 'Platform Support',
    'provider.benefits.support.desc': 'Our team helps you succeed',
    'provider.steps.title': 'How to Join',
    'provider.steps.1': 'Apply Online',
    'provider.steps.1.desc': 'Fill in your info and service types',
    'provider.steps.2': 'Verification',
    'provider.steps.2.desc': 'We review your qualifications',
    'provider.steps.3': 'Start Working',
    'provider.steps.3.desc': 'Begin accepting orders after approval',
    'provider.cta': 'Apply Now',
    'provider.faq.title': 'FAQ',
    'provider.faq.1.q': 'What are the requirements?',
    'provider.faq.1.a': 'You need to be in North America with legal work authorization and consistent availability.',
    'provider.faq.2.q': 'How does pricing work?',
    'provider.faq.2.a': 'We will confirm rates and terms before starting our partnership.',
    'provider.faq.3.q': 'How soon can I start?',
    'provider.faq.3.a': "After applying, we'll contact you within 3-5 business days. Once approved, you can start immediately.",
    
    // Application Form
    'form.title': 'Provider Application',
    'form.subtitle': 'Fill in your details and we will contact you soon',
    'form.name': 'Name',
    'form.name.placeholder': 'Your name',
    'form.contact': 'Contact',
    'form.phone': 'Phone',
    'form.phone.placeholder': 'Phone number',
    'form.wechat': 'WeChat',
    'form.wechat.placeholder': 'WeChat ID',
    'form.email': 'Email',
    'form.email.placeholder': 'Email address',
    'form.city': 'City',
    'form.city.placeholder': 'Select or enter city',
    'form.city.toronto': 'Toronto',
    'form.city.vancouver': 'Vancouver',
    'form.city.calgary': 'Calgary',
    'form.city.other': 'Other',
    'form.services': 'Service Types (select all that apply)',
    'form.services.cleaning': 'Cleaning',
    'form.services.moving': 'Moving',
    'form.services.repair': 'Repair',
    'form.services.tutoring': 'Tutoring',
    'form.services.rental': 'Tool Rental',
    'form.services.other': 'Other',
    'form.availability': 'Availability',
    'form.availability.weekday': 'Weekdays',
    'form.availability.weekend': 'Weekends',
    'form.availability.daytime': 'Daytime',
    'form.availability.evening': 'Evening',
    'form.intro': 'About You',
    'form.intro.placeholder': 'Briefly describe your experience and services',
    'form.submit': 'Submit Application',
    'form.success': 'Application Submitted',
    'form.success.desc': 'We will contact you within 3-5 business days',
    'form.note': 'Provider Application Form - We will contact you within 3-5 business days.',
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
