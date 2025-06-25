import type { ReactNode } from 'react';

type CenterLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default function CenterLayout(props: CenterLayoutProps) {
  const { locale } = props.params;
  // 可根据 locale 做多语言处理
  return <>{props.children}</>;
}
