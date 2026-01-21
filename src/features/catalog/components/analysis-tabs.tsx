'use client';
import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { cn } from '@/lib/utils';
import { Analysis } from '@/types/analysis';

type TabKey = 'description' | 'preparation' | 'indications' | 'interpretation';

export function AnalysisTabs({ analysis }: { analysis: Analysis }) {
    const [activeTab, setActiveTab] = useState<TabKey>('description');
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const sanitize = (html: string) => {
        if (!mounted || typeof window === 'undefined') return { __html: html };
        return { __html: DOMPurify.sanitize(html) };
    };

    const tabs: { key: TabKey; label: string }[] = [
        { key: 'description', label: 'Описание' },
        { key: 'preparation', label: 'Подготовка' },
        { key: 'indications', label: 'Показания' },
        { key: 'interpretation', label: 'Интерпретация результата' },
    ];

    return (
        <>
            <div className="flex items-center gap-8 mb-6 border-b border-border overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={cn(
                            "pb-3 text-lg font-bold transition-colors whitespace-nowrap relative",
                            activeTab === tab.key
                                ? "text-text-main border-b-2 border-lime-lab"
                                : "text-text-muted hover:text-text-main font-medium border-b-2 border-transparent"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="prose prose-sm md:prose-base max-w-none text-text-muted">
                {activeTab === 'description' && analysis.description && (
                    <div dangerouslySetInnerHTML={sanitize(analysis.description)} />
                )}
                {activeTab === 'preparation' && (
                    analysis.preparation
                        ? <div dangerouslySetInnerHTML={sanitize(analysis.preparation)} />
                        : <p>Информация о подготовке уточняется.</p>
                )}
                {activeTab === 'indications' && (
                    analysis.indications
                        ? <div dangerouslySetInnerHTML={sanitize(analysis.indications)} />
                        : <p>Информация о показаниях к назначению уточняется.</p>
                )}
                {activeTab === 'interpretation' && (
                    analysis.interpretation
                        ? <div dangerouslySetInnerHTML={sanitize(analysis.interpretation)} />
                        : <p>Результаты анализа должны интерпретироваться врачом.</p>
                )}
            </div>
        </>
    );
}