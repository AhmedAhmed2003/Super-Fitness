import Header from "@app/components/shared/header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <main className="min-h-screen ">
                <Header />
                <div className=" pt-36">
                    <Outlet />
                </div>
            </main>
        </>
    );
}
