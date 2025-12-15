import { Phone, Mail } from "lucide-react";

export const footerData = {
  brand: {
        logo: "/images/logo.png",
        textKey: "brandText",
    },

    contact: [
        {
            icon: Phone,
            valueKey: "contact.phone",
        },
        {
            icon: Mail,
            valueKey: "contact.email",
        },
    ],

    timing: [
        "timing.monFri",
        "timing.satSun",
    ],

    locationKey: "location.address",
};
