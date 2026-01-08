interface HeaderProps {
    title: string;
    subTitle: string;
}
export default function LogoSection({ title, subTitle }: HeaderProps) {
    return (
        <div className="relative w-fit z-40">
            <h1
                className="md:flex items-center font-baloo font-bold uppercase text-[64px] leading-[120%] tracking-[0%] text-transparent opacity-50 hidden"
                style={{ WebkitTextStroke: "1px gray" }}
            >
                {title}
            </h1>

            <div className="flex items-center md:absolute md:bottom-2 md:left-1/2 md:-translate-x-1/2">
                {/* Icon */}
                <span className="w-[34px] h-[19.36px] bg-[url('/images/Vector.png')] bg-cover bg-center mx-1"></span>

                {/* Text next to icon */}
                <span className="ml-2 w-fit text-[13.1px] font-semibold leading-[25.6px] tracking-normal text-[#FF4100] capitalize whitespace-nowrap">
                    {subTitle}
                </span>
            </div>
        </div>
    );
}
