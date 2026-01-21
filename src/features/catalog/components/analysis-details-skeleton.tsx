import { Skeleton } from "@/components/ui";

export function AnalysisDetailsSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-4">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-10 w-3/4" />
                        <div className="flex gap-4">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-5 w-32" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <Skeleton className="h-8 w-40" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <Skeleton className="h-8 w-40" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <div className="sticky top-24 border rounded-xl p-6 space-y-6">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <Skeleton className="h-8 w-24" />
                                <Skeleton className="h-4 w-16" />
                            </div>
                        </div>
                        <Skeleton className="h-12 w-full rounded-md" />
                        <div className="space-y-2 pt-4">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
                <Skeleton className="h-12 w-full" />
            </div>
        </div>
    );
}
