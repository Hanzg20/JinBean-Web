// import { currentUser } from '@clerk/nextjs/server';
// import { getTranslations } from 'next-intl/server';
// import { Sponsors } from './Sponsors';

export const Hello = async () => {
  // const t = await getTranslations();
  // const user = await currentUser();

  return (
    <>
      <p>Hello!</p>
      <p>
        Want to build your SaaS faster using the same stack? Try
        {' '}
        <a className="text-blue-700 hover:border-b-2 hover:border-blue-700" href="https://nextjs-boilerplate.com/pro-saas-starter-kit">Next.js Boilerplate SaaS</a>
        .
      </p>
      {/* <Sponsors /> */}
    </>
  );
};
