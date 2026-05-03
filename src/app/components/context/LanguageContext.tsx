import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Language = "en" | "ru";

type TranslationKey =
  | "news.title"
  | "news.subtitle"
  | "newsletter.title"
  | "newsletter.subtitle"
  | "newsletter.placeholder"
  | "newsletter.button";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    "news.title": "News & Updates",
    "news.subtitle":
      "Latest corporate updates, energy market insights, logistics developments, and operational news from OOO JSC SUEK Energy Facilitation.",
    "newsletter.title": "Subscribe to Our Newsletter",
    "newsletter.subtitle":
      "Get the latest news, market insights, and company updates delivered directly to your inbox.",
    "newsletter.placeholder": "Enter your email address",
    "newsletter.button": "Subscribe",
  },
  ru: {
    "news.title": "Новости и обновления",
    "news.subtitle":
      "Последние корпоративные новости, аналитика энергетического рынка, логистические обновления и операционная информация от OOO JSC SUEK Energy Facilitation.",
    "newsletter.title": "Подпишитесь на нашу рассылку",
    "newsletter.subtitle":
      "Получайте новости компании, рыночную аналитику и важные обновления прямо на вашу электронную почту.",
    "newsletter.placeholder": "Введите ваш email",
    "newsletter.button": "Подписаться",
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
      t: (key: TranslationKey) => translations[language][key] || key,
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
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }

  return context;
}