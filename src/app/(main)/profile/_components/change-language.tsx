import img from "../../../../../public/images/auth-bg-image.png";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import ChangeLanguageIcone from "@components/icones/change-language-icone";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export function ChangeLanguageDialog() {
    const { i18n, t } = useTranslation();
    const [language, setLanguage] = useState<"en" | "ar">(i18n.language === "ar" ? "ar" : "en");

    // sync state if changed outside
    useEffect(() => {
        setLanguage(i18n.language === "ar" ? "ar" : "en");
    }, [i18n.language]);

    const handleSave = () => {
        i18n.changeLanguage(language);
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
        localStorage.setItem("lang", language);
    };

    return (
        <Dialog>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSave();
                }}
            >
                <DialogTrigger asChild>
                    <Button className="w-52.25 h-42 flex flex-col justify-center items-center gap-4 border border-[#D3D3D3] rounded-lg bg-transparent transition-all duration-300 ease-out hover:border-[#FF4100] hover:bg-[#FF4100]/5 hover:-translate-y-1 hover:shadow-md active:scale-95">
                        {/* <RefreshCcw className="stroke-[#FF4100] transition-transform duration-300" /> */}
                        <ChangeLanguageIcone />
                        <div className="flex flex-col items-center">
                            <p className="capitalize font-semibold text-white">{t("profile.selectLanguage.title")}</p>
                            <p className="capitalize text-[#FF4100] text-sm">
                                ({language === "en" ? t("profile.selectLanguage.english") : t("profile.selectLanguage.arabic")})
                            </p>
                        </div>
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-140.25   p-10  min-h-64 bg-[rgb(36,36,36)] border border-secondary rounded-lg ">
                    {/* Content */}
                    <div className=" z-20 flex h-full flex-col justify-between p-6  gap-4">
                        <h2 className="font-extrabold text-5xl capitalize font-baloo text-center text-white my-5">
                            {t("profile.selectLanguage.title")}
                        </h2>
                        {/* Language options */}
                        <div className="flex flex-col gap-4">
                            {/* English */}
                            <button
                                type="button"
                                onClick={() => setLanguage("en")}
                                className={`flex items-center justify-between rounded-xl border p-4 transition-all
                  ${language === "en" ? "border-[#FF4100] scale-[1.02]" : "border-[#D3D3D3]"}
                `}
                            >
                                <span className="text-white font-semibold">English</span>
                                {language === "en" && <Check className="stroke-[#FF4100]" />}
                            </button>

                            {/* Arabic */}
                            <button
                                type="button"
                                onClick={() => setLanguage("ar")}
                                className={`flex items-center justify-between rounded-xl border p-4 transition-all
                  ${language === "ar" ? "border-[#FF4100] scale-[1.02]" : "border-[#D3D3D3]"}
                `}
                            >
                                <span className="text-white font-semibold">العربية</span>
                                {language === "ar" && <Check className="stroke-[#FF4100]" />}
                            </button>
                        </div>

                        {/* Footer */}
                        <DialogFooter className="mt-4 flex justify-end gap-2">
                            <DialogClose asChild>
                                <Button  className="rounded-full" variant="outline">{t("profile.selectLanguage.cancel")}</Button>
                            </DialogClose>

                            {/* Save button wrapped with DialogClose so it closes modal */}
                            <DialogClose asChild>
                                <Button
                                 className="rounded-full"
                                    type="submit"
                                    onClick={handleSave} // logic executed before closing
                                >
                                    {t("profile.selectLanguage.saveChanges")}
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    );
}
