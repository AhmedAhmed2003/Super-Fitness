import { routes } from "@/configurations/route.config";
import Providers from "@components/providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";

/**
 * The root App component for the application.
 * @returns {JSX.Element} The rendered application container.
 */
export default function App() {
    const queryClient = new QueryClient();
    return (
        <Providers>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={routes} />
                {/* React Query Devtools */}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Providers>
    );
}
