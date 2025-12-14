interface HeaderProps {
    title: string;
    span: string;
}

export default function Title({ title, span }: HeaderProps) {
    return (
        <h2 className="font-baloo w-160 font-bold mt-6 text-[2.5rem] leading-[120%] tracking-[0] uppercase text-center">
            {title}{" "}
            <span className="font-baloo font-bold text-[2.5rem] leading-[120%] tracking-[0] uppercase text-center text-[#FF4100]">
                {span}
            </span>
        </h2>
    );
}
