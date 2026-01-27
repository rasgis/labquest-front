'use client';

import { Search, X } from 'lucide-react';
import { Button, Input } from '@/components/ui';

export function MobileSearchBar(): React.ReactElement {
    return (
        <div className="px-4 pb-1 mt-2">
            <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-main" />
                <Input
                    placeholder="Введите название анализа или услуги"
                    className="pl-10 pr-9 bg-bg-input border-none h-11 rounded-xl text-sm placeholder:text-text-muted focus-visible:ring-0"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 rounded-full hover:bg-transparent"
                    >
                        <div className="bg-gray-400 rounded-full p-0.5">
                            <X className="h-3 w-3 text-white" />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}
