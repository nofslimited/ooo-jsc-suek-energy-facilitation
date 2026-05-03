import { ArrowRight, Factory, Globe, Award, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router";
import { HeroSlider } from "../HeroSlider";
import { ClientTestimonials } from "../ClientTestimonials";
import { PhotoGallery } from "../PhotoGallery";
import { TrustBadges } from "../TrustBadges";
import { VideoPlayer } from "../VideoPlayer";
import { useLanguage } from "../context/LanguageContext";

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <HeroSlider />

      <section className="bg-slate-900 border-y border-amber-500/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5">
          {[
            { value: "2.5B+", label: t('stats.liters'), change: "+12.4% YoY" },
            { value: "850+", label: t('stats.vehicles'), change: "Fleet Capacity" },
            { value: "28+", label: t('stats.years'), change: "Since 1998" },
            { value: "3,200+", label: t('stats.clients'), change: "+15.7% Growth" },
            { value: "85", label: t('stats.regions'), change: "Nationwide" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center py-7 px-5 border-r border-slate-800 last:border-r-0"
            >
              <div className="text-5xl font-bold text-amber-500 mb-1.5">{stat.value}</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.15em] mb-1">
                {stat.label}
              </div>
              <div className="text-[9px] font-mono text-green-400">{stat.change}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Factory,
                title: "World-Class Refineries",
                description: "Operating state-of-the-art facilities with 500,000+ bpd capacity",
                stat: "500K+ BPD",
              },
              {
                icon: Globe,
                title: "International Partnerships",
                description: "Strategic partnerships across European and Asia-Pacific regions",
                stat: "85 Regions",
              },
              {
                icon: Award,
                title: "Industry Excellence",
                description: "ISO 9001, 14001, 45001 certified operations",
                stat: "99.8% Quality",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="bg-blue-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">{item.stat}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t('home.whyChoose.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('home.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Market Leadership",
                description: "Ranked among the top 100 global energy companies with consistent growth",
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "Zero-incident culture with industry-leading safety protocols and training",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "15,000+ professionals dedicated to excellence and innovation",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <item.icon className="w-10 h-10 text-blue-900 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1749484460743-654768ed67ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Refinery at Night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/90 to-blue-900/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.partner')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.contact')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+79265038248"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              {t('cta.call')} +7 926 503 82 48
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              {t('cta.form')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-7 h-0.5 bg-amber-500"></div>
              <span className="text-[10px] font-mono text-amber-600 uppercase tracking-[0.2em]">
                {t('home.video.subtitle')}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t('home.video.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1596980786765-775174984ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              title="New Refinery Grand Opening 2025"
              duration="4:15"
            />
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1670689334896-8fa8291daa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              title="AI Technology Deployment & Automation"
              duration="3:48"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1726111254187-9c584c215689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              title="Company Review: 28 Years of Excellence"
              duration="6:22"
            />
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              title="Customer Service & Support Excellence"
              duration="2:54"
            />
          </div>
        </div>
      </div>

      <ClientTestimonials />

      <PhotoGallery
        title={t('home.gallery.title')}
        subtitle={t('home.gallery.subtitle')}
        items={[
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1726111440333-ab02a5a36d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            title: "Night Operations - Advanced Facilities",
            description: "24/7 refinery operations with cutting-edge infrastructure",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1772376920749-afdc99c517f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
            thumbnail: "https://images.unsplash.com/photo-1772376920749-afdc99c517f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            title: "Storage Tank Infrastructure",
            description: "High-capacity petroleum storage facilities",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1636321187141-80858158d614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
            thumbnail: "https://images.unsplash.com/photo-1636321187141-80858158d614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            title: "Modern Refinery Complex",
            description: "State-of-the-art processing towers",
          },
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1573153178631-49e3aa9e018b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            title: "Industrial Excellence at Night",
            description: "Round-the-clock petroleum production",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1670689334896-8fa8291daa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
            thumbnail: "https://images.unsplash.com/photo-1670689334896-8fa8291daa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            title: "Advanced Pipeline System",
            description: "Sophisticated distribution network infrastructure",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1610273561721-d8272de02402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
            thumbnail: "https://images.unsplash.com/photo-1610273561721-d8272de02402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            title: "Urban Energy Hub",
            description: "Powering Russia's industrial future",
          },
        ]}
      />
    </div>
  );
}
