'use client';

import { Analysis } from '@/types/analysis';

interface AnalysisHeaderProps {
    analysis: Analysis;
}

export function AnalysisHeader({ analysis }: AnalysisHeaderProps) {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-6 leading-tight">
                {analysis.name}
            </h1>

            <div className="bg-bg-blue-soft rounded-xl p-6 md:p-8 space-y-4 border border-border">
                <div className="text-sm text-text-muted mb-2">№ {analysis.article}</div>

                <div className="grid sm:grid-cols-[160px_1fr] gap-x-4 gap-y-2 text-sm md:text-base">
                    <div className="text-text-muted">Биоматериал:</div>
                    <div className="font-medium text-text-main">{analysis.biomaterial || 'Кровь венозная'}</div>

                    {analysis.method && (
                        <>
                            <div className="text-text-muted">Метод исследования:</div>
                            <div className="font-medium text-text-main">{analysis.method}</div>
                        </>
                    )}

                    <div className="text-text-muted">Срок исполнения:</div>
                    <div className="font-medium text-text-main">{analysis.deadline}</div>
                </div>
            </div>

            {analysis.synonyms && (
                <div className="hidden xl:block mt-6 text-sm text-text-muted leading-relaxed">
                    <span className="font-bold text-text-main">Синонимы:</span><br />
                    {analysis.synonyms}
                </div>
            )}
        </div>
    );
}