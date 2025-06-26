import { setRequestLocale } from 'next-intl/server';

type IJoinProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IJoinProps) {
  await props.params; // 确保params被解析，但不需要使用locale

  return {
    title: '成为服务提供者 - 金豆荚 JinBean',
    description: '加入金豆荚平台，成为服务提供者，为社区提供优质服务',
  };
}

export default async function Join(props: IJoinProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E8B57] to-[#276947] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            成为服务提供者
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            加入金豆荚平台，用您的专业技能为社区提供优质服务
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            为什么选择金豆荚？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#2E8B57] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">灵活收入</h3>
              <p className="text-gray-600">
                自由选择工作时间，按服务收费，收入透明可控
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2E8B57] text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">社区认可</h3>
              <p className="text-gray-600">
                获得用户好评和社区认可，建立个人品牌
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B22222] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">安全保障</h3>
              <p className="text-gray-600">
                平台提供保险保障，确保服务过程安全无忧
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">便捷管理</h3>
              <p className="text-gray-600">
                专业的服务管理工具，轻松管理订单和客户
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#50C878] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">技能提升</h3>
              <p className="text-gray-600">
                提供培训课程，帮助提升专业技能和服务质量
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#8B4513] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">多元文化</h3>
              <p className="text-gray-600">
                服务多元文化社区，体验不同文化背景
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            如何加入？
          </h2>
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[#2E8B57] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">注册账号</h3>
                <p className="text-gray-600">
                  下载金豆荚 App 或访问官网，完成账号注册和身份验证
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[#2E8B57] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">选择服务类型</h3>
                <p className="text-gray-600">
                  根据您的专业技能，选择适合的服务类型和区域
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[#2E8B57] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">提交申请</h3>
                <p className="text-gray-600">
                  填写详细信息，上传相关证件，提交入驻申请
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[#2E8B57] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">审核通过</h3>
                <p className="text-gray-600">
                  平台审核通过后，即可开始接单提供服务
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            我们需要的服务类型
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: '家政保洁', icon: '🧹', color: 'bg-blue-500' },
              { name: '维修保养', icon: '🔧', color: 'bg-green-500' },
              { name: '园艺护理', icon: '🌱', color: 'bg-yellow-500' },
              { name: '搬家服务', icon: '📦', color: 'bg-purple-500' },
              { name: '宠物护理', icon: '🐕', color: 'bg-pink-500' },
              { name: '教育培训', icon: '📚', color: 'bg-indigo-500' },
              { name: '健康医疗', icon: '🏥', color: 'bg-red-500' },
              { name: '法律服务', icon: '⚖️', color: 'bg-gray-500' },
            ].map((service) => (
              <div key={service.name} className={`bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition-shadow`}>
                <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-white text-xl">{service.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2E8B57] py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好开始了吗？
          </h2>
          <p className="text-xl text-green-100 mb-8">
            加入金豆荚，成为社区服务的一份子，让我们一起创造更美好的社区生活
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="bg-white text-[#2E8B57] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              立即申请
            </button>
            <button type="button" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#2E8B57] transition-colors font-semibold">
              了解更多
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 