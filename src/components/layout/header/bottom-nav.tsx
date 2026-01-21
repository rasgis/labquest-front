'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { FileText, Activity, SquareUserRound } from 'lucide-react';
import { NavDropdown } from './nav-dropdown';
import { useCityStore } from '@/stores/useCityStore';

export function BottomNav(): React.ReactElement {
    const { currentCity } = useCityStore();

    return (
        <div className="border-t border-border py-4 hidden lg:block">
            <div className="container mx-auto px-4 flex  justify-between gap-6">

                <div className="flex flex-col gap-2 shrink-0">
                    <Button variant="lime" size="sm" className="w-48 justify-center shadow-sm text-[14px] font-medium">
                        Телемедицина
                    </Button>
                    <Button variant="primary" size="sm" className="w-48 justify-center shadow-sm text-[14px] font-medium ">
                        Консилиум с экспертами
                    </Button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-between h-full gap-2 pt-0.5">

                    <div className="flex gap-2">
                        <Link
                            href="#"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[14px] font-medium text-text-main transition-all bg-gradient-to-r from-[#E2F285] via-[#FAB3C9] to-[#E2F285] bg-[length:200%_auto] bg-left hover:bg-right hover:shadow-sm"
                        >
                            <Image
                                src="/icons/button-icons/star.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain"
                            />
                            Популярные анализы
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[14px] font-medium text-text-main transition-all bg-gradient-to-r from-[#E2F285] via-[#FAB3C9] to-[#E2F285] bg-[length:200%_auto] bg-left hover:bg-right hover:shadow-sm"
                        >
                            <Image
                                src="/icons/button-icons/onkonavi.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain"
                            />
                            Онконавигатор
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[14px] font-medium text-text-main transition-all bg-gradient-to-r from-[#E2F285] via-[#FAB3C9] to-[#E2F285] bg-[length:200%_auto] bg-left hover:bg-right hover:shadow-sm"
                        >
                            <SquareUserRound className="h-5 w-5" />
                            Doctor Q - Назначение анализов
                        </Link>
                    </div>

                    <nav className="flex flex-nowrap justify-center items-center gap-x-3 gap-y-2 text-sm font-medium text-text-main">
                        <Link href="#" className="flex flex-1 items-center gap-1.5 hover:underline">
                            <Image
                                src="/icons/button-icons/discount.svg"
                                alt="%"
                                width={16}
                                height={16}
                                className="w-4 h-4 object-contain"
                            />
                            Акции
                        </Link>
                        <Link href={`/${currentCity}/catalog`} className="flex flex-1 hover:text-primary transition whitespace-nowrap">Анализы и цены</Link>
                        <Link href="#" className="flex flex-1 hover:text-primary transition whitespace-nowrap">Адреса и офисы</Link>
                        <Link href="#" className="flex flex-1 hover:text-primary transition whitespace-nowrap">Запись к врачу</Link>
                        <Link href="#" className="flex flex-1 hover:text-primary transition whitespace-nowrap">Капельницы</Link>
                        <Link href="#" className="flex flex-1 hover:text-primary transition whitespace-nowrap">Check-Up</Link>
                        <Link href="#" className="hover:text-primary transition">Q test - тест для самовзятия</Link>
                    </nav>

                    <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-normal text-text-main">
                        <Link href="#" className="hover:text-primary transition">Личный кабинет</Link>

                        <NavDropdown
                            title="Пациентам"
                            className="font-medium"
                            items={[
                                { label: 'Программа лояльности', href: '#' },
                                { label: 'Продукты LQ', href: '#' },
                                { label: 'Статьи', href: '#' },
                                { label: 'Популярная диагностика', href: '#' },
                                { label: 'Справка на COVID-19', href: '#' },
                                { label: 'Мобильное приложение', href: '#' },
                            ]}
                        />

                        <NavDropdown
                            title="Франшиза"
                            className="font-medium"
                            items={[
                                { label: 'Q-Капельницы', href: '#' },
                                { label: 'Labquest и Q-клиника', href: '#' },
                            ]}
                        />

                        <NavDropdown
                            title="Клиникам"
                            className="font-medium"
                            items={[
                                { label: 'Маркетинговая поддержка', href: '#' },
                                { label: 'Бланки', href: '#' },
                                { label: 'Логистика', href: '#' },
                                { label: 'Удобный IT-сервис', href: '#' },
                                { label: 'Личный кабинет врача', href: '#' },
                            ]}
                        />

                        <NavDropdown
                            title="О компании"
                            className="font-medium"
                            items={[
                                { label: 'Новости', href: '#' },
                                { label: 'СМИ о нас', href: '#' },
                                { label: 'Вакансии', href: '#' },
                                { label: 'Семинары и конференции', href: '#' },
                            ]}
                        />
                    </nav>
                </div>

                <div className="flex flex-col justify-between  shrink-0">
                    <div className="flex flex-col gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-10 w-54 justify-start gap-3 pl-1 pr-4 text-xs font-medium border-border text-text-main hover:bg-gray-50 bg-white rounded-md"
                        >
                            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-lime-lab text-white shrink-0">
                                <Activity className="h-4 w-4" />
                            </div>
                            Расшифровка анализов
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-10 w-54 justify-start gap-3 pl-1 pr-4 text-xs font-medium border-border text-text-main hover:bg-gray-50 bg-white rounded-md"
                        >
                            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-lime-lab text-white shrink-0">
                                <FileText className="h-4 w-4" />
                            </div>
                            Результаты анализов
                        </Button>
                    </div>



                </div>

            </div>
        </div>
    );
}