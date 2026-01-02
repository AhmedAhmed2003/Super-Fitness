import Header from "@app/components/shared/header";
import Footer from "@components/layouts/footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <main className="min-h-screen font-baloo">
            <Header />
            <Outlet />

            <Footer />
        </main>
    );
}
