import type { Message } from "@lib/types/ai.types";
import { MessageBubble } from "./message-bubble";
import { ScrollArea } from "@/components/ui/scroll-area";


export function MessagesList({ messages }: { messages: Message[] }) {
    return (
        <ScrollArea className="flex-1 p-4 space-y-4">
            {messages.map((msg) => (
                <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} />
            ))}
        </ScrollArea>
    );
}
