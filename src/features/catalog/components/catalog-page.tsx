'use client';

import { useState, useMemo } from 'react';
import { Analysis } from '@/types/analysis';
import { AnalysisCard } from './analysis-card';
import { CatalogSidebar } from './catalog-sidebar';
import { CatalogTopFilters } from './catalog-top-filters';
import { CategoryId } from '../lib/catalog-constants';

interface CatalogPageProps {
    analyses: Analysis[];
}

export function CatalogPage({ analyses }: CatalogPageProps): React.ReactElement {
    const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);

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

            <div className="flex flex-col lg:flex-row gap-8">

                <aside className="w-full lg:w-[320px] shrink-0">
                    <CatalogSidebar
                        selectedCategory={selectedCategory}
                        onCategorySelect={setSelectedCategory}
                    />
                </aside>

                <main className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-6">
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
        </div>
    );
}