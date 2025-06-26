import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { AppConfig } from '@/utils/AppConfig';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';

  // 解析浏览器语言偏好
  const parseAcceptLanguage = (acceptLanguage: string): string[] => {
    return acceptLanguage
      .split(',')
      .map(lang => {
        const trimmed = lang.split(';')[0]?.trim().toLowerCase();
        return trimmed || '';
      })
      .filter(lang => lang.length > 0);
  };

  // 检测最佳匹配的语言
  const detectLanguage = (browserLanguages: string[]): string => {
    // 支持的语言映射
    const languageMap: Record<string, string> = {
      'zh': 'zh', // 中文
      'zh-cn': 'zh', // 简体中文
      'zh-tw': 'zh', // 繁体中文
      'zh-hk': 'zh', // 香港中文
      'zh-sg': 'zh', // 新加坡中文
      'en': 'en', // 英文
      'en-us': 'en',
      'en-gb': 'en',
      'en-ca': 'en',
      'en-au': 'en',
      'fr': 'fr', // 法文
      'fr-fr': 'fr',
      'fr-ca': 'fr',
    };

    // 查找匹配的语言
    for (const browserLang of browserLanguages) {
      const lang = languageMap[browserLang];
      if (lang && AppConfig.locales.includes(lang)) {
        return lang;
      }
    }

    // 如果没有匹配，返回默认语言
    return AppConfig.defaultLocale;
  };

  const browserLanguages = parseAcceptLanguage(acceptLanguage);
  const detectedLanguage = detectLanguage(browserLanguages);

  // 重定向到检测到的语言页面
  redirect(`/${detectedLanguage}`);
}
