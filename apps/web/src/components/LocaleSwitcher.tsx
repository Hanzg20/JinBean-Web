'use client';

import Link from 'next/link';
// import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { usePathname } from '@/libs/I18nNavigation';
import { routing } from '@/libs/I18nRouting';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  // const locale = useLocale();

  const handleChange = (cur: string) => {
    router.push(`/${cur}${pathname}`);
    router.refresh(); // Ensure the page takes the new locale into account related to the issue #395
  };

  return (
    <div className="flex gap-2">
      {routing.locales.map(cur => (
        <Link
          key={cur}
          href={`/${cur}`}
          className={`rounded-md px-3 py-2 text-sm font-medium ${
            cur === 'en' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => handleChange(cur)}
        >
          {cur.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};
