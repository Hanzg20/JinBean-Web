import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <BaseTemplate
      leftNav={(
        <>
          <li>
            <Link
              href="/"
              className="border-none text-gray-700 hover:text-[#2E8B57] font-medium"
            >
              首页
            </Link>
          </li>
          <li>
            <Link
              href="/services/"
              className="border-none text-gray-700 hover:text-[#2E8B57] font-medium"
            >
              服务
            </Link>
          </li>
          <li>
            <Link
              href="/community/"
              className="border-none text-gray-700 hover:text-[#2E8B57] font-medium"
            >
              社区
            </Link>
          </li>
          <li>
            <Link
              href="/blog/"
              className="border-none text-gray-700 hover:text-[#2E8B57] font-medium"
            >
              博客
            </Link>
          </li>
          <li>
            <Link
              href="/about/"
              className="border-none text-gray-700 hover:text-[#2E8B57] font-medium"
            >
              关于我们
            </Link>
          </li>
        </>
      )}
      rightNav={(
        <>
          <li>
            <Link
              href="/join/"
              className="border-none text-gray-700 hover:text-[#2E8B57] font-medium"
            >
              入驻
            </Link>
          </li>
          <li>
            <Link
              href="/sign-in/"
              className="border-none text-gray-700 hover:text-[#2E8B57] font-medium"
            >
              登录
            </Link>
          </li>
          <li>
            <Link
              href="/sign-up/"
              className="bg-[#2E8B57] text-white px-4 py-2 rounded-lg hover:bg-[#276947] transition-colors"
            >
              注册
            </Link>
          </li>
          <li>
            <LocaleSwitcher />
          </li>
        </>
      )}
    >
      {props.children}
    </BaseTemplate>
  );
}
