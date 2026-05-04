import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ShieldCheck, Mail } from "lucide-react";
import { useState } from "react";
import logoImg from "../../imports/c5803775-2a71-4c22-8c68-844632b07152-1.jpeg";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.products"), path: "/products" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.fleet"), path: "/fleet" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.financial"), path: "/financial" },
    { name: t("nav.news"), path: "/news" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
      <div className="hidden border-b border-white/10 bg-slate-900/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-300">
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            <span>Verified Energy Facilitation • Petroleum Logistics • Global Trade Support</span>
          </div>

          <div className="flex items-center gap-5 text-[11px] font-bold text-slate-300">
            <a
              href="tel:+79265038248"
              className="flex items-center gap-2 transition hover:text-amber-300"
            >
              <Phone className="h-4 w-4 text-amber-400" />
              +7 926 503 82 48
            </a>

            <a
              href="mailto:info@ooojscsuek.ru"
              className="hidden items-center gap-2 transition hover:text-amber-300 lg:flex"
            >
              <Mail className="h-4 w-4 text-amber-400" />
              info@ooojscsuek.ru
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex min-h-20 items-center justify-between gap-5">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="OOO JSC SUEK Energy Facilitation homepage"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1.5 shadow-lg shadow-amber-500/10">
              <img
                src={logoImg}
                alt="OOO JSC SUEK Energy Facilitation logo"
                loading="eager"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-white">
                OOO JSC SUEK
              </p>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-400">
                Energy Facilitation
              </p>
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-1 xl:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] transition ${
                    active
                      ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <LanguageSwitcher />

            <Link
              to="/contact"
              className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-slate-950 shadow-lg shadow-amber-500/20 transition hover:from-amber-300 hover:to-orange-400"
            >
              {t("nav.getQuote")}
            </Link>
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            <LanguageSwitcher />

            <button
              type="button"
              className="rounded-xl border border-white/10 p-3 text-white transition hover:bg-white/10"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950 xl:hidden">
          <div className="mx-auto max-w-7xl space-y-2 px-4 py-5 sm:px-6 lg:px-8">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-sm font-black uppercase tracking-[0.14em] transition ${
                    active
                      ? "bg-amber-500 text-slate-950"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="grid grid-cols-1 gap-3 border-t border-white/10 pt-5">
              <a
                href="tel:+79265038248"
                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-white"
              >
                <Phone className="h-4 w-4 text-amber-400" />
                +7 926 503 82 48
              </a>

              <a
                href="mailto:info@ooojscsuek.ru"
                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-white"
              >
                <Mail className="h-4 w-4 text-amber-400" />
                info@ooojscsuek.ru
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl bg-amber-500 px-5 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-slate-950"
              >
                {t("nav.getQuote")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}