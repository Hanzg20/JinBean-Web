import type { ReactNode } from 'react';
import { SignOutButton } from '@clerk/nextjs';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { BaseTemplate } from '@/templates/BaseTemplate';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

type DashboardLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function DashboardLayout(props: DashboardLayoutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <BaseTemplate
      leftNav={(
        <>
          <li>
            <Link href={`/${locale}/dashboard/`} className="border-none text-gray-700 hover:text-gray-900">
              仪表盘
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/dashboard/user-profile/`} className="border-none text-gray-700 hover:text-gray-900">
              用户资料
            </Link>
          </li>
        </>
      )}
      rightNav={(
        <>
          <li>
            <SignOutButton>
              <button className="border-none text-gray-700 hover:text-gray-900" type="button">
                退出登录
              </button>
            </SignOutButton>
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
