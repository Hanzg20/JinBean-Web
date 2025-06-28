// import { getTranslations } from 'next-intl/server';
// import { headers } from 'next/headers';
// import { db } from '@/libs/DB';
// import { logger } from '@/libs/Logger';
// import { counterSchema } from '@/models/Schema';
// import { eq } from 'drizzle-orm';

export const CurrentCount = async () => {
  // The default value is 0 when there is no `x-e2e-random-id` header
  // const id = Number((await headers()).get('x-e2e-random-id')) ?? 0;
  return <span>0</span>;
};
