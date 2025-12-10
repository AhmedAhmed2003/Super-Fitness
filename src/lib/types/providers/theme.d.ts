import type { ReactNode } from "react";


export type TThemeMode = "system" | "light" | "dark" 

/**
 * Props for the ThemeProvider component.
 *
 * @property {ReactNode} children - The React nodes (usually your application's UI tree) that will be wrapped and have access to the theme context.
 * @property {Theme} [defaultTheme] - The default theme to use if no theme is found in storage; typically "light", "dark", or "system".
 * @property {string} [storageKey] - The key used in localStorage to persist the user's selected theme. Optional; a default is provided if omitted.
 */
export interface IThemeProviderProps {
    children: ReactNode;
    defaultTheme?: TThemeMode;
    storageKey?: string;
}