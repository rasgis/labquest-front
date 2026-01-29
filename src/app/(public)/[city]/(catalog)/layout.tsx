'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { findCategoryBySlug } from '@/lib/find-category';
import { CatalogSidebar } from '@/features/catalog/components/catalog-sidebar';
import { CatalogTopFilters } from '@/features/catalog/components/catalog-top-filters';
import { ANALYSIS_CATEGORIES, COMPLEX_CATEGORIES, getAnalysisById } from '@/features/catalog/api/get-analyses';

export default function CatalogLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <div className="container mx-auto px-4 py-6">
            <Suspense fallback={<div className="h-8 mb-6" />}>
                <CatalogBreadcrumbs />
            </Suspense>

            <Suspense fallback={null}>
                <ConditionalFilters />
            </Suspense>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <aside className="w-full lg:w-[280px] xl:w-[320px] shrink-0 hidden lg:block">
                    <CatalogSidebar />
                </aside>
                <main className="flex-1 min-w-0 w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}

function CatalogBreadcrumbs(): React.ReactElement {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = useParams();

    const [analysisName, setAnalysisName] = useState<string>('');

    const activeTabRaw = searchParams.get('tab');
    const activeTab = (activeTabRaw === 'complex' ? 'complex' : 'analysis');

    const activeCategorySlug = searchParams.get('category');
    const currentCategories = activeTab === 'analysis' ? ANALYSIS_CATEGORIES : COMPLEX_CATEGORIES;
    const activeCategory = findCategoryBySlug(currentCategories, activeCategorySlug);

    const city = typeof params.city === 'string' ? params.city : 'moskva';

    const isAnalysisPage = pathname.includes('/analysis/');

    useEffect(() => {
        if (isAnalysisPage && params?.id) {
            const id = Array.isArray(params.id) ? params.id[0] : params.id;
            if (id) {
                getAnalysisById(id).then((data) => {
                    if (data) {
                        setAnalysisName(data.name);
                    }
                });
            }
        } else {
            setAnalysisName('');
        }
    }, [isAnalysisPage, params?.id]);

    return (
        <div className="hidden lg:flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-blue flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Главная
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link
                href={`/${city}/catalog?tab=${activeTab}`}
                className={cn(
                    "transition-colors hover:text-brand-blue",
                    !activeCategory && !isAnalysisPage && "text-gray-900 font-medium"
                )}
            >
                {activeTab === 'complex' ? 'Комплексные исследования' : 'Анализы'}
            </Link>

            {activeCategory && !isAnalysisPage && (
                <>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900 font-medium">
                        {activeCategory.name}
                    </span>
                </>
            )}

            {isAnalysisPage && (
                <>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900 font-medium">
                        {analysisName || 'Загрузка...'}
                    </span>
                </>
            )}
        </div>
    );
}

function ConditionalFilters(): React.ReactElement | null {
    const pathname = usePathname();
    const isCatalogPage = pathname.endsWith('/catalog');

    if (!isCatalogPage) {
        return null;
    }

    return (
        <div className="mb-8 hidden lg:block">
            <CatalogTopFilters />
        </div>
    );
}
