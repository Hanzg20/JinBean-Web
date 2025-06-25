import { getTranslations, setRequestLocale } from 'next-intl/server';
import Logo from '@/../../libs/ui/components/Logo';
import Button from '@/../../libs/ui/components/Button';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
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

export default async function Index(props: IIndexProps) {
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
            为海外华人及本地居民提供便捷高效的生活服务平台
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              下载 App
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              了解更多
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            我们的服务
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2E8B57] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">家政服务</h3>
              <p className="text-gray-600">
                专业的保洁、维修、搬家等服务，让您的居家生活更加舒适
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#2E8B57] text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">工具租赁</h3>
              <p className="text-gray-600">
                共享草坪工具、维修设备等，按需使用，节省成本
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#B22222] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">社区互动</h3>
              <p className="text-gray-600">
                金豆圈社区，分享生活经验，结识邻里朋友
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2E8B57]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            成为服务提供者
          </h2>
          <p className="text-xl text-green-100 mb-8">
            如果您有专业技能，欢迎加入我们的服务团队，为社区提供优质服务
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
            立即入驻
          </Button>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            金豆圈精选
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Community Post 1 */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#2E8B57] rounded-full flex items-center justify-center text-white font-semibold">
                  张
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">张阿姨</p>
                  <p className="text-sm text-gray-500">2小时前</p>
                </div>
              </div>
              <p className="text-gray-700">
                今天帮邻居修剪草坪，用到了金豆荚的工具租赁服务，非常方便！
              </p>
            </div>

            {/* Community Post 2 */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-[#2E8B57] font-semibold">
                  李
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">李师傅</p>
                  <p className="text-sm text-gray-500">5小时前</p>
                </div>
              </div>
              <p className="text-gray-700">
                通过金豆荚平台接到的维修订单越来越多，感谢大家的信任！
              </p>
            </div>

            {/* Community Post 3 */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#B22222] rounded-full flex items-center justify-center text-white font-semibold">
                  王
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">王女士</p>
                  <p className="text-sm text-gray-500">1天前</p>
                </div>
              </div>
              <p className="text-gray-700">
                金豆荚的保洁服务很专业，家里焕然一新，强烈推荐！
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
