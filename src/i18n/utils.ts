import { translations, type Locale, type TranslationKey } from "./translations";

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as Locale;
  return "en";
}

export function useTranslations(lang: Locale) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] ?? translations.en[key] ?? key;
  };
}

export function getLocalePath(lang: Locale, path: string = "/"): string {
  if (lang === "en") return path;
  return `/${lang}${path}`;
}

export const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "it", label: "IT" },
];
