import { transOptions } from "@/configurations/translation.config";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/**
 * Initializes the i18next instance with the React integration.
 * This enables translation capabilities in React components using react-i18next.
 *
 * Note: You should configure your translations and i18next options
 * before or during this initialization as needed.
 */
i18n.use(initReactI18next).init(transOptions);
