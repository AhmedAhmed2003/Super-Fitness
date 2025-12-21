import { Loader2 } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

function PageLoader() {
    const { t } = useTranslation("healthy-id");

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
            <Loader2 className="text-primary animate-spin" size={56} />
            <p>{t("loading")}</p>
        </div>
    );
}

export default PageLoader;
