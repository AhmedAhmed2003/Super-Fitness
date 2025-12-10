import App from "@app/app";
import "@styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
