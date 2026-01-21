'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const services = [
    {
        id: 1,
        title: 'Доктор Q',
        description: 'Помощь в выборе\nи интерпретации\nанализа',
        image: '/image/services-lq/doctor-q.png',
        link: '#',
        textColor: 'text-text-main',
        descriptionColor: 'text-text-muted'
    },
    {
        id: 2,
        title: 'Q-Клиника',
        description: 'Врачи-эксперты\nТелемедицина',
        image: '/image/services-lq/q-clinika.png',
        link: '#',
        textColor: 'text-white',
        descriptionColor: 'text-white/90'
    },
    {
        id: 3,
        title: 'Капельница',
        description: 'В клинике\nи на дому',
        image: '/image/services-lq/capelnici.png',
        link: '#',
        textColor: 'text-text-main',
        descriptionColor: 'text-text-main/80'
    },
    {
        id: 4,
        title: 'Капельница',
        description: 'В клинике\nи на дому',
        image: '/image/services-lq/capelnici.png',
        link: '#',
        textColor: 'text-text-main',
        descriptionColor: 'text-text-main/80'
    }
];

export function ServicesBlock() {
    return (
        <section className="py-6 md:py-12 bg-white">
            <div className="container mx-auto px-4">

                <div className="mb-4 md:mb-8">
                    <h2 className="text-xl md:text-3xl font-bold text-text-main">
                        Сервисы ЛабКвест
                    </h2>
                    <p className="text-xs md:text-base font-medium text-text-muted mt-1 md:mt-2">
                        Мы больше, чем лаборатория!
                    </p>
                </div>

                <div className="-mx-4 md:mx-0">
                    <div className="overflow-hidden px-4 md:px-0">
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1.15}
                            breakpoints={{
                                480: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 16
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 24
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 24
                                }
                            }}
                            className="w-full"
                        >
                            {services.map((service) => (
                                <SwiperSlide key={service.id} className="h-auto">
                                    <Link
                                        href={service.link}
                                        className="relative block group overflow-hidden rounded-[20px] md:rounded-[24px] h-[180px] md:h-[240px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg bg-gray-100"
                                    >
                                        <div className="relative z-20 h-full flex flex-col justify-end p-4 md:p-8">
                                            <h3 className={`text-base md:text-2xl font-bold mb-1 md:mb-2 leading-tight ${service.textColor}`}>
                                                {service.title}
                                            </h3>
                                            <p className={`text-[10px] md:text-sm font-medium whitespace-pre-line leading-snug ${service.descriptionColor}`}>
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="absolute inset-0 z-10">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
        </section>
    );
}