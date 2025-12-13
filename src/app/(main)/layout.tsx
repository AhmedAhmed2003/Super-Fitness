import Header from "@app/components/shared/header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <main className="min-h-screen px-4 md:px-20">
            <Header />
            <Outlet />
        </main>
    );
}
