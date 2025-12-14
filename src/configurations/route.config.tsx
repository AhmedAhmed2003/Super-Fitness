import AccountPage from "@app/(main)/Account/page";
import AboutPage from "@app/(main)/about/page";
import ClassesPage from "@app/(main)/classes/page";
import HealthyPage from "@app/(main)/healthy/page";
import HomePage from "@app/(main)/home/page";
import MainLayout from "@app/(main)/layout";
import ForgetPasswordPage from "@app/auth/forget-password/page";
//  Layouts
import AuthLayout from "@app/auth/layout";
import LoginPage from "@app/auth/login/page";
// Auth Pages
import RegisterPage from "@app/auth/register/page";
import VerifyOtpPage from "@app/auth/verify-otp/page";
import NotFound from "@components/shared/not-found";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    // -------------------
    // AUTH ROUTES ( /auth )
    // -------------------
    {
        path: "/auth",
        element: <AuthLayout />,

        children: [
            { index: true, element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
            { path: "login", element: <LoginPage /> },
            { path: "forget-password", element: <ForgetPasswordPage /> },
            { path: "verify-otp", element: <VerifyOtpPage /> },
        ],
    },

    // -------------------
    // MAIN ROUTES ( / )
    // -------------------
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "home", element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "healthy", element: <HealthyPage /> },
            { path: "account", element: <AccountPage /> },
            { path: "classes", element: <ClassesPage /> },
        ],
    },

    // -------------------
    // NOT FOUND ROUTE
    // -------------------
    {
        path: "*",
        element: <NotFound />,
    },
]);
