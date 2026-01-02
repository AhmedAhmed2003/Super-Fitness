import { Skeleton } from "@/components/ui/skeleton";

export function EmptyCardSkeleton() {
    return (
        <div className="card-wrapper flex justify-center flex-wrap gap-3">
            {Array.from({ length: 3 }).map((_, index) => (
                <div
                    key={index}
                    className="
                    gap-0 p-0 
                    rounded-2xl 
                    border-none 
                    w-[21.4rem] md:w-100 
                    bg-[#e5e5e580] 
                    backdrop-blur-md
                    overflow-hidden
                "
                >
                    {/* Skeleton Image */}
                    <Skeleton className="w-full h-74 rounded-none" />

                    <div className="p-4 space-y-4">
                        {/* Skeleton Title */}
                        <Skeleton className="h-6 w-2/3 rounded-md" />

                        {/* Skeleton Button */}
                        <Skeleton className="h-5 w-24 rounded-md" />
                    </div>
                </div>
            ))}
        </div>
    );
}
