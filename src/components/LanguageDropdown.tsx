"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { memo, useCallback, useTransition } from "react";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Globe, ChevronDown } from "lucide-react";
import { languages, availableLocales, type Locale } from "@/config/languages";

/**
 * Language Dropdown Component
 *
 * A dropdown menu for language selection with language codes and native names.
 *
 * Features:
 * - Language code badges (EN, EL)
 * - Native language names
 * - Smooth animations and transitions
 * - Fully accessible with ARIA labels
 * - Responsive design
 * - High contrast dropdown for better visibility
 *
 * @example
 * ```tsx
 * <LanguageDropdown />
 * ```
 */
const LanguageDropdown = memo(() => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = useCallback(
    (newLocale: Locale) => {
      if (locale !== newLocale) {
        startTransition(() => {
          router.replace(pathname, { locale: newLocale });
        });
      }
    },
    [locale, pathname, router]
  );

  return (
    <Dropdown
      classNames={{
        content: "bg-white border-2 border-gray-200 shadow-xl min-w-[200px]",
      }}
    >
      <DropdownTrigger>
        <Button
          variant="light"
          className="relative group hover:bg-orange-50 hover:cursor-pointer transition-all duration-300 gap-2 px-3 min-w-0"
          aria-label="Select language"
          isDisabled={isPending}
          size="sm"
        >
          <Globe className="h-4 w-4 text-orange-500 group-hover:scale-110 transition-transform duration-300 shrink-0" />
          <ChevronDown className="h-3 w-3 text-gray-600 transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0" />
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Language selection"
        onAction={(key) => handleLanguageChange(key as Locale)}
        selectedKeys={[locale]}
        selectionMode="single"
        classNames={{
          base: "bg-white",
        }}
      >
        {availableLocales.map((lang) => {
          const langInfo = languages[lang];
          const isActive = locale === lang;

          return (
            <DropdownItem
              key={lang}
              className={`py-3 px-4 ${
                isActive ? "bg-orange-50 font-semibold" : "hover:bg-gray-50"
              }`}
              classNames={{
                base: "data-[hover=true]:bg-gray-100",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-bold text-white bg-orange-500 rounded shadow-sm min-w-10 text-center">
                  {langInfo.code}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    {langInfo.nativeName}
                  </span>
                  <span className="text-xs text-gray-500">{langInfo.name}</span>
                </div>
              </div>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
});

LanguageDropdown.displayName = "LanguageDropdown";

export default LanguageDropdown;
