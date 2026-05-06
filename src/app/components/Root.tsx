import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { LiveChat } from "./LiveChat";
import { Footer } from "./Footer";
import { LegalDisclaimer } from "./LegalDisclaimer";
import { GoogleAdsCompliance } from "./GoogleAdsCompliance";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Navigation */}
      <Navigation />

      {/* Main Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Bottom Sections */}
      <GoogleAdsCompliance />
      <LegalDisclaimer />
      <Footer />

      {/* Floating Chat */}
      <LiveChat />

    </div>
  );
}