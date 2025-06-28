// import { getTranslations, setRequestLocale } from 'next-intl/server';
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
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Index',
  // });

  return {
    title: '金豆荚 JinBean - Home',
    description: 'Your trusted platform for housekeeping services and community building',
  };
}

export default async function MarketingPage(props: IPageProps) {
  const { locale } = await props.params;
  // setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Index',
  // });

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
            Your trusted platform for housekeeping services and community building
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Download App
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2E8B57] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Housekeeping Services
              </h3>
              <p className="text-gray-600">
                Professional cleaning and maintenance services for your home
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#2E8B57] text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tools & Equipment
              </h3>
              <p className="text-gray-600">High-quality tools and equipment for all your needs</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#B22222] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Building
              </h3>
              <p className="text-gray-600">
                Connect with neighbors and build a stronger community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2E8B57]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-green-100 mb-8">Be part of something bigger</p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
            Get Started
          </Button>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Community Stories
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
                    Zhang Wei
                  </p>
                  <p className="text-sm text-gray-500">
                    2 hours ago
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Great experience with the housekeeping service!
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
                    Li Ming
                  </p>
                  <p className="text-sm text-gray-500">
                    1 day ago
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                The tools are excellent quality and very affordable.
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
                    Wang Fang
                  </p>
                  <p className="text-sm text-gray-500">
                    3 days ago
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Love the community features and how easy it is to connect with neighbors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
