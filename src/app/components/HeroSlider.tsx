import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Globe2, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { refineryBackgrounds } from "../assets/backgrounds";

const slides = [
  {
    image: refineryBackgrounds.heroNight,
    eyebrow: "Global Energy Facilitation",
    title: "Petroleum Supply Coordination Built for Serious Buyers",
    description:
      "OOO JSC SUEK Energy Facilitation supports verified petroleum sourcing, refinery coordination, documentation guidance, and international logistics support.",
  },
  {
    image: refineryBackgrounds.refineryOperations,
    eyebrow: "Refinery & Terminal Network",
    title: "Connecting Buyers, Suppliers, Refineries and Logistics Partners",
    description:
      "We help clients navigate energy transactions with structured communication, supplier verification support, and professional commercial coordination.",
  },
  {
    image: refineryBackgrounds.industrialNight,
    eyebrow: "Secure Energy Transactions",
    title: "Professional Facilitation for Petroleum Trade Operations",
    description:
      "From inquiry to documentation and delivery coordination, our process is designed for clarity, confidence, and international business standards.",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const active = slides[currentSlide];

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">
      {slides.map((slide, idx) => (
        <div
          key={slide.title}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            idx === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_35%)]" />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              {active.eyebrow}
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            <span className="block text-white">OOO JSC SUEK</span>
            <span className="mt-3 block bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Energy Facilitation
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-200">
            {active.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-slate-950 shadow-2xl shadow-amber-500/20 transition hover:bg-amber-400"
            >
              Request Facilitation
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white backdrop-blur transition hover:bg-white/20"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Verified Process" },
              { icon: Globe2, title: "Global Coordination" },
              { icon: Factory, title: "Refinery Support" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
              >
                <item.icon className="mb-3 h-6 w-6 text-amber-400" />
                <p className="text-sm font-bold text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, idx) => (
          <button
            key={slide.title}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 rounded-full transition-all ${
              idx === currentSlide ? "w-12 bg-amber-400" : "w-7 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}