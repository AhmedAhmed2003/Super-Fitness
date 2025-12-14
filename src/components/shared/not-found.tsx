import img from "../../../public/images/auth-bg-image.png";
import fit from "../../../public/images/fit-img.png";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative h-screen text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#24242499] backdrop-blur-[86px] z-10"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center z-20 p-6">
        <div className="flex flex-col items-center text-center space-y-6 border border-[#FF410033] px-10 py-12 rounded-2xl">
          <img
            src={fit}
            alt="Fitness Logo"
            className="w-28 md:w-36 mb-4"
            loading="lazy"
          />

          <h1 className="text-6xl font-bold tracking-wide">404</h1>

          <p className="text-lg opacity-80 max-w-md">
            The page you’re looking for doesn’t exist or has been moved.
          </p>

          <Link
            to="/"
            className="mt-4 px-6 py-3 bg-[#FF4100] hover:bg-[#ff5722] transition-all rounded-lg text-white font-medium"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
