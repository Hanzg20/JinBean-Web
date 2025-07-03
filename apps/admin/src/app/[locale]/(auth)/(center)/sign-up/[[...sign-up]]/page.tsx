import { SignUp } from '@clerk/nextjs';
// import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

type ISignUpPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(_props: ISignUpPageProps) {
  // const { locale } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'SignUp',
  // });
  return {
    title: 'Sign up',
    description: 'Effortlessly create an account through our intuitive sign-up process.',
  };
}

export default async function SignUpPage(_props: ISignUpPageProps) {
  const { locale } = await _props.params;
  // setRequestLocale(locale);

  return (
    <SignUp path={getI18nPath('/sign-up', locale)} />
  );
};
