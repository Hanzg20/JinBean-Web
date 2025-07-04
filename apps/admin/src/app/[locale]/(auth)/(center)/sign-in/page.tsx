import { SignIn } from '@clerk/nextjs';
// import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

export function generateStaticParams() {
  return [
    { locale: 'en', signIn: [] },
    { locale: 'zh', signIn: [] },
    { locale: 'fr', signIn: [] },
  ];
}

export async function generateMetadata() {
  return {
    title: 'Sign in',
    description: 'Seamlessly sign in to your account with our user-friendly login process.',
  };
}

export default async function SignInPage({ params }: { params: any }) {
  const { locale } = params;
  // setRequestLocale(locale);

  return (
    <SignIn path={getI18nPath('/sign-in', locale)} />
  );
}
