import { UserProfile } from '@clerk/nextjs';
// import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

export function generateStaticParams() {
  return [
    { locale: 'en', userProfile: [] },
    { locale: 'zh', userProfile: [] },
    { locale: 'fr', userProfile: [] },
  ];
}

export async function generateMetadata() {
  return {
    title: 'User Profile',
  };
}

export default async function UserProfilePage({ params }: { params: any }) {
  const { locale } = params;
  // setRequestLocale(locale);

  return (
    <div className="my-6 -ml-16">
      <UserProfile
        path={getI18nPath('/dashboard/user-profile', locale)}
      />
    </div>
  );
}
