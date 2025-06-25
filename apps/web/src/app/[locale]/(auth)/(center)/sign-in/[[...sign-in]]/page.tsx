import { SignIn } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

type ISignInProps = {
  params: { locale: string };
};

export async function generateMetadata(props: ISignInProps) {
  const { locale } = props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function SignIn(props: ISignInProps) {
  const { locale } = props.params;
  setRequestLocale(locale);

  return (
    <SignIn path={getI18nPath('/sign-in', locale)} />
  );
}
