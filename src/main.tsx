import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./app/context/LanguageContext";
import App from "./app/App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);