import type { ReactNode } from 'react';

type CenterLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function CenterLayout(props: CenterLayoutProps) {
  const { locale } = await props.params;
  // 可根据 locale 做多语言处理
  return <>{props.children}</>;
}
