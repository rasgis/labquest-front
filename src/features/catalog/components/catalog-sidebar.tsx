'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { CATEGORIES, CategoryId } from '../lib/catalog-constants';

interface CatalogSidebarProps {
    selectedCategory: CategoryId | null;
    onCategorySelect: (id: CategoryId | null) => void;
}

export function CatalogSidebar({ selectedCategory, onCategorySelect }: CatalogSidebarProps): React.ReactElement {
    const [activeTab, setActiveTab] = useState<'analysis' | 'complex'>('analysis');

    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-border">
            <div className="flex text-sm font-medium text-center leading-tight bg-bg-blue-soft">
                <button
                    onClick={() => setActiveTab('analysis')}
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
                    onClick={() => setActiveTab('complex')}
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

            <div className="py-2 px-2 flex flex-col gap-1">
                {CATEGORIES.map((category) => {
                    const isSelected = selectedCategory === category.id;
                    return (
                        <Button
                            key={category.id}
                            variant="ghost"
                            onClick={() => onCategorySelect(category.id)}
                            className={cn(
                                "w-full justify-start !h-auto !min-h-0 px-4 !py-1 text-[15px] font-normal whitespace-normal text-left mb-0",
                                "rounded-lg transition-colors relative gap-3",
                                "text-text-main hover:text-brand-blue hover:bg-soft/50 hover:font-medium",
                                isSelected && "font-medium text-brand-blue bg-bg-blue-soft hover:bg-bg-blue-soft"
                            )}
                        >
                            <span className={cn(
                                "w-2 h-2 rounded-full mt-1.5 shrink-0",
                                "bg-lime-lab"
                            )} />

                            <span className="block leading-snug">
                                {category.label}
                            </span>
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}