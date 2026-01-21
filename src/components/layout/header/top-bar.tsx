'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useCartStore } from '@/stores/useCartStore';
import { useCityStore } from '@/stores/useCityStore';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui';
import Image from 'next/image';

export function TopBar() {
    const { currentCity } = useCityStore();
    const cartItemsCount = useCartStore((state) => state.getItemsCount());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const cityName = currentCity === 'moskva' ? 'Москва' : currentCity;

    return (
        <div className="bg-bg-soft text-xs py-2 border-b border-gray-200 hidden md:block">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 text-gray-600 hover:text-primary hover:bg-transparent gap-1 font-medium text-xs"
                >
                    <span className="capitalize">{cityName}</span>
                    <ChevronDown className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-6">
                    <Link href="/auth/login" className="flex items-center gap-2 text-gray-600 hover:text-primary transition group">
                        <Image
                            src="/icons/button-icons/profile.svg"
                            alt="Вход"
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <span className="font-medium text-brand-blue group-hover:text-primary transition-colors">Войти</span>
                    </Link>

                    <Link href="/basket" className="flex items-center gap-2 text-gray-600 hover:text-primary transition group">
                        <div className="relative">
                            <Image
                                src="/icons/button-icons/basket.svg"
                                alt="Корзина"
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            {/* Счетчик товаров */}
                            {mounted && cartItemsCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-bg-blue-light text-[9px] font-bold text-brand-blue">
                                    {cartItemsCount}
                                </span>
                            )}
                        </div>
                        <span className="font-medium text-brand-blue group-hover:text-primary transition-colors">Корзина</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}