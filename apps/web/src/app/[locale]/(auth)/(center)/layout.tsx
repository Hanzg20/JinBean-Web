import { setRequestLocale } from 'next-intl/server';

type CenterLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function CenterLayout(props: CenterLayoutProps) {
  const { locale } = props.params;
  return <>{props.children}</>;
}
