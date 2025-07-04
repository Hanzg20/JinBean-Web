import { SignUp } from '@clerk/nextjs';
// import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

export function generateStaticParams() {
  return [
    { locale: 'en', signUp: [] },
    { locale: 'zh', signUp: [] },
    { locale: 'fr', signUp: [] },
  ];
}

export async function generateMetadata() {
  return {
    title: 'Sign up',
    description: 'Effortlessly create an account through our intuitive sign-up process.',
  };
}

export default async function SignUpPage({ params }: { params: any }) {
  const { locale } = params;
  // setRequestLocale(locale);

  return (
    <SignUp path={getI18nPath('/sign-up', locale)} />
  );
}
