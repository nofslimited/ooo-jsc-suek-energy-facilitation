import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "ru";

type TranslationKey =
  | "common.close"
  | "news.title"
  | "news.subtitle";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    "common.close": "Close",
    "news.title": "News & Updates",
    "news.subtitle":
      "Latest company updates, energy market insights, logistics developments, and operational news from OOO JSC SUEK Energy Facilitation.",
  },
  ru: {
    "common.close": "Закрыть",
    "news.title": "Новости и обновления",
    "news.subtitle":
      "Последние новости компании, аналитика энергетического рынка, логистические обновления и операционная информация от OOO JSC SUEK Energy Facilitation.",
  },
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value = useMemo<LanguageContextValue>(() => {
    return {
      language,
      setLanguage,
      t: (key: string) => translations[language][key] || key,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}