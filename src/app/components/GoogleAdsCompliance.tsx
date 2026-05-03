import { CheckCircle } from "lucide-react";
import logoImg from "../../imports/c5803775-2a71-4c22-8c68-844632b07152-1.jpeg";

export function GoogleAdsCompliance() {
  return (
    <div className="bg-white py-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">
                Verified Business Information
              </h4>
              <p className="text-sm text-slate-600">
                All content on this website is accurate and complies with advertising standards.
                OOO JSC SUEK is a registered company operating under Russian Federation business laws.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <img src={logoImg} alt="OOO JSC SUEK" className="h-12 w-auto" />
            <div className="text-right">
              <div className="text-sm font-bold text-slate-900">OOO JSC SUEK</div>
              <div className="text-xs text-slate-600 font-mono">Reg. №1234567890</div>
              <div className="text-xs text-blue-700 font-semibold">www.ooojscsuek.ru</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
