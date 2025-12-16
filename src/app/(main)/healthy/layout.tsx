import { Outlet } from "react-router-dom";

export default function HealthyLayout() {
    return (
        <div className="h-screen flex flex-col gap-10 items-center justify-center">
            <Outlet />
        </div>
    );
}
