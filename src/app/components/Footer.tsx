import { Link } from "react-router-dom";
import logoImg from "../../imports/c5803775-2a71-4c22-8c68-844632b07152-1.jpeg";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="OOO JSC SUEK" className="h-16 w-auto" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-sm">
              Russia's premier petroleum products distributor. Certified excellence in fuel transportation and logistics since 1998.
            </p>
            <div className="text-sm text-slate-400 mb-3 space-y-1">
              <div>Dubininskaya Ulitsa, 53, Building 7</div>
              <div>Moscow, 115054, Russia</div>
            </div>
            <div className="flex gap-3 text-sm">
              <a href="tel:+79265038248" className="text-amber-500 hover:underline">
                +7 926 503 82 48
              </a>
              <span className="text-slate-600">|</span>
              <a href="mailto:jscsuek@inbox.ru" className="text-amber-500 hover:underline">
                jscsuek@inbox.ru
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Fleet", path: "/fleet" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t('footer.certifications')}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>ISO 9001:2015</li>
              <li>ISO 14001:2015</li>
              <li>ISO 45001:2018</li>
              <li>GOST R Certified</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            {t('footer.copyright')} | www.ooojscsuek.ru
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-slate-500 hover:text-amber-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-amber-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
