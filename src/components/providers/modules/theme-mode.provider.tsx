import { ThemeProviderContext } from "@lib/context/theme.context";
import { local } from "@lib/storage/local.storage";
import type { IThemeProviderProps, TThemeMode } from "@lib/types/components/providers";
import { useEffect, useState } from "react";

/**
 * ThemeProvider component
 *
 * Provides application-wide theme mode context (light, dark, or system).
 * Reads and persists the theme mode using a storage key.
 * Applies the theme mode to the document root and updates on changes.
 *
 * @param {IThemeProviderProps} props - The props for the ThemeProvider.
 * @param {React.ReactNode} props.children - Child components to be wrapped by the provider.
 * @param {TThemeMode} [props.defaultTheme="system"] - The default theme mode to use ("light", "dark", or "system").
 * @param {string} [props.storageKey="theme-mode"] - Storage key for theme persistence.
 * @returns {JSX.Element} The provider wrapping the children with theme context.
 */
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
