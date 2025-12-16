import type { ReactNode } from "react";

interface Props {
    title?: string;
    children: ReactNode;
}

export default function FooterColumn({ title, children }: Props) {
    return (
        <div>
            {title && (
                <h4 className="my-4 text-lg font-bold uppercase tracking-wide">
                    {title}
                </h4>
            )}
            {children}
        </div>
    );
}
