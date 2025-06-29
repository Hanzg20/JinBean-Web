import { UserProfile } from '@clerk/nextjs';
// // import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';
import { getI18nPath } from '@/utils/Helpers';

type IUserProfileProps = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

export async function generateMetadata(/* props: IUserProfileProps */) {
  // const { locale } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'UserProfile',
  // });

  return {
    title: 'User Profile - JinBean',
    description: 'Manage your JinBean profile',
  };
}

export default async function UserProfilePage(props: IUserProfileProps) {
  const { locale } = await props.params;
  // setRequestLocale(locale);

  // Check if Clerk is configured
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!clerkPublishableKey) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Authentication is not configured. Please set up Clerk to use this feature.</p>
      </div>
    );
  }

  return <UserProfile path={getI18nPath('/user-profile', locale)} />;
}
