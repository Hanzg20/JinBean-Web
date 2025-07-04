import { redirect } from 'next/navigation';

export default async function RootPage() {
  // For static export, redirect to default locale
  redirect('/en');
}

