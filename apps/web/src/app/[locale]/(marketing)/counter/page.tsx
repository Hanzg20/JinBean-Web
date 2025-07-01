// import { getTranslations } from 'next-intl/server';
// import Image from 'next/image';
import React from 'react';

import { CounterForm } from '@/components/CounterForm';
import { CurrentCount } from '@/components/CurrentCount';

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

export async function generateMetadata(/* props: {
  params: Promise<{ locale: string }>;
} */) {
  // const { locale } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Counter',
  // });

  return {
    title: 'Counter Demo - JinBean',
    description: 'A simple counter demonstration',
  };
}

export default async function CounterPage(/* props: { params: Promise<{ locale: string }> } */) {
  // const { locale } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Counter',
  // });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Counter Demo</h1>
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-4">
            <p className="text-lg text-gray-600">Current count:</p>
            <p className="text-4xl font-bold text-blue-600">
              <CurrentCount />
            </p>
          </div>
          <CounterForm />
        </div>
      </div>
    </div>
  );
}
