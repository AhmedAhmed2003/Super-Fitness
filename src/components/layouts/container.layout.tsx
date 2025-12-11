import type { IContainerProps } from "@lib/types/components/layouts";
import { cn } from "@lib/utils/cn.util";

/**
 * Container component
 *
 * Provides a responsive maximum width layout wrapper with horizontal padding and centered content.
 * Use this component to consistently wrap page or section content across the application.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the container.
 * @param {string} [className] - Additional optional class names for custom styling.
 * @returns {JSX.Element} The container element wrapping the provided children.
 */
export default function Container({ children, className }: IContainerProps) {
    return <div className={cn("container px-8 md:px-6 lg:px-0 mx-auto", className)}>{children}</div>;
}
