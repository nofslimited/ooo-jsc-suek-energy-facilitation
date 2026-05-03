import { Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage, type Language } from "../context/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const languages: { code: Language; label: string; short: string }[] = [
    { code: "en", label: "English", short: "EN" },
    { code: "ar", label: "العربية", short: "AR" },
    { code: "zh", label: "中文", short: "ZH" },
    { code: "fr", label: "Français", short: "FR" },
    { code: "ru", label: "Русский", short: "RU" },
  ];

  const current = languages.find((item) => item.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-bold text-white transition hover:border-amber-400 hover:text-amber-400"
      >
        <Globe className="h-4 w-4" />
        {current?.short || "EN"}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-3 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-2xl">
          {languages.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                setLanguage(item.code);
                setOpen(false);
              }}
              className={`block w-full px-4 py-3 text-left text-sm font-bold transition hover:bg-slate-100 ${
                language === item.code
                  ? "bg-amber-50 text-amber-700"
                  : "text-slate-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}