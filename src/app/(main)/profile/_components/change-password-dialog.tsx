import img from "../../../../../public/images/auth-bg-image.png";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import PasswordInput from "@components/shared/password-input";
import { RefreshCcw } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function ChangePasswordDialog() {
    const { t } = useTranslation();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button className="w-52.25 h-42 flex flex-col justify-center items-center gap-4 border border-[#D3D3D3] rounded-lg bg-transparent transition-all duration-300 ease-out hover:border-[#FF4100] hover:bg-[#FF4100]/5 hover:-translate-y-1 hover:shadow-md active:scale-95">
                        <RefreshCcw className="stroke-[#FF4100] transition-transform duration-300" />
                        <p className="capitalize font-semibold text-white transition-colors duration-300">
                            {t("profile.changePassword.title")}
                        </p>
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-140.25   p-10  min-h-64 bg-[rgb(36,36,36)] border border-secondary rounded-lg">
                    <DialogHeader></DialogHeader>

                    {/* Content */}
                    <div className=" z-20 flex h-full flex-col  gap-4">
                        <h2 className="font-extrabold text-5xl capitalize font-baloo text-center text-white my-5">
                            {t("profile.changePassword.title")}
                        </h2>
                        {/* Inputs */}
                        <div className="flex flex-col gap-8">
                            <PasswordInput
                                placeholder={t("profile.changePassword.newPassword")}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />

                            <PasswordInput
                                placeholder={t("profile.changePassword.confirmPassword")}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        {/* Footer */}
                        <DialogFooter className="mt-4">
                            <DialogClose asChild>
                                <Button className=" rounded-full" variant="outline">{t("profile.changePassword.cancel")}</Button>
                            </DialogClose>
                            <Button type="submit" className="rounded-full">{t("profile.changePassword.saveChanges")}</Button>
                        </DialogFooter>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    );
}
