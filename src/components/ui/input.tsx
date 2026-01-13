import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn.util";
import { Mail, Lock, User, Phone, Search, Eye, EyeOff } from "lucide-react";
import * as React from "react";

interface InputProps extends React.ComponentProps<"input"> {
    iconType?: "email" | "password" | "user" | "phone" | "search" | "none";
    iconClassName?: string;
    showPasswordToggle?: boolean;
}

function Input({ className, type, iconType, iconClassName, showPasswordToggle = false, ...props }: InputProps) {
    const [showPassword, setShowPassword] = React.useState(false);

    const getIcon = () => {
        if (iconType === "none") return null;

        const effectiveIconType = iconType || (type === "email" ? "email" : type === "password" ? "password" : "none");

        const iconProps = {
            className: cn("absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-disabled pointer-events-none", iconClassName),
        };

        switch (effectiveIconType) {
            case "email":
                return <Mail {...iconProps} />;
            case "password":
                return <Lock {...iconProps} />;
            case "user":
                return <User {...iconProps} />;
            case "phone":
                return <Phone {...iconProps} />;
            case "search":
                return <Search {...iconProps} />;
            default:
                return null;
        }
    };

    const icon = getIcon();
    const hasIcon = icon !== null;
    const hasToggle = showPasswordToggle && (type === "password" || iconType === "password");
    const inputType = hasToggle && showPassword ? "text" : type;

    return (
        <div className="relative">
            {icon}
            <input
                type={inputType}
                data-slot="input"
                className={cn(
                    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    // Custom focus color
                    "focus-visible:border-[#FF4100] focus-visible:ring-[#FF4100]/50 focus-visible:ring-[1.5px]",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    hasIcon ? "px-10" : "px-3",
                    hasToggle ? "pr-10" : "",
                    className,
                )}
                {...props}
            />
            {hasToggle && (
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 h-auto w-auto p-0 text-primary-disabled hover:text-white hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </Button>
            )}
        </div>
    );
}

export { Input };
