import { AR, EN } from "@i18n/messages";

const savedLang = localStorage.getItem("lang") || "ar";

export const transOptions = {
    resources: {
        en: EN,
        ar: AR,
    },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
};
