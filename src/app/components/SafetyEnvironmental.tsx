import { Shield, Leaf, Award, Users, TrendingDown, Recycle } from "lucide-react";

export function SafetyEnvironmental() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-7 h-0.5 bg-green-400"></div>
            <span className="text-[10px] font-mono text-green-400 uppercase tracking-[0.2em]">
              Safety & Sustainability
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Environmental Excellence & Zero-Incident Culture
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Industry-leading safety standards with comprehensive environmental management systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Shield,
              title: "Zero-Incident Record",
              value: "1,247 Days",
              description: "Consecutive days without Lost Time Injury (LTI) across all operations",
              badge: "OSHA Certified",
            },
            {
              icon: Leaf,
              title: "CO₂ Emissions Reduction",
              value: "-18.5%",
              description: "Year-over-year reduction in carbon emissions through green initiatives",
              badge: "Carbon Neutral 2030",
            },
            {
              icon: Recycle,
              title: "Waste Recycling Rate",
              value: "94.3%",
              description: "Industrial waste recycled or repurposed through circular economy programs",
              badge: "ISO 14001:2015",
            },
            {
              icon: Users,
              title: "Safety Training Hours",
              value: "127,000+",
              description: "Annual employee safety training and certification programs completed",
              badge: "ISO 45001:2018",
            },
            {
              icon: TrendingDown,
              title: "Sulfur Content",
              value: "10 ppm",
              description: "Ultra-low sulfur diesel (ULSD) exceeding EU Euro 6 standards",
              badge: "EN 590:2013",
            },
            {
              icon: Award,
              title: "Environmental Awards",
              value: "12 Awards",
              description: "Industry recognition for sustainability and environmental stewardship",
              badge: "2020-2025",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <div className="bg-white/10 px-2 py-1 rounded text-[9px] font-mono text-green-300 uppercase tracking-wider">
                  {item.badge}
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-400" />
              Safety Management System
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "HSE Policy Framework",
                  desc: "Comprehensive Health, Safety & Environment policies aligned with international standards",
                },
                {
                  title: "Risk Assessment Protocols",
                  desc: "Proactive hazard identification and risk mitigation across all operational sites",
                },
                {
                  title: "Emergency Response Teams",
                  desc: "24/7 emergency response units with advanced fire suppression and spill containment",
                },
                {
                  title: "Contractor Safety Management",
                  desc: "Rigorous contractor qualification and safety performance monitoring systems",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <div className="text-sm text-slate-300">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Leaf className="w-6 h-6 text-green-400" />
              Environmental Initiatives
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Green Fleet Program",
                  desc: "Transition to Euro-6 compliant vehicles and hybrid fuel transport solutions",
                },
                {
                  title: "Water Conservation",
                  desc: "Closed-loop water recycling systems reducing freshwater consumption by 40%",
                },
                {
                  title: "Biodiversity Protection",
                  desc: "Environmental impact assessments and habitat conservation in operational areas",
                },
                {
                  title: "Renewable Energy Integration",
                  desc: "Solar panels at 8 major facilities generating 2.4 MW clean energy annually",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <div className="text-sm text-slate-300">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Commitment to Sustainable Development Goals (SDGs)
            </h3>
            <p className="text-slate-200 mb-6">
              Aligned with UN SDG 7 (Affordable & Clean Energy), SDG 12 (Responsible Consumption), and SDG 13 (Climate Action)
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["SDG 7", "SDG 9", "SDG 12", "SDG 13", "SDG 17"].map((sdg, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
                >
                  <span className="text-white font-mono font-semibold">{sdg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
