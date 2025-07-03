import { SignIn } from '@clerk/nextjs';
// import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

type ISignInPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(_props: ISignInPageProps) {
  // const { locale } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'SignIn',
  // });
  return {
    title: 'Sign in',
    description: 'Seamlessly sign in to your account with our user-friendly login process.',
  };
}

export default async function SignInPage(_props: ISignInPageProps) {
  const { locale } = await _props.params;
  // setRequestLocale(locale);

  return (
    <SignIn path={getI18nPath('/sign-in', locale)} />
  );
};
