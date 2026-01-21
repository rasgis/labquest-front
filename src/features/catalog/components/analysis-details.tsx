'use client';

import { useRouter, useParams } from 'next/navigation';
import { Analysis } from '@/types/analysis';
import { Breadcrumbs } from '@/components/ui';
import { CatalogSidebar } from './catalog-sidebar';
import { AnalysisHeader } from './analysis-header';
import { AnalysisActionCard } from './analysis-action-card';
import { AnalysisTabs } from './analysis-tabs';
import { MobileActionFooter } from './mobile-action-footer';
import { CategoryId } from '../lib/catalog-constants';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface AnalysisDetailsProps {
    analysis: Analysis;
}

export function AnalysisDetails({ analysis }: AnalysisDetailsProps) {
    const router = useRouter();
    const params = useParams();
    const city = params?.city as string || 'moskva';

    const handleCategorySelect = (id: CategoryId | null) => {
        router.push(`/${city}/catalog`);
    };

    const sidebarCategory = analysis.category as CategoryId;

    return (
        <div className="container mx-auto px-4 py-8">
            <Breadcrumbs
                items={[
                    { label: 'Анализы и цены', href: `/${city}/catalog` },
                    { label: 'Гормональные исследования', href: '#' }, // Лучше получать из analysis.categoryName
                    { label: 'Пренатальная диагностика' }
                ]}
            />

            <div className="md:hidden flex items-center gap-2 mb-4 text-text-muted hover:text-primary transition-colors">
                <Link href={`/${city}/catalog`} className="flex items-center gap-2 font-medium">
                    <div className="p-1"><ArrowRight className="w-5 h-5 rotate-180" /></div>
                    К анализам
                </Link>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                <aside className="w-full lg:w-[380px] shrink-0 hidden lg:block">
                    <CatalogSidebar
                        selectedCategory={sidebarCategory}
                        onCategorySelect={handleCategorySelect}
                    />
                </aside>

                <main className="flex-1 min-w-0">
                    <div className="grid xl:grid-cols-[1fr_320px] gap-6 mb-8">

                        <div className="space-y-6 min-w-0">
                            <AnalysisHeader analysis={analysis} />
                        </div>
                        <div className="block">
                            <div className="sticky top-24 space-y-4">
                                <AnalysisActionCard analysis={analysis} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <AnalysisTabs analysis={analysis} />
                    </div>
                </main>
            </div>

            {/* Мобильный футер  */}
            {/* <MobileActionFooter analysis={analysis} /> */}
        </div>
    );
}