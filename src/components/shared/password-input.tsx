import { Input } from "@/components/ui/input";
import { cn } from "@lib/utils/cn.util";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

interface PasswordInputProps {
  icon?: React.ComponentType<any>;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
}

export default function PasswordInput({
  icon: Icon = Lock,
  placeholder,
  value,
  onChange,
  hasError = false,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full h-12 ">
      {/* Start icon */}
      <div className="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>

      {/* Eye toggle */}
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute inset-y-0 end-0 pe-4 flex items-center text-gray-400"
      >
        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </button>

      {/* Input */}
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "ps-11 pe-11 h-12 rounded-[20px] border transition-colors duration-200 focus:outline-none w-full",
          hasError ? "border-red-500" : "border-gray-300",
        )}
      />
    </div>
  );
}

