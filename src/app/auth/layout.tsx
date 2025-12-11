import img from "../../../public/images/auth-bg-image.png";
import authImg from "../../../public/images/auth-img.png";
import fit from "../../../public/images/fit-img.png";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="relative h-screen text-white">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${img})` }}></div>

            {/* Overlay with opacity + blur */}
            <div className="absolute inset-0 bg-[#24242499] backdrop-blur-[86px] z-10"></div>

            {/* Content */}
            <div className="relative h-full flex flex-col md:flex-row z-20">
                {/* Left Section: Images */}
                <div className="border-b md:border-b-0 md:border-e border-2 border-[#FF410033] w-full md:w-1/2 flex items-center justify-center p-4">
                    <div className="flex flex-col items-center w-full max-w-[650px]">
                        <img src={fit} alt="Fitness" className="w-36 sm:w-48 md:w-60 h-auto " loading="lazy" />
                        <img src={authImg} alt="Authentication-cover" className="w-full h-auto max-w-[628px]" loading="lazy" />
                    </div>
                </div>

                {/* Right Section: Forms / Children */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                    <div className="w-full max-w-md">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
