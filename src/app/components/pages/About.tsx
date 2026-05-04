import { Building, Users, Globe2, Award, Target, Sparkles } from "lucide-react";
import { VideoShowcase } from "../VideoShowcase";
import logoImg from "../../../imports/c5803775-2a71-4c22-8c68-844632b07152-1.jpeg";
import { useLanguage } from "../../context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1596980786765-775174984ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Refinery Complex"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      <VideoShowcase
        thumbnail="https://images.unsplash.com/photo-1726111254187-9c584c215689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        title="28 Years of Petroleum Excellence"
        description="From our founding in 1998 to becoming Russia's premier petroleum distributor, discover our journey of innovation, growth, and unwavering commitment to quality and safety."
        duration="4:32"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('about.evolution')}</h2>
            <div className="relative pl-6 border-l-2 border-slate-300">
              {[
                { year: "1998", event: "Founded as OOO JSC SUEK — Established petroleum distribution operations in Moscow" },
                { year: "2005", event: "Nationwide expansion — Opened 15 regional distribution centers across Russia" },
                { year: "2012", event: "Fleet modernization — Acquired 200+ Euro-5 compliant tanker trucks" },
                { year: "2018", event: "ISO certifications — Achieved ISO 9001, 14001, and 45001 standards" },
                { year: "2023", event: "Digital transformation — Launched GPS fleet tracking and automated logistics" },
                { year: "2026", event: "Industry leader — Operating 850+ vehicles with 2.5B+ liters annual capacity" },
              ].map((item, idx) => (
                <div key={idx} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-[27px] top-1 w-2 h-2 bg-amber-500 rounded-full"></div>
                  <div className="text-[10px] font-mono text-amber-600 tracking-[0.15em] uppercase mb-1">
                    {item.year}
                  </div>
                  <div className="text-sm text-slate-700 leading-relaxed">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('about.operations')}</h3>
              <div className="space-y-3">
                {[
                  { location: "Moscow Hub", status: "Active", vehicles: 142, volume: "2.4M L" },
                  { location: "Siberia Depot", status: "Active", vehicles: 98, volume: "1.8M L" },
                  { location: "Ural Terminal", status: "Ramping", vehicles: 76, volume: "1.2M L" },
                  { location: "Volga Center", status: "Active", vehicles: 65, volume: "980K L" },
                  { location: "Far East Port", status: "Active", vehicles: 54, volume: "750K L" },
                ].map((op, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-3 border-b border-slate-200 last:border-0"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900">{op.location}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            op.status === "Active" ? "bg-green-500 animate-pulse" : "bg-yellow-500"
                          }`}
                        ></div>
                        <span
                          className={`text-[10px] font-mono uppercase ${
                            op.status === "Active" ? "text-green-600" : "text-yellow-600"
                          }`}
                        >
                          {op.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-sm text-slate-900">{op.vehicles} Vehicles</div>
                      <div className="font-mono text-xs text-slate-600">{op.volume}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 flex gap-6 text-xs font-mono text-slate-600">
                <div>▸ 850 Total Vehicles</div>
                <div>▸ 7.05M Liters Today</div>
                <div>▸ 99.8% On-Time</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years Operating", value: "28+" },
                { label: "Regions Covered", value: "85" },
                { label: "Active Clients", value: "3,200+" },
                { label: "Annual Revenue", value: "₽127.5B" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 border border-slate-200 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</div>
                  <div className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Excellence",
                description: "Striving for the highest standards in every aspect of our operations",
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Embracing cutting-edge technology and sustainable solutions",
              },
              {
                icon: Users,
                title: "Integrity",
                description: "Building trust through transparency, ethics, and accountability",
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Leadership & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Building,
                title: "Industry Leadership",
                description: "Ranked among the top 100 global energy companies with consistent year-over-year growth and market expansion.",
              },
              {
                icon: Globe2,
                title: "Global Partnerships",
                description: "Strategic partnerships across European Division and Asia-Pacific regions, with headquarters in Moscow, Russia.",
              },
              {
                icon: Award,
                title: "Quality Recognition",
                description: "Multiple international certifications including ISO 9001, 14001, 45001, and industry-specific standards.",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "15,000+ highly skilled professionals including petroleum engineers, chemists, and logistics specialists.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6">
                <item.icon className="w-10 h-10 text-blue-900 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Quality Certifications</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our commitment to excellence is validated by international quality, environmental, and safety standards
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "GOST R Certified"].map((cert, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-4xl mb-3">✓</div>
                <div className="text-sm font-mono font-semibold">{cert}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img src={logoImg} alt="OOO JSC SUEK" className="h-20 w-auto" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">OOO JSC SUEK</div>
                <div className="text-sm text-amber-400">Excellence Since 1998</div>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-slate-300 mb-4">
                <div>Dubininskaya Ulitsa, 53, Building 7</div>
                <div>Moscow, 115054, Russia</div>
              </div>
              <p className="text-lg">
                Website: <a href="http://www.ooojscsuek.ru" className="text-amber-400 font-mono font-semibold hover:underline">www.ooojscsuek.ru</a>
              </p>
              <p className="text-lg">
                Phone: <a href="tel:+79265038248" className="text-amber-400 font-mono font-semibold hover:underline">+7 926 503 82 48</a>
              </p>
              <p className="text-lg">
                Email: <a href="mailto:info@ooojscsuek.ru" className="text-amber-400 font-mono font-semibold hover:underline">info@ooojscsuek.ru</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
