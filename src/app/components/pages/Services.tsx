import {
  Cog,
  BarChart,
  Headphones,
  Shield,
  Wrench,
  FileCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SafetyEnvironmental } from "../SafetyEnvironmental";
import { PhotoGallery } from "../PhotoGallery";
import { VideoPlayer } from "../VideoPlayer";
import { refineryBackgrounds } from "../../assets/backgrounds";

export function Services() {
  const services = [
    {
      icon: Cog,
      title: "Refinery Coordination",
      description:
        "Structured coordination between buyers, suppliers, refinery-linked representatives, and commercial documentation teams.",
      features: [
        "Refinery-linked communication",
        "Product inquiry coordination",
        "Commercial process guidance",
        "Professional buyer-seller support",
      ],
    },
    {
      icon: BarChart,
      title: "Supply Chain Facilitation",
      description:
        "Professional support for petroleum movement planning, storage coordination, destination review, and logistics communication.",
      features: [
        "Shipment coordination support",
        "Storage and terminal planning",
        "Destination port clarification",
        "Operational communication flow",
      ],
    },
    {
      icon: Headphones,
      title: "Client Support Desk",
      description:
        "Responsive inquiry handling for buyers, mandates, suppliers, brokers, and logistics partners across petroleum transactions.",
      features: [
        "Inquiry response support",
        "Requirement clarification",
        "Document request guidance",
        "Structured communication updates",
      ],
    },
    {
      icon: Shield,
      title: "Verification Support",
      description:
        "Support for clearer commercial processes through supplier checks, buyer requirement review, and documentation awareness.",
      features: [
        "Supplier communication review",
        "Buyer requirement checks",
        "Risk-reduction communication",
        "Process transparency support",
      ],
    },
    {
      icon: Wrench,
      title: "Operational Coordination",
      description:
        "Practical coordination for refinery-related operations, product movement discussions, and commercial workflow management.",
      features: [
        "Operational planning support",
        "Partner coordination",
        "Product availability discussions",
        "Logistics readiness checks",
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance & Documentation",
      description:
        "Commercial documentation support for petroleum-related inquiries, transaction preparation, and international trade communication.",
      features: [
        "Document flow support",
        "Commercial inquiry records",
        "Trade communication guidance",
        "Professional file preparation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${refineryBackgrounds.refineryOperations})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-0.5 w-10 bg-amber-400" />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                Professional Energy Services
              </span>
            </div>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Petroleum facilitation, refinery coordination, and logistics
              support.
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200">
              OOO JSC SUEK Energy Facilitation provides structured commercial
              support for petroleum buyers, supplier networks, refinery-linked
              contacts, documentation flow, and international logistics
              coordination.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-slate-950 transition hover:bg-amber-400"
              >
                Start Service Inquiry
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white backdrop-blur transition hover:bg-white/20"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.10),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-0.5 w-10 bg-amber-500" />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-600">
                Service Portfolio
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Built for serious energy trade communication.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our services are designed to support clarity, process discipline,
              documentation readiness, and professional communication across
              petroleum facilitation operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-2xl"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 transition group-hover:bg-amber-500">
                  <service.icon className="h-8 w-8 text-amber-400 transition group-hover:text-slate-950" />
                </div>

                <h3 className="mb-4 text-2xl font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="mb-6 leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-950 p-10 text-white shadow-2xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                Service Excellence
              </span>
              <h2 className="mt-4 text-3xl font-black md:text-4xl">
                Structured support for petroleum trade operations.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                We focus on process clarity, responsive communication, and
                professional coordination for serious commercial energy
                inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { value: "24/7", label: "Inquiry Support" },
                { value: "<2hrs", label: "Target Response Time" },
                { value: "100%", label: "Structured Process Focus" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/10 p-7 text-center backdrop-blur"
                >
                  <div className="mb-2 text-4xl font-black text-amber-400">
                    {item.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SafetyEnvironmental />

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url(${refineryBackgrounds.industrialNight})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/80" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-0.5 w-10 bg-amber-400" />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                Safety & Procedures
              </span>
              <div className="h-0.5 w-10 bg-amber-400" />
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Professional operating standards and risk awareness.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1661263989552-d82526d03b0f?w=1200&q=80"
              title="Safety Training Programs - Energy Operations"
              duration="5:45"
            />
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1771575519808-53cdb4c36fa5?w=1200&q=80"
              title="Emergency Response Procedures"
              duration="4:28"
            />
          </div>
        </div>
      </section>

      <PhotoGallery
        title="Service Operations & Energy Infrastructure"
        subtitle="Our Capabilities"
        items={[
          {
            type: "image",
            src: refineryBackgrounds.logistics,
            thumbnail: refineryBackgrounds.logistics,
            title: "Petroleum Logistics Coordination",
            description: "Professional transport and supply chain support",
          },
          {
            type: "video",
            src: "",
            thumbnail: refineryBackgrounds.pipelines,
            title: "Pipeline & Terminal Coordination",
            description: "Structured energy movement communication",
          },
          {
            type: "image",
            src: refineryBackgrounds.storageTanks,
            thumbnail: refineryBackgrounds.storageTanks,
            title: "Storage Tank Infrastructure",
            description: "Terminal and storage coordination support",
          },
          {
            type: "image",
            src: refineryBackgrounds.refineryBlue,
            thumbnail: refineryBackgrounds.refineryBlue,
            title: "Refinery-Linked Network",
            description: "Professional refinery communication support",
          },
          {
            type: "video",
            src: "",
            thumbnail: refineryBackgrounds.refineryOperations,
            title: "Industrial Energy Operations",
            description: "Petroleum process and commercial flow support",
          },
          {
            type: "image",
            src: refineryBackgrounds.industrialNight,
            thumbnail: refineryBackgrounds.industrialNight,
            title: "24/7 Energy Coordination",
            description: "Round-the-clock business and logistics readiness",
          },
        ]}
      />
    </div>
  );
}