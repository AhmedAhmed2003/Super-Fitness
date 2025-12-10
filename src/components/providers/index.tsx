import { ThemeProvider } from "./modules/theme-mode.provider";
import TransProviders from "./modules/trans.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <TransProviders>
            <ThemeProvider>{children}</ThemeProvider>
        </TransProviders>
    );
}
