import { Cog, BarChart, Headphones, Shield, Wrench, FileCheck } from "lucide-react";
import { SafetyEnvironmental } from "../SafetyEnvironmental";
import { PhotoGallery } from "../PhotoGallery";
import { VideoPlayer } from "../VideoPlayer";
import { useLanguage } from "../context/LanguageContext";

export function Services() {
  const { t } = useLanguage();
  const services = [
    {
      icon: Cog,
      title: "Refining Services",
      description: "State-of-the-art crude oil processing with advanced catalytic cracking and hydroprocessing capabilities",
      features: [
        "Custom blending solutions",
        "Quality optimization",
        "Yield maximization",
        "24/7 processing capability",
      ],
    },
    {
      icon: BarChart,
      title: "Supply Chain Management",
      description: "End-to-end logistics coordination ensuring timely delivery across global networks",
      features: [
        "Real-time tracking",
        "Inventory optimization",
        "Multi-modal transport",
        "Risk management",
      ],
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Expert consultation and round-the-clock customer service for all petroleum products",
      features: [
        "24/7 emergency hotline",
        "Product specifications",
        "Application guidance",
        "Training programs",
      ],
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive testing and certification ensuring compliance with international standards",
      features: [
        "Laboratory analysis",
        "ISO certification",
        "Batch tracking",
        "Quality documentation",
      ],
    },
    {
      icon: Wrench,
      title: "Equipment Maintenance",
      description: "Professional maintenance and calibration services for petroleum handling equipment",
      features: [
        "Preventive maintenance",
        "Emergency repairs",
        "Equipment upgrades",
        "Safety inspections",
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance & Documentation",
      description: "Complete regulatory support and documentation services for seamless operations",
      features: [
        "Export documentation",
        "Safety data sheets",
        "Regulatory compliance",
        "Environmental reports",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1726111440333-ab02a5a36d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Refinery Facility"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {t('services.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Excellence</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Committed to delivering exceptional service backed by decades of industry expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-900 mb-2">98.5%</div>
              <div className="text-slate-700">Customer Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-900 mb-2">&lt;2hrs</div>
              <div className="text-slate-700">Average Response Time</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-slate-700">Technical Support</div>
            </div>
          </div>
        </div>
      </div>

      <SafetyEnvironmental />

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Safety Training & Procedures</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1661263989552-d82526d03b0f?w=800&q=80"
              title="Safety Training Programs - OOO JSC SUEK"
              duration="5:45"
            />
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1771575519808-53cdb4c36fa5?w=800&q=80"
              title="Emergency Response Procedures"
              duration="4:28"
            />
          </div>
        </div>
      </div>

      <PhotoGallery
        title="Service Operations & Fleet"
        subtitle="Our Capabilities"
        items={[
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1775522634465-a256f9763c8a?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1775522634465-a256f9763c8a?w=600&q=80",
            title: "Tanker Fleet",
            description: "Modern petroleum transport vehicles",
          },
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1696583545294-a0158d7afa63?w=600&q=80",
            title: "GPS Fleet Tracking",
            description: "Real-time vehicle monitoring system",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1771575519808-53cdb4c36fa5?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1771575519808-53cdb4c36fa5?w=600&q=80",
            title: "Safety Protocols",
            description: "Highly inflammable materials handling",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1661263989552-d82526d03b0f?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1661263989552-d82526d03b0f?w=600&q=80",
            title: "Safety Training",
            description: "Certified personnel development",
          },
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1528458538087-f58e9ad895da?w=600&q=80",
            title: "Loading Operations",
            description: "Professional fuel transfer procedures",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1706466777992-a05c6c402ae9?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1706466777992-a05c6c402ae9?w=600&q=80",
            title: "Long-Haul Transport",
            description: "Interstate delivery services",
          },
        ]}
      />
    </div>
  );
}
