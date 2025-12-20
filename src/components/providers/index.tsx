import TanstackQuery from "./modules/tanstack-query.provider";
import { ThemeProvider } from "./modules/theme-mode.provider";
import TransProviders from "./modules/trans.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <TanstackQuery>
            <TransProviders>
                {/* <ThemeProvider>{children}</ThemeProvider> */}
                {children}
            </TransProviders>
        </TanstackQuery>
    );
}
