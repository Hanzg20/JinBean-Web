import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Hello } from '@/components/Hello';

type IDashboardProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IDashboardProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('Dashboard.meta_title'),
  };
}

export default function DashboardPage(props: IDashboardProps) {
  await props.params; // 确保params被解析，但不需要使用locale
  return (
    <div className="py-5 [&_p]:my-6">
      <Hello />
    </div>
  );
}
