import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { PhotoGallery } from "../PhotoGallery";
import { useLanguage } from "../../context/LanguageContext";

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
    alert("Thank you for your message! Our team will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1749484460743-654768ed67ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Refinery Facility"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {t('contact.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('contact.phone')}</h3>
            <p className="text-slate-600 mb-4">Available 24/7 for urgent inquiries</p>
            <a href="tel:+79265038248" className="text-blue-900 font-semibold text-lg hover:underline">
              +7 926 503 82 48
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('contact.email')}</h3>
            <p className="text-slate-600 mb-4">Send us a detailed message</p>
            <a href="mailto:info@ooojscsuek.ru" className="text-blue-900 font-semibold text-lg hover:underline">
              info@ooojscsuek.ru
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('contact.website')}</h3>
            <p className="text-slate-600 mb-4">Visit our corporate website</p>
            <a href="http://www.ooojscsuek.ru" target="_blank" rel="noopener noreferrer" className="text-blue-900 font-semibold text-lg hover:underline">
              www.ooojscsuek.ru
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    placeholder="+7 XXX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="products">Product Information</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-blue-900" />
                <h3 className="text-2xl font-bold text-slate-900">Business Hours</h3>
              </div>
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
                  { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
                  { day: "Emergency Hotline", hours: "24/7 Available" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                    <span className="font-semibold text-slate-700">{item.day}</span>
                    <span className="text-blue-900 font-semibold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Headquarters & Operations</h3>

              {/* Main Office */}
              <div className="mb-8 pb-8 border-b border-slate-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 text-lg mb-2">
                      OOO JSC SUEK Headquarters
                    </div>
                    <div className="text-slate-700 mb-3">
                      <div className="mb-1">Dubininskaya Ulitsa, 53, Building 7</div>
                      <div className="mb-1">Moscow, 115054</div>
                      <div className="mb-1">Russia</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-blue-700" />
                        <a href="tel:+79265038248" className="text-blue-900 font-semibold hover:underline">
                          +7 926 503 82 48
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-blue-700" />
                        <a href="mailto:jscsuek@inbox.ru" className="text-blue-900 font-semibold hover:underline">
                          jscsuek@inbox.ru
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Embedded Map with Multiple Locations */}
                <div className="mt-6 rounded-xl overflow-hidden border border-slate-200">
                  <div className="relative w-full h-96 bg-slate-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.2870647831195!2d37.6238!3d55.7165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4f1f6c9c45f%3A0x123456789abcdef!2sDubininskaya%20Ulitsa%2C%2053%2C%20Building%207%2C%20Moscow%2C%20115054%2C%20Russia!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s&zoom=5"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="OOO JSC SUEK Headquarters & Major Locations in Russia"
                    ></iframe>
                    <div className="absolute top-3 left-3 bg-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 z-10">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-slate-900">Live GPS Tracking</span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-blue-900/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg z-10">
                      <div className="text-white text-xs font-semibold">📍 6 Major Locations</div>
                    </div>
                  </div>
                </div>

                {/* Major Locations List */}
                <div className="mt-6 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-4">
                  <div className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    Major Operations Centers Across Russia
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { city: "Moscow", region: "Central" },
                      { city: "St. Petersburg", region: "Northwest" },
                      { city: "Novosibirsk", region: "Siberia" },
                      { city: "Yekaterinburg", region: "Urals" },
                      { city: "Kazan", region: "Volga" },
                      { city: "Vladivostok", region: "Far East" },
                    ].map((location, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <div>
                          <span className="font-semibold text-slate-900">{location.city}</span>
                          <span className="text-slate-600 text-xs ml-1">({location.region})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-700 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <strong>Office Hours:</strong> Monday-Friday 8:00-20:00, Saturday 9:00-18:00
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership Regions */}
              <div>
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-amber-500"></div>
                  Strategic Partnership Regions
                </h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🇪🇺</div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 mb-1">European Division</div>
                        <div className="text-sm text-slate-600 mb-2">
                          Integrated partnership network across Western & Eastern Europe
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["Netherlands", "Germany", "Poland", "Czech Republic"].map((country, idx) => (
                            <span key={idx} className="bg-white px-2 py-1 rounded text-xs text-slate-700 border border-slate-200">
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🌏</div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 mb-1">Asia-Pacific Region</div>
                        <div className="text-sm text-slate-600 mb-2">
                          Strategic partnerships throughout Southeast Asia & Pacific markets
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["Singapore", "China", "India", "South Korea"].map((country, idx) => (
                            <span key={idx} className="bg-white px-2 py-1 rounded text-xs text-slate-700 border border-slate-200">
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-xs text-slate-700">
                    <strong>Partnership Inquiries:</strong> For European and Asia-Pacific business opportunities,
                    contact our international division at <a href="tel:+79265038248" className="text-blue-700 font-semibold hover:underline">+7 926 503 82 48</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PhotoGallery
        title="Our Locations & Facilities"
        subtitle="Global Presence"
        items={[
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
            title: "Headquarters Tour",
            description: "Moscow corporate office",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
            title: "Customer Service Center",
            description: "24/7 support operations",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
            title: "Regional Offices",
            description: "85 regions covered",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
            title: "Team Meeting",
            description: "Collaborative workspace",
          },
          {
            type: "video",
            src: "",
            thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
            title: "Join Our Team",
            description: "Career opportunities",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
            thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
            title: "Innovation Lab",
            description: "R&D facilities",
          },
        ]}
      />
    </div>
  );
}
