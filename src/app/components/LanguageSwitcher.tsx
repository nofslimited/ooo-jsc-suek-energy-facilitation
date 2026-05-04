import { Globe, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage, type Language } from "../context/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const languages: {
    code: Language;
    label: string;
    short: string;
    market: string;
  }[] = [
    { code: "en", label: "English", short: "EN", market: "Global" },
    { code: "ar", label: "العربية", short: "AR", market: "Oil Market" },
    { code: "zh", label: "中文", short: "ZH", market: "Trade Market" },
    { code: "fr", label: "Français", short: "FR", market: "Africa / Europe" },
    { code: "ru", label: "Русский", short: "RU", market: "Regional" },
  ];

  const current = languages.find((item) => item.code === language);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Change website language"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:border-amber-400/70 hover:bg-white/10 hover:text-amber-300"
      >
        <Globe className="h-4 w-4" />
        {current?.short || "EN"}
      </button>

      {open && (
        <div className="absolute right-0 z-[80] mt-3 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-2xl">
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              Select Market Language
            </p>
          </div>

          {languages.map((item) => {
            const active = language === item.code;

            return (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLanguage(item.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-slate-100 ${
                  active ? "bg-amber-50" : "bg-white"
                }`}
              >
                <div>
                  <p
                    className={`text-sm font-black ${
                      active ? "text-amber-700" : "text-slate-900"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    {item.market}
                  </p>
                </div>

                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-black ${
                    active
                      ? "bg-amber-500 text-slate-950"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {active ? <Check className="h-4 w-4" /> : item.short}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}