import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ChatInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    const { t } = useTranslation("ai");
    return (
        <div className="p-4 flex gap-2">
            <Input className="font-baloo rounded-3xl text-amber-50 dark:text-secondary" placeholder={t("place")} value={value} onChange={(e) => onChange(e.target.value)} />
            <Button size="icon">
                <Send className="w-4 h-4" />
            </Button>
        </div>
    );
}
