import { Input } from "@/components/ui/input";
import { cn } from "@lib/utils/cn.util";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

interface PasswordInputProps {
  icon?: React.ComponentType<any>; // optional left icon
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
}

export default function PasswordInput({
  icon: Icon = Lock, // default lock icon
  placeholder,
  value,
  onChange,
  hasError = false,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      {/* Left icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>

      {/* Right eye toggle */}
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400"
      >
        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </button>

      {/* Input field */}
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "pl-11 pr-11 rounded-[20px] border w-[311px] h-12 transition-colors duration-200 focus:outline-none",
          hasError ? "border-red-500" : "border-gray-300"
        )}
      />
    </div>
  );
}
