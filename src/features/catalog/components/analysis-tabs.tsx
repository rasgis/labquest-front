'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Analysis } from '@/types/analysis';
import { Button } from '@/components/ui';

type TabKey = 'description' | 'preparation' | 'indications' | 'interpretation';

const TABS = [
    { key: 'description', label: 'Описание' },
    { key: 'preparation', label: 'Подготовка' },
    { key: 'indications', label: 'Показания' },
    { key: 'interpretation', label: 'Интерпретация результата' },
] as const;

export function AnalysisTabs({ analysis }: { analysis: Analysis }): React.ReactElement {
    const [activeTab, setActiveTab] = useState<TabKey>('description');

    return (
        <>
            <TabNavigation activeTab={activeTab} onSelect={setActiveTab} />
            <TabContent activeTab={activeTab} analysis={analysis} />
        </>
    );
}

interface TabNavigationProps {
    activeTab: TabKey;
    onSelect: (key: TabKey) => void;
}

function TabNavigation({ activeTab, onSelect }: TabNavigationProps): React.ReactElement {
    return (
        <div className="flex items-center gap-8 mb-6  overflow-x-auto no-scrollbar">
            {TABS.map((tab) => (
                <Button
                    key={tab.key}
                    variant="ghost"
                    onClick={() => onSelect(tab.key as TabKey)}
                    className={cn(
                        "h-auto p-0 rounded-none hover:bg-transparent",
                        "pb-3 text-lg font-bold transition-colors whitespace-nowrap relative",
                        activeTab === tab.key
                            ? "text-text-main border-b-2 border-lime-lab font-medium"
                            : "text-text-muted hover:text-text-main font-medium border-b-2 border-transparent"
                    )}
                >
                    {tab.label}
                </Button>
            ))}
        </div>
    );
}

interface TabContentProps {
    activeTab: TabKey;
    analysis: Analysis;
}

function TabContent({ activeTab, analysis }: TabContentProps): React.ReactElement | null {
    let content: string | null | undefined = null;
    let emptyMessage: string | null = null;

    switch (activeTab) {
        case 'description':
            content = analysis.description;
            break;
        case 'preparation':
            content = analysis.preparation;
            emptyMessage = 'Информация о подготовке уточняется.';
            break;
        case 'indications':
            content = analysis.indications;
            emptyMessage = 'Информация о показаниях к назначению уточняется.';
            break;
        case 'interpretation':
            content = analysis.interpretation;
            emptyMessage = 'Результаты анализа должны интерпретироваться врачом.';
            break;
    }

    if (activeTab === 'description' && !content) {
        return null;
    }

    return (
        <div className="text-text-muted">
            {content ? (
                <div className="whitespace-pre-line">{content}</div>
            ) : (
                emptyMessage && <p>{emptyMessage}</p>
            )}
        </div>
    );
}