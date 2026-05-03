import { Ship, Truck, Plane, Train } from "lucide-react";
import { PhotoGallery } from "../PhotoGallery";
import { VideoPlayer } from "../VideoPlayer";
import { useLanguage } from "../context/LanguageContext";

export function Fleet() {
  const { t } = useLanguage();
  const fleetData = [
    {
      icon: Ship,
      category: "Maritime Fleet",
      count: "45 Vessels",
      capacity: "2.5M DWT",
      description: "Modern tanker fleet including VLCCs, Suezmax, and Aframax vessels",
      specs: ["Double-hull construction", "IMO certified", "Real-time GPS tracking"],
    },
    {
      icon: Truck,
      category: "Road Transport",
      count: "850 Trucks",
      capacity: "120K tons/day",
      description: "Advanced fleet of petroleum transport vehicles across major routes",
      specs: ["Euro 6 compliant", "Temperature controlled", "24/7 monitoring"],
    },
    {
      icon: Train,
      category: "Rail Transport",
      count: "320 Rail Cars",
      capacity: "85K tons/day",
      description: "Specialized railway tank cars for bulk petroleum transport",
      specs: ["DOT certified", "Pressure-tested", "Emergency shutoff systems"],
    },
    {
      icon: Plane,
      category: "Aviation Support",
      count: "8 Aircraft",
      capacity: "Logistics",
      description: "Cargo aircraft for urgent deliveries and executive transport",
      specs: ["Global coverage", "Priority logistics", "Emergency response"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1749484460743-654768ed67ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Refinery Facility"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('fleet.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {t('fleet.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {fleetData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.category}</h3>
              <div className="flex gap-6 mb-4">
                <div>
                  <div className="text-sm text-slate-600">Fleet Size</div>
                  <div className="text-lg font-bold text-blue-900">{item.count}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Capacity</div>
                  <div className="text-lg font-bold text-blue-900">{item.capacity}</div>
                </div>
              </div>
              <p className="text-slate-600 mb-6">{item.description}</p>
              <div className="space-y-2">
                {item.specs.map((spec, specIdx) => (
                  <div key={specIdx} className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">1,223</div>
              <div className="text-slate-700">Total Fleet Assets</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">99.2%</div>
              <div className="text-slate-700">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">5.2M</div>
              <div className="text-slate-700">Tons Transported/Month</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-slate-700">Operations Support</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Fleet Management System</h2>
          </div>
          <VideoPlayer
            thumbnail="https://images.unsplash.com/photo-1775522634465-a256f9763c8a?w=1200&q=80"
            title="GPS Fleet Tracking & Logistics - OOO JSC SUEK"
            duration="6:15"
            className="max-w-5xl mx-auto"
          />
        </div>
      </div>

      <PhotoGallery
        title="Fleet in Action"
        subtitle="Transportation Excellence"
        items={[
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1775522634465-a256f9763c8a?w=600&q=80",
            title: "Fleet Overview",
            description: "850+ vehicles nationwide",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1696583545294-a0158d7afa63?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1696583545294-a0158d7afa63?w=600&q=80",
            title: "Tanker Trucks",
            description: "25,000L capacity per vehicle",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1528458538087-f58e9ad895da?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1528458538087-f58e9ad895da?w=600&q=80",
            title: "Fuel Transport",
            description: "Euro-6 compliant fleet",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1706466777992-a05c6c402ae9?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1706466777992-a05c6c402ae9?w=600&q=80",
            title: "Interstate Logistics",
            description: "GPS-tracked operations",
          },
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1670355087615-3551742c15df?w=600&q=80",
            title: "Loading Procedures",
            description: "Safety-first protocols",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1696583545337-05099b905626?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1696583545337-05099b905626?w=600&q=80",
            title: "Long-Haul Fleet",
            description: "All-weather capability",
          },
        ]}
      />
    </div>
  );
}
