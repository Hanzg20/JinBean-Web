import { SignUp } from '@clerk/nextjs';
// // import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';
import { getI18nPath } from '@/utils/Helpers';

type ISignUpProps = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

export async function generateMetadata(props: ISignUpProps) {
  const { locale } = await props.params;
  // const t = await getTranslations({
    locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function SignUpPage(props: ISignUpProps) {
  const { locale } = await props.params;
  // setRequestLocale(locale);

  // Check if Clerk is configured
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!clerkPublishableKey) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Authentication is not configured. Please set up Clerk to use this feature.</p>
      </div>
    );
  }

  return <SignUp path={getI18nPath('/sign-up', locale)} />;
}
