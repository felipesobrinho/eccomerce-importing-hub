import { Skeleton } from "@/components/ui/skeleton"
export default function Loading() {

    return (
        <div className="py-8 grid grid-cols-responsive gap-6 items-center justify-center overflow-hidden">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((id) => (
                <div key={id} className="max-w-xs rounded-xl shadow-2xl bg-zinc-500">
                    <Skeleton className="min-h-[300px] bg-zinc-800 mb-2" />
                    <div className="px-4 py-4 max-h-32">
                        <Skeleton className="h-4 mb-2 bg-white" />
                        <Skeleton className="h-5 mb-2 bg-teal-600" />
                    </div>
                </div>
            ))}
        </div>
    )
}