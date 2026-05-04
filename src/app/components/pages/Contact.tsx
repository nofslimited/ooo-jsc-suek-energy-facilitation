import {
  Phone,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useState, lazy, Suspense } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { refineryBackgrounds } from "../../assets/backgrounds";

const PhotoGallery = lazy(() =>
  import("../PhotoGallery").then((m) => ({ default: m.PhotoGallery }))
);

const SectionLoader = () => (
  <div className="flex justify-center py-16 text-sm font-bold text-slate-500">
    Loading...
  </div>
);

export function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry received. Our team will contact you.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative bg-slate-950 py-28 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${refineryBackgrounds.heroNight})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="text-amber-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-amber-300 font-bold">
                Direct Energy Inquiry
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6">
              {t("contact.title")}
            </h1>

            <p className="text-lg text-slate-300">
              Submit your petroleum inquiry including product, volume,
              destination, and documentation requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Phone,
            title: "Direct Line",
            value: "+7 926 503 82 48",
            link: "tel:+79265038248",
          },
          {
            icon: Mail,
            title: "Email",
            value: "jscsuek@inbox.ru",
            link: "mailto:jscsuek@inbox.ru",
          },
          {
            icon: MapPin,
            title: "Location",
            value: "Moscow, Russia",
            link: "#",
          },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="group bg-white border rounded-2xl p-6 hover:shadow-xl transition"
          >
            <item.icon className="text-amber-500 mb-4" />
            <div className="font-bold text-slate-900">{item.title}</div>
            <div className="text-slate-600 group-hover:text-amber-600">
              {item.value}
            </div>
          </a>
        ))}
      </section>

      {/* FORM */}
      <section className="max-w-7xl mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-10">
        <div className="bg-white border rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-black mb-6">
            Submit Energy Inquiry
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="input"
            />
            <input
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="input"
            />
            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="input"
            />
            <input
              name="company"
              placeholder="Company"
              onChange={handleChange}
              className="input"
            />

            <select
              name="subject"
              required
              onChange={handleChange}
              className="input"
            >
              <option value="">Select Inquiry Type</option>
              <option value="diesel">Diesel EN590</option>
              <option value="jet">Jet A1</option>
              <option value="gasoline">Gasoline</option>
              <option value="lpg">LPG</option>
            </select>

            <textarea
              name="message"
              rows={5}
              placeholder="Volume, destination, specs..."
              required
              onChange={handleChange}
              className="input"
            />

            <button className="w-full bg-amber-500 text-slate-950 py-4 rounded-xl font-black flex justify-center gap-2 hover:bg-amber-400">
              <Send className="w-5 h-5" />
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* TRUST BLOCK */}
        <div className="bg-slate-950 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-black mb-6">
            Why Clients Contact Us
          </h3>

          <div className="space-y-4">
            {[
              "Verified supplier communication support",
              "Structured documentation guidance",
              "Petroleum trade coordination",
              "Fast response from energy desk",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="text-amber-400" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="text-sm text-slate-400">
              Response Time: Within 24 Hours
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Suspense fallback={<SectionLoader />}>
        <PhotoGallery
          title="Global Operations"
          subtitle="Energy Network"
          items={[
            {
              type: "image",
              src: refineryBackgrounds.refineryOperations,
              thumbnail: refineryBackgrounds.refineryOperations,
              title: "Refinery Coordination",
              description: "Supplier and buyer connection",
            },
            {
              type: "image",
              src: refineryBackgrounds.storageTanks,
              thumbnail: refineryBackgrounds.storageTanks,
              title: "Storage Systems",
              description: "Petroleum infrastructure",
            },
            {
              type: "image",
              src: refineryBackgrounds.pipelines,
              thumbnail: refineryBackgrounds.pipelines,
              title: "Pipeline Network",
              description: "Distribution systems",
            },
          ]}
        />
      </Suspense>
    </div>
  );
}