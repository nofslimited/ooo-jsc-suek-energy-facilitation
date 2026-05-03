import { Quote, Star, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

interface Testimonial {
  company: string;
  logo: string;
  industry: string;
  testimonial: string;
  author: string;
  position: string;
  rating: number;
  photo: string;
  country: string;
  stats: {
    label: string;
    value: string;
  };
}

const testimonials: Testimonial[] = [
  {
    company: "Gazprom Neft",
    logo: "🛢️",
    industry: "Oil & Gas Production",
    country: "Russia",
    testimonial: "OOO JSC SUEK has been our trusted logistics partner for over 8 years. Their fleet reliability and on-time delivery rate of 99.8% has enabled us to maintain uninterrupted operations across our Siberian facilities. Their commitment to safety and environmental standards aligns perfectly with our corporate values.",
    author: "Dmitry Volkov",
    position: "VP of Supply Chain Operations",
    photo: "https://images.unsplash.com/photo-1758599543230-652cc6831d69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    stats: {
      label: "Annual Volume",
      value: "450M Liters",
    },
  },
  {
    company: "Shell International",
    logo: "🐚",
    industry: "Global Energy",
    country: "Netherlands",
    testimonial: "Working with OOO JSC SUEK on our Russian operations has been exceptional. Their understanding of international standards and local market dynamics creates a perfect partnership. The quality control and documentation precision meet our global requirements flawlessly.",
    author: "Marcus van der Berg",
    position: "Regional Operations Director",
    photo: "https://images.unsplash.com/photo-1758599543147-86dc1512bd5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    stats: {
      label: "Partnership Duration",
      value: "6 Years",
    },
  },
  {
    company: "BP Energy",
    logo: "⚡",
    industry: "Oil & Gas",
    country: "United Kingdom",
    testimonial: "OOO JSC SUEK's technical capabilities and commitment to HSE standards are world-class. Their ability to scale operations while maintaining quality has been instrumental in supporting our growth across Eastern Europe and Central Asia markets.",
    author: "Sarah Mitchell",
    position: "Supply Chain Director - Eurasia",
    photo: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    stats: {
      label: "Annual Savings",
      value: "€4.2M",
    },
  },
  {
    company: "Rosneft",
    logo: "⚡",
    industry: "Energy Distribution",
    country: "Russia",
    testimonial: "The technical expertise and product quality from OOO JSC SUEK is unmatched in the Russian petroleum market. Their ULSD products consistently exceed EN 590 specifications, and their customer service team provides 24/7 support for our nationwide distribution network.",
    author: "Elena Sokolova",
    position: "Chief Procurement Officer",
    photo: "https://images.unsplash.com/photo-1758518729466-827cd8293992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    stats: {
      label: "Partnership Duration",
      value: "12 Years",
    },
  },
  {
    company: "TotalEnergies",
    logo: "🔷",
    industry: "Integrated Energy",
    country: "France",
    testimonial: "OOO JSC SUEK demonstrates remarkable operational excellence in challenging market conditions. Their logistics network efficiency and real-time tracking capabilities have enhanced our distribution reliability across Russian Federation territories significantly.",
    author: "Jean-Pierre Dubois",
    position: "Eastern Europe Logistics Manager",
    photo: "https://images.unsplash.com/photo-1758599543242-31567fb8766e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    stats: {
      label: "Efficiency Gain",
      value: "27% Improvement",
    },
  },
  {
    company: "LUKOIL",
    logo: "🔥",
    industry: "Integrated Energy",
    country: "Russia",
    testimonial: "We selected OOO JSC SUEK as our primary fuel supplier after rigorous due diligence. Their ISO certifications, transparent pricing, and advanced fleet tracking systems have delivered measurable cost savings while maintaining the highest safety standards across our operations.",
    author: "Sergey Petrov",
    position: "Director of Logistics",
    photo: "https://images.unsplash.com/photo-1758599543126-59e3154d7195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    stats: {
      label: "Cost Savings",
      value: "18% YoY",
    },
  },
  {
    company: "Saudi Aramco",
    logo: "🕌",
    industry: "Oil & Gas",
    country: "Saudi Arabia",
    testimonial: "OOO JSC SUEK's professionalism and adherence to international petroleum standards is exemplary. Their supply chain transparency and commitment to ethical business practices align perfectly with our global partnership criteria.",
    author: "Ahmed Al-Rashid",
    position: "International Partnerships Director",
    photo: "https://images.unsplash.com/photo-1762522926157-bcc04bf0b10a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    stats: {
      label: "Contract Value",
      value: "$18.5M",
    },
  },
  {
    company: "Surgutneftegas",
    logo: "⚙️",
    industry: "Oil Refining",
    country: "Russia",
    testimonial: "OOO JSC SUEK's commitment to environmental sustainability impressed us from day one. Their carbon-neutral delivery initiatives and waste reduction programs align with our 2030 net-zero commitments. A true partner in our sustainability journey.",
    author: "Irina Nikolaeva",
    position: "Head of Sustainability",
    photo: "https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
    stats: {
      label: "CO₂ Reduction",
      value: "22% Since 2020",
    },
  },
];

const caseStudies = [
  {
    title: "Nationwide Aviation Fuel Distribution",
    client: "Aeroflot Group",
    challenge: "Required 24/7 Jet A-1 supply to 45 airports with zero service interruptions",
    solution: "Deployed dedicated aviation fleet with real-time GPS tracking and backup supply chains",
    results: [
      "100% on-time delivery record over 18 months",
      "45% reduction in fuel storage costs",
      "DEF STAN 91-91 compliance achieved",
    ],
    image: "https://images.unsplash.com/photo-1678903434882-d8bc7782b953?w=800&q=80",
  },
  {
    title: "Arctic Region Diesel Supply",
    client: "Norilsk Nickel",
    challenge: "Extreme weather conditions (-50°C) requiring specialized cold-weather diesel",
    solution: "Custom Arctic-grade ULSD formulation with heated transport and storage systems",
    results: [
      "Zero cold-weather operational failures",
      "32% fuel efficiency improvement",
      "3-year contract extension secured",
    ],
    image: "https://images.unsplash.com/photo-1696583545294-a0158d7afa63?w=800&q=80",
  },
];

export function ClientTestimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + itemsPerView >= testimonials.length ? 0 : prev + itemsPerView
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - itemsPerView) : Math.max(0, prev - itemsPerView)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= testimonials.length ? 0 : prev + itemsPerView
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-7 h-0.5 bg-amber-500"></div>
            <span className="text-[10px] font-mono text-amber-600 uppercase tracking-[0.2em]">
              {t('testimonials.subtitle')}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {visibleTestimonials.map((testimonial, idx) => (
              <div
                key={currentIndex + idx}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-3xl">
                      {testimonial.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{testimonial.company}</h3>
                      <p className="text-xs text-slate-600 font-mono uppercase tracking-wider">
                        {testimonial.industry}
                      </p>
                      <p className="text-xs text-blue-700 font-semibold mt-1">
                        📍 {testimonial.country}
                      </p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-amber-500 opacity-50" />
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-600">{testimonial.position}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-600">
                      {testimonial.stats.value}
                    </div>
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      {testimonial.stats.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-all shadow-lg"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * itemsPerView)}
                  className={`h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / itemsPerView) === idx
                      ? 'w-8 bg-amber-500'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-all shadow-lg"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Client Counter */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 font-mono">
              {t('testimonials.showing')} {currentIndex + 1}-{Math.min(currentIndex + itemsPerView, testimonials.length)} {t('testimonials.of')} {testimonials.length} {t('testimonials.clients')}
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-2 text-center">Case Studies</h3>
          <p className="text-slate-600 text-center mb-10">
            Real-world solutions delivering measurable results
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5 text-amber-600" />
                    <span className="text-sm font-semibold text-amber-600">{study.client}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{study.title}</h4>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Challenge
                      </div>
                      <p className="text-sm text-slate-600">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Solution
                      </div>
                      <p className="text-sm text-slate-600">{study.solution}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Results Achieved
                      </div>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIdx) => (
                          <li key={resultIdx} className="flex items-start gap-2 text-sm">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span className="text-slate-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Join 3,200+ Satisfied Clients</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Experience the OOO JSC SUEK difference — reliable supply, competitive pricing, and exceptional service
          </p>
          <button className="bg-amber-500 text-slate-950 px-10 py-4 rounded-lg font-bold text-sm hover:bg-amber-600 transition-all">
            Request Partnership Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
