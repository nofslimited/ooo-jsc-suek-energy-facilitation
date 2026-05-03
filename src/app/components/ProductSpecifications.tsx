import { Download, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ProductSpec {
  name: string;
  grade: string;
  image: string;
  specs: {
    property: string;
    value: string;
    standard: string;
  }[];
  applications: string[];
  safety: string[];
}

const productSpecs: ProductSpec[] = [
  {
    name: "Premium Gasoline RON 95",
    grade: "AI-95 / GOST 32513-2013",
    image: "https://images.unsplash.com/photo-1764390555453-9e4035c7e283?w=500&q=80",
    specs: [
      { property: "Research Octane Number (RON)", value: "95.0 min", standard: "ASTM D2699" },
      { property: "Motor Octane Number (MON)", value: "85.0 min", standard: "ASTM D2700" },
      { property: "Sulfur Content", value: "10 ppm max", standard: "ASTM D5453" },
      { property: "Density at 15°C", value: "720-775 kg/m³", standard: "ASTM D4052" },
      { property: "Vapor Pressure", value: "45-80 kPa", standard: "ASTM D5191" },
      { property: "Benzene Content", value: "1.0% max", standard: "ASTM D3606" },
      { property: "Lead Content", value: "Unleaded", standard: "ASTM D3237" },
    ],
    applications: ["Passenger vehicles", "Light commercial trucks", "Motorcycles"],
    safety: ["Flash point: -43°C", "Autoignition: 280°C", "Store below 25°C"],
  },
  {
    name: "Ultra-Low Sulfur Diesel (ULSD)",
    grade: "EN 590:2013 / GOST 32511-2013",
    image: "https://images.unsplash.com/photo-1678903429948-0706fbbd5f6e?w=500&q=80",
    specs: [
      { property: "Cetane Number", value: "51.0 min", standard: "ASTM D613" },
      { property: "Sulfur Content", value: "10 ppm max", standard: "ASTM D5453" },
      { property: "Density at 15°C", value: "820-845 kg/m³", standard: "ASTM D4052" },
      { property: "Flash Point", value: "55°C min", standard: "ASTM D93" },
      { property: "Cold Filter Plugging Point", value: "-20°C max", standard: "ASTM D6371" },
      { property: "Lubricity (HFRR)", value: "460 μm max", standard: "ASTM D6079" },
      { property: "Water Content", value: "200 mg/kg max", standard: "ASTM D6304" },
    ],
    applications: ["Heavy-duty trucks", "Construction equipment", "Railway locomotives", "Marine vessels"],
    safety: ["Flash point: 55°C min", "Store in cool, dry place", "Avoid static discharge"],
  },
  {
    name: "Aviation Turbine Fuel Jet A-1",
    grade: "ASTM D1655 / DEF STAN 91-91",
    image: "https://images.unsplash.com/photo-1678903434882-d8bc7782b953?w=500&q=80",
    specs: [
      { property: "Flash Point", value: "38°C min", standard: "ASTM D56" },
      { property: "Freeze Point", value: "-47°C max", standard: "ASTM D5901" },
      { property: "Density at 15°C", value: "775-840 kg/m³", standard: "ASTM D4052" },
      { property: "Viscosity at -20°C", value: "8.0 mm²/s max", standard: "ASTM D445" },
      { property: "Sulfur Content", value: "3000 ppm max", standard: "ASTM D4294" },
      { property: "Aromatics", value: "25% max", standard: "ASTM D1319" },
      { property: "Net Heat of Combustion", value: "42.8 MJ/kg min", standard: "ASTM D4809" },
    ],
    applications: ["Commercial aviation", "Military aircraft", "Private jets", "Helicopter operations"],
    safety: ["Highly flammable", "Store at 15-25°C", "Requires fire suppression systems"],
  },
  {
    name: "Heavy Fuel Oil (Mazut M-100)",
    grade: "GOST 10585-2013",
    image: "https://images.unsplash.com/photo-1667015048811-612f197bf398?w=500&q=80",
    specs: [
      { property: "Viscosity at 50°C", value: "16 cSt max", standard: "ASTM D445" },
      { property: "Sulfur Content", value: "1.0% max", standard: "ASTM D4294" },
      { property: "Water Content", value: "1.0% max", standard: "ASTM D95" },
      { property: "Ash Content", value: "0.05% max", standard: "ASTM D482" },
      { property: "Flash Point", value: "90°C min", standard: "ASTM D93" },
      { property: "Pour Point", value: "25°C max", standard: "ASTM D97" },
      { property: "Density at 20°C", value: "0.955 g/cm³ max", standard: "ASTM D4052" },
    ],
    applications: ["Power generation", "Marine bunker fuel", "Industrial boilers", "Steel mills"],
    safety: ["Pre-heat before use", "Store at 40-80°C", "Requires heating systems"],
  },
];

export function ProductSpecifications() {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(0);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-7 h-0.5 bg-amber-500"></div>
            <span className="text-[10px] font-mono text-amber-600 uppercase tracking-[0.2em]">
              Technical Specifications
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Product Data Sheets</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive technical specifications complying with international standards
          </p>
        </div>

        <div className="space-y-4">
          {productSpecs.map((product, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setExpandedProduct(expandedProduct === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white hover:from-slate-100 hover:to-slate-50 transition-all"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                    <p className="text-sm font-mono text-amber-600 mt-1">{product.grade}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 bg-amber-500 text-slate-950 px-4 py-2 rounded font-semibold text-xs hover:bg-amber-600 transition-colors">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  {expandedProduct === idx ? (
                    <ChevronUp className="w-6 h-6 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-600" />
                  )}
                </div>
              </button>

              {expandedProduct === idx && (
                <div className="px-8 py-6 bg-white border-t border-slate-200">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-5 bg-amber-500"></div>
                        Technical Properties
                      </h4>
                      <div className="space-y-3">
                        {product.specs.map((spec, specIdx) => (
                          <div
                            key={specIdx}
                            className="flex justify-between items-start py-2 border-b border-slate-100 last:border-0"
                          >
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-slate-800">
                                {spec.property}
                              </div>
                              <div className="text-xs font-mono text-slate-500 mt-0.5">
                                {spec.standard}
                              </div>
                            </div>
                            <div className="font-mono text-sm text-amber-600 font-semibold">
                              {spec.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-5 bg-amber-500"></div>
                        Applications & Safety
                      </h4>
                      <div className="mb-6">
                        <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Recommended Applications
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, appIdx) => (
                            <span
                              key={appIdx}
                              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Safety Information
                        </div>
                        <div className="space-y-2">
                          {product.safety.map((safety, safetyIdx) => (
                            <div
                              key={safetyIdx}
                              className="flex items-start gap-2 text-sm text-slate-700"
                            >
                              <span className="text-amber-500 mt-0.5">⚠</span>
                              {safety}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <div className="text-xs font-mono font-semibold text-amber-800 mb-1">
                          CERTIFICATION STATUS
                        </div>
                        <div className="flex items-center gap-2 text-green-700">
                          <span className="text-lg">✓</span>
                          <span className="text-sm font-semibold">
                            ISO 9001:2015 Certified Product
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
