'use client';

import { useEffect, useState } from 'react';
import { Menu, ShoppingCart, Search, User, ChevronDown, Phone, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Input } from '@/components/ui';
import { useUIStore } from '@/stores/useUIStore';
import { useCityStore } from '@/stores/useCityStore';
import { useCartStore } from '@/stores/useCartStore';
import { TopBar, MiddleBar, BottomNav } from './index';

export function Header() {
    const { toggleMobileMenu } = useUIStore();
    const { currentCity } = useCityStore();
    const cartItemsCount = useCartStore((state) => state.getItemsCount());

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const cityName = currentCity === 'moskva' ? 'Москва' : currentCity;

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">

            {/* Десктоп версия */}
            <div className="hidden md:block">
                <TopBar />
                <MiddleBar />
                <BottomNav />
            </div>

            {/* Мобильная версия */}
            <div className="md:hidden flex flex-col bg-white pb-2">

                <div className="flex items-center justify-between px-4 py-2 border-b border-border">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-auto p-0 text-xs font-medium text-text-muted hover:bg-transparent hover:text-primary gap-1"
                    >
                        <span className="capitalize">{cityName}</span>
                        <ChevronDown className="h-3 w-3" />
                    </Button>

                    <div className="flex items-center gap-2">
                        <Link href="/auth/login">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-auto p-0 text-brand-blue font-bold text-xs hover:bg-transparent gap-2"
                            >
                                <div className="bg-brand-blue rounded-full p-1">
                                    <User className="h-3 w-3 text-white" />
                                </div>
                                Войти
                            </Button>
                        </Link>

                        <Link href="/basket" className="relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-brand-blue hover:text-primary hover:bg-transparent"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                {mounted && cartItemsCount > 0 && (
                                    <span className="absolute top-1 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-bg-blue-light text-[9px] font-bold text-brand-blue">
                                        {cartItemsCount}
                                    </span>
                                )}
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-between px-4 py-3">

                    <div className="flex items-center gap-3">
                        <Button
                            onClick={toggleMobileMenu}
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-text-main hover:bg-transparent -ml-2"
                        >
                            <Menu className="h-7 w-7" />
                        </Button>

                        <Link href="/" className="shrink-0">
                            <Image
                                src="/icons/icon-192.png"
                                alt="LabQuest"
                                width={100}
                                height={32}
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="relative">
                            <Link href="tel:88007000999">
                                <Button
                                    variant="lime"
                                    size="sm"
                                    className="h-7 px-3 text-[10px] rounded-lg font-bold shadow-none"
                                >
                                    Горячая линия
                                </Button>
                            </Link>
                            <div className="absolute -bottom-2.5 right-0 bg-bg-blue-light text-[8px] font-bold text-brand-blue px-1.5 py-0.5 rounded-md whitespace-nowrap z-10 pointer-events-none">
                                по ОРВИ
                            </div>
                        </div>

                        <a href="tel:88007000999" className="text-text-main flex items-center gap-1.5 hover:text-primary transition-colors">
                            <Phone className="h-4 w-4 text-lime-lab fill-current" />
                            <span className="text-xs font-bold whitespace-nowrap hidden min-[370px]:block">8 (800) 700 09 99</span>
                        </a>
                    </div>
                </div>

                <div className="px-4 pb-2">
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
                                <div className="bg-[#9CA3AF] rounded-full p-0.5">
                                    <X className="h-3 w-3 text-white" />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}