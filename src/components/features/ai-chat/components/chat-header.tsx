import { Menu } from "lucide-react";

export function ChatHeader(){
  return (
    <div className="relative p-4 flex items-center justify-between">
      {/* Left */}
      <div>
        <p className="font-bold text-2xl font-baloo text-white">Smart Coach</p>
      </div>

      {/* Burger Menu */}
      <span className="p-2 rounded-md hover:bg-muted transition">
        <Menu className="w-5 h-5" color="#FF4100"/>
      </span>
    </div>
  );
}
