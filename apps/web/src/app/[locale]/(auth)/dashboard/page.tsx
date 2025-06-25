import { getTranslations } from 'next-intl/server';
import { Hello } from '@/components/Hello';

type IDashboardProps = {
  params: { locale: string };
};

export async function generateMetadata(props: IDashboardProps) {
  const { locale } = props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

export default async function Dashboard(props: IDashboardProps) {
  const { locale } = props.params;
  return (
    <div className="py-5 [&_p]:my-6">
      <Hello />
    </div>
  );
}
