import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "ru" | "ar" | "zh" | "fr";

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
      "Профессиональное сопровождение поставок нефтепродуктов, координация поставок и логистическая поддержка для коммерческих покупателей.",

    "services.title": "Услуги энергетического сопровождения",
    "services.subtitle":
      "Профессиональная координация поставок, нефтяная логистика, поддержка документации и коммерческой коммуникации.",

    "about.title": "О компании OOO JSC SUEK Energy Facilitation",
    "about.subtitle":
      "Профессиональная компания по энергетическому сопровождению, поддерживающая нефтяную торговлю, координацию поставок и логистические партнёрства.",

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

  ar: {
    "common.close": "إغلاق",
    "nav.home": "الرئيسية",
    "nav.fleet": "الأسطول",
    "nav.products": "المنتجات",
    "nav.services": "الخدمات",
    "nav.about": "من نحن",
    "nav.financial": "المالية",
    "nav.news": "الأخبار",
    "nav.contact": "اتصل بنا",
    "nav.getQuote": "طلب عرض",

    "products.title": "المنتجات البترولية",
    "products.subtitle":
      "تسهيل موثوق للمنتجات البترولية، وتنسيق التوريد المرتبط بالمصافي، ودعم لوجستي للمشترين التجاريين الجادين.",

    "services.title": "خدمات تسهيل الطاقة",
    "services.subtitle":
      "تنسيق مهني للمصافي، ولوجستيات بترولية، ودعم للوثائق، وتواصل تجاري منظم.",

    "about.title": "عن OOO JSC SUEK Energy Facilitation",
    "about.subtitle":
      "شركة مهنية لتسهيل الطاقة تدعم التواصل التجاري في النفط، وتنسيق التوريد، والشراكات اللوجستية.",

    "fleet.title": "الأسطول واللوجستيات",
    "fleet.subtitle":
      "تنسيق لوجستيات النفط، وتخطيط النقل، ودعم التخزين، والتواصل بشأن التسليم.",

    "financial.title": "نظرة مالية",
    "financial.subtitle":
      "عرض مؤسسي لسوق الطاقة، ومؤشرات الأداء التجاري، ورؤى تجارة النفط.",

    "news.title": "الأخبار والتحديثات",
    "news.subtitle":
      "آخر تحديثات الشركة، ورؤى سوق الطاقة، وتطورات اللوجستيات، والأخبار التشغيلية.",

    "contact.title": "اتصل بمكتب الطاقة",
    "contact.subtitle":
      "أرسل استفسارك عن المنتج البترولي، والوجهة، والكمية، ومتطلبات الوثائق.",
  },

  zh: {
    "common.close": "关闭",
    "nav.home": "首页",
    "nav.fleet": "车队",
    "nav.products": "产品",
    "nav.services": "服务",
    "nav.about": "关于我们",
    "nav.financial": "财务",
    "nav.news": "新闻",
    "nav.contact": "联系",
    "nav.getQuote": "获取报价",

    "products.title": "石油产品",
    "products.subtitle":
      "为严肃的商业买家提供可靠的石油产品促进服务、炼厂相关供应协调和物流支持。",

    "services.title": "能源促进服务",
    "services.subtitle":
      "专业的炼厂协调、石油物流、文件支持和结构化商业沟通。",

    "about.title": "关于 OOO JSC SUEK Energy Facilitation",
    "about.subtitle":
      "一家专业能源促进公司，支持石油贸易沟通、供应协调和物流合作。",

    "fleet.title": "车队与物流",
    "fleet.subtitle":
      "石油物流协调、运输规划、仓储支持和交付沟通。",

    "financial.title": "财务概览",
    "financial.subtitle":
      "企业级能源市场展示、商业绩效指标和石油贸易洞察。",

    "news.title": "新闻与更新",
    "news.subtitle":
      "公司最新动态、能源市场洞察、物流发展和运营新闻。",

    "contact.title": "联系能源业务台",
    "contact.subtitle":
      "发送您的石油产品需求、目的地、数量和文件要求。",
  },

  fr: {
    "common.close": "Fermer",
    "nav.home": "Accueil",
    "nav.fleet": "Flotte",
    "nav.products": "Produits",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.financial": "Financier",
    "nav.news": "Actualités",
    "nav.contact": "Contact",
    "nav.getQuote": "Demander un devis",

    "products.title": "Produits pétroliers",
    "products.subtitle":
      "Facilitation fiable des produits pétroliers, coordination d’approvisionnement liée aux raffineries et soutien logistique pour les acheteurs commerciaux sérieux.",

    "services.title": "Services de facilitation énergétique",
    "services.subtitle":
      "Coordination professionnelle des raffineries, logistique pétrolière, soutien documentaire et communication commerciale structurée.",

    "about.title": "À propos de OOO JSC SUEK Energy Facilitation",
    "about.subtitle":
      "Une société professionnelle de facilitation énergétique soutenant la communication commerciale pétrolière, la coordination d’approvisionnement et les partenariats logistiques.",

    "fleet.title": "Flotte et logistique",
    "fleet.subtitle":
      "Coordination logistique pétrolière, planification du transport, soutien au stockage et communication de livraison.",

    "financial.title": "Aperçu financier",
    "financial.subtitle":
      "Présentation professionnelle du marché de l’énergie, indicateurs commerciaux et perspectives du commerce pétrolier.",

    "news.title": "Actualités et mises à jour",
    "news.subtitle":
      "Dernières nouvelles de l’entreprise, analyses du marché énergétique, développements logistiques et informations opérationnelles.",

    "contact.title": "Contactez notre bureau énergie",
    "contact.subtitle":
      "Envoyez votre demande de produit pétrolier, destination, volume et exigences documentaires.",
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