import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";
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
    { name: t("nav.fleet"), path: "/fleet" },
    { name: t("nav.products"), path: "/products" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.financial"), path: "/financial" },
    { name: t("nav.news"), path: "/news" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950 text-white shadow-xl">
      <div className="bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            <span>Energy Facilitation & Petroleum Logistics</span>
          </div>

          <a
            href="tel:+79265038248"
            className="hidden items-center gap-2 text-amber-300 hover:text-amber-200 md:flex"
          >
            <Phone className="h-4 w-4" />
            +7 926 503 82 48
          </a>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-6">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-1.5">
              <img
                src={logoImg}
                alt="OOO JSC SUEK Energy Facilitation"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-white">
                OOO JSC SUEK
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
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
                  className={`rounded-xl px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] transition ${
                    active
                      ? "bg-amber-500 text-slate-950"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden shrink-0 items-center gap-4 xl:flex">
            <LanguageSwitcher />

            <Link
              to="/contact"
              className="rounded-xl bg-amber-500 px-5 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-slate-950 transition hover:bg-amber-400"
            >
              {t("nav.getQuote")}
            </Link>
          </div>

          <button
            className="rounded-xl border border-white/10 p-3 text-white transition hover:bg-white/10 xl:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
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
                  className={`block rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] transition ${
                    active
                      ? "bg-amber-500 text-slate-950"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}