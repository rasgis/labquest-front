'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui';

import 'swiper/css';

const stocks = [
    {
        id: 1,
        image: '/image/stocks/13.png',
        date: '14.08.2023 - 25.09.2023',
        title: 'Скидка 20% на комплекс витаминов В',
        link: '#'
    },
    {
        id: 2,
        image: '/image/stocks/12.png',
        date: '14.08.2023 - 25.09.2023',
        title: 'Выявление дерматофитов.\nНовое исследование в ЛабКвест со скидкой 20%',
        link: '#'
    },
    {
        id: 3,
        image: '/image/stocks/11.png',
        date: '14.08.2023 - 25.09.2023',
        title: 'Микроэлементы по Микроценам!\nТолько 1 месяц!',
        link: '#'
    },
    {
        id: 4,
        image: '/image/stocks/13.png',
        date: '01.09.2023 - 30.09.2023',
        title: 'Чекап "Здоровье печени" со скидкой 15%',
        link: '#'
    },
];

export function StocksCarousel() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="py-6 md:py-12 bg-white">
            <div className="container mx-auto px-4">

                <div className="flex items-center justify-between mb-4 md:mb-8">
                    <h2 className="text-xl md:text-3xl font-bold text-text-main">
                        Акции и скидки
                    </h2>
                    <Link href="/stocks" className="hidden md:flex items-center gap-1 text-sm font-bold text-brand-blue hover:text-brand-blue-secondary transition-colors">
                        Все акции
                        <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="relative -mx-4 md:mx-0">
                    <div className="overflow-hidden px-4 md:px-0">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            slidesPerView={1.15}
                            breakpoints={{
                                480: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 16,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                            }}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            className="w-full"
                        >
                            {stocks.map((stock) => (
                                <SwiperSlide key={stock.id} className="h-auto">
                                    <Link href={stock.link} className="group flex flex-col h-full gap-3 cursor-pointer">

                                        <div className="relative w-full aspect-[16/9] rounded-[16px] md:rounded-[20px] overflow-hidden bg-gray-100">
                                            <Image
                                                src={stock.image}
                                                alt={stock.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] md:text-xs font-medium text-text-muted">
                                                Срок акции<br className="md:hidden" /> {stock.date}
                                            </span>
                                            <h3 className="text-sm md:text-lg font-bold text-text-main leading-tight md:leading-snug group-hover:text-brand-blue-secondary transition-colors whitespace-pre-line line-clamp-3">
                                                {stock.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="hidden md:flex justify-end gap-3 mt-8">
                        <Button
                            variant="lime"
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-12 h-12 p-0 rounded-lg"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                            variant="lime"
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-12 h-12 p-0 rounded-lg"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}