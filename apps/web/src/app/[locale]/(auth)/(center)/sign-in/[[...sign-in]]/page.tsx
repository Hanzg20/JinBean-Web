import { SignIn } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';
import { getI18nPath } from '@/utils/Helpers';

type ISignInProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ISignInProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function SignInPage(props: ISignInProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  
  // Check if Clerk is configured
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  
  if (!clerkPublishableKey) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Authentication is not configured. Please set up Clerk to use this feature.</p>
      </div>
    );
  }
  
  return <SignIn path={getI18nPath('/sign-in', locale)} />;
}
