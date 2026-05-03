import { Link } from "react-router";
import { AlertCircle, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <AlertCircle className="w-20 h-20 text-amber-500 mx-auto mb-4" />
          <h1 className="text-7xl font-bold text-slate-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Page Not Found</h2>
          <p className="text-slate-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-8 py-4 rounded font-bold text-sm hover:bg-amber-600 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
