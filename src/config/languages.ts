export type Locale = "en" | "el";

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
}

export const languages: Record<Locale, LanguageInfo> = {
  en: {
    code: "EN",
    name: "English",
    nativeName: "English",
  },
  el: {
    code: "EL",
    name: "Greek",
    nativeName: "Ελληνικά",
  },
};

export const availableLocales: Locale[] = ["en", "el"];
