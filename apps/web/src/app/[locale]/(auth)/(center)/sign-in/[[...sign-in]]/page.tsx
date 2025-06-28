import { SignIn } from '@clerk/nextjs';
import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
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
  return <SignIn path={getI18nPath('/sign-in', locale)} />;
}
