import { useTranslations } from 'next-intl';
// import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import React, { Suspense } from 'react';

import { CounterForm } from '@/components/CounterForm';
import { CurrentCount } from '@/components/CurrentCount';

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Counter',
  // });

  return {
    title: 'Counter Demo - JinBean',
    description: 'A simple counter demonstration',
  };
}

export default function CounterPage() {
  const t = useTranslations('Counter' as any);

  return (
    <>
      <CounterForm />

      <div className="mt-3">
        <Suspense fallback={<p>Loading counter...</p>}>
          <CurrentCount />
        </Suspense>
      </div>

      <div className="mt-5 text-center text-sm">
        Security powered by{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://launch.arcjet.com/Q6eLbRE"
        >
          Arcjet
        </a>
      </div>

      <a href="https://launch.arcjet.com/Q6eLbRE">
        <Image
          className="mx-auto mt-2"
          src="/assets/images/arcjet-light.svg"
          alt="Arcjet"
          width={128}
          height={38}
        />
      </a>
    </>
  );
}
