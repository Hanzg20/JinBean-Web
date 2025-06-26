type CenterLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function CenterLayout(props: CenterLayoutProps) {
  const { locale } = await props.params;
  return <>{props.children}</>;
}
