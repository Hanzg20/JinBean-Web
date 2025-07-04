// import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

type IPortfolioSlugProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return [
    { locale: 'en', slug: 'project-1' },
    { locale: 'en', slug: 'project-2' },
    { locale: 'zh', slug: 'project-1' },
    { locale: 'zh', slug: 'project-2' },
    { locale: 'fr', slug: 'project-1' },
    { locale: 'fr', slug: 'project-2' },
  ];
}

export async function generateMetadata(_props: IPortfolioSlugProps) {
  // const { locale, slug } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Portfolio',
  // });
  return {
    title: 'Portfolio Project',
    description: 'Portfolio project details',
  };
}

export default async function PortfolioSlug(_props: IPortfolioSlugProps) {
  // const { locale, slug } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Portfolio',
  // });

  return (
    <>
      <h1>Portfolio Project Details</h1>
      <p>This is a detailed view of a portfolio project.</p>
      <div className="mt-4">
        <Image
          src="/assets/images/placeholder.png"
          alt="Project placeholder"
          width={400}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h2>Project Description</h2>
        <p>This is a sample project description that would be replaced with actual content.</p>
      </div>
      <div className="mt-4">
        <h2>Technologies Used</h2>
        <ul className="list-disc list-inside">
          <li>Next.js</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </>
  );
}

export const dynamicParams = false;
