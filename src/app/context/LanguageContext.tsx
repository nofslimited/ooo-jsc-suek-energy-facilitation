import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "ru";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    "common.close": "Close",

    "nav.home": "Home",
    "nav.fleet": "Fleet",
    "nav.products": "Products",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.financial": "Financial",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.getQuote": "Get Quote",

    "products.title": "Petroleum Products",
    "products.subtitle":
      "Reliable petroleum product facilitation, refinery-linked supply coordination, and logistics support for serious commercial buyers.",

    "services.title": "Energy Facilitation Services",
    "services.subtitle":
      "Professional refinery coordination, petroleum logistics, documentation support, and structured commercial communication.",

    "about.title": "About OOO JSC SUEK Energy Facilitation",
    "about.subtitle":
      "A professional energy facilitation company supporting petroleum trade communication, refinery coordination, and logistics partnerships.",

    "fleet.title": "Fleet & Logistics",
    "fleet.subtitle":
      "Petroleum logistics coordination, transport planning, storage support, and delivery communication.",

    "financial.title": "Financial Overview",
    "financial.subtitle":
      "Corporate-grade energy market presentation, commercial performance indicators, and petroleum trade insights.",

    "news.title": "News & Updates",
    "news.subtitle":
      "Latest company updates, energy market insights, logistics developments, and operational news.",

    "contact.title": "Contact Our Energy Desk",
    "contact.subtitle":
      "Send your petroleum product inquiry, destination, volume, and documentation requirements.",
  },

  ru: {
    "common.close": "Закрыть",

    "nav.home": "Главная",
    "nav.fleet": "Логистика",
    "nav.products": "Продукты",
    "nav.services": "Услуги",
    "nav.about": "О компании",
    "nav.financial": "Финансы",
    "nav.news": "Новости",
    "nav.contact": "Контакты",
    "nav.getQuote": "Запросить",

    "products.title": "Нефтепродукты",
    "products.subtitle":
      "Профессиональное сопровождение поставок нефтепродуктов, координация с refinery-сетями и логистическая поддержка для коммерческих покупателей.",

    "services.title": "Услуги энергетического сопровождения",
    "services.subtitle":
      "Профессиональная координация refinery-процессов, нефтяная логистика, поддержка документации и коммерческой коммуникации.",

    "about.title": "О компании OOO JSC SUEK Energy Facilitation",
    "about.subtitle":
      "Профессиональная компания по энергетическому сопровождению, поддерживающая нефтяную торговлю, refinery-координацию и логистические партнёрства.",

    "fleet.title": "Флот и логистика",
    "fleet.subtitle":
      "Координация нефтяной логистики, транспортное планирование, хранение и коммуникация по доставке.",

    "financial.title": "Финансовый обзор",
    "financial.subtitle":
      "Корпоративная презентация энергетического рынка, коммерческие показатели и аналитика нефтяной торговли.",

    "news.title": "Новости и обновления",
    "news.subtitle":
      "Последние новости компании, аналитика энергетического рынка, логистика и операционные обновления.",

    "contact.title": "Свяжитесь с энергетическим отделом",
    "contact.subtitle":
      "Отправьте запрос по нефтепродуктам, пункту назначения, объёму и требованиям к документации.",
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