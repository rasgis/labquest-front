'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui';

import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
    {
        id: 1,
        bgColor: 'var(--color-lime-lab)',
        title: 'Дерматофиты\nи другие глисты',
        text: 'Выявление ДНК Trichophyton, Epidermophyton, Microsporum\nEpidermophyton, Microsporum',
        btnText: 'Подробнее',
        link: '#',
        image: '/image/hero/1.png',
        textColor: 'var(--color-text-main)'
    },
    {
        id: 2,
        bgColor: 'var(--color-brand-purple)',
        title: 'Дополнительная\nскидка 5%',
        text: 'только при оплате заказа на сайте',
        btnText: 'Подробнее',
        link: '#',
        image: '/image/hero/9.png',
        textColor: '#FFFFFF'
    },
    {
        id: 3,
        bgColor: '#E6F4F1',
        title: 'Аллергочип ALEX2 –\nтест на 300 аллергенов',
        text: '',
        btnText: 'Подробнее',
        link: '#',
        image: '/image/hero/2.png',
        textColor: 'var(--color-text-main)'
    },
    {
        id: 4,
        bgColor: '#FEF9C3',
        title: 'Витамин D\nКонтроль здоровья',
        text: '',
        btnText: 'Подробнее',
        link: '#',
        image: '/image/hero/6.png',
        textColor: 'var(--color-text-main)'
    },
    {
        id: 5,
        bgColor: 'var(--color-lime-lab)',
        title: 'Fox Food Xplorer – тест\nна 286 пищевых аллергенов',
        text: '',
        btnText: 'Подробнее',
        link: '#',
        image: '/image/hero/5.png',
        textColor: 'var(--color-text-main)'
    },
];

export function HeroSlider() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="py-4 md:py-6">
            <div className="container mx-auto px-2 md:px-4">

                <div className="relative h-[560px] md:h-[400px]">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        speed={600}
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        loop={true}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        pagination={{
                            el: '.custom-hero-pagination',
                            clickable: true,
                            bulletClass: 'w-2.5 h-2.5 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 block hover:bg-gray-400',
                            bulletActiveClass: '!bg-lime-lab !w-3 !h-3 !opacity-100',
                        }}
                        className="h-full w-full"
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div
                                    className="flex flex-col-reverse md:flex-row w-full h-full rounded-[24px] md:rounded-[32px] overflow-hidden relative"
                                    style={{ backgroundColor: slide.bgColor }}
                                >

                                    <div className="flex-1 md:flex-none md:w-5/12 relative z-10 flex flex-col h-full">

                                        <div className="flex flex-col h-full px-6 md:px-12 pt-6 md:pt-12">

                                            <div className="flex-1 flex flex-col justify-center gap-4 md:gap-6">
                                                <h2
                                                    className="text-2xl md:text-3xl lg:text-5xl font-extrabold leading-[1.1] whitespace-pre-line"
                                                    style={{ color: slide.textColor }}
                                                >
                                                    {slide.title}
                                                </h2>

                                                {slide.text && (
                                                    <p
                                                        className="text-sm md:text-base font-medium whitespace-pre-line opacity-90 max-w-md"
                                                        style={{ color: slide.textColor }}
                                                    >
                                                        {slide.text}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="mt-auto pb-8 md:pb-12 pt-4">
                                                <Link href={slide.link}>
                                                    <Button
                                                        variant="hero"
                                                        size="hero"
                                                        className="w-full md:w-auto justify-center"
                                                    >
                                                        {slide.btnText}
                                                    </Button>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex-1 md:flex-none md:w-7/12 relative overflow-hidden h-full">
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            fill
                                            className="object-cover object-center md:object-contain md:object-right-bottom lg:object-cover md:object-cover"
                                            priority={slide.id === 1}
                                            sizes="(max-width: 768px) 100vw, 60vw"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="relative flex items-center justify-center md:justify-end mt-3 md:mt-4 px-2 min-h-[30px] md:min-h-[48px]">
                    <div className="custom-hero-pagination absolute left-1/2 -translate-x-1/2 flex gap-2 z-10" />

                    <div className="hidden md:flex gap-3 z-20">
                        <Button
                            onClick={() => swiperRef.current?.slidePrev()}
                            variant="lime"
                            className="w-12 h-12 p-0 rounded-lg shadow-none"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                            onClick={() => swiperRef.current?.slideNext()}
                            variant="lime"
                            className="w-12 h-12 p-0 rounded-lg shadow-none"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}