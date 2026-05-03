import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1696541681346-b8787dbed51c?w=1200&q=70",
    subtitle: "Leading Petroleum Distribution",
    description: "Excellence Across Russia — Russia's trusted petroleum products distributor with 850+ transport vehicles and 28 years of excellence.",
  },
  {
    image: "https://images.unsplash.com/photo-1630522521620-53f6e3f64aec?w=1200&q=70",
    subtitle: "Advanced Infrastructure",
    description: "Modern Refinery Operations — State-of-the-art facilities and cutting-edge technology for superior petroleum processing.",
  },
  {
    image: "https://images.unsplash.com/photo-1630522521616-b5b4cf458621?w=1200&q=70",
    subtitle: "24/7 Operations",
    description: "Powering Russia Forward — Uninterrupted supply chain management ensuring fuel availability across all 85 regions.",
  },
];

export function HeroSlider() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[560px] bg-slate-950 overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40"></div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSAwIDAgTCA1NiAwIEwgNTYgNTYgTCAwIDU2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNDUsMTU4LDExLDAuMDQpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full mb-7">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="font-mono text-[10px] text-amber-400 tracking-[0.18em] uppercase">
              ISO 9001:2015 Certified | OOO JSC SUEK
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-5 leading-[0.95]">
            <span className="text-blue-400">OOO JSC SUEK</span>
            <span className="block text-5xl md:text-6xl text-white mt-2">
              {slides[currentSlide].subtitle}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-9 py-4 rounded font-bold text-xs tracking-[0.12em] uppercase hover:bg-amber-400 transition-all"
            >
              {t('hero.requestQuote')} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-white/35 text-white px-9 py-4 rounded font-semibold text-xs tracking-[0.12em] uppercase hover:bg-white/10 transition-all"
            >
              {t('hero.ourServices')}
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "GOST R"].map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-2 border border-slate-700 rounded text-[10px] font-mono text-slate-400"
              >
                <span className="text-amber-500">✓</span>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-0.5 rounded-full transition-all ${
              idx === currentSlide ? "w-10 bg-amber-500" : "w-7 bg-white/30"
            }`}
          ></button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-5"></div>
    </section>
  );
}
