import { Droplets, Flame, Fuel, Zap } from "lucide-react";
import { ProductSpecifications } from "../ProductSpecifications";
import { PhotoGallery } from "../PhotoGallery";
import { VideoPlayer } from "../VideoPlayer";
import { useLanguage } from "../context/LanguageContext";

export function Products() {
  const { t } = useLanguage();
  const products = [
    {
      icon: Fuel,
      name: "Premium Gasoline",
      grade: "RON 95-98",
      description: "High-octane motor fuel for superior engine performance",
      applications: ["Automotive", "Aviation", "Marine"],
      specs: ["Ultra-low sulfur", "Detergent additives", "Winter-grade options"],
    },
    {
      icon: Droplets,
      name: "Diesel Fuel",
      grade: "EN 590",
      description: "Premium diesel meeting European and international standards",
      applications: ["Heavy machinery", "Commercial transport", "Industrial"],
      specs: ["ULSD compliant", "Bio-blend available", "Arctic-grade variants"],
    },
    {
      icon: Flame,
      name: "Heating Oil",
      grade: "Grade 2",
      description: "Reliable heating solutions for residential and commercial use",
      applications: ["Residential heating", "Industrial boilers", "Power generation"],
      specs: ["Low-sulfur content", "High BTU value", "Cold weather stable"],
    },
    {
      icon: Zap,
      name: "Jet Fuel",
      grade: "Jet A-1",
      description: "Aviation turbine fuel meeting stringent international standards",
      applications: ["Commercial aviation", "Military", "Private jets"],
      specs: ["ASTM certified", "DEF STAN 91-91", "Flash point tested"],
    },
    {
      icon: Droplets,
      name: "Lubricants",
      grade: "Multi-grade",
      description: "Premium synthetic and mineral-based lubricant solutions",
      applications: ["Automotive", "Industrial machinery", "Marine engines"],
      specs: ["API certified", "Extended drain intervals", "All-weather protection"],
    },
    {
      icon: Fuel,
      name: "Petroleum Gas (LPG)",
      grade: "Commercial",
      description: "Liquefied petroleum gas for diverse applications",
      applications: ["Residential cooking", "Industrial heating", "Automotive fuel"],
      specs: ["99.5% purity", "Odorized for safety", "Propane/butane blend"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1596980786765-775174984ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Refinery Facility"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('products.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {t('products.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all group"
            >
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <product.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h3>
              <div className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {product.grade}
              </div>
              <p className="text-slate-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-700 mb-2">Applications:</div>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, appIdx) => (
                    <span
                      key={appIdx}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-700 mb-2">Specifications:</div>
                <div className="space-y-1">
                  {product.specs.map((spec, specIdx) => (
                    <div key={specIdx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1 h-1 bg-blue-900 rounded-full"></div>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-16 bg-gradient-to-br from-blue-950 to-blue-900 text-white rounded-2xl p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1670689334896-8fa8291daa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Refinery Facility"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quality Certifications</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                All products meet or exceed international quality standards
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["ISO 9001:2015", "ASTM D975", "EN 590:2013", "DEF STAN 91-91"].map((cert, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
                    <div className="text-lg font-bold">{cert}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProductSpecifications />

      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-7 h-0.5 bg-amber-500"></div>
              <span className="text-[10px] font-mono text-amber-600 uppercase tracking-[0.2em]">
                Production Process
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Quality Control & Testing
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1667015048811-612f197bf398?w=800&q=80"
              title="Refinery Operations - OOO JSC SUEK"
              duration="4:18"
            />
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1678984236460-2ed63ae1c983?w=800&q=80"
              title="Laboratory Testing Procedures"
              duration="3:52"
            />
          </div>
        </div>
      </div>

      <PhotoGallery
        title="Production & Quality Control"
        subtitle="Facility Operations"
        items={[
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1667015048811-612f197bf398?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1667015048811-612f197bf398?w=600&q=80",
            title: "Refinery Complex",
            description: "State-of-the-art petroleum processing facility",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1678984236460-2ed63ae1c983?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1678984236460-2ed63ae1c983?w=600&q=80",
            title: "Distillation Tower",
            description: "Advanced catalytic cracking unit",
          },
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?w=600&q=80",
            title: "Quality Testing Process",
            description: "ISO-certified laboratory procedures",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1772376920749-afdc99c517f7?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1772376920749-afdc99c517f7?w=600&q=80",
            title: "Storage Tanks",
            description: "Temperature-controlled fuel storage",
          },
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1669484417691-7a04f1239678?w=600&q=80",
            title: "Loading Operations",
            description: "Automated tanker filling systems",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=600&q=80",
            title: "Night Operations",
            description: "24/7 production capability",
          },
        ]}
      />
    </div>
  );
}
