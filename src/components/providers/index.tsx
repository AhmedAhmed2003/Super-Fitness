import TanstackQuery from "./modules/tanstack-query.provider";
import { ThemeProvider } from "./modules/theme-mode.provider";
import TransProviders from "./modules/trans.provider";

/**
 * Providers component
 * 
 * Composes global context providers for the application,
 * including translation and theme mode providers.
 *
 * @param {object} props - The component props
 * @param {React.ReactNode} props.children - Child components to be wrapped by the providers
 * @returns {JSX.Element} The wrapped children with applied providers
 */
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <TanstackQuery>
            <TransProviders>
                <ThemeProvider>{children}</ThemeProvider>
            </TransProviders>
        </TanstackQuery>
    );
}
