import { setRequestLocale } from 'next-intl/server';

type ICommunityProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ICommunityProps) {
  await props.params; // 确保params被解析，但不需要使用locale

  return {
    title: '金豆圈社区 - 金豆荚 JinBean',
    description: '加入金豆圈社区，与邻里分享生活经验，参与社区活动',
  };
}

export default async function Community(props: ICommunityProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E8B57] to-[#276947] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            金豆圈社区
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            连接邻里，分享生活，共建温暖社区
          </p>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#2E8B57] mb-2">
                5,000+
              </div>
              <div className="text-gray-600">社区成员</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
                1,200+
              </div>
              <div className="text-gray-600">互助帖子</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#B22222] mb-2">
                50+
              </div>
              <div className="text-gray-600">社区活动</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#4A90E2] mb-2">
                98%
              </div>
              <div className="text-gray-600">满意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            社区功能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-[#2E8B57] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                邻里交流
              </h3>
              <p className="text-gray-600">
                分享生活经验，交流育儿心得，讨论社区话题，建立邻里友谊
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#2E8B57] text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                互助服务
              </h3>
              <p className="text-gray-600">
                发布求助信息，提供技能帮助，实现邻里互助，共同解决问题
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-[#B22222] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                社区活动
              </h3>
              <p className="text-gray-600">
                组织节日庆祝、文化分享、技能培训等丰富多彩的社区活动
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                信息发布
              </h3>
              <p className="text-gray-600">
                及时发布社区通知、活动信息、服务推荐等重要消息
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-[#50C878] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                评价推荐
              </h3>
              <p className="text-gray-600">
                分享服务体验，推荐优质商家，帮助其他用户做出选择
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-[#8B4513] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                积分奖励
              </h3>
              <p className="text-gray-600">
                参与社区活动获得积分，兑换优惠券和服务折扣
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            热门讨论
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#2E8B57] rounded-full flex items-center justify-center text-white font-semibold">
                  张
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">张阿姨</p>
                  <p className="text-sm text-gray-500">2小时前</p>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                推荐一位很棒的保洁阿姨
              </h3>
              <p className="text-gray-600 mb-4">
                上周通过金豆荚预约了李阿姨的保洁服务，非常专业细心，家里焕然一新！
                强烈推荐给大家，有需要的可以私信我联系方式。
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>👍 15 赞</span>
                <span>💬 8 评论</span>
                <span>📤 3 分享</span>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-[#2E8B57] font-semibold">
                  李
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">李师傅</p>
                  <p className="text-sm text-gray-500">5小时前</p>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                免费提供园艺咨询
              </h3>
              <p className="text-gray-600 mb-4">
                我是专业园艺师，有20年经验。如果大家有园艺问题，可以随时咨询我。
                这周末我还会在社区中心举办免费园艺讲座，欢迎参加！
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>👍 28 赞</span>
                <span>💬 12 评论</span>
                <span>📤 5 分享</span>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#B22222] rounded-full flex items-center justify-center text-white font-semibold">
                  王
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">王女士</p>
                  <p className="text-sm text-gray-500">1天前</p>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">寻找中文家教</h3>
              <p className="text-gray-600 mb-4">
                孩子今年上小学，想找一位有经验的中文家教老师。
                希望老师有耐心，能够培养孩子对中文的兴趣。
                有推荐的老师请私信我，谢谢！
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>👍 8 赞</span>
                <span>💬 6 评论</span>
                <span>📤 2 分享</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            即将举行的活动
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#2E8B57] to-[#276947] flex items-center justify-center">
                <span className="text-white text-4xl">🎨</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  中国传统文化工作坊
                </h3>
                <p className="text-gray-600 mb-4">
                  学习书法、剪纸、茶艺等传统文化，感受中华文化魅力
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>📅 本周六 14:00</span>
                  <span>📍 社区中心</span>
                </div>
                <button
                  className="w-full bg-[#2E8B57] text-white py-2 rounded-lg hover:bg-[#276947] transition-colors"
                  type="button"
                >
                  立即报名
                </button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#FFD700] to-[#FFC300] flex items-center justify-center">
                <span className="text-[#2E8B57] text-4xl">🍳</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  美食分享会
                </h3>
                <p className="text-gray-600 mb-4">
                  分享家乡美食，学习烹饪技巧，品尝各地特色菜
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>📅 下周日 16:00</span>
                  <span>📍 社区厨房</span>
                </div>
                <button
                  className="w-full bg-[#FFD700] text-[#2E8B57] py-2 rounded-lg hover:bg-[#FFC300] transition-colors font-semibold"
                  type="button"
                >
                  立即报名
                </button>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#B22222] to-[#8B0000] flex items-center justify-center">
                <span className="text-white text-4xl">🎵</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  音乐交流会
                </h3>
                <p className="text-gray-600 mb-4">
                  欣赏中西方音乐，学习乐器演奏，享受音乐的魅力
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>📅 下周六 19:00</span>
                  <span>📍 音乐厅</span>
                </div>
                <button
                  className="w-full bg-[#B22222] text-white py-2 rounded-lg hover:bg-[#8B0000] transition-colors"
                  type="button"
                >
                  立即报名
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="bg-[#2E8B57] py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            加入金豆圈社区
          </h2>
          <p className="text-xl text-green-100 mb-8">
            下载金豆荚 App，立即加入我们的社区，与邻里分享生活，参与精彩活动
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-[#2E8B57] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              type="button"
            >
              下载 App
            </button>
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#2E8B57] transition-colors font-semibold"
              type="button"
            >
              了解更多
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
