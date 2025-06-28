import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';
import Button from '@/../../libs/ui/components/Button';
import Logo from '@/../../libs/ui/components/Logo';

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

type IPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IPageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function MarketingPage(props: IPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Logo size={80} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-[#2E8B57]">金豆荚</span>
            <span className="text-[#FFD700]"> JinBean</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              {t('hero.download_app')}
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              {t('hero.learn_more')}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2E8B57] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('services.housekeeping.title')}
              </h3>
              <p className="text-gray-600">
                {t('services.housekeeping.description')}
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#2E8B57] text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('services.tools.title')}
              </h3>
              <p className="text-gray-600">{t('services.tools.description')}</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#B22222] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('services.community.title')}
              </h3>
              <p className="text-gray-600">
                {t('services.community.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2E8B57]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('join.title')}
          </h2>
          <p className="text-xl text-green-100 mb-8">{t('join.description')}</p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
            {t('join.cta')}
          </Button>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t('community.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Community Post 1 */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#2E8B57] rounded-full flex items-center justify-center text-white font-semibold">
                  张
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">
                    {t('community.posts.post1.author')}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t('community.posts.post1.time')}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                {t('community.posts.post1.content')}
              </p>
            </div>

            {/* Community Post 2 */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-[#2E8B57] font-semibold">
                  李
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">
                    {t('community.posts.post2.author')}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t('community.posts.post2.time')}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                {t('community.posts.post2.content')}
              </p>
            </div>

            {/* Community Post 3 */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#B22222] rounded-full flex items-center justify-center text-white font-semibold">
                  王
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">
                    {t('community.posts.post3.author')}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t('community.posts.post3.time')}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                {t('community.posts.post3.content')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
