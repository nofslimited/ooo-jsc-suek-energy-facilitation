import {
  Phone,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Globe2,
} from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { refineryBackgrounds } from "../../assets/backgrounds";

const PhotoGallery = lazy(() =>
  import("../PhotoGallery").then((module) => ({
    default: module.PhotoGallery,
  }))
);

const SectionLoader = () => (
  <div className="flex justify-center py-16 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
    Loading section...
  </div>
);

export function Contact() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (formData.message.trim().length < 5) {
      alert("Please provide more details about your inquiry.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://name-ooo-jsc-suek-backend.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      alert("✅ Inquiry submitted successfully. Our team will contact you.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Inquiry could not be submitted. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const majorLocations = [
    { city: "Moscow", region: "Central Operations" },
    { city: "St. Petersburg", region: "Northwest Access" },
    { city: "Novosibirsk", region: "Siberian Network" },
    { city: "Yekaterinburg", region: "Ural Corridor" },
    { city: "Kazan", region: "Volga Region" },
    { city: "Vladivostok", region: "Far East Gateway" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${refineryBackgrounds.heroNight})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2">
              <ShieldCheck className="h-4 w-4 text-amber-300" />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                Direct Energy Inquiry Desk
              </span>
            </div>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              {t("contact.title")}
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          {
            icon: Phone,
            title: "Direct Line",
            text: "Available for urgent petroleum inquiries",
            value: "+7 926 503 82 48",
            href: "tel:+79265038248",
          },
          {
            icon: Mail,
            title: "Email Desk",
            text: "Send product, volume, and documentation details",
            value: "info@ooojscsuek.ru",
            href: "mailto:info@ooojscsuek.ru",
          },
          {
            icon: Globe2,
            title: "Corporate Website",
            text: "Official inquiry and company information",
            value: "www.ooojscsuek.ru",
            href: "https://www.ooojscsuek.ru",
          },
        ].map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-2xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 transition group-hover:bg-amber-500">
              <item.icon className="h-7 w-7 text-amber-400 transition group-hover:text-slate-950" />
            </div>

            <h3 className="mb-2 text-xl font-black text-slate-950">
              {item.title}
            </h3>

            <p className="mb-4 leading-6 text-slate-600">{item.text}</p>

            <p className="font-black text-amber-700 transition group-hover:text-amber-600">
              {item.value}
            </p>
          </a>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/60">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-600">
              Petroleum Inquiry Form
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Submit Energy Inquiry
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Share your product type, required volume, destination, company
              details, and documentation expectations. Your inquiry will be
              securely sent to our backend lead system.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name *"
                className="input"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address *"
                className="input"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone / WhatsApp"
                className="input"
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="input"
              />
            </div>

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="input"
            >
              <option value="">Select Inquiry Type *</option>
              <option value="diesel">Diesel EN590</option>
              <option value="jet-a1">Jet A-1</option>
              <option value="gasoline">Gasoline / Petrol</option>
              <option value="lpg">LPG</option>
              <option value="logistics">Petroleum Logistics</option>
              <option value="partnership">Partnership / Mandate</option>
              <option value="documentation">Documentation Support</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell us product, volume, destination port/country, timeline, and required documents..."
              className="input resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-amber-500 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-5 w-5" />
              {loading ? "Sending Inquiry..." : "Submit Inquiry"}
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
              Why Serious Buyers Contact Us
            </span>

            <h3 className="mt-4 text-3xl font-black">
              Built for structured energy trade communication.
            </h3>

            <div className="mt-8 space-y-4">
              {[
                "Verified supplier and buyer communication support",
                "Product, volume, and destination clarification",
                "Commercial document flow preparation",
                "Petroleum logistics and refinery-linked coordination",
                "Professional lead handling for international buyers",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-amber-400" />
                  <span className="leading-7 text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-400" />
                <p className="font-black text-white">Target Response Time</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Standard inquiries are reviewed within 24 hours. Urgent
                petroleum logistics or product requests should include volume,
                destination, and documentation requirements.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
            <div className="mb-6 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-amber-600" />
              <h3 className="text-2xl font-black text-slate-950">
                Headquarters & Live GPS Map
              </h3>
            </div>

            <div className="mb-6 rounded-2xl bg-slate-50 p-5">
              <p className="font-black text-slate-950">
                OOO JSC SUEK Energy Facilitation
              </p>
              <p className="mt-2 leading-7 text-slate-600">
                Dubininskaya Ulitsa, 53, Building 7
                <br />
                Moscow, 115054, Russia
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="relative h-96 w-full bg-slate-100">
                <iframe
                  src="https://www.google.com/maps?q=Dubininskaya%20Ulitsa%2053%20Moscow%20Russia&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OOO JSC SUEK Energy Facilitation Headquarters Map"
                />

                <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-lg">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="text-xs font-black text-slate-900">
                    Live GPS Map
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5">
              <div className="mb-4 flex items-center gap-2 font-black text-slate-950">
                <MapPin className="h-4 w-4 text-amber-600" />
                Major Operations Cities
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {majorLocations.map((location) => (
                  <div
                    key={location.city}
                    className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <div>
                      <p className="text-sm font-black text-slate-950">
                        {location.city}
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        {location.region}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm leading-6 text-slate-700">
                <strong>Partnership regions:</strong> Europe, Middle East,
                Africa, Asia-Pacific, and selected CIS trade corridors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<SectionLoader />}>
        <PhotoGallery
          title="Global Operations & Facilities"
          subtitle="Energy Network"
          items={[
            {
              type: "image",
              src: refineryBackgrounds.refineryOperations,
              thumbnail: refineryBackgrounds.refineryOperations,
              title: "Refinery Coordination",
              description: "Supplier and buyer communication support",
            },
            {
              type: "image",
              src: refineryBackgrounds.storageTanks,
              thumbnail: refineryBackgrounds.storageTanks,
              title: "Storage Systems",
              description: "Petroleum storage and terminal infrastructure",
            },
            {
              type: "image",
              src: refineryBackgrounds.pipelines,
              thumbnail: refineryBackgrounds.pipelines,
              title: "Pipeline Network",
              description: "Distribution and logistics coordination systems",
            },
          ]}
        />
      </Suspense>
    </div>
  );
}