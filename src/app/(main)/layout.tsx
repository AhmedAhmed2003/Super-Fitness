import Header from "@app/components/shared/header";
import { ChatToggleButton } from "@components/features/ai-chat/components/chat-toggle";
import { ChatWidget } from "@components/features/ai-chat/components/chat-widget";
import Footer from "@components/layouts/footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <main className="min-h-screen">
            <Header />
            <Outlet />
      <ChatWidget />

      <ChatToggleButton />

            <Footer />
        </main>
    );
}
