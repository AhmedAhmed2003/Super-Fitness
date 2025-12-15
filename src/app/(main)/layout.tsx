import Footer from "@components/layouts/footer";
import ButtonLangToggle from "@components/shared/button-lang-toggle.shared";
import { ButtonModeToggle } from "@components/shared/button-mode-toggle.shared";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <main className="min-h-screen">
            <Outlet />
            <ButtonLangToggle />
            <ButtonModeToggle />
            <Footer />
        </main>
    );
}
