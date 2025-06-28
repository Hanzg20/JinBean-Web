import { currentUser } from '@clerk/nextjs/server';
import { getTranslations } from 'next-intl/server';
import { Sponsors } from './Sponsors';

export const Hello = async () => {
  const t = await getTranslations();

  // Check if Clerk is configured
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  let user = null;

  if (clerkPublishableKey) {
    try {
      user = await currentUser();
    } catch (error) {
      console.warn('Clerk not properly configured:', error);
    }
  }

  return (
    <>
      <p>
        {`👋 `}
        {(t as any)('Dashboard.hello_message', { email: user?.primaryEmailAddress?.emailAddress ?? 'Guest' })}
      </p>
      <p>
        {(t as any).rich('Dashboard.alternative_message', {
          url: () => (
            <a
              className="text-blue-700 hover:border-b-2 hover:border-blue-700"
              href="https://nextjs-boilerplate.com/pro-saas-starter-kit"
            >
              Next.js Boilerplate SaaS
            </a>
          ),
        })}
      </p>
      <Sponsors />
    </>
  );
};
