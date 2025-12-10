import type { TThemeMode } from "@lib/types/providers";
import { createContext } from "react";

type ThemeProviderState = {
    theme: TThemeMode;
    setTheme: (theme: TThemeMode) => void;
};

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);
