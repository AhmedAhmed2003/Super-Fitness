import { Button } from "@components/ui/button";
import { cn } from "@lib/utils/cn.util";
import React from "react";

type SettingsCardProps = {
    icon: React.ReactNode;
    title: string;
    titleColred?: boolean;
    subtitle?: string;
    onClick?: () => void;
};

export default function SettingsCard({ icon, title, onClick, titleColred }: SettingsCardProps) {
    return (
        <Button
            onClick={onClick}
            className="w-52.25 h-42 flex flex-col justify-center items-center gap-4 border border-[#D3D3D3] rounded-lg bg-transparent transition-all duration-300 ease-out hover:border-[#FF4100] hover:bg-[#FF4100]/5 hover:-translate-y-1 hover:shadow-md active:scale-95"
        >
            {icon}

            <p className={cn("capitalize font-semibold items-center bg-transparent", titleColred ? "text-[#FF4100]" : "text-white")}>
                {title}
            </p>
        </Button>
    );
}
