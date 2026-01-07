import { cn } from "@/lib/utils/cn.util";
import ArrowIcon from "@public/vectors/arrow";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { useTranslation } from "react-i18next";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md pointer text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  outline-none focus-visible:-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:-destructive cursor-pointer",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline:
                    " bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:-input dark:hover:bg-input/50",
                secondary: "border border-[#FF4100] bg-[#FF4100] text-md font-semibold text-white relative",
                secondary_outline: "border border-[#FF4100] text-md font-semibold text-[#FF4100] relative",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                "default": "h-9 py-6 px-8",
                "sm": "h-8 rounded-md gap-1.5 px-3",
                "lg": "h-10 rounded-md px-6",
                "icon": "size-9",
                "rounded-icon": "size-12 rounded-full dark:text-white",
                "icon-sm": "size-8",
                "icon-lg": "size-10",
                "rounded-btn": "w-22  rounded-4xl h-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function Button({
    className,
    children,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";
    const { i18n } = useTranslation();

    return (
        <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props}>
            {children}
            {(variant === "secondary" || variant === "secondary_outline") && (
                <ArrowIcon
                    className={cn(
                        i18n.language === "ar" && "-scale-x-100",
                        i18n.language === "en" ? "translate-x-1/2" : "-translate-x-1/2",
                        "absolute top-1/2 -translate-y-1/2 end-0 size-12.5",
                    )}
                />
            )}
        </Comp>
    );
}

export { Button, buttonVariants };
