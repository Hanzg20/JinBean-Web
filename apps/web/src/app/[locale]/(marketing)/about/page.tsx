import { getTranslations, setRequestLocale } from 'next-intl/server';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IAboutProps) {
  const { locale } = await props.params;

  return {
    title: '关于我们 - 金豆荚 JinBean',
    description: '了解金豆荚的品牌故事、使命愿景和团队介绍',
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#2E8B57] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            关于金豆荚
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            连接海外华人社区，创造更美好的邻里生活
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            我们的故事
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              金豆荚（JinBean）诞生于海外华人社区的真实需求。我们注意到，许多华人家庭在海外生活时，
              常常面临语言障碍、文化差异和服务获取困难等问题。同时，我们也发现社区中有很多有技能、
              有经验的华人，他们希望能够为社区贡献自己的力量。
            </p>
            <p className="text-lg leading-relaxed mb-6">
              于是，我们创建了金豆荚平台，旨在连接服务需求者和提供者，打造一个互助、共享、
              温暖的华人社区。就像豆荚包裹着金豆一样，我们希望金豆荚能够成为海外华人家庭的保护伞，
              为大家提供安全、可靠、贴心的生活服务。
            </p>
            <p className="text-lg leading-relaxed">
              从最初的小团队，到现在服务数千个家庭，金豆荚始终坚持以用户为中心，
              不断创新服务模式，提升用户体验。我们相信，通过科技的力量，
              可以让海外华人生活得更加便利、舒适和幸福。
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-[#2E8B57] rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">我们的使命</h3>
              <p className="text-gray-600 leading-relaxed">
                为海外华人及本地居民提供便捷、高效、贴心的生活服务平台，
                通过连接服务需求者和提供者，促进社区互助，创造更美好的邻里生活。
                我们致力于消除语言和文化障碍，让每个人都能享受到优质的生活服务。
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-[#FFD700] rounded-lg flex items-center justify-center mb-6">
                <span className="text-[#2E8B57] text-2xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">我们的愿景</h3>
              <p className="text-gray-600 leading-relaxed">
                成为海外华人社区最信赖的生活服务平台，打造一个互助、共享、
                温暖的数字社区。我们希望金豆荚能够成为连接海外华人的桥梁，
                让每个人都能在这里找到归属感，共同创造更美好的生活。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            我们的价值观
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '信任',
                description: '建立透明、可靠的平台，让用户放心使用',
                icon: '🤝',
                color: 'bg-blue-500'
              },
              {
                title: '互助',
                description: '促进社区互助，让每个人都能贡献和受益',
                icon: '❤️',
                color: 'bg-red-500'
              },
              {
                title: '创新',
                description: '持续创新服务模式，提升用户体验',
                icon: '💡',
                color: 'bg-yellow-500'
              },
              {
                title: '包容',
                description: '尊重多元文化，服务不同背景的用户',
                icon: '🌍',
                color: 'bg-green-500'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            我们的团队
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: '张明',
                role: '创始人 & CEO',
                description: '前 Google 工程师，拥有 10+ 年互联网产品经验',
                avatar: '张'
              },
              {
                name: '李华',
                role: '产品总监',
                description: '专注于用户体验设计，曾任职于 Airbnb',
                avatar: '李'
              },
              {
                name: '王芳',
                role: '运营总监',
                description: '社区运营专家，擅长用户增长和社区建设',
                avatar: '王'
              },
              {
                name: '陈强',
                role: '技术总监',
                description: '全栈工程师，负责平台技术架构和开发',
                avatar: '陈'
              },
              {
                name: '刘敏',
                role: '客服总监',
                description: '客户服务专家，确保用户满意度',
                avatar: '刘'
              },
              {
                name: '赵伟',
                role: '市场总监',
                description: '市场营销专家，负责品牌推广和用户获取',
                avatar: '赵'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-[#2E8B57] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-semibold">{member.avatar}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#2E8B57] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2E8B57]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            联系我们
          </h2>
          <p className="text-xl text-green-100 mb-8">
            如果您有任何问题或建议，欢迎随时联系我们
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-2">邮箱</h3>
              <p className="text-green-100">info@jinbean.com</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">电话</h3>
              <p className="text-green-100">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">地址</h3>
              <p className="text-green-100">多伦多，加拿大</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
