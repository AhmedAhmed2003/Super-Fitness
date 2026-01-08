
import { useState } from "react";
import { ChatLayout } from "./layout";
import { ChatHeader } from "./components/chat-header";
import { MessagesList } from "./components/messages-list";
import { QuickReplies } from "./components/quick-replies";
import { ChatInput } from "./components/chat-input";
import type { Message } from "@lib/types/ai.types";
import { useTranslation } from "react-i18next";

export default function AIFitnessChat() {
    const [input, setInput] = useState("");
    const { t } = useTranslation("ai");

    const messages: Message[] = [
        { id: "1", sender: "ai", text: t("msg1") },
        { id: "2", sender: "user", text: t("msg2") },
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
