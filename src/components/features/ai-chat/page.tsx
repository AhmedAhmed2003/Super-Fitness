
import { useState } from "react";
import { ChatLayout } from "./layout";
import { ChatHeader } from "./components/chat-header";
import { MessagesList } from "./components/messages-list";
import { QuickReplies } from "./components/quick-replies";
import { ChatInput } from "./components/chat-input";
import type { Message } from "@lib/types/ai.types";

export default function AIFitnessChat() {
    const [input, setInput] = useState("");

    const messages: Message[] = [
        { id: "1", sender: "ai", text: "Hello How Can I Assist You Today?" },
        { id: "2", sender: "user", text: "Can you please tell me how to gain 20kg weight?" },
    ];

    return (
        <ChatLayout>
            <ChatHeader />
            <MessagesList messages={messages} />
            <QuickReplies />
            <ChatInput value={input} onChange={setInput} />
        </ChatLayout>
    );
}
