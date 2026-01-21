'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button, Checkbox, Label } from '@/components/ui';
import { GENDERS, AGES, BODY_SYSTEMS, DISEASES } from '../lib/catalog-constants';
import { cn } from '@/lib/utils';

export function CatalogTopFilters(): React.ReactElement {
    const [isPregnancy, setIsPregnancy] = useState(false);
    const [isHomeVisit, setIsHomeVisit] = useState(false);

    const FilterSelect = ({
        label,
        options
    }: {
        label: string;
        options: readonly { value: string; label: string }[];
    }) => (
        <div className="relative group w-full">
            <button className={cn(
                "flex items-center justify-between w-full gap-2 px-4 py-2.5 bg-white",
                "border border-border rounded-lg",
                "text-sm text-brand-blue transition-all",
                "hover:border-primary hover:text-primary"
            )}>
                <span className="truncate">{label}</span>
                <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
            </button>
        </div>
    );

    return (
        <div className="bg-white p-6 rounded-2xl border border-border mb-8">
            <div className="flex flex-col gap-6">

                <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 w-full">

                    <div className="flex items-center gap-6 shrink-0">
                        <div className="flex items-center gap-3 cursor-pointer select-none group">
                            <Checkbox
                                id="pregnancy"
                                checked={isPregnancy}
                                onChange={(e) => setIsPregnancy(e.target.checked)}
                                activeColor="primary"
                            />
                            <Label
                                htmlFor="pregnancy"
                                className="text-base font-medium text-brand-blue cursor-pointer group-hover:text-primary transition-colors"
                            >
                                Беременность
                            </Label>
                        </div>

                        <div className="flex items-center gap-3 cursor-pointer select-none group">
                            <Checkbox
                                id="home-visit"
                                checked={isHomeVisit}
                                onChange={(e) => setIsHomeVisit(e.target.checked)}
                                activeColor="primary"
                            />
                            <Label
                                htmlFor="home-visit"
                                className="text-base font-medium text-brand-blue cursor-pointer group-hover:text-primary transition-colors"
                            >
                                Выезд на дом
                            </Label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 w-full">
                        <FilterSelect label="Пол" options={GENDERS} />
                        <FilterSelect label="Возраст" options={AGES} />
                        <FilterSelect label="Системы организма" options={BODY_SYSTEMS} />
                        <FilterSelect label="Болезни" options={DISEASES} />
                    </div>
                </div>

                <div className="flex items-center justify-end gap-6 pt-2">
                    <Button
                        variant="outline"
                        className={cn(
                            "px-10 h-11 rounded-lg transition-all border text-base font-medium",
                            "bg-bg-blue-soft border-brand-blue-secondary text-brand-blue",
                            "hover:bg-bg-blue-soft-hover hover:border-brand-blue hover:text-brand-blue"
                        )}
                    >
                        Показать
                    </Button>

                    <Button
                        variant="ghost"
                        className={cn(
                            "h-auto p-0 hover:bg-transparent",
                            "text-sm font-medium underline underline-offset-4 decoration-1 transition-colors",
                            "text-brand-blue",
                            "hover:text-text-main"
                        )}
                    >
                        Сбросить
                    </Button>
                </div>

            </div>
        </div>
    );
}