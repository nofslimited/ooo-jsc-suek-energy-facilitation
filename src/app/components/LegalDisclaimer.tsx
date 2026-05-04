import { AlertCircle, FileText, Scale } from "lucide-react";
import logoImg from "../../imports/c5803775-2a71-4c22-8c68-844632b07152-1.jpeg";

export function LegalDisclaimer() {
  return (
    <div className="bg-slate-100 border-t border-slate-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-blue-100 p-2 rounded">
            <AlertCircle className="w-5 h-5 text-blue-700" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-900 mb-2">Legal Information & Disclaimer</h4>
            <div className="text-sm text-slate-700 space-y-2">
              <p>
                <strong>Company Registration:</strong> OOO JSC SUEK (ООО ДЖС СЮК) is a registered limited liability company operating under the laws of the Russian Federation.
              </p>
              <p>
                <strong>Headquarters:</strong> Dubininskaya Ulitsa, 53, Building 7, Moscow, 115054, Russia
              </p>
              <p>
                <strong>Official Website:</strong> www.ooojscsuek.ru | <strong>Contact:</strong> +7 926 503 82 48 | <strong>Email:</strong> info@ooojscsuek.ru
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="flex items-start gap-2">
            <FileText className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800 block mb-1">Licensing</strong>
              All petroleum products are distributed under valid licenses and permits from Russian Federation regulatory authorities.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Scale className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800 block mb-1">Compliance</strong>
              Operations comply with GOST standards, ISO certifications, and environmental regulations.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <img src={logoImg} alt="OOO JSC SUEK" className="h-8 w-auto flex-shrink-0" />
            <div>
              <strong className="text-slate-800 block mb-1">Trademark</strong>
              OOO JSC SUEK name and logo are registered trademarks. Unauthorized use is prohibited.
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs text-slate-700">
          <p className="mb-2">
            <strong>Important Notice:</strong> This website contains official information about OOO JSC SUEK petroleum distribution services. All images, videos, and content are property of OOO JSC SUEK and protected by copyright.
          </p>
          <p>
            Pricing and availability are subject to change. Contract terms apply. For business inquiries, contact our sales team at +7 926 503 82 48.
          </p>
        </div>
      </div>
    </div>
  );
}
