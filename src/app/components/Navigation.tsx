import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "../../imports/c5803775-2a71-4c22-8c68-844632b07152-1.jpeg";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.fleet'), path: "/fleet" },
    { name: t('nav.products'), path: "/products" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.financial'), path: "/financial" },
    { name: t('nav.news'), path: "/news" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImg} alt="OOO JSC SUEK" className="h-12 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-colors font-medium text-xs uppercase tracking-wider ${
                  location.pathname === item.path
                    ? "bg-amber-500 text-slate-950"
                    : "text-slate-700 hover:bg-slate-100 hover:text-amber-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="tel:+79265038248"
              className="text-amber-600 text-sm font-mono font-medium hover:text-amber-700 transition-colors"
            >
              +7 926 503 82 48
            </a>
            <Link
              to="/contact"
              className="bg-amber-500 text-slate-950 px-5 py-2 rounded font-bold text-[11px] uppercase tracking-[0.1em] hover:bg-amber-600 transition-colors"
            >
              {t('nav.getQuote')}
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium text-xs uppercase tracking-wider ${
                  location.pathname === item.path
                    ? "bg-amber-500 text-slate-950"
                    : "text-slate-700 hover:bg-slate-100 hover:text-amber-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
