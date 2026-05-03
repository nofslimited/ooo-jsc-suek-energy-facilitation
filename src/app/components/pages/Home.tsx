import {
  ArrowRight,
  Factory,
  Globe,
  Shield,
  Users,
  CheckCircle2,
  Ship,
  FileCheck2,
  BarChart3,
  Fuel,
  Landmark,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSlider } from "../HeroSlider";
import { ClientTestimonials } from "../ClientTestimonials";
import { PhotoGallery } from "../PhotoGallery";
import { TrustBadges } from "../TrustBadges";
import { VideoPlayer } from "../VideoPlayer";
import { useLanguage } from "../../context/LanguageContext";

export function Home() {
  const { t } = useLanguage();

  const stats = [
    { value: "24/7", label: "Operational Support", note: "Client coordination" },
    { value: "85+", label: "Regional Reach", note: "Market access support" },
    { value: "500K+", label: "BPD Network Capacity", note: "Partner facilities" },
    { value: "3.2K+", label: "Commercial Inquiries", note: "Handled globally" },
    { value: "28+", label: "Years Sector Experience", note: "Energy network" },
  ];

  const pillars = [
    {
      icon: Factory,
      title: "Refinery Coordination",
      description:
        "Structured support for buyers seeking verified refinery-linked supply channels and commercial documentation guidance.",
      stat: "Refinery Network",
    },
    {
      icon: Ship,
      title: "Petroleum Logistics",
      description:
        "Coordination for shipping, storage, destination planning, and operational communication between trade partners.",
      stat: "Global Movement",
    },
    {
      icon: FileCheck2,
      title: "Transaction Documentation",
      description:
        "Professional assistance with commercial document flow, buyer-seller communication, and process clarity.",
      stat: "Secure Process",
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Verified Facilitation Process",
      description:
        "We support structured communication and verification steps to reduce confusion in petroleum trade discussions.",
    },
    {
      icon: Globe,
      title: "International Market Coordination",
      description:
        "Our work supports buyers, suppliers, mandates, brokers, logistics teams, and refinery-linked commercial contacts.",
    },
    {
      icon: Users,
      title: "Client-Focused Support",
      description:
        "Clear updates, professional guidance, and practical communication throughout the facilitation journey.",
    },
    {
      icon: Fuel,
      title: "Petroleum Product Focus",
      description:
        "Support for diesel, crude-related inquiries, refined products, fuel logistics, and supply coordination.",
    },
    {
      icon: Landmark,
      title: "Corporate-Grade Presentation",
      description:
        "Designed for serious buyers, corporate representatives, and international energy trade partners.",
    },
    {
      icon: Headphones,
      title: "Responsive Communication",
      description:
        "Dedicated inquiry handling for clients who need timely answers and properly structured next steps.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSlider />

      <section className="border-y border-amber-400/20 bg-slate-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/10 px-5 py-8 text-center md:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className="mb-2 text-4xl font-black tracking-tight text-amber-400">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                {stat.label}
              </div>
              <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-0.5 w-10 bg-amber-500" />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-600">
                Core Energy Services
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Corporate energy facilitation built for serious petroleum trade
              operations.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              OOO JSC SUEK Energy Facilitation positions itself as a structured
              coordination partner for petroleum buyers, suppliers, logistics
              representatives, and refinery-linked commercial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-2xl"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 transition group-hover:bg-amber-500">
                  <item.icon className="h-8 w-8 text-amber-400 transition group-hover:text-slate-950" />
                </div>

                <div className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-amber-600">
                  {item.stat}
                </div>

                <h3 className="mb-4 text-2xl font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1670689334896-8fa8291daa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Energy infrastructure"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/80" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-0.5 w-10 bg-amber-400" />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                Why Clients Choose Us
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Built for trust, clarity, documentation, and global coordination.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Energy transactions require more than promises. They require
              organized communication, verified steps, professional
              documentation flow, and a team that understands international
              commercial expectations.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Verified supplier and buyer communication support",
                "Commercial document coordination and inquiry handling",
                "Logistics, destination, and product requirement clarification",
                "Professional contact flow prepared for backend email integration",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-amber-400" />
                  <span className="text-slate-200">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-slate-950 transition hover:bg-amber-400"
              >
                Start Inquiry
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/20"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:border-amber-400/40 hover:bg-white/15"
              >
                <item.icon className="mb-5 h-8 w-8 text-amber-400" />
                <h3 className="mb-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="bg-gradient-to-br from-slate-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-0.5 w-10 bg-amber-500" />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-600">
                Operations Overview
              </span>
              <div className="h-0.5 w-10 bg-amber-500" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Professional energy media and operations insight
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A corporate presentation of energy infrastructure, logistics
              operations, commercial coordination, and client support
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1596980786765-775174984ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              title="Refinery Coordination & Energy Operations"
              duration="4:15"
            />
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1670689334896-8fa8291daa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              title="Digital Support for Petroleum Trade"
              duration="3:48"
            />
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1726111254187-9c584c215689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              title="Corporate Energy Facilitation Model"
              duration="6:22"
            />
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              title="Client Service & Commercial Support"
              duration="2:54"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1749484460743-654768ed67ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Refinery at night"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-900/80" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2">
            <BarChart3 className="h-4 w-4 text-amber-300" />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
              Start a Structured Energy Inquiry
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Ready to discuss petroleum facilitation, supplier coordination, or
            logistics support?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Contact our team with your product, volume, destination, and
            documentation requirements. We will prepare the communication flow
            for the next stage.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+79265038248"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-slate-950 transition hover:bg-slate-100"
            >
              Call +7 926 503 82 48
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-slate-950 transition hover:bg-amber-400"
            >
              Send Inquiry
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <ClientTestimonials />

      <PhotoGallery
        title="Corporate Media & Energy Infrastructure"
        subtitle="Operations Gallery"
        items={[
          {
            type: "video",
            src: "",
            thumbnail:
              "https://images.unsplash.com/photo-1726111440333-ab02a5a36d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            title: "Night Operations - Advanced Facilities",
            description:
              "24/7 petroleum-linked operations with advanced infrastructure",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1772376920749-afdc99c517f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
            thumbnail:
              "https://images.unsplash.com/photo-1772376920749-afdc99c517f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            title: "Storage Tank Infrastructure",
            description: "High-capacity petroleum storage and terminal support",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1636321187141-80858158d614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
            thumbnail:
              "https://images.unsplash.com/photo-1636321187141-80858158d614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            title: "Modern Refinery Complex",
            description: "Professional refinery-linked coordination network",
          },
          {
            type: "video",
            src: "",
            thumbnail:
              "https://images.unsplash.com/photo-1573153178631-49e3aa9e018b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            title: "Industrial Excellence at Night",
            description: "Round-the-clock energy operations and logistics flow",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1670689334896-8fa8291daa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
            thumbnail:
              "https://images.unsplash.com/photo-1670689334896-8fa8291daa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            title: "Advanced Pipeline System",
            description: "Sophisticated petroleum distribution infrastructure",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1610273561721-d8272de02402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
            thumbnail:
              "https://images.unsplash.com/photo-1610273561721-d8272de02402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            title: "Urban Energy Hub",
            description: "Energy infrastructure supporting commercial markets",
          },
        ]}
      />
    </div>
  );
}