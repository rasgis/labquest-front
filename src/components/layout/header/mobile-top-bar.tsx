'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui';
import { useCityStore } from '@/stores/useCityStore';
import { useCartStore } from '@/stores/useCartStore';
import { useState, useEffect } from 'react';

export function MobileTopBar(): React.ReactElement {
    const { currentCity } = useCityStore();
    const cartItemsCount = useCartStore((state) => state.getItemsCount());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const cityName = currentCity === 'moskva' ? 'Москва' : currentCity;

    return (
        <div className="bg-bg-soft flex items-center justify-between px-4 py-2">
            <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-xs font-medium text-text-muted hover:bg-transparent hover:text-primary gap-1"
            >
                <span className="capitalize">{cityName}</span>
                <ChevronDown className="h-3 w-3" />
            </Button>

            <div className="flex items-center gap-6">
                <Link href="/auth/login" className="flex items-center gap-2 text-gray-600 hover:text-primary transition group">
                    <Image
                        src="/icons/button-icons/profile.svg"
                        alt="Вход"
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain opacity-80 group-active:opacity-100 transition-opacity"
                    />
                    <span className="font-medium text-brand-blue group-active:text-primary transition-colors text-xs">Войти</span>
                </Link>

                <Link href="/basket" className="flex items-center gap-2 text-gray-600 hover:text-primary transition group">
                    <div className="relative">
                        <Image
                            src="/icons/button-icons/basket.svg"
                            alt="Корзина"
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain opacity-80 group-active:opacity-100 transition-opacity"
                        />
                        {mounted && cartItemsCount > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-bg-blue-light text-[9px] font-bold text-brand-blue">
                                {cartItemsCount}
                            </span>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    );
}
