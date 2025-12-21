import { Outlet } from "react-router-dom";

export default function HealthyLayout() {
    return (
        <div className="min-h-screen flex flex-col gap-10 ">
            <Outlet />
        </div>
    );
}
