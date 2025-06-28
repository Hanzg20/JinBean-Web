// import { currentUser } from '@clerk/nextjs/server';
// const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
// if (clerkPublishableKey) {
//   // ...Clerk logic
// } else {
//   console.warn('Clerk not properly configured:', error);
// }

import { getTranslations } from 'next-intl/server';
import { Sponsors } from './Sponsors';

export const Hello = async () => {
  const t = await getTranslations();

  return (
    <div>
      {/* Clerk 相关内容已注释，仅展示基本内容 */}
      <p>{t('Dashboard.hello_message')}</p>
      <Sponsors />
    </div>
  );
};
