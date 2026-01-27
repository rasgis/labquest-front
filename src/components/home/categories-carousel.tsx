'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

const categories = [
    {
        id: 1,
        title: 'Мужчинам',
        icon: '/icons/icon_shirt.png',
        href: '/catalog/men'
    },
    {
        id: 2,
        title: 'Женщинам',
        icon: '/icons/icon_dress.png',
        href: '/catalog/women'
    },
    {
        id: 3,
        title: 'Детям',
        icon: '/icons/icon_man.png',
        href: '/catalog/kids'
    },
    {
        id: 4,
        title: 'Родителям',
        icon: '/icons/icon_parent.png',
        href: '/catalog/parents'
    },
    {
        id: 5,
        title: 'Подарочные сертификаты',
        icon: '/icons/icon_happy.png',
        href: '/catalog/gift'
    },
    {
        id: 6,
        title: 'Красота и Anti-age',
        icon: '/icons/icon_pacifier.png',
        href: '/catalog/beauty'
    },
    {
        id: 7,
        title: 'Витамины и микроэлементы',
        icon: '/icons/icon_pill.png',
        href: '/catalog/vitamins'
    },
    {
        id: 8,
        title: 'Аллергия',
        icon: '/icons/icon_flower.png',
        href: '/catalog/allergy'
    },
    {
        id: 9,
        title: 'Спортсменам',
        icon: '/icons/icon_sport.png',
        href: '/catalog/sport'
    },
    {
        id: 10,
        title: 'Генетика',
        icon: '/icons/icon_nipt.png',
        href: '/catalog/genetics'
    },
    {
        id: 11,
        title: 'ИППП',
        icon: '/icons/icon_ippp.png',
        href: '/catalog/ippp'
    },
    {
        id: 12,
        title: 'Беременность',
        icon: '/icons/icon_pink_pacifier.png',
        href: '/catalog/pregnancy'
    },
    {
        id: 13,
        title: 'Гормоны',
        icon: '/icons/icon_mask.png',
        href: '/catalog/hormones'
    },
    {
        id: 14,
        title: 'Паразиты',
        icon: '/icons/icon_parasite.png',
        href: '/catalog/parasites'
    },
    {
        id: 15,
        title: 'Q-тесты',
        icon: '/icons/icon_Q_test.png',
        href: '/catalog/q-tests'
    },
    {
        id: 16,
        title: 'Чекапы',
        icon: '/icons/icon_magnifying_glass.png',
        href: '/catalog/checkups'
    },

];

export function CategoriesCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const item = current.firstElementChild as HTMLElement;
            if (!item) return;

            const style = window.getComputedStyle(current);
            const gap = parseInt(style.gap || '32');

            const scrollAmount = item.offsetWidth + gap;

            const maxScroll = current.scrollWidth - current.clientWidth;

            if (direction === 'left') {
                const target = current.scrollLeft <= 10 ? maxScroll : current.scrollLeft - scrollAmount;
                current.scrollTo({ left: target, behavior: 'smooth' });
            } else {
                const target = current.scrollLeft >= maxScroll - 10 ? 0 : current.scrollLeft + scrollAmount;
                current.scrollTo({ left: target, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4 relative group">

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => scroll('left')}
                    className={cn(
                        "absolute -left-2 md:-left-10 top-1/2 -translate-y-1/2 z-10",
                        "h-12 w-12 text-gray-300 hover:text-lime-lab hover:bg-transparent transition-colors",
                        "hidden md:flex"
                    )}
                >
                    <ChevronLeft className="h-10 w-10" />
                </Button>

                <div
                    ref={scrollRef}
                    className={cn(
                        "flex items-start gap-4 md:gap-8 overflow-x-auto",
                        "no-scrollbar scroll-smooth py-4 px-2"
                    )}
                >
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={category.href}
                            className={cn(
                                "flex flex-col items-center gap-4 min-w-[120px] md:min-w-[140px]",
                                "group/item cursor-pointer"
                            )}
                        >
                            {/* Контейнер иконки */}
                            <div className="relative flex items-center justify-center h-[110px] w-[110px]">
                                <div className={cn(
                                    "absolute inset-0 rounded-full bg-bg-lime-light origin-center",
                                    "scale-0 transition-transform duration-300 group-hover/item:scale-100"
                                )} />

                                <div className="relative h-20 w-20 transition-transform duration-300 group-hover/item:scale-110 z-10">
                                    <Image
                                        src={category.icon}
                                        alt={category.title}
                                        fill
                                        className="object-contain drop-shadow-sm"
                                        sizes="80px"
                                    />
                                </div>
                            </div>

                            <span className={cn(
                                "text-center text-sm font-semibold leading-tight max-w-[130px]",
                                "text-text-muted group-hover/item:text-text-main transition-colors"
                            )}>
                                {category.title}
                            </span>
                        </Link>
                    ))}
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => scroll('right')}
                    className={cn(
                        "absolute -right-2 md:-right-10 top-1/2 -translate-y-1/2 z-10",
                        "h-12 w-12 text-gray-300 hover:text-lime-lab hover:bg-transparent transition-colors",
                        "hidden md:flex"
                    )}
                >
                    <ChevronRight className="h-10 w-10" />
                </Button>

            </div>
        </section>
    );
}