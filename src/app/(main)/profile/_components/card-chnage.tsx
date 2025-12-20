import { RefreshCcw } from "lucide-react";

type GoalCardProps = {
    title?: string;
    subtitle?: string;
    value: string;
    onChange?: () => void;
    icon?: React.ReactNode;
};

export default function CardChange({
    title = "Your Goal",
    subtitle = "Tap to change",
    value,
    onChange,
    icon = <RefreshCcw />,
}: GoalCardProps) {
    return (
        <div className="flex flex-col items-center justify-between gap-4">
            <div className="flex flex-col items-center">
                <h3 className="font-extrabold text-5xl capitalize font-baloo">{title}</h3>
                <p className="uppercase underline cursor-pointer">{subtitle}</p>
            </div>

            <button
                onClick={onChange}
                className="w-60 h-12 bg-[#FF4100] text-white border border-white rounded-full flex items-center justify-between px-4"
            >
                <p className="capitalize">{value}</p>
                {icon}
            </button>
        </div>
    );
}
