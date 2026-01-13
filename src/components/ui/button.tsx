import { buttonVariants } from "./button-variants";
import { cn } from "@/lib/utils/cn.util";
import ArrowIcon from "@public/vectors/arrow";
import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import i18next from "i18next";
import * as React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props}>
                {children}

                {(variant === "secondary" || variant === "secondary_outline") && (
                    <ArrowIcon
                        className={cn(
                            "absolute top-1/2 -translate-y-1/2 end-3 size-5",
                            i18next.language === "ar" ? "-scale-x-100" : "translate-x-1",
                        )}
                    />
                )}
            </Comp>
        );
    },
);

Button.displayName = "Button";

export { Button };
