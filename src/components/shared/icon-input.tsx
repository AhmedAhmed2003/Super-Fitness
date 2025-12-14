import { Input } from "@/components/ui/input";
import { cn } from "@lib/utils/cn.util";
import type { LucideIcon } from "lucide-react";
import type { HTMLInputTypeAttribute } from "react";

interface IconInputProps {
    icon: LucideIcon;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hasError?: boolean;
}

export default function IconInput({ icon: Icon, placeholder, type = "text", value, onChange, hasError = false }: IconInputProps) {
    return (
        <div className="relative w-full">
            {/* Icon on the left */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon className="h-5 w-5 text-gray-400" />
            </div>

            {/* Input field */}
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={cn(
                    "pl-11 rounded-[20px] border w-[311px] h-12 transition-colors duration-200 focus:outline-none",
                    hasError ? "border-red-500" : "border-gray-300 ",
                )}
            />
        </div>
    );
}
