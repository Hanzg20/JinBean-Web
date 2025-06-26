import { setRequestLocale } from 'next-intl/server';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IAboutProps) {
  const { locale } = await props.params;
  return {
    title: '关于我们 - 金豆荚 JinBean',
    description: '了解 JinBean 团队和我们的使命',
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="relative container mx-auto py-12 px-4 overflow-hidden rounded-xl border-4 border-cyan-400 shadow-2xl animate-glow bg-white/80 backdrop-blur-md">
      {/* Animated background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-cyan-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl animate-blob z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-yellow-300 via-pink-400 to-cyan-400 opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000 z-0" />
      {/* Animated gradient title */}
      <h1 className="relative z-10 text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
        关于我们
      </h1>
      <p className="relative z-10 mb-4 text-lg text-gray-700 animate-fade-in">
        金豆荚 JinBean 致力于为海外华人和本地居民提供便捷的生活服务，
        通过我们的平台，您可以轻松找到优质的服务资源，加入社区，分享经验。
      </p>
      <h2 className="relative z-10 text-2xl font-semibold mt-8 mb-4 animate-fade-in animation-delay-500">我们的使命</h2>
      <ul className="relative z-10 list-disc pl-6 text-gray-700 space-y-2 animate-fade-in animation-delay-700">
        <li>连接海外华人与本地服务资源</li>
        <li>打造多语言、跨文化的友好社区</li>
        <li>提升生活便利性与幸福感</li>
      </ul>
      <h2 className="relative z-10 text-2xl font-semibold mt-8 mb-4 animate-fade-in animation-delay-1000">团队介绍</h2>
      <p className="relative z-10 text-gray-700 animate-fade-in animation-delay-1200">
        JinBean 团队由一群热爱技术、关注社区、具有国际视野的成员组成，
        我们希望用科技和服务让每一位用户都能感受到温暖与支持。
      </p>
    </div>
  );
}
