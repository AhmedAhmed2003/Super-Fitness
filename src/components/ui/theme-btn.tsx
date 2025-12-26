import { Button } from "./button";
import { useTheme } from "@lib/hooks/use-theme.hook";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button size={"rounded-icon"} onClick={toggleTheme} className=" ">
            {theme === "dark" ? <Moon /> : <Sun />}
        </Button>
    );
}
