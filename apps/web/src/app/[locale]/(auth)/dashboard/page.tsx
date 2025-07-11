import React from 'react';
import { Hello } from '@/components/Hello';

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

type IDashboardProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IDashboardProps) {
  // const { locale } = await props.params;
  await props.params;
  // // const t = await getTranslations({
  //   locale,
  //   namespace: 'Dashboard',
  // });

  return {
    title: 'Dashboard',
  };
}

export default async function DashboardPage(props: IDashboardProps) {
  await props.params; // 确保params被解析，但不需要使用locale
  return (
    <div className="py-5 [&_p]:my-6">
      <Hello />
    </div>
  );
}

