import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function ChatInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <div className="p-4 flex gap-2">
            <Input className="font-baloo rounded-3xl text-amber-50 dark:text-secondary" placeholder="Ask Me Any Things.." value={value} onChange={(e) => onChange(e.target.value)} />
            <Button size="icon">
                <Send className="w-4 h-4" />
            </Button>
        </div>
    );
}
