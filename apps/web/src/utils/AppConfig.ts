import type { LocalizationResource } from '@clerk/types';
import type { LocalePrefixMode } from 'next-intl/routing';
import { enUS, frFR } from '@clerk/localizations';

const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'JinBean - 金豆荚',
  locales: ['zh', 'en', 'fr'],
  defaultLocale: 'zh',
  localePrefix,
};

const supportedLocales: Record<string, LocalizationResource> = {
  zh: enUS, // 暂时使用英文，后续可以添加中文本地化
  en: enUS,
  fr: frFR,
};

export const ClerkLocalizations = {
  defaultLocale: enUS,
  supportedLocales,
};
