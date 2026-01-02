import { Button } from "@components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import ThemeToggle from "@components/ui/theme-btn";
import { useTheme } from "@lib/hooks/use-theme.hook";
import { cn } from "@lib/utils/cn.util";
import clsx from "clsx";
import { BadgePlus, LogIn, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    // Transaltion
    const { t, i18n } = useTranslation("header");

    // Use state
    const [isLogged] = useState<boolean>(true);
    // variable
    const { theme } = useTheme();

    // Use state
    const [scrolled, setScrolled] = useState(false);

    // function
    const handleTransaltion = () => {
        i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
        localStorage.setItem("lang", i18n.language === "ar" ? "en" : "ar");
    };

    // Use effect
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={clsx(
                "w-full justify-between items-center flex rtl:flex-row-reverse px-4 md:px-20  pt-6 fixed top-0 right-0 z-50 ",
                scrolled ? "bg-white dark:bg-dark-bg backdrop-blur shadow-lg transition" : "bg-transparent",
            )}
        >
            {/* Logo */}

            <div>
                <img src="/images/logo.svg" className={cn("w-16 h-10 md:w-22 md:h-14", theme == "dark" ? "inline" : "hidden")} />

                <img src="/images/logo-black.svg" className={cn("w-16 h-10 md:w-22 md:h-14", theme == "dark" ? "hidden" : "inline")} />
            </div>

            {/* Nav Bar md */}
            <nav
                className="hidden gap-8 font-bold text-base
            md:text-xl font-baloo text-secondary dark:text-secondary-dark md:flex"
            >
                {/* Home */}
                <NavLink to="/" className={({ isActive }) => cn(isActive && "active-link")}>
                    {t("home")}
                </NavLink>

                {/* About */}
                <NavLink to="/about" className={({ isActive }) => cn(isActive && "active-link")}>
                    {t("about")}
                </NavLink>

                {/* Classes */}
                <NavLink to="/classes" className={({ isActive }) => cn(isActive && "active-link")}>
                    {t("classes")}
                </NavLink>

                {/* Healthy */}
                <NavLink to="/healthy" className={({ isActive }) => cn(isActive && "active-link")}>
                    {t("healthy")}
                </NavLink>
            </nav>
            <div className="  justify-center items-center gap-8 hidden md:flex md:rtl:flex-row-reverse ">
                {/* Language button */}
                <Button size={"rounded-icon"} type="button" onClick={() => handleTransaltion()}>
                    {t("lang")}
                </Button>
                <ThemeToggle />
                {/* Buttons in md */}
                {/* Login btn */}
                {!isLogged ? (
                    <>
                        {/* Login */}
                        <Button
                            className="relative  justify-center items-center dark:text-secondary-dark hidden md:flex"
                            variant={"default"}
                            size={"rounded-btn"}
                            type="button"
                        >
                            <div className="bg-primary rounded-full w-9 h-9 border-2.5 border-white absolute flex justify-center items-center -right-7">
                                <img src="images/Vector.svg" className="w-4 h-4" />
                            </div>
                            <Link to=""> {t("login")} </Link>
                        </Button>

                        {/* Sign up */}
                        <Button
                            className=" hidden md:flex justify-center items-center
                    relative"
                            type="button"
                            size={"rounded-btn"}
                            variant={"secondary"}
                        >
                            <Link to=""> {t("signup")}</Link>
                            <div className="bg-primary rounded-full w-9 h-9 border-2.5 border-white absolute flex justify-center items-center -right-7">
                                <img src="images/Vector.svg" className="w-4 h-4" />
                            </div>
                        </Button>
                    </>
                ) : (
                    // Profile
                    <>
                        <Button size={"rounded-icon"} type="button">
                            <Link to="/profile">
                                <User className="size-5 text-secondary-dark" />
                            </Link>
                        </Button>
                    </>
                )}
            </div>
            {/* Buttons in sm */}
            <div className=" gap-4 justify-between items-center flex md:hidden rtl:flex-row-reverse ">
                {/* Check if the user logged */}
                {!isLogged ? (
                    <>
                        {/* Login */}
                        <Button size={"rounded-icon"} type="button">
                            <Link to="/login">
                                <LogIn className="size-5 text-secondary-dark" />
                            </Link>
                        </Button>

                        {/* Sign up */}
                        <Button size={"rounded-icon"} type="button">
                            <Link to="/signup">
                                <BadgePlus className="size-5 text-secondary-dark" />
                            </Link>
                        </Button>
                    </>
                ) : (
                    //  Profile
                    <Button size={"rounded-icon"} type="button">
                        <Link to="/profile">
                            <User className="size-5 text-secondary-dark" />
                        </Link>
                    </Button>
                )}
                <Button size={"rounded-icon"} type="button" onClick={() => handleTransaltion()}>
                    {t("lang")}
                </Button>
                <ThemeToggle />

                {/* Menu in md */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size={"rounded-icon"} className="p-2   ">
                            <div className="flex flex-col  gap-1 items-end">
                                <span className="block w-4 h-0.5 bg-white rounded-full  " />
                                <span className="block w-3 h-0.5 bg-white rounded-full " />
                                <span className="block w-2 h-0.5 bg-white rounded-full " />
                            </div>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="left" className="w-80 h-72 py-6 px-4 dark:bg-secondary">
                        <nav className="flex flex-col gap-4 font-bold text-lg text-secondary dark:text-secondary-dark font-baloo">
                            {/* Logo */}
                            <div>
                                <img src="images/logo.svg" className="w-20 h-14 md:w-22 md:h-14" />
                            </div>

                            {/* Home */}
                            <NavLink to="/" className={({ isActive }) => cn(isActive && "active-link")}>
                                {t("home")}
                            </NavLink>

                            {/* About */}
                            <NavLink to="/about" className={({ isActive }) => cn(isActive && "active-link")}>
                                {t("about")}
                            </NavLink>

                            {/* Classes */}
                            <NavLink to="/classes" className={({ isActive }) => cn(isActive && "active-link")}>
                                {t("classes")}{" "}
                            </NavLink>

                            {/* Healthy */}
                            <NavLink to="/healthy" className={({ isActive }) => cn(isActive && "active-link")}>
                                {t("healthy")}
                            </NavLink>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
