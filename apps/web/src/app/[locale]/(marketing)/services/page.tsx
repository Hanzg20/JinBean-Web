// import { setRequestLocale } from 'next-intl/server';

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

type IServicesProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IServicesProps) {
  await props.params; // 确保params被解析，但不需要使用locale

  return {
    title: '服务类型 - 金豆荚 JinBean',
    description: '金豆荚提供家政服务、工具租赁、社区互动等多种便民服务',
  };
}

export default async function Services(props: IServicesProps) {
  const { locale } = await props.params;
  // setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#2E8B57] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            我们的服务
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            为海外华人及本地居民提供全方位的便民生活服务
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 家政服务 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#2E8B57] to-[#276947] flex items-center justify-center">
                <span className="text-white text-6xl">🏠</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  家政服务
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• 专业保洁服务</li>
                  <li>• 家居维修保养</li>
                  <li>• 搬家服务</li>
                  <li>• 园艺护理</li>
                  <li>• 宠物护理</li>
                </ul>
                <button
                  type="button"
                  className="w-full bg-[#2E8B57] text-white py-3 rounded-lg hover:bg-[#276947] transition-colors"
                >
                  立即预约
                </button>
              </div>
            </div>

            {/* 工具租赁 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#FFD700] to-[#FFC300] flex items-center justify-center">
                <span className="text-[#2E8B57] text-6xl">🔧</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  工具租赁
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• 草坪修剪工具</li>
                  <li>• 维修设备</li>
                  <li>• 清洁设备</li>
                  <li>• 园艺工具</li>
                  <li>• 搬运设备</li>
                </ul>
                <button
                  type="button"
                  className="w-full bg-[#FFD700] text-[#2E8B57] py-3 rounded-lg hover:bg-[#FFC300] transition-colors font-semibold"
                >
                  查看工具
                </button>
              </div>
            </div>

            {/* 社区互动 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#B22222] to-[#8B0000] flex items-center justify-center">
                <span className="text-white text-6xl">👥</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  社区互动
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• 金豆圈社区</li>
                  <li>• 邻里互助</li>
                  <li>• 经验分享</li>
                  <li>• 活动组织</li>
                  <li>• 技能交换</li>
                </ul>
                <button
                  type="button"
                  className="w-full bg-[#B22222] text-white py-3 rounded-lg hover:bg-[#8B0000] transition-colors"
                >
                  加入社区
                </button>
              </div>
            </div>

            {/* 教育培训 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex items-center justify-center">
                <span className="text-white text-6xl">📚</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  教育培训
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• 语言学习</li>
                  <li>• 技能培训</li>
                  <li>• 文化课程</li>
                  <li>• 职业发展</li>
                  <li>• 兴趣培养</li>
                </ul>
                <button
                  type="button"
                  className="w-full bg-[#4A90E2] text-white py-3 rounded-lg hover:bg-[#357ABD] transition-colors"
                >
                  查看课程
                </button>
              </div>
            </div>

            {/* 健康医疗 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#50C878] to-[#3CB371] flex items-center justify-center">
                <span className="text-white text-6xl">🏥</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  健康医疗
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• 健康咨询</li>
                  <li>• 医疗翻译</li>
                  <li>• 体检预约</li>
                  <li>• 康复护理</li>
                  <li>• 心理健康</li>
                </ul>
                <button
                  type="button"
                  className="w-full bg-[#50C878] text-white py-3 rounded-lg hover:bg-[#3CB371] transition-colors"
                >
                  健康服务
                </button>
              </div>
            </div>

            {/* 法律服务 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#8B4513] to-[#654321] flex items-center justify-center">
                <span className="text-white text-6xl">⚖️</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  法律服务
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• 法律咨询</li>
                  <li>• 文件翻译</li>
                  <li>• 合同审查</li>
                  <li>• 移民服务</li>
                  <li>• 纠纷调解</li>
                </ul>
                <button
                  type="button"
                  className="w-full bg-[#8B4513] text-white py-3 rounded-lg hover:bg-[#654321] transition-colors"
                >
                  法律咨询
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2E8B57] py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            需要其他服务？
          </h2>
          <p className="text-xl text-green-100 mb-8">
            如果您有特殊需求，请联系我们，我们将为您提供定制化服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="bg-white text-[#2E8B57] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              联系我们
            </button>
            <button
              type="button"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#2E8B57] transition-colors font-semibold"
            >
              成为服务提供者
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
