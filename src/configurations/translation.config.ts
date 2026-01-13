import { AR, EN } from "@i18n/messages";

const savedLang = localStorage.getItem("lang") || "en";

export const transOptions = {
    resources: {
        en: {
            translation: EN,
        },
        ar: {
            translation: AR,
        },
    },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
};
