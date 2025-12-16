import Header from "@app/components/shared/header";
<<<<<<< HEAD
import Footer from "@components/layouts/footer";
import ButtonLangToggle from "@components/shared/button-lang-toggle.shared";
import { ButtonModeToggle } from "@components/shared/button-mode-toggle.shared";
=======
>>>>>>> ab1429b275d1bedb74fb0f7a2b8d671069a614c8
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
<<<<<<< HEAD
        <main className="min-h-screen ">
=======
        <main className="min-h-screen px-4 md:px-20">
>>>>>>> ab1429b275d1bedb74fb0f7a2b8d671069a614c8
            <Header />
            <Outlet />
            <ButtonLangToggle />
            <ButtonModeToggle />
            <Footer />
        </main>
    );
}
