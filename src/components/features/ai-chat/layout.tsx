import { Card } from "@/components/ui/card";

export function ChatLayout({ children }: { children: React.ReactNode }) {
    return (
        <Card className="relative w-96 max-w-md h-600 flex flex-col rounded-2xl shadow-lg overflow-hidden border-2 border-[#FF4100]">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/public/images/chat-bg.jpg')" }} />

            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">{children}</div>
        </Card>
    );
}
