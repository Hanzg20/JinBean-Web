import { setRequestLocale } from 'next-intl/server';

type IBlogProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IBlogProps) {
  await props.params; // 确保params被解析，但不需要使用locale

  return {
    title: '博客 - 金豆荚 JinBean',
    description: '分享生活技巧、社区故事和平台动态，让生活更美好',
  };
}

export default async function Blog(props: IBlogProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E8B57] to-[#276947] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            金豆荚博客
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            分享生活技巧、社区故事和平台动态，让生活更美好
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { name: '全部', active: true },
              { name: '生活技巧', active: false },
              { name: '社区故事', active: false },
              { name: '平台动态', active: false },
              { name: '健康生活', active: false },
              { name: '育儿经验', active: false },
            ].map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-[#2E8B57] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                type="button"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">精选文章</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-[#2E8B57] to-[#276947] flex items-center justify-center">
                  <span className="text-white text-6xl">🏠</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-[#2E8B57] text-white px-3 py-1 rounded-full text-sm">生活技巧</span>
                  <span className="text-gray-500 text-sm ml-4">2024年1月15日</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  海外华人居家生活必备技能指南
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  在海外生活，掌握一些基本的居家技能非常重要。本文为大家整理了从日常清洁到简单维修的实用技巧，
                  让您的海外生活更加便利舒适。无论您是刚来海外的新移民，还是已经生活多年的老居民，
                  都能从这些技巧中受益...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#2E8B57] rounded-full flex items-center justify-center text-white font-semibold">
                      金
                    </div>
                    <span className="ml-3 text-gray-700">金豆荚编辑团队</span>
                  </div>
                  <button className="bg-[#2E8B57] text-white px-6 py-2 rounded-lg hover:bg-[#276947] transition-colors" type="button">
                    阅读全文
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">最新文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#FFD700] to-[#FFC300] flex items-center justify-center">
                <span className="text-[#2E8B57] text-4xl">🍳</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-[#FFD700] text-[#2E8B57] px-2 py-1 rounded-full text-xs font-medium">生活技巧</span>
                  <span className="text-gray-500 text-xs ml-3">2024年1月12日</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  10道简单易学的家常菜，让海外生活更有家的味道
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  在海外生活，最想念的就是家乡的味道。本文为大家推荐10道简单易学的家常菜，
                  用当地食材就能做出地道的中国味道...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">阅读时间：8分钟</span>
                  <button className="text-[#2E8B57] hover:text-[#276947] font-medium text-sm" type="button">
                    阅读全文 →
                  </button>
                </div>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#B22222] to-[#8B0000] flex items-center justify-center">
                <span className="text-white text-4xl">👥</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-[#B22222] text-white px-2 py-1 rounded-full text-xs font-medium">社区故事</span>
                  <span className="text-gray-500 text-xs ml-3">2024年1月10日</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  从陌生人到邻居：金豆荚社区里的温暖故事
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  在金豆荚社区里，每天都在发生着温暖的故事。从最初的陌生人，
                  到现在的亲密邻居，这些故事见证了社区的成长...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">阅读时间：12分钟</span>
                  <button className="text-[#2E8B57] hover:text-[#276947] font-medium text-sm" type="button">
                    阅读全文 →
                  </button>
                </div>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex items-center justify-center">
                <span className="text-white text-4xl">📱</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-[#4A90E2] text-white px-2 py-1 rounded-full text-xs font-medium">平台动态</span>
                  <span className="text-gray-500 text-xs ml-3">2024年1月8日</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  金豆荚App 2.0版本发布：全新界面，更好体验
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  金豆荚App迎来重大更新！2.0版本带来了全新的用户界面设计，
                  更流畅的操作体验，以及更多实用功能...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">阅读时间：5分钟</span>
                  <button className="text-[#2E8B57] hover:text-[#276947] font-medium text-sm" type="button">
                    阅读全文 →
                  </button>
                </div>
              </div>
            </article>

            {/* Post 4 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#50C878] to-[#3CB371] flex items-center justify-center">
                <span className="text-white text-4xl">🏥</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-[#50C878] text-white px-2 py-1 rounded-full text-xs font-medium">健康生活</span>
                  <span className="text-gray-500 text-xs ml-3">2024年1月5日</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  海外就医指南：如何选择合适的医疗服务
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  在海外生活，了解当地的医疗体系非常重要。本文为您详细介绍如何选择合适的医疗服务，
                  以及就医时需要注意的事项...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">阅读时间：15分钟</span>
                  <button className="text-[#2E8B57] hover:text-[#276947] font-medium text-sm" type="button">
                    阅读全文 →
                  </button>
                </div>
              </div>
            </article>

            {/* Post 5 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#8B4513] to-[#654321] flex items-center justify-center">
                <span className="text-white text-4xl">👶</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-[#8B4513] text-white px-2 py-1 rounded-full text-xs font-medium">育儿经验</span>
                  <span className="text-gray-500 text-xs ml-3">2024年1月3日</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  双语教育：如何在海外培养孩子的中文能力
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  在海外长大的华人孩子，如何保持中文能力是一个重要课题。
                  本文分享一些实用的双语教育方法和经验...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">阅读时间：10分钟</span>
                  <button className="text-[#2E8B57] hover:text-[#276947] font-medium text-sm" type="button">
                    阅读全文 →
                  </button>
                </div>
              </div>
            </article>

            {/* Post 6 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] flex items-center justify-center">
                <span className="text-white text-4xl">🎨</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-[#FF69B4] text-white px-2 py-1 rounded-full text-xs font-medium">生活技巧</span>
                  <span className="text-gray-500 text-xs ml-3">2024年1月1日</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  居家装饰：用中国元素打造温馨的海外之家
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  在海外生活，如何让家里保持中国文化的氛围？
                  本文为您介绍一些简单实用的居家装饰技巧...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">阅读时间：7分钟</span>
                  <button className="text-[#2E8B57] hover:text-[#276947] font-medium text-sm" type="button">
                    阅读全文 →
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2E8B57]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            订阅我们的博客
          </h2>
          <p className="text-xl text-green-100 mb-8">
            第一时间获取最新文章和社区动态，让生活更精彩
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入您的邮箱地址"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-[#2E8B57] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold" type="button">
              订阅
            </button>
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <button className="bg-white border-2 border-[#2E8B57] text-[#2E8B57] px-8 py-3 rounded-lg hover:bg-[#2E8B57] hover:text-white transition-colors font-semibold" type="button">
            加载更多文章
          </button>
        </div>
      </section>
    </div>
  );
} 