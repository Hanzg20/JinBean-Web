import type { ReactNode } from 'react';
// import { UserButton } from '@clerk/nextjs';
// // import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { BaseTemplate } from '@/templates/BaseTemplate';
import { DashboardHeaderClient } from './DashboardHeader.client';

type DashboardLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function DashboardLayout({ children, params: _params }: DashboardLayoutProps) {
  // const { locale } = await params;
  // await setRequestLocale(locale);
  // const t = await getTranslations();

  return (
    <BaseTemplate leftNav={<div>Dashboard Navigation</div>}>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex gap-6 md:gap-10">
              <Link className="flex items-center space-x-2" href="/">
                <span className="inline-block font-bold">Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <DashboardHeaderClient />
              {/* <UserButton afterSignOutUrl="/" /> */}
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </BaseTemplate>
  );
}
