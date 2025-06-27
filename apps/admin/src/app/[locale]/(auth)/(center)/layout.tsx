import type { ReactNode } from 'react';

type CenterLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function CenterLayout(props: CenterLayoutProps) {
  await props.params; // 确保params被解析，但不需要使用locale
  // 可根据 locale 做多语言处理
  return <>{props.children}</>;
}
