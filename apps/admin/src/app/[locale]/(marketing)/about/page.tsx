// import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(_props: IAboutProps) {
  // const { locale } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'About',
  // });
  return {
    title: 'About',
    description: 'About page description',
  };
}

export default async function About(_props: IAboutProps) {
  // const { locale } = await props.params;
  // setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'About',
  // });
  return (
    <>
      <p>Welcome to our About page! We are a team of passionate individuals dedicated to creating amazing software.</p>
      <div className="mt-2 text-center text-sm">
        Translation powered by
        <br />
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://l.crowdin.com/next-js"
        >
          Crowdin
        </a>
      </div>
      <a href="https://l.crowdin.com/next-js">
        <Image
          className="mx-auto mt-2"
          src="/assets/images/crowdin-dark.png"
          alt="Crowdin Translation Management System"
          width={128}
          height={26}
        />
      </a>
    </>
  );
}
