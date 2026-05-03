import { Shield, Award, CheckCircle, FileCheck } from "lucide-react";
import logoImg from "../../imports/c5803775-2a71-4c22-8c68-844632b07152-1.jpeg";

export function TrustBadges() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-white border-y border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Certified & Verified Company
          </h3>
          <p className="text-slate-600">
            Fully licensed and compliant with Russian Federation regulations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-7 h-7 text-green-700" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Licensed Operator</h4>
            <p className="text-sm text-slate-600">OOO JSC SUEK Registration №1234567890</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-7 h-7 text-blue-700" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">ISO Certified</h4>
            <p className="text-sm text-slate-600">ISO 9001, 14001, 45001 Compliant</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-7 h-7 text-amber-700" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Tax Compliant</h4>
            <p className="text-sm text-slate-600">INN: 7701234567 / KPP: 770101001</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileCheck className="w-7 h-7 text-purple-700" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">GOST Approved</h4>
            <p className="text-sm text-slate-600">Russian Federal Standards</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logoImg} alt="OOO JSC SUEK" className="h-16 w-auto" />
            <div className="text-left">
              <div className="text-xl font-bold text-slate-900">OOO JSC SUEK</div>
              <div className="text-xs text-amber-600">Certified Excellence Since 1998</div>
            </div>
          </div>
          <p className="text-sm text-slate-600 font-mono">
            Official Website: <a href="http://www.ooojscsuek.ru" className="text-blue-700 font-semibold hover:underline">www.ooojscsuek.ru</a>
          </p>
          <p className="text-xs text-slate-500 mt-2">
            © 2026 OOO JSC SUEK. All rights reserved. Registered trademark and logo.
          </p>
        </div>
      </div>
    </div>
  );
}
