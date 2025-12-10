import { ThemeProviderContext } from "@lib/context/theme.context";
import { local } from "@lib/storage/local.storage";
import type { IThemeProviderProps, TThemeMode } from "@lib/types/providers";
import { useEffect, useState } from "react";

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "theme-mode", ...props }: IThemeProviderProps) {
    const [theme, setTheme] = useState<TThemeMode>(() => (local.get(storageKey) as TThemeMode) ?? defaultTheme);

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    const value = {
        theme,
        setTheme: (theme: TThemeMode) => {
            local.set(storageKey, theme);
            setTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

