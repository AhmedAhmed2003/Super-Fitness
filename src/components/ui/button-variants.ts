import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 cursor-pointer",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-white hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "relative border border-[#FF4100] bg-[#FF4100] text-white font-semibold",
                secondary_outline: "relative border border-[#FF4100] text-[#FF4100] font-semibold",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                "default": "h-10 px-6",
                "sm": "h-9 px-3 rounded-md",
                "lg": "h-11 px-8 rounded-md",
                "icon": "size-10",
                "rounded-icon": "size-12 rounded-full",
                "rounded-btn": "h-10 w-28 rounded-full px-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);
