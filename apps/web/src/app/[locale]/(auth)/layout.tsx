import type { ReactNode } from 'react';
// import { ClerkProvider } from '@clerk/nextjs';
// import { setRequestLocale } from 'next-intl/server';

// import { routing } from '@/libs/I18nRouting';
// import { ClerkLocalizations } from '@/utils/AppConfig';

type AuthLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function AuthLayout({ children, params: _params }: AuthLayoutProps) {
  // const { locale } = await params;
  // await setRequestLocale(locale);

  return (
    // <ClerkProvider localization={ClerkLocalizations}>
    <div className="flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Authentication
        </h2>
      </div>
      {children}
    </div>
    // </ClerkProvider>
  );
}
