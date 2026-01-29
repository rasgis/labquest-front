'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Analysis } from '@/types/analysis';
import { AnalysisHeader } from './analysis-header';
import { AnalysisActionCard } from './analysis-action-card';
import { AnalysisTabs } from './analysis-tabs';

interface AnalysisDetailsProps {
    analysis: Analysis;
}

export function AnalysisDetails({ analysis }: AnalysisDetailsProps): React.ReactElement {
    const params = useParams();
    const city = params?.city as string || 'moskva';

    return (
        <div className="md:px-0">
            <div className="md:hidden flex items-center gap-2 mb-4 text-text-muted hover:text-primary transition-colors">
                <Link href={`/${city}/catalog`} className="flex items-center gap-2 font-medium">
                    <div className="p-1"><ArrowRight className="w-5 h-5 rotate-180" /></div>
                    К анализам
                </Link>
            </div>

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
        </div>
    );
}