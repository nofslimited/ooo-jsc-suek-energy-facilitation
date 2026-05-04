import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/globals.css";

import { LanguageProvider } from "./app/context/LanguageContext";
import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);