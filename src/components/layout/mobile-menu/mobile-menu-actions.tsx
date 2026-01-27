'use client';

import { Button } from '@/components/ui';
import React from 'react';

export function MobileMenuActions(): React.ReactElement {
    return (
        <div className="flex flex-row gap-2 px-4 py-4 shrink-0">
            <Button
                variant="lime"
                className="w-[35%] h-12 justify-center font-medium text-[14px] leading-tight rounded-xl px-2"
            >
                Телемедицина
            </Button>
            <Button
                variant="primary"
                className="w-[65%] h-12 justify-center font-medium text-[14px] leading-tight rounded-xl px-2"
            >
                Консилиум с экспертами
            </Button>
        </div>
    );
}
