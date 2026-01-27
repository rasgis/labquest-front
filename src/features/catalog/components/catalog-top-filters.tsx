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
        <div className="relative group w-full lg:w-auto lg:flex-1 min-w-[120px]">
            <Button
                variant="ghost"
                className={cn(
                    "w-full h-auto justify-between font-normal hover:bg-white",
                    "flex items-center gap-2 px-3 py-2.5 bg-white",
                    "border border-border rounded-lg",
                    "text-sm text-brand-blue transition-all",
                    "hover:border-brand-blue-secondary hover:text-brand-blue-secondary"
                )}
            >
                <span className="truncate">{label}</span>
                <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
            </Button>
        </div>
    );

    return (
        <div className="bg-white p-6 rounded-2xl border border-border mb-8">
            <div className="flex flex-col gap-6">

                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full">

                    <div
                        className="flex items-center gap-2 cursor-pointer select-none group shrink-0"
                        onClick={() => setIsPregnancy(!isPregnancy)}
                    >
                        <Checkbox
                            id="pregnancy"
                            checked={isPregnancy}
                            readOnly
                            activeColor="primary"
                            className="border-primary hover:border-primary"
                        />
                        <Label
                            htmlFor="pregnancy"
                            className="text-sm md:text-base font-medium text-brand-blue cursor-pointer group-hover:text-primary transition-colors whitespace-nowrap"
                        >
                            Беременность
                        </Label>
                    </div>

                    <div
                        className="flex items-center gap-2 cursor-pointer select-none group shrink-0 lg:mr-2"
                        onClick={() => setIsHomeVisit(!isHomeVisit)}
                    >
                        <Checkbox
                            id="home-visit"
                            checked={isHomeVisit}
                            readOnly
                            activeColor="blue"
                            className="border-brand-blue-secondary hover:border-brand-blue"
                        />
                        <Label
                            htmlFor="home-visit"
                            className="text-sm md:text-base font-medium text-brand-blue cursor-pointer group-hover:text-primary transition-colors whitespace-nowrap"
                        >
                            Выезд на дом
                        </Label>
                    </div>

                    <FilterSelect label="Пол" options={GENDERS} />
                    <FilterSelect label="Возраст" options={AGES} />
                    <FilterSelect label="Системы организма" options={BODY_SYSTEMS} />
                    <FilterSelect label="Болезни" options={DISEASES} />
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