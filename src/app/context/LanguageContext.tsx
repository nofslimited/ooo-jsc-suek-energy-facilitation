import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh' | 'hi' | 'es' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionaries
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.fleet': 'Fleet',
    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.financial': 'Financial',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get Quote',

    // Hero
    'hero.title': 'OOO JSC SUEK',
    'hero.subtitle': 'Leading Petroleum Distribution',
    'hero.description': "Russia's trusted petroleum products distributor with 850+ transport vehicles and 28 years of excellence.",
    'hero.requestQuote': 'Request Quote',
    'hero.ourServices': 'Our Services',

    // Common
    'common.learnMore': 'Learn More',
    'common.contactUs': 'Contact Us',
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
    'common.close': 'Close',

    // Footer
    'footer.company': 'Company',
    'footer.certifications': 'Certifications',
    'footer.copyright': '© 2026 OOO JSC SUEK. All rights reserved.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team for inquiries, partnerships, or support',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.website': 'Website',

    // Testimonials
    'testimonials.title': 'Trusted by Global Industry Leaders',
    'testimonials.subtitle': 'Client Success Stories',
    'testimonials.description': "Delivering excellence to Russia's largest energy companies and international partners since 1998",
    'testimonials.showing': 'Showing',
    'testimonials.of': 'of',
    'testimonials.clients': 'client testimonials',

    // About
    'about.title': 'About OOO JSC SUEK',
    'about.subtitle': 'A global leader in petroleum refining and distribution, committed to excellence, innovation, and sustainability',
    'about.evolution': 'Company Evolution',
    'about.operations': 'Live Operations Dashboard',
    'about.values': 'Our Values',
    'about.leadership': 'Leadership & Expertise',
    'about.certifications': 'Quality Certifications',

    // Products
    'products.title': 'Premium Petroleum Products',
    'products.subtitle': 'ISO 9001:2015 certified petroleum products meeting international standards',
    'products.certifications': 'Quality Certifications',

    // Services
    'services.title': 'Comprehensive Services',
    'services.subtitle': 'End-to-end petroleum distribution and logistics solutions',

    // Fleet
    'fleet.title': 'Our Fleet',
    'fleet.subtitle': 'Modern transport infrastructure serving 85 regions across Russia',

    // Financial
    'financial.title': 'Financial Performance',
    'financial.subtitle': 'Transparent financial reporting and investor relations',

    // News
    'news.title': 'Latest News',
    'news.subtitle': 'Stay updated with OOO JSC SUEK developments',

    // Stats
    'stats.liters': 'Liters Distributed Annually',
    'stats.vehicles': 'Transport Vehicles',
    'stats.years': 'Years of Excellence',
    'stats.clients': 'Active Client Contracts',
    'stats.regions': 'Regions Covered',

    // CTA
    'cta.partner': 'Ready to Partner with Industry Leaders?',
    'cta.contact': 'Contact our team today to discuss your energy needs',
    'cta.call': 'Call:',
    'cta.form': 'Contact Form',

    // Home Page
    'home.whyChoose.title': 'Why Choose OOO JSC SUEK',
    'home.whyChoose.subtitle': 'Leading the industry with innovation, reliability, and sustainable practices',
    'home.video.title': 'See OOO JSC SUEK in Action',
    'home.video.subtitle': 'Official Company Video',
    'home.gallery.title': 'Operations Excellence',
    'home.gallery.subtitle': 'Visual Showcase',
  },

  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.fleet': '车队',
    'nav.products': '产品',
    'nav.services': '服务',
    'nav.about': '关于',
    'nav.financial': '财务',
    'nav.news': '新闻',
    'nav.contact': '联系',
    'nav.getQuote': '获取报价',

    // Hero
    'hero.title': 'OOO JSC SUEK',
    'hero.subtitle': '领先的石油分销',
    'hero.description': '俄罗斯值得信赖的石油产品分销商，拥有850多辆运输车辆和28年的卓越经验。',
    'hero.requestQuote': '申请报价',
    'hero.ourServices': '我们的服务',

    // Common
    'common.learnMore': '了解更多',
    'common.contactUs': '联系我们',
    'common.readMore': '阅读更多',
    'common.viewAll': '查看全部',
    'common.close': '关闭',

    // Footer
    'footer.company': '公司',
    'footer.certifications': '认证',
    'footer.copyright': '© 2026 OOO JSC SUEK。保留所有权利。',

    // Contact
    'contact.title': '联系我们',
    'contact.subtitle': '如需咨询、合作或支持，请联系我们的团队',
    'contact.phone': '电话',
    'contact.email': '电子邮件',
    'contact.website': '网站',

    // Testimonials
    'testimonials.title': '受全球行业领导者信赖',
    'testimonials.subtitle': '客户成功案例',
    'testimonials.description': '自1998年以来，为俄罗斯最大的能源公司和国际合作伙伴提供卓越服务',
    'testimonials.showing': '显示',
    'testimonials.of': '共',
    'testimonials.clients': '客户评价',

    // About
    'about.title': '关于 OOO JSC SUEK',
    'about.subtitle': '石油精炼和分销的全球领导者，致力于卓越、创新和可持续发展',
    'about.evolution': '公司发展历程',
    'about.operations': '实时运营仪表板',
    'about.values': '我们的价值观',
    'about.leadership': '领导力与专业知识',
    'about.certifications': '质量认证',

    // Products
    'products.title': '优质石油产品',
    'products.subtitle': 'ISO 9001:2015认证的石油产品，符合国际标准',
    'products.certifications': '质量认证',

    // Services
    'services.title': '综合服务',
    'services.subtitle': '端到端石油分销和物流解决方案',

    // Fleet
    'fleet.title': '我们的车队',
    'fleet.subtitle': '服务俄罗斯85个地区的现代运输基础设施',

    // Financial
    'financial.title': '财务业绩',
    'financial.subtitle': '透明的财务报告和投资者关系',

    // News
    'news.title': '最新新闻',
    'news.subtitle': '了解 OOO JSC SUEK 的最新发展',

    // Stats
    'stats.liters': '年分销量',
    'stats.vehicles': '运输车辆',
    'stats.years': '卓越年数',
    'stats.clients': '活跃客户合同',
    'stats.regions': '覆盖地区',

    // CTA
    'cta.partner': '准备与行业领导者合作？',
    'cta.contact': '立即联系我们的团队讨论您的能源需求',
    'cta.call': '电话：',
    'cta.form': '联系表单',

    // Home Page
    'home.whyChoose.title': '为什么选择 OOO JSC SUEK',
    'home.whyChoose.subtitle': '以创新、可靠性和可持续实践引领行业',
    'home.video.title': '见证 OOO JSC SUEK 的实力',
    'home.video.subtitle': '官方公司视频',
    'home.gallery.title': '卓越运营',
    'home.gallery.subtitle': '视觉展示',
  },

  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.fleet': 'बेड़ा',
    'nav.products': 'उत्पाद',
    'nav.services': 'सेवाएं',
    'nav.about': 'के बारे में',
    'nav.financial': 'वित्तीय',
    'nav.news': 'समाचार',
    'nav.contact': 'संपर्क',
    'nav.getQuote': 'कोटेशन प्राप्त करें',

    // Hero
    'hero.title': 'OOO JSC SUEK',
    'hero.subtitle': 'अग्रणी पेट्रोलियम वितरण',
    'hero.description': 'रूस का विश्वसनीय पेट्रोलियम उत्पाद वितरक, 850+ परिवहन वाहनों और 28 वर्षों की उत्कृष्टता के साथ।',
    'hero.requestQuote': 'कोटेशन का अनुरोध करें',
    'hero.ourServices': 'हमारी सेवाएं',

    // Common
    'common.learnMore': 'और जानें',
    'common.contactUs': 'हमसे संपर्क करें',
    'common.readMore': 'और पढ़ें',
    'common.viewAll': 'सभी देखें',
    'common.close': 'बंद करें',

    // Footer
    'footer.company': 'कंपनी',
    'footer.certifications': 'प्रमाणपत्र',
    'footer.copyright': '© 2026 OOO JSC SUEK। सर्वाधिकार सुरक्षित।',

    // Contact
    'contact.title': 'हमसे संपर्क करें',
    'contact.subtitle': 'पूछताछ, साझेदारी या सहायता के लिए हमारी टीम से संपर्क करें',
    'contact.phone': 'फोन',
    'contact.email': 'ईमेल',
    'contact.website': 'वेबसाइट',

    // Testimonials
    'testimonials.title': 'वैश्विक उद्योग के नेताओं द्वारा विश्वसनीय',
    'testimonials.subtitle': 'ग्राहक सफलता की कहानियां',
    'testimonials.description': '1998 से रूस की सबसे बड़ी ऊर्जा कंपनियों और अंतर्राष्ट्रीय भागीदारों को उत्कृष्टता प्रदान कर रहे हैं',
    'testimonials.showing': 'दिखाया जा रहा है',
    'testimonials.of': 'का',
    'testimonials.clients': 'ग्राहक प्रशंसापत्र',

    // About
    'about.title': 'OOO JSC SUEK के बारे में',
    'about.subtitle': 'पेट्रोलियम रिफाइनिंग और वितरण में वैश्विक नेता, उत्कृष्टता, नवाचार और स्थिरता के लिए प्रतिबद्ध',
    'about.evolution': 'कंपनी का विकास',
    'about.operations': 'लाइव ऑपरेशन डैशबोर्ड',
    'about.values': 'हमारे मूल्य',
    'about.leadership': 'नेतृत्व और विशेषज्ञता',
    'about.certifications': 'गुणवत्ता प्रमाणपत्र',

    // Products
    'products.title': 'प्रीमियम पेट्रोलियम उत्पाद',
    'products.subtitle': 'अंतर्राष्ट्रीय मानकों को पूरा करने वाले ISO 9001:2015 प्रमाणित पेट्रोलियम उत्पाद',
    'products.certifications': 'गुणवत्ता प्रमाणपत्र',

    // Services
    'services.title': 'व्यापक सेवाएं',
    'services.subtitle': 'एंड-टू-एंड पेट्रोलियम वितरण और रसद समाधान',

    // Fleet
    'fleet.title': 'हमारा बेड़ा',
    'fleet.subtitle': 'रूस के 85 क्षेत्रों में सेवा प्रदान करने वाला आधुनिक परिवहन बुनियादी ढांचा',

    // Financial
    'financial.title': 'वित्तीय प्रदर्शन',
    'financial.subtitle': 'पारदर्शी वित्तीय रिपोर्टिंग और निवेशक संबंध',

    // News
    'news.title': 'नवीनतम समाचार',
    'news.subtitle': 'OOO JSC SUEK के विकास के साथ अपडेट रहें',

    // Stats
    'stats.liters': 'वार्षिक वितरित लीटर',
    'stats.vehicles': 'परिवहन वाहन',
    'stats.years': 'उत्कृष्टता के वर्ष',
    'stats.clients': 'सक्रिय ग्राहक अनुबंध',
    'stats.regions': 'कवर किए गए क्षेत्र',

    // CTA
    'cta.partner': 'उद्योग के नेताओं के साथ साझेदारी करने के लिए तैयार हैं?',
    'cta.contact': 'अपनी ऊर्जा आवश्यकताओं पर चर्चा करने के लिए आज ही हमारी टीम से संपर्क करें',
    'cta.call': 'कॉल करें:',
    'cta.form': 'संपर्क फॉर्म',

    // Home Page
    'home.whyChoose.title': 'OOO JSC SUEK क्यों चुनें',
    'home.whyChoose.subtitle': 'नवाचार, विश्वसनीयता और स्थायी प्रथाओं के साथ उद्योग का नेतृत्व करना',
    'home.video.title': 'OOO JSC SUEK को कार्रवाई में देखें',
    'home.video.subtitle': 'आधिकारिक कंपनी वीडियो',
    'home.gallery.title': 'संचालन उत्कृष्टता',
    'home.gallery.subtitle': 'दृश्य प्रदर्शन',
  },

  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.fleet': 'Flota',
    'nav.products': 'Productos',
    'nav.services': 'Servicios',
    'nav.about': 'Acerca de',
    'nav.financial': 'Financiero',
    'nav.news': 'Noticias',
    'nav.contact': 'Contacto',
    'nav.getQuote': 'Obtener Cotización',

    // Hero
    'hero.title': 'OOO JSC SUEK',
    'hero.subtitle': 'Distribución Líder de Petróleo',
    'hero.description': 'Distribuidor de productos petroleros de confianza en Rusia con más de 850 vehículos de transporte y 28 años de excelencia.',
    'hero.requestQuote': 'Solicitar Cotización',
    'hero.ourServices': 'Nuestros Servicios',

    // Common
    'common.learnMore': 'Saber Más',
    'common.contactUs': 'Contáctenos',
    'common.readMore': 'Leer Más',
    'common.viewAll': 'Ver Todo',
    'common.close': 'Cerrar',

    // Footer
    'footer.company': 'Empresa',
    'footer.certifications': 'Certificaciones',
    'footer.copyright': '© 2026 OOO JSC SUEK. Todos los derechos reservados.',

    // Contact
    'contact.title': 'Contáctenos',
    'contact.subtitle': 'Póngase en contacto con nuestro equipo para consultas, asociaciones o soporte',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo Electrónico',
    'contact.website': 'Sitio Web',

    // Testimonials
    'testimonials.title': 'Confiado por Líderes de la Industria Global',
    'testimonials.subtitle': 'Historias de Éxito de Clientes',
    'testimonials.description': 'Ofreciendo excelencia a las empresas energéticas más grandes de Rusia y socios internacionales desde 1998',
    'testimonials.showing': 'Mostrando',
    'testimonials.of': 'de',
    'testimonials.clients': 'testimonios de clientes',

    // About
    'about.title': 'Acerca de OOO JSC SUEK',
    'about.subtitle': 'Líder mundial en refinación y distribución de petróleo, comprometido con la excelencia, la innovación y la sostenibilidad',
    'about.evolution': 'Evolución de la Empresa',
    'about.operations': 'Panel de Operaciones en Vivo',
    'about.values': 'Nuestros Valores',
    'about.leadership': 'Liderazgo y Experiencia',
    'about.certifications': 'Certificaciones de Calidad',

    // Products
    'products.title': 'Productos Petroleros Premium',
    'products.subtitle': 'Productos petroleros certificados ISO 9001:2015 que cumplen con estándares internacionales',
    'products.certifications': 'Certificaciones de Calidad',

    // Services
    'services.title': 'Servicios Integrales',
    'services.subtitle': 'Soluciones completas de distribución de petróleo y logística',

    // Fleet
    'fleet.title': 'Nuestra Flota',
    'fleet.subtitle': 'Infraestructura de transporte moderna que sirve a 85 regiones de Rusia',

    // Financial
    'financial.title': 'Rendimiento Financiero',
    'financial.subtitle': 'Informes financieros transparentes y relaciones con inversionistas',

    // News
    'news.title': 'Últimas Noticias',
    'news.subtitle': 'Manténgase actualizado con los desarrollos de OOO JSC SUEK',

    // Stats
    'stats.liters': 'Litros Distribuidos Anualmente',
    'stats.vehicles': 'Vehículos de Transporte',
    'stats.years': 'Años de Excelencia',
    'stats.clients': 'Contratos de Clientes Activos',
    'stats.regions': 'Regiones Cubiertas',

    // CTA
    'cta.partner': '¿Listo para Asociarse con Líderes de la Industria?',
    'cta.contact': 'Contacte a nuestro equipo hoy para discutir sus necesidades energéticas',
    'cta.call': 'Llamar:',
    'cta.form': 'Formulario de Contacto',

    // Home Page
    'home.whyChoose.title': 'Por Qué Elegir OOO JSC SUEK',
    'home.whyChoose.subtitle': 'Liderando la industria con innovación, confiabilidad y prácticas sostenibles',
    'home.video.title': 'Vea OOO JSC SUEK en Acción',
    'home.video.subtitle': 'Video Oficial de la Empresa',
    'home.gallery.title': 'Excelencia Operativa',
    'home.gallery.subtitle': 'Exhibición Visual',
  },

  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.fleet': 'Flotte',
    'nav.products': 'Produits',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.financial': 'Financier',
    'nav.news': 'Actualités',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Obtenir un Devis',

    // Hero
    'hero.title': 'OOO JSC SUEK',
    'hero.subtitle': 'Distribution Pétrolière Leader',
    'hero.description': 'Distributeur de produits pétroliers de confiance en Russie avec plus de 850 véhicules de transport et 28 ans d\'excellence.',
    'hero.requestQuote': 'Demander un Devis',
    'hero.ourServices': 'Nos Services',

    // Common
    'common.learnMore': 'En Savoir Plus',
    'common.contactUs': 'Contactez-Nous',
    'common.readMore': 'Lire Plus',
    'common.viewAll': 'Voir Tout',
    'common.close': 'Fermer',

    // Footer
    'footer.company': 'Entreprise',
    'footer.certifications': 'Certifications',
    'footer.copyright': '© 2026 OOO JSC SUEK. Tous droits réservés.',

    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Contactez notre équipe pour des demandes, partenariats ou support',
    'contact.phone': 'Téléphone',
    'contact.email': 'E-mail',
    'contact.website': 'Site Web',

    // Testimonials
    'testimonials.title': 'Approuvé par les Leaders Mondiaux de l\'Industrie',
    'testimonials.subtitle': 'Histoires de Succès Clients',
    'testimonials.description': 'Offrant l\'excellence aux plus grandes entreprises énergétiques de Russie et partenaires internationaux depuis 1998',
    'testimonials.showing': 'Affichage',
    'testimonials.of': 'de',
    'testimonials.clients': 'témoignages de clients',

    // About
    'about.title': 'À Propos de OOO JSC SUEK',
    'about.subtitle': 'Leader mondial du raffinage et de la distribution de pétrole, engagé dans l\'excellence, l\'innovation et la durabilité',
    'about.evolution': 'Évolution de l\'Entreprise',
    'about.operations': 'Tableau de Bord des Opérations en Direct',
    'about.values': 'Nos Valeurs',
    'about.leadership': 'Leadership et Expertise',
    'about.certifications': 'Certifications de Qualité',

    // Products
    'products.title': 'Produits Pétroliers Premium',
    'products.subtitle': 'Produits pétroliers certifiés ISO 9001:2015 répondant aux normes internationales',
    'products.certifications': 'Certifications de Qualité',

    // Services
    'services.title': 'Services Complets',
    'services.subtitle': 'Solutions complètes de distribution pétrolière et de logistique',

    // Fleet
    'fleet.title': 'Notre Flotte',
    'fleet.subtitle': 'Infrastructure de transport moderne desservant 85 régions à travers la Russie',

    // Financial
    'financial.title': 'Performance Financière',
    'financial.subtitle': 'Rapports financiers transparents et relations avec les investisseurs',

    // News
    'news.title': 'Dernières Actualités',
    'news.subtitle': 'Restez informé des développements de OOO JSC SUEK',

    // Stats
    'stats.liters': 'Litres Distribués Annuellement',
    'stats.vehicles': 'Véhicules de Transport',
    'stats.years': 'Années d\'Excellence',
    'stats.clients': 'Contrats Clients Actifs',
    'stats.regions': 'Régions Couvertes',

    // CTA
    'cta.partner': 'Prêt à Vous Associer avec les Leaders de l\'Industrie?',
    'cta.contact': 'Contactez notre équipe aujourd\'hui pour discuter de vos besoins énergétiques',
    'cta.call': 'Appeler:',
    'cta.form': 'Formulaire de Contact',

    // Home Page
    'home.whyChoose.title': 'Pourquoi Choisir OOO JSC SUEK',
    'home.whyChoose.subtitle': 'Leader de l\'industrie avec innovation, fiabilité et pratiques durables',
    'home.video.title': 'Découvrez OOO JSC SUEK en Action',
    'home.video.subtitle': 'Vidéo Officielle de l\'Entreprise',
    'home.gallery.title': 'Excellence Opérationnelle',
    'home.gallery.subtitle': 'Vitrine Visuelle',
  },

  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.fleet': 'الأسطول',
    'nav.products': 'المنتجات',
    'nav.services': 'الخدمات',
    'nav.about': 'عن الشركة',
    'nav.financial': 'المالية',
    'nav.news': 'الأخبار',
    'nav.contact': 'اتصل بنا',
    'nav.getQuote': 'احصل على عرض',

    // Hero
    'hero.title': 'OOO JSC SUEK',
    'hero.subtitle': 'توزيع البترول الرائد',
    'hero.description': 'موزع موثوق لمنتجات البترول في روسيا مع أكثر من 850 مركبة نقل و 28 عامًا من التميز.',
    'hero.requestQuote': 'طلب عرض أسعار',
    'hero.ourServices': 'خدماتنا',

    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.contactUs': 'اتصل بنا',
    'common.readMore': 'اقرأ المزيد',
    'common.viewAll': 'عرض الكل',
    'common.close': 'إغلاق',

    // Footer
    'footer.company': 'الشركة',
    'footer.certifications': 'الشهادات',
    'footer.copyright': '© 2026 OOO JSC SUEK. جميع الحقوق محفوظة.',

    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع فريقنا للاستفسارات أو الشراكات أو الدعم',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.website': 'الموقع الإلكتروني',

    // Testimonials
    'testimonials.title': 'موثوق به من قبل قادة الصناعة العالميين',
    'testimonials.subtitle': 'قصص نجاح العملاء',
    'testimonials.description': 'تقديم التميز لأكبر شركات الطاقة في روسيا والشركاء الدوليين منذ عام 1998',
    'testimonials.showing': 'عرض',
    'testimonials.of': 'من',
    'testimonials.clients': 'شهادات العملاء',

    // About
    'about.title': 'عن OOO JSC SUEK',
    'about.subtitle': 'رائد عالمي في تكرير وتوزيع البترول، ملتزم بالتميز والابتكار والاستدامة',
    'about.evolution': 'تطور الشركة',
    'about.operations': 'لوحة العمليات المباشرة',
    'about.values': 'قيمنا',
    'about.leadership': 'القيادة والخبرة',
    'about.certifications': 'شهادات الجودة',

    // Products
    'products.title': 'منتجات بترولية فاخرة',
    'products.subtitle': 'منتجات بترولية معتمدة بموجب ISO 9001:2015 تلبي المعايير الدولية',
    'products.certifications': 'شهادات الجودة',

    // Services
    'services.title': 'خدمات شاملة',
    'services.subtitle': 'حلول شاملة لتوزيع البترول واللوجستيات',

    // Fleet
    'fleet.title': 'أسطولنا',
    'fleet.subtitle': 'بنية تحتية للنقل الحديثة تخدم 85 منطقة في روسيا',

    // Financial
    'financial.title': 'الأداء المالي',
    'financial.subtitle': 'تقارير مالية شفافة وعلاقات المستثمرين',

    // News
    'news.title': 'آخر الأخبار',
    'news.subtitle': 'ابق على اطلاع بتطورات OOO JSC SUEK',

    // Stats
    'stats.liters': 'لتر موزعة سنويًا',
    'stats.vehicles': 'مركبات النقل',
    'stats.years': 'سنوات من التميز',
    'stats.clients': 'عقود العملاء النشطة',
    'stats.regions': 'المناطق المغطاة',

    // CTA
    'cta.partner': 'هل أنت مستعد للشراكة مع قادة الصناعة؟',
    'cta.contact': 'اتصل بفريقنا اليوم لمناقشة احتياجاتك من الطاقة',
    'cta.call': 'اتصل:',
    'cta.form': 'نموذج الاتصال',

    // Home Page
    'home.whyChoose.title': 'لماذا تختار OOO JSC SUEK',
    'home.whyChoose.subtitle': 'قيادة الصناعة بالابتكار والموثوقية والممارسات المستدامة',
    'home.video.title': 'شاهد OOO JSC SUEK في العمل',
    'home.video.subtitle': 'فيديو الشركة الرسمي',
    'home.gallery.title': 'التميز التشغيلي',
    'home.gallery.subtitle': 'عرض مرئي',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Update HTML dir attribute for RTL languages
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
