"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { memo, useCallback, useTransition } from "react";
import Image from "next/image";

interface LanguageButtonProps {
  isActive: boolean;
  isPending: boolean;
  onClick: () => void;
  flag: string;
  ariaLabel: string;
  locale: string;
}

const LanguageButton = memo(
  ({
    isActive,
    isPending,
    onClick,
    flag,
    ariaLabel,
    locale,
  }: LanguageButtonProps) => {
    return (
      <button
        onClick={onClick}
        disabled={isPending}
        className={`relative  transition-all duration-300 transform hover:scale-110 overflow-hidden ${
          isActive
            ? " shadow-md scale-105"
            : "opacity-50 hover:opacity-100 grayscale hover:grayscale-0"
        }`}
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        <Image
          src={flag}
          alt={`${locale} flag`}
          width={32}
          height={24}
          className="rounded-md"
        />
      </button>
    );
  }
);

LanguageButton.displayName = "LanguageButton";

const LanguageSwitcher = memo(() => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = useCallback(
    (newLocale: string) => {
      if (locale !== newLocale) {
        startTransition(() => {
          router.replace(pathname, { locale: newLocale });
        });
      }
    },
    [locale, pathname, router]
  );

  const handleEnglish = useCallback(
    () => handleLocaleChange("en"),
    [handleLocaleChange]
  );
  const handleGreek = useCallback(
    () => handleLocaleChange("el"),
    [handleLocaleChange]
  );

  return (
    <div className="inline-flex items-center gap-3">
      <LanguageButton
        isActive={locale === "en"}
        isPending={isPending}
        onClick={handleEnglish}
        flag="https://flagcdn.com/w40/gb.png"
        ariaLabel="Switch to English"
        locale="en"
      />
      <LanguageButton
        isActive={locale === "el"}
        isPending={isPending}
        onClick={handleGreek}
        flag="https://flagcdn.com/w40/gr.png"
        ariaLabel="Αλλαγή σε Ελληνικά"
        locale="el"
      />
    </div>
  );
});

LanguageSwitcher.displayName = "LanguageSwitcher";

export default LanguageSwitcher;
