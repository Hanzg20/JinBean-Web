// import { SignIn } from '@clerk/nextjs';
// // import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';
// import { getI18nPath } from '@/utils/Helpers';

type ISignInProps = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

export async function generateMetadata(/* props: ISignInProps */) {
  // const { locale } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'SignIn',
  // });

  return {
    title: 'Sign In - JinBean',
    description: 'Sign in to your JinBean account',
  };
}

export default async function SignInPage({ params: _params }: ISignInProps) {
  // const { locale } = await params;
  // await setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign In
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to your account
        </p>
      </div>
      {/* <SignIn /> */}
    </div>
  );
}

