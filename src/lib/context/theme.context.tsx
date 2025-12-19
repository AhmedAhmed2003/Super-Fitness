import type { TThemeMode } from "@lib/types/components/providers";
import { createContext } from "react";

type ThemeProviderState = {
    theme: TThemeMode;
    setTheme: (theme: TThemeMode) => void;
};

const initialState: ThemeProviderState = {
    theme: "light",
    setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);
