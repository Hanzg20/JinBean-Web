import { setRequestLocale } from 'next-intl/server';

type IAboutProps = {
  params: { locale: string };
};

export async function generateMetadata(props: IAboutProps) {
  const { locale } = props.params;
  return {
    title: '关于我们 - 金豆荚 JinBean',
    description: '了解 JinBean 团队和我们的使命',
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = props.params;
  setRequestLocale(locale);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">关于我们</h1>
      <p className="mb-4 text-lg text-gray-700">
        金豆荚 JinBean 致力于为海外华人和本地居民提供便捷的生活服务，
        通过我们的平台，您可以轻松找到优质的服务资源，加入社区，分享经验。
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">我们的使命</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>连接海外华人与本地服务资源</li>
        <li>打造多语言、跨文化的友好社区</li>
        <li>提升生活便利性与幸福感</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">团队介绍</h2>
      <p className="text-gray-700">
        JinBean 团队由一群热爱技术、关注社区、具有国际视野的成员组成，
        我们希望用科技和服务让每一位用户都能感受到温暖与支持。
      </p>
    </div>
  );
}
