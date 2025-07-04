// // import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';
import { getI18nPath } from '@/utils/Helpers';

type IPortfolioProps = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

export async function generateMetadata(props: IPortfolioProps) {
  const { locale: _locale } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Portfolio',
  // });

  return {
    title: 'Portfolio - JinBean',
    description: 'View our portfolio of projects and achievements',
  };
}

export default async function PortfolioPage(props: IPortfolioProps) {
  const { locale } = await props.params;
  // setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Portfolio',
  // });

  const projects = [
    { id: '1', title: 'Project 1', description: 'A modern web application built with Next.js and TypeScript' },
    { id: '2', title: 'Project 2', description: 'E-commerce platform with advanced features and analytics' },
    { id: '3', title: 'Project 3', description: 'Mobile-first responsive design with cutting-edge technologies' },
    { id: '4', title: 'Project 4', description: 'Full-stack application with real-time collaboration features' },
    { id: '5', title: 'Project 5', description: 'AI-powered dashboard with data visualization and insights' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Portfolio</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our collection of successful projects that showcase our expertise in modern web development and innovative solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                href={getI18nPath(`/portfolio/${project.id}`, locale)}
                className="inline-block bg-[#2E8B57] text-white px-4 py-2 rounded-lg hover:bg-[#276947] transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

