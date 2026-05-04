import React from "react";
import ReactDOM from "react-dom/client";

/* =========================
   GLOBAL STYLES (IMPORTANT)
========================= */
import "../styles/globals.css";

/* =========================
   APP + CONTEXT
========================= */
import { LanguageProvider } from "./app/context/LanguageContext";
import App from "./app/App";

/* =========================
   RENDER APP
========================= */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);