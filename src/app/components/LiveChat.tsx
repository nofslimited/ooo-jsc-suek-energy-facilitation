import { useState } from "react";

export function LiveChat() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/79265038248?text=Hello%20OOO%20JSC%20SUEK!%20I%20need%20information%20about%20your%20petroleum%20distribution%20services.`, '_blank');
  };

  return (
    <>
      {isPopupOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-40">
          <div className="bg-green-600 p-4 flex items-center gap-3">
            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-2xl">
              💬
            </div>
            <div>
              <div className="text-white font-semibold text-sm">OOO JSC SUEK Support</div>
              <div className="text-white/70 text-xs">Typically replies instantly</div>
            </div>
          </div>
          <div className="p-5 bg-slate-50">
            <div className="bg-white rounded-lg p-3.5 mb-3.5 shadow-sm">
              <p className="text-slate-800 text-sm leading-relaxed">Hello! 👋 How can we help you today?</p>
              <p className="text-slate-500 text-xs mt-2">
                We're here to answer questions about our petroleum distribution services.
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-all"
            >
              💬 Start WhatsApp Chat
            </button>
            <div className="text-center mt-3.5">
              <p className="text-slate-500 text-xs mb-1">Contact Information</p>
              <p className="text-slate-800 text-sm font-semibold">+7 926 503 82 48</p>
              <p className="text-slate-600 text-xs">jscsuek@inbox.ru</p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsPopupOpen(!isPopupOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-700 transition-all z-50 group"
        title="WhatsApp Chat"
      >
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-2xl group-hover:scale-110 transition-transform">💬</span>
      </button>
    </>
  );
}
