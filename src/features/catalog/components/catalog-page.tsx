'use client';

import { useMemo, Suspense, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { LayoutList, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, Skeleton } from '@/components/ui';
import { Analysis } from '@/types/analysis';
import { AnalysisCard } from './analysis-card';

import { MobileCatalogDialog } from './mobile-catalog-dialog';
import { MobileFiltersDialog } from './mobile-filters-dialog';
import { findCategoryBySlug } from '@/lib/find-category';
import {
    ANALYSIS_CATEGORIES,
    COMPLEX_CATEGORIES,
} from '../api/get-analyses';

interface CatalogPageProps {
    analyses: Analysis[];
}

export function CatalogPage({ analyses }: CatalogPageProps): React.ReactElement {
    return (
        <Suspense fallback={<PageSkeleton />}>
            <CatalogPageContent analyses={analyses} />
        </Suspense>
    );
}

function PageSkeleton(): React.ReactElement {
    return (
        <div className="space-y-6">
            <Skeleton className="h-8 w-64" />
            <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-32 w-full rounded-2xl" />
                ))}
            </div>
        </div>
    );
}

function CatalogPageContent({ analyses }: CatalogPageProps): React.ReactElement {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const city = pathname.split('/')[1] || 'moskva';

    const activeTabRaw = searchParams.get('tab');
    const activeTab = (activeTabRaw === 'complex' ? 'complex' : 'analysis');
    const activeCategorySlug = searchParams.get('category');

    const currentCategories = activeTab === 'analysis' ? ANALYSIS_CATEGORIES : COMPLEX_CATEGORIES;
    const activeCategory = findCategoryBySlug(currentCategories, activeCategorySlug);

    const visibleSubcategories = activeCategory?.children || [];

    const filteredAnalyses = useMemo(() => {
        if (!activeCategory) {
            return analyses.filter(a => a.badges?.includes('popular') || a.badges?.includes('hit'));
        }

        const allCategorySlugs = [
            activeCategory.slug,
            ...(activeCategory.children?.map(child => child.slug) || [])
        ];

        return analyses.filter(a => allCategorySlugs.includes(a.categorySlug));
    }, [activeCategory, analyses]);

    const pageTitle = activeCategory?.name || 'Популярные анализы';

    return (
        <>
            <MobileHeader pageTitle={pageTitle} />

            <h1 className="text-2xl lg:text-3xl font-bold text-text-main mb-6 hidden lg:block">
                {pageTitle}
            </h1>

            <div className="space-y-6">
                {visibleSubcategories.length > 0 && (
                    <div className="flex flex-col gap-3">
                        {visibleSubcategories.map((sub) => (
                            <Link
                                key={sub.id}
                                href={`/${city}/catalog?tab=${activeTab}&category=${sub.slug}`}
                                className={cn(
                                    "w-full bg-white border border-gray-200 rounded-xl px-6 py-4",
                                    "flex items-center justify-between",
                                    "hover:border-brand-blue hover:shadow-md transition-all group"
                                )}
                            >
                                <span className="font-semibold text-text-main group-hover:text-brand-blue text-lg">
                                    {sub.name}
                                </span>
                                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />
                            </Link>
                        ))}
                    </div>
                )}

                <div className="flex flex-col gap-4">
                    {filteredAnalyses.length > 0 ? (
                        filteredAnalyses.map((analysis) => (
                            <AnalysisCard
                                key={analysis.id}
                                analysis={analysis}
                            />
                        ))
                    ) : (
                        <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                            <p className="text-gray-500">
                                {activeCategory
                                    ? "В этой категории пока нет анализов"
                                    : "Список популярных анализов пуст"
                                }
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

function MobileHeader({ pageTitle }: { pageTitle: string }): React.ReactElement {
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    return (
        <>
            <div className="lg:hidden mb-6">
                <h1 className="text-2xl font-semibold text-text-main mb-4">
                    {pageTitle}
                </h1>
                <div className="flex gap-3">
                    <Button
                        onClick={() => setIsCatalogOpen(true)}
                        className="flex-1 bg-brand-blue text-white rounded-xl h-12 shadow-sm"
                    >
                        <LayoutList className="mr-2 w-5 h-5" /> Каталог
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => setIsFiltersOpen(true)}
                        className="px-6 rounded-xl h-12 border-brand-blue text-brand-blue font-medium"
                    >
                        Фильтры
                    </Button>
                </div>
            </div>

            <MobileCatalogDialog
                isOpen={isCatalogOpen}
                onClose={() => setIsCatalogOpen(false)}
            />

            <MobileFiltersDialog
                isOpen={isFiltersOpen}
                onClose={() => setIsFiltersOpen(false)}
                onApply={() => { }}
            />
        </>
    );
}