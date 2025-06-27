type CenterLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function CenterLayout(props: CenterLayoutProps) {
  await props.params; // 确保params被解析，但不需要使用locale
  return <>{props.children}</>;
}
