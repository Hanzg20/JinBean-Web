module.exports = {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'fr'],
    localeDetection: true,
  },
  localePath: typeof window === 'undefined'
    ? require('path').resolve('./packages/i18n')
    : '/packages/i18n',
}; 