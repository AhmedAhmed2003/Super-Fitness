import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ChatHeader(){
  const { t } = useTranslation("ai");
  return (
    <div className="relative p-4 flex items-center justify-between">
      {/* Left */}
      <div>
        <p className="font-bold text-2xl font-baloo text-white">{t("name")}</p>
      </div>

      {/* Burger Menu */}
      <span className="p-2 rounded-md hover:bg-muted transition">
        <Menu className="w-5 h-5" color="#FF4100"/>
      </span>
    </div>
  );
}
