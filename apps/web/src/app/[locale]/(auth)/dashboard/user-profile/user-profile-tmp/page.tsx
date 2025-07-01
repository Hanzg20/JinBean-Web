// import { UserProfile } from '@clerk/nextjs';
// // import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';

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

export default async function UserProfilePage({ params: _params }: IUserProfileProps) {
  // const { locale } = await params;
  // await setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          User Profile
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Manage your profile settings
        </p>
      </div>
      {/* <UserProfile /> */}
    </div>
  );
}
