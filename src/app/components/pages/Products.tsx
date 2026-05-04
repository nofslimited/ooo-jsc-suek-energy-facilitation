import {
  Droplets,
  Flame,
  Fuel,
  Zap,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ProductSpecifications } from "../ProductSpecifications";
import { useLanguage } from "../../context/LanguageContext";
import { refineryBackgrounds } from "../../assets/backgrounds";

const PhotoGallery = lazy(() =>
  import("../PhotoGallery").then((module) => ({
    default: module.PhotoGallery,
  }))
);

const VideoPlayer = lazy(() =>
  import("../VideoPlayer").then((module) => ({
    default: module.VideoPlayer,
  }))
);

const SectionLoader = () => (
  <div className="flex items-center justify-center bg-white py-16">
    <div className="rounded-full border border-slate-200 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
      Loading section...
    </div>
  </div>
);

export function Products() {
  const { t } = useLanguage();

  const products = [
    {
      icon: Fuel,
      name: "Premium Gasoline",
      grade: "RON 95–98",
      description:
        "High-octane motor fuel inquiry support for commercial buyers, distributors, and petroleum trading partners.",
      applications: ["Automotive", "Commercial Supply", "Marine"],
      specs: ["Low sulfur options", "Blending support", "Bulk inquiry handling"],
    },
    {
      icon: Droplets,
      name: "Diesel Fuel",
      grade: "EN 590",
      description:
        "Diesel facilitation support for logistics companies, transport operators, industrial buyers, and wholesale partners.",
      applications: ["Heavy Machinery", "Transport", "Industrial"],
      specs: ["ULSD options", "Seasonal grades", "Bulk volume coordination"],
    },
    {
      icon: Flame,
      name: "Heating Oil",
      grade: "Commercial Grade",
      description:
        "Heating oil supply coordination for commercial, industrial, and institutional energy requirements.",
      applications: ["Heating", "Boilers", "Power Support"],
      specs: ["Low sulfur support", "High BTU value", "Storage coordination"],
    },
    {
      icon: Zap,
      name: "Jet Fuel",
      grade: "Jet A-1",
      description:
        "Aviation fuel inquiry support with documentation, specification review, and supplier communication assistance.",
      applications: ["Aviation", "Airport Supply", "Commercial Operators"],
      specs: ["ASTM-aligned inquiry", "Flash point review", "Document support"],
    },
    {
      icon: Droplets,
      name: "Lubricants",
      grade: "Industrial / Automotive",
      description:
        "Lubricant sourcing coordination for industrial machinery, transport operations, and commercial resellers.",
      applications: ["Automotive", "Industrial", "Marine Engines"],
      specs: ["API-grade options", "Synthetic/mineral options", "Bulk supply support"],
    },
    {
      icon: Fuel,
      name: "Liquefied Petroleum Gas",
      grade: "LPG",
      description:
        "LPG facilitation support for industrial, commercial, and regional energy distribution requirements.",
      applications: ["Industrial Heating", "Cooking Gas", "Automotive Fuel"],
      specs: ["Propane/butane blends", "Safety documentation", "Distribution support"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage: `url(${refineryBackgrounds.storageTanks})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.16),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2">
              <ShieldCheck className="h-4 w-4 text-amber-300" />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                Petroleum Product Facilitation
              </span>
            </div>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              {t("products.title")}
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200">
              {t("products.subtitle")}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-slate-950 transition hover:bg-amber-400"
              >
                Request Product Inquiry
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white backdrop-blur transition hover:bg-white/20"
              >
                View Facilitation Services
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
                Product Portfolio
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Petroleum products supported through structured commercial
              coordination.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We support buyers and partners with product inquiry handling,
              supplier communication, refinery-linked coordination, and
              logistics documentation flow.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-amber-400/60 hover:shadow-2xl"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 transition group-hover:bg-amber-500">
                  <product.icon className="h-8 w-8 text-amber-400 transition group-hover:text-slate-950" />
                </div>

                <h3 className="mb-3 text-2xl font-black text-slate-950">
                  {product.name}
                </h3>

                <div className="mb-5 inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-amber-800">
                  {product.grade}
                </div>

                <p className="mb-7 leading-7 text-slate-600">
                  {product.description}
                </p>

                <div className="mb-6">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Applications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Specification Support
                  </p>

                  <div className="space-y-3">
                    {product.specs.map((spec) => (
                      <div
                        key={spec}
                        className="flex items-start gap-3 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-500" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-16 overflow-hidden rounded-3xl bg-slate-950 p-10 text-white shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25"
              style={{
                backgroundImage: `url(${refineryBackgrounds.refineryBlue})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />

            <div className="relative z-10">
              <div className="mb-12 text-center">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                  Documentation & Quality Awareness
                </span>

                <h2 className="mt-4 text-3xl font-black md:text-4xl">
                  Product inquiries supported with recognized commercial
                  standards.
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                  We help structure product discussions around specification
                  clarity, documentation review, and international buyer
                  expectations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                {["ISO 9001", "ASTM", "EN 590", "Jet A-1"].map((cert) => (
                  <div
                    key={cert}
                    className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur transition hover:border-amber-400/40 hover:bg-white/15"
                  >
                    <div className="text-lg font-black text-white">{cert}</div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Reference Standard
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSpecifications />

      <section className="bg-gradient-to-br from-slate-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-0.5 w-10 bg-amber-500" />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-600">
                Product Operations
              </span>
              <div className="h-0.5 w-10 bg-amber-500" />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Product handling, quality awareness, and refinery-linked
              coordination.
            </h2>
          </div>

          <Suspense fallback={<SectionLoader />}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <VideoPlayer
                thumbnail={refineryBackgrounds.refineryOperations}
                title="Refinery Operations & Product Coordination"
                duration="4:18"
              />
              <VideoPlayer
                thumbnail={refineryBackgrounds.corporateEnergy}
                title="Commercial Documentation & Quality Review"
                duration="3:52"
              />
            </div>
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<SectionLoader />}>
        <PhotoGallery
          title="Production & Quality Control"
          subtitle="Facility Operations"
          items={[
            {
              type: "image",
              src: refineryBackgrounds.refineryOperations,
              thumbnail: refineryBackgrounds.refineryOperations,
              title: "Refinery Complex",
              description: "Petroleum processing and supply coordination",
            },
            {
              type: "image",
              src: refineryBackgrounds.storageTanks,
              thumbnail: refineryBackgrounds.storageTanks,
              title: "Storage Infrastructure",
              description: "Terminal and petroleum storage support",
            },
            {
              type: "video",
              src: "",
              thumbnail: refineryBackgrounds.pipelines,
              title: "Product Movement Process",
              description: "Pipeline and logistics coordination support",
            },
            {
              type: "image",
              src: refineryBackgrounds.industrialNight,
              thumbnail: refineryBackgrounds.industrialNight,
              title: "Night Operations",
              description: "24/7 petroleum operations coordination",
            },
          ]}
        />
      </Suspense>
    </div>
  );
}