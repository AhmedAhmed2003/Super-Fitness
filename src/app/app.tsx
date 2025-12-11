import { routes } from "@/configurations/route.config";
import Providers from "@components/providers";
import { RouterProvider } from "react-router-dom";

/**
 * The root App component for the application.
 * @returns {JSX.Element} The rendered application container.
 */
export default function App() {
    return (
        <Providers>
            <RouterProvider router={routes} />
        </Providers>
    );
}
