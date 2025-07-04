// // import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';
import { routing } from '@/libs/I18nRouting';

type IPortfolioDetailProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export function generateStaticParams() {
  return routing.locales
    .map(locale =>
      Array.from(Array.from({ length: 6 }).keys()).map(elt => ({
        slug: `${elt}`,
        locale,
      })),
    )
    .flat(1);
}

export async function generateMetadata(props: IPortfolioDetailProps) {
  const { locale: _locale, slug } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'PortfolioSlug',
  // });

  return {
    title: `Portfolio - ${slug} - JinBean`,
    description: `View details of ${slug} project`,
  };
}

export default async function PortfolioSlugPage(props: IPortfolioDetailProps) {
  const { slug, locale: _locale } = await props.params;
  // setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'PortfolioSlug',
  // });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Portfolio Project:
        {' '}
        {slug}
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-4">
          This is a detailed view of the
          {' '}
          {slug}
          {' '}
          project. Here you can see all the details, technologies used, and outcomes of this project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <p className="text-gray-700">
              This project demonstrates our expertise in modern web development and showcases the quality of work we deliver to our clients.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Next.js 15</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Modern React Patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamicParams = false;

