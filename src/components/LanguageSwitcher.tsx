"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { memo, useCallback, useTransition } from "react";

interface LanguageButtonProps {
  isActive: boolean;
  isPending: boolean;
  onClick: () => void;
  label: string;
  ariaLabel: string;
}

const LanguageButton = memo(({ isActive, isPending, onClick, label, ariaLabel }: LanguageButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isPending}
      className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all duration-200 ${
        isActive
          ? "text-black"
          : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
      }`}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
});

LanguageButton.displayName = "LanguageButton";

const LanguageSwitcher = memo(() => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = useCallback((newLocale: string) => {
    if (locale !== newLocale) {
      startTransition(() => {
        router.replace(pathname, { locale: newLocale });
      });
    }
  }, [locale, pathname, router]);

  const handleEnglish = useCallback(() => handleLocaleChange("en"), [handleLocaleChange]);
  const handleGreek = useCallback(() => handleLocaleChange("el"), [handleLocaleChange]);

  return (
    <div className="inline-flex items-center gap-1 rounded-lg p-1 border border-gray-200 w-auto">
      <LanguageButton
        isActive={locale === "en"}
        isPending={isPending}
        onClick={handleEnglish}
        label="EN"
        ariaLabel="Switch to English"
      />
      <LanguageButton
        isActive={locale === "el"}
        isPending={isPending}
        onClick={handleGreek}
        label="ΕΛ"
        ariaLabel="Αλλαγή σε Ελληνικά"
      />
    </div>
  );
});

LanguageSwitcher.displayName = "LanguageSwitcher";

export default LanguageSwitcher;
