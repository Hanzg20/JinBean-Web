// import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
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

export async function generateMetadata(_props: IPortfolioDetailProps) {
  const { slug } = await _props.params;
  return {
    title: `Portfolio ${slug}`,
    description: `Portfolio ${slug} description`,
  };
}

export default async function PortfolioDetail(_props: IPortfolioDetailProps) {
  const { slug } = await _props.params;
  return (
    <>
      <h1 className="capitalize">{`Portfolio ${slug}`}</h1>
      <p>Created a set of promotional materials and branding elements for a corporate event. Crafted a visually unified theme, encompassing a logo, posters, banners, and digital assets. Integrated the client's brand identity while infusing it with a contemporary and innovative approach.</p>
      <div className="mt-5 text-center text-sm">
        Code review powered by
        {' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
        >
          CodeRabbit
        </a>
      </div>
      <a
        href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
      >
        <Image
          className="mx-auto mt-2"
          src="/assets/images/coderabbit-logo-light.svg"
          alt="CodeRabbit"
          width={128}
          height={22}
        />
      </a>
    </>
  );
}

export const dynamicParams = false;
