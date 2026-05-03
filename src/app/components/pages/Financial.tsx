import { TrendingUp, DollarSign, PieChart, BarChart3 } from "lucide-react";
import { PhotoGallery } from "../PhotoGallery";
import { useLanguage } from "../context/LanguageContext";

export function Financial() {
  const { t } = useLanguage();
  const financialData = {
    revenue: [
      { year: "2019", value: 72 },
      { year: "2020", value: 78 },
      { year: "2021", value: 85 },
      { year: "2022", value: 95 },
      { year: "2023", value: 108 },
      { year: "2024", value: 119 },
      { year: "2025", value: 127.5 },
    ],
    performance: [
      { metric: "Annual Revenue", value: "₽127.5B", change: "+7.1%" },
      { metric: "Net Profit Margin", value: "14.2%", change: "+0.8pp" },
      { metric: "EBITDA", value: "₽28.4B", change: "+9.3%" },
      { metric: "Volume Distributed", value: "2.5B L", change: "+12.4%" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1573153178631-49e3aa9e018b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Refinery Facility"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('financial.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {t('financial.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {financialData.performance.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all"
            >
              <div className="text-sm text-slate-600 mb-2">{item.metric}</div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{item.value}</div>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">{item.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-6 h-6 text-blue-900" />
            <h2 className="text-2xl font-bold text-slate-900">Revenue Growth (Billions USD)</h2>
          </div>
          <div className="space-y-3">
            {financialData.revenue.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-xs text-slate-600">{item.year}</span>
                  <span className="font-bold text-amber-600">₽{item.value}B</span>
                </div>
                <div className="bg-slate-100 rounded-full h-7 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full flex items-center justify-end px-3 transition-all hover:from-amber-600 hover:to-amber-700 cursor-pointer"
                    style={{ width: `${(item.value / 130) * 100}%` }}
                  >
                    <span className="text-white text-xs font-mono font-semibold">
                      {idx > 0 && `+${((item.value / financialData.revenue[idx - 1].value - 1) * 100).toFixed(1)}%`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <PieChart className="w-6 h-6 text-blue-900" />
              <h3 className="text-xl font-bold text-slate-900">Revenue by Segment</h3>
            </div>
            <div className="space-y-4">
              {[
                { segment: "Refined Products", percentage: 62, value: "₽79.1B" },
                { segment: "Crude Oil Trading", percentage: 23, value: "₽29.3B" },
                { segment: "Logistics & Services", percentage: 10, value: "₽12.8B" },
                { segment: "Other Operations", percentage: 5, value: "₽6.3B" },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700">{item.segment}</span>
                    <div className="text-right">
                      <span className="font-bold text-amber-600">{item.percentage}%</span>
                      <span className="text-slate-600 text-sm ml-2 font-mono">{item.value}</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-6 h-6 text-blue-900" />
              <h3 className="text-xl font-bold text-slate-900">Key Financial Metrics</h3>
            </div>
            <div className="space-y-6">
              {[
                { label: "Market Capitalization", value: "₽8.7T" },
                { label: "Enterprise Value", value: "₽9.9T" },
                { label: "P/E Ratio", value: "9.7" },
                { label: "Dividend Yield", value: "4.2%" },
                { label: "ROE", value: "18.5%" },
                { label: "Debt-to-Equity", value: "0.42" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-slate-700">{item.label}</span>
                  <span className="text-xl font-bold text-amber-600 font-mono">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white rounded-2xl p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1596980786765-775174984ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Refinery Facility"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Investment Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Strong Cash Flow",
                  description: "Consistent operating cash flow generation supporting sustainable dividends and growth investments",
                },
                {
                  title: "Strategic Positioning",
                  description: "Diversified operations across refining, trading, and logistics with global market access",
                },
                {
                  title: "Operational Excellence",
                  description: "Industry-leading margins through operational efficiency and advanced refining capabilities",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 border border-white/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs font-mono text-slate-500">
          <p>Financial data as of Q4 2025. All figures in Russian Rubles (₽). Revenue growth reflects sustained market expansion.</p>
        </div>
      </div>

      <PhotoGallery
        title="Corporate Achievements"
        subtitle="Financial Milestones"
        items={[
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
            title: "Q1 2026 Earnings Report",
            description: "Record revenue announcement",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
            title: "Investor Relations",
            description: "Annual shareholder meeting",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
            title: "Financial Analytics",
            description: "Market performance tracking",
          },
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
            title: "Growth Strategy",
            description: "2026-2030 expansion plan",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
            title: "Stock Performance",
            description: "MOEX listing success",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
            title: "Financial Reporting",
            description: "Transparent accounting",
          },
        ]}
      />
    </div>
  );
}
