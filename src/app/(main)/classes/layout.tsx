import { Outlet } from "react-router-dom";

function ClassesLayout() {
    return (
        <div className="min-h-screen  ">
            <Outlet />
        </div>
    );
}

export default ClassesLayout;
