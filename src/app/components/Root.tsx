import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { LiveMarketTicker } from "./LiveMarketTicker";
import { LiveChat } from "./LiveChat";
import { Footer } from "./Footer";
import { LegalDisclaimer } from "./LegalDisclaimer";
import { GoogleAdsCompliance } from "./GoogleAdsCompliance";

export function Root() {
  return (
    <div className="min-h-screen bg-white">
      <LiveMarketTicker />
      <Navigation />
      <Outlet />
      <GoogleAdsCompliance />
      <LegalDisclaimer />
      <Footer />
      <LiveChat />
    </div>
  );
}
