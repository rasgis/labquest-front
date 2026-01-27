'use client';

import { useState, useMemo } from 'react';
import { LayoutList } from 'lucide-react';
import { Analysis } from '@/types/analysis';
import { AnalysisCard } from './analysis-card';
import { CatalogSidebar } from './catalog-sidebar';
import { CatalogTopFilters } from './catalog-top-filters';
import { CategoryId } from '../lib/catalog-constants';
import { Button } from '@/components/ui';
import { MobileCatalogDialog } from './mobile-catalog-dialog';
import { MobileFiltersDialog } from './mobile-filters-dialog';
import { cn } from '@/lib/utils';

interface CatalogPageProps {
    analyses: Analysis[];
}

export function CatalogPage({ analyses }: CatalogPageProps): React.ReactElement {
    const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const filteredAnalyses = useMemo(() => {
        if (!selectedCategory) {
            return analyses;
        }
        return analyses;
    }, [analyses, selectedCategory]);

    return (
        <div className="container mx-auto px-4 py-8">

            <div className="mb-8 hidden lg:block">
                <CatalogTopFilters />
            </div>

            <div className="lg:hidden mb-8">
                <h1 className="text-2xl font-medium text-text-main mb-6">
                    Анализы - ТОП 30
                </h1>

                <div className="flex items-center gap-8">
                    <Button
                        onClick={() => setIsCatalogOpen(true)}
                        className={cn(
                            "w-[218px] h-12 rounded-xl flex items-center justify-center gap-4 text-white text-lg font-medium shadow-lg",
                            "bg-brand-blue-accent hover:bg-brand-blue-accent-hover transition-colors"
                        )}
                    >
                        <LayoutList className="w-6 h-6" />
                        Каталог
                    </Button>

                    <Button
                        variant="ghost"
                        onClick={() => setIsFiltersOpen(true)}
                        className="text-brand-blue-accent hover:text-brand-blue-accent-hover font-medium text-base h-auto p-0 underline underline-offset-4 decoration-current transition-colors"
                    >
                        Фильтры
                    </Button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">

                <aside className="w-full lg:w-[320px] shrink-0 hidden lg:block">
                    <CatalogSidebar
                        selectedCategory={selectedCategory}
                        onCategorySelect={setSelectedCategory}
                    />
                </aside>

                <main className="flex-1 min-w-0">
                    <div className="hidden lg:flex items-center justify-between mb-6">
                        <h1 className="text-2xl md:text-3xl font-medium text-text-main">
                            Анализы - ТОП 30
                        </h1>
                    </div>

                    <div className="space-y-1">
                        {filteredAnalyses.map((analysis) => (
                            <AnalysisCard key={analysis.id} analysis={analysis} />
                        ))}
                    </div>
                </main>

            </div>

            <MobileCatalogDialog
                isOpen={isCatalogOpen}
                onClose={() => setIsCatalogOpen(false)}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
            />

            <MobileFiltersDialog
                isOpen={isFiltersOpen}
                onClose={() => setIsFiltersOpen(false)}
                onApply={() => { }}
            />
        </div>
    );
}