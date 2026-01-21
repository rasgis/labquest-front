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
            <div className="flex text-sm font-bold text-center leading-tight">
                <Button
                    variant="ghost"
                    onClick={() => setActiveTab('analysis')}
                    className={cn(
                        "flex-1 !h-auto !py-4 px-2 rounded-none transition-colors font-medium",
                        activeTab === 'analysis'
                            ? "bg-white text-text-main shadow-none border-b-0 hover:bg-white cursor-default"
                            : "bg-bg-blue-soft text-brand-blue border-l border-b border-border hover:bg-bg-blue-soft-hover"
                    )}
                >
                    Анализы
                </Button>

                <Button
                    variant="ghost"
                    onClick={() => setActiveTab('complex')}
                    className={cn(
                        "flex-1 !h-auto !py-4 px-2 rounded-none transition-colors font-medium",
                        activeTab === 'complex'
                            ? "bg-white text-text-main shadow-none border-l border-b-0 hover:bg-white cursor-default"
                            : "bg-bg-blue-soft text-brand-blue border-l border-b border-border hover:bg-bg-blue-soft-hover"
                    )}
                >
                    Комплексные<br />исследования
                </Button>
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