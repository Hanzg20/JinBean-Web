import React from 'react';
import { SignUp } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

type ISignUpProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ISignUpProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignUp',
  });

  return {
    title: t('SignUp.meta_title'),
    description: t('SignUp.meta_description'),
  };
}

export default function SignUpPage() {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return <SignUp path={getI18nPath('/sign-up', locale)} />;
}
