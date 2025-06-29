import { getTranslations } from 'next-intl/server';
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

export async function generateMetadata(props: IPortfolioDetailProps) {
  const { locale, slug } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'PortfolioSlug',
  });

  return {
    title: (t as any)('meta_title', { slug }),
    description: (t as any)('meta_description', { slug }),
  };
}

export default async function PortfolioDetail(props: IPortfolioDetailProps) {
  const { slug } = await props.params;
  const t = await getTranslations({
    locale: 'en',
    namespace: 'PortfolioSlug',
  });

  return (
    <>
      <h1 className="capitalize">{(t as any)('header', { slug })}</h1>
      <p>{(t as any)('content')}</p>

      <div className="mt-5 text-center text-sm">
        {`${(t as any)('code_review_powered_by')} `}
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
};

export const dynamicParams = false;
