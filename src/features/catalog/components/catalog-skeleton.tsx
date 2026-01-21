import { Skeleton } from '@/components/ui';

export function CatalogSkeleton(): React.ReactElement {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">

                <aside className="w-full lg:w-[320px] shrink-0">
                    <div className="bg-white rounded-2xl border border-[#E9EEF4] overflow-hidden">
                        <div className="flex border-b border-[#E9EEF4]">
                            <Skeleton className="flex-1 h-14" />
                            <Skeleton className="flex-1 h-14 bg-gray-50" />
                        </div>
                        <div className="p-2 space-y-2">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <Skeleton key={i} className="h-10 w-full rounded-lg" />
                            ))}
                        </div>
                    </div>
                </aside>

                <main className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-6">
                        <Skeleton className="h-10 w-64" />
                    </div>

                    <div className="mb-8">
                        <Skeleton className="h-24 w-full rounded-2xl" />
                    </div>

                    <div className="space-y-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-[#E9EEF4] p-6 h-[200px] flex gap-6">
                                <div className="flex-1 space-y-4">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-8 w-3/4" />
                                    <div className="mt-auto flex gap-4">
                                        <Skeleton className="h-8 w-32" />
                                    </div>
                                </div>
                                <div className="w-[200px] space-y-3">
                                    <Skeleton className="h-10 w-full rounded-xl" />
                                    <Skeleton className="h-10 w-full rounded-xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

            </div>
        </div>
    );
}
