'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button, Skeleton } from '@/components/ui';
import { ANALYSIS_CATEGORIES, COMPLEX_CATEGORIES } from '../api/get-analyses';
import { findCategoryBySlug } from '@/lib/find-category';

export function CatalogSidebar({ isLoading = false }: { isLoading?: boolean }): React.ReactElement {
    return (
        <Suspense fallback={<SidebarSkeleton />}>
            <CatalogSidebarContent isLoading={isLoading} />
        </Suspense>
    );
}

function SidebarSkeleton(): React.ReactElement {
    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-border sticky top-[120px]">
            <div className="flex text-sm font-medium text-center leading-tight bg-bg-blue-soft">
                <div className="flex-1 py-4 px-4 bg-white">
                    <Skeleton className="h-5 w-20 mx-auto" />
                </div>
                <div className="flex-1 py-4 px-4">
                    <Skeleton className="h-5 w-20 mx-auto" />
                </div>
            </div>
            <div className="py-2 px-2 flex flex-col gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full rounded-lg bg-gray-100" />
                ))}
            </div>
        </div>
    );
}

function CatalogSidebarContent({ isLoading }: { isLoading: boolean }): React.ReactElement {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const activeTabRaw = searchParams.get('tab');
    const activeTab = (activeTabRaw === 'complex' ? 'complex' : 'analysis');
    const activeCategorySlug = searchParams.get('category');

    const categories = activeTab === 'analysis' ? ANALYSIS_CATEGORIES : COMPLEX_CATEGORIES;
    const activeCategory = findCategoryBySlug(categories, activeCategorySlug);

    const handleTabChange = (newTab: 'analysis' | 'complex'): void => {
        const city = pathname.split('/')[1];
        router.push(`/${city}/catalog?tab=${newTab}`);
    };

    const handleCategorySelect = (categorySlug: string): void => {
        const city = pathname.split('/')[1] || 'moskva';
        const currentTab = searchParams.get('tab') || 'analysis';

        if (activeCategorySlug === categorySlug) {
            router.push(`/${city}/catalog?tab=${currentTab}`);
        } else {
            router.push(`/${city}/catalog?tab=${currentTab}&category=${categorySlug}`);
        }
    };

    const showSkeleton = isLoading;

    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-border sticky top-[120px]">
            <div className="flex text-sm font-medium text-center leading-tight bg-bg-blue-soft">
                <button
                    onClick={() => handleTabChange('analysis')}
                    className={cn(
                        "flex-1 py-4 px-4 transition-colors",
                        activeTab === 'analysis'
                            ? "bg-white text-text-main"
                            : "text-text-main cursor-pointer hover:bg-bg-blue-lightest/50"
                    )}
                >
                    Анализы
                </button>
                <button
                    onClick={() => handleTabChange('complex')}
                    className={cn(
                        "flex-1 py-4 px-4 transition-colors",
                        activeTab === 'complex'
                            ? "bg-white text-text-main border-l border-border"
                            : "text-text-main cursor-pointer border-l border-border hover:bg-bg-blue-lightest/50"
                    )}
                >
                    Комплексные<br />исследования
                </button>
            </div>

            <div className="py-2 px-2 flex flex-col gap-1 max-h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar">
                {!showSkeleton ? (
                    categories.length > 0 ? (
                        categories.map((category) => {
                            const isSelected = activeCategory?.id === category.id;
                            return (
                                <Button
                                    key={category.id}
                                    variant="ghost"
                                    onClick={() => handleCategorySelect(category.slug)}
                                    className={cn(
                                        "w-full justify-start !h-auto !min-h-0 px-4 !py-2.5 text-[15px] font-normal whitespace-normal text-left mb-0",
                                        "rounded-lg transition-colors relative gap-3",
                                        "text-text-main hover:text-brand-blue hover:bg-soft/50 hover:font-medium",
                                        isSelected && "font-medium text-brand-blue bg-bg-blue-soft hover:bg-bg-blue-soft"
                                    )}
                                >
                                    <span className={cn(
                                        "w-2 h-2 rounded-full mt-1.5 shrink-0 transition-colors",
                                        "bg-lime-lab"
                                    )} />
                                    <span className="block leading-snug">
                                        {category.name}
                                    </span>
                                </Button>
                            );
                        })
                    ) : (
                        <div className="p-4 text-center text-sm text-gray-400">Пусто</div>
                    )
                ) : (
                    Array.from({ length: 8 }).map((_, i) => (
                        <Skeleton key={i} className="h-10 w-full rounded-lg bg-gray-100" />
                    ))
                )}
            </div>
        </div>
    );
}