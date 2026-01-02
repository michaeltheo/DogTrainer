'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';
import { Chip } from '@heroui/react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex gap-2 items-center">
      <Chip
        as="button"
        onClick={() => switchLocale('en')}
        isDisabled={isPending}
        variant={locale === 'en' ? 'solid' : 'flat'}
        color={locale === 'en' ? 'secondary' : 'default'}
        className={`cursor-pointer font-bold text-sm px-4 py-1 ${
          locale === 'en'
            ? 'bg-accent-500 text-white shadow-lg scale-110'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        aria-label="Switch to English"
      >
        EN
      </Chip>
      <Chip
        as="button"
        onClick={() => switchLocale('el')}
        isDisabled={isPending}
        variant={locale === 'el' ? 'solid' : 'flat'}
        color={locale === 'el' ? 'secondary' : 'default'}
        className={`cursor-pointer font-bold text-sm px-4 py-1 ${
          locale === 'el'
            ? 'bg-accent-500 text-white shadow-lg scale-110'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        aria-label="Αλλαγή σε Ελληνικά"
      >
        ΕΛ
      </Chip>
    </div>
  );
}
