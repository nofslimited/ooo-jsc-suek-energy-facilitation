import { Calendar, Tag } from "lucide-react";
import { PhotoGallery } from "../PhotoGallery";
import { useLanguage } from "../../context/LanguageContext";

export function News() {
  const { t } = useLanguage();
  const news = [
    {
      date: "April 28, 2026",
      category: "Corporate",
      title: "OOO JSC SUEK Reports Record Q1 2026 Revenue of $17.8 Billion",
      summary: "First quarter results exceed analyst expectations with strong performance across all business segments, driven by operational excellence and strategic market positioning.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    },
    {
      date: "April 15, 2026",
      category: "Sustainability",
      title: "New Carbon-Neutral Refining Initiative Launched",
      summary: "Major investment in green hydrogen and carbon capture technology positions SUEK as industry leader in sustainable petroleum refining with target of 50% emissions reduction by 2030.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
    },
    {
      date: "March 30, 2026",
      category: "Expansion",
      title: "Strategic Partnership with Asian Energy Markets",
      summary: "Multi-billion dollar agreement expands distribution network across Southeast Asia, opening new markets and strengthening regional supply chain capabilities.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop",
    },
    {
      date: "March 12, 2026",
      category: "Technology",
      title: "Advanced AI-Powered Refining System Deployed",
      summary: "Implementation of machine learning optimization across three major refineries increases efficiency by 12% while reducing operational costs and environmental impact.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
    },
    {
      date: "February 28, 2026",
      category: "Awards",
      title: "Recognized as Top Employer in Energy Sector",
      summary: "OOO JSC SUEK receives prestigious industry award for workplace excellence, employee development programs, and commitment to diversity and inclusion.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    },
    {
      date: "February 10, 2026",
      category: "Infrastructure",
      title: "New $2.3B Refinery Complex Breaks Ground",
      summary: "Construction begins on state-of-the-art facility with 150,000 BPD capacity, incorporating latest environmental technology and automation systems.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1670689334896-8fa8291daa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Refinery Facility"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('news.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {t('news.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {news.map((article, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 h-64 lg:h-auto bg-slate-200 relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="lg:col-span-2 p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-blue-900" />
                      <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-700 text-lg leading-relaxed">{article.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-2xl p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Get the latest news, market insights, and company updates delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <PhotoGallery
        title="Media & Events"
        subtitle="Company Highlights"
        items={[
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1667015048811-612f197bf398?w=600&q=80",
            title: "New Refinery Opening",
            description: "Expansion ceremony in Moscow",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
            title: "Industry Awards",
            description: "Top employer recognition",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
            title: "Construction Progress",
            description: "$2.3B facility development",
          },
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
            title: "AI Technology Deploy",
            description: "Machine learning optimization",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
            title: "Asian Partnership",
            description: "Southeast Asia expansion",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
            title: "Sustainability Launch",
            description: "Carbon-neutral initiative",
          },
        ]}
      />
    </div>
  );
}
