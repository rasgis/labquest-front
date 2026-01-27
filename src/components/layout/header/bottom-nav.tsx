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
            <div className="container mx-auto px-4 flex justify-between lg:gap-1 xl:gap-8">

                <div className="flex flex-col gap-2 shrink-0">
                    <Button variant="lime" size="sm" className="lg:w-36 xl:w-48 justify-center shadow-sm lg:text-xs xl:text-sm font-medium">
                        Телемедицина
                    </Button>
                    <Button variant="primary" size="sm" className="lg:w-36 xl:w-48 justify-center shadow-sm lg:text-xs xl:text-sm font-medium">
                        Консилиум с экспертами
                    </Button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-between h-full gap-2 pt-0.5">

                    <div className="flex lg:gap-1 xl:gap-2">
                        <Link
                            href={`/${currentCity}/catalog`}
                            className="flex items-center lg:gap-1.5 xl:gap-1.5 lg:px-2 xl:px-3 py-1.5 rounded-md lg:text-xs xl:text-sm font-medium text-text-main transition-all bg-brand-gradient"
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
                            className="flex items-center lg:gap-1.5 xl:gap-1.5 lg:px-2 xl:px-3 py-1.5 rounded-md lg:text-xs xl:text-sm font-medium text-text-main transition-all bg-brand-gradient"
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
                            className="flex items-center lg:gap-1.5 xl:gap-1.5 lg:px-2 xl:px-3 py-1.5 rounded-md lg:text-xs xl:text-sm font-medium text-text-main transition-all bg-brand-gradient"
                        >
                            <SquareUserRound className="h-4 w-4 xl:h-5 xl:w-5" />
                            <span className="truncate">Doctor Q - Назначение анализов</span>
                        </Link>
                    </div>

                    <nav className="flex flex-nowrap justify-center items-center lg:gap-x-4 xl:gap-x-3 gap-y-2 lg:text-xs xl:text-sm font-medium text-text-main">
                        <Link href="#" className="flex flex-1 items-center lg:gap-1 xl:gap-1.5 hover:text-brand-blue-secondary ">
                            <Image
                                src="/icons/button-icons/discount.svg"
                                alt="%"
                                width={16}
                                height={16}
                                className="w-4 h-4 object-contain"
                            />
                            Акции
                        </Link>
                        <Link href="#" className="flex flex-1 hover:text-brand-blue-secondary transition whitespace-nowrap">Анализы<span className="lg:hidden xl:inline"> и цены</span></Link>
                        <Link href="#" className="flex flex-1 hover:text-brand-blue-secondary transition whitespace-nowrap">Адреса<span className="lg:hidden xl:inline"> и офисы</span></Link>
                        <Link href="#" className="flex flex-1 hover:text-brand-blue-secondary transition whitespace-nowrap">Запись<span className="lg:hidden xl:inline"> к врачу</span></Link>
                        <Link href="#" className="flex flex-1 hover:text-brand-blue-secondary transition whitespace-nowrap">Капельницы</Link>
                        <Link href="#" className="flex flex-1 hover:text-brand-blue-secondary transition whitespace-nowrap">Check-Up</Link>
                        <Link href="#" className="hover:text-brand-blue-secondary transition">Q test - тест для самовзятия</Link>
                    </nav>

                    <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-normal text-text-main">
                        <Link href="#" className="hover:text-brand-blue-secondary transition">Личный кабинет</Link>

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

                <div className="flex flex-col justify-between shrink-0">
                    <div className="flex flex-col gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-10 lg:w-32 xl:w-54 justify-start lg:gap-1 xl:gap-3 pl-1 pr-1 text-[10px] xl:text-xs font-medium border-border text-text-main hover:bg-gray-50 bg-white rounded-md"
                        >
                            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-lime-lab text-white shrink-0">
                                <Activity className="h-4 w-4" />
                            </div>
                            <span className="truncate">Расшифровка анализов</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-10 lg:w-32 xl:w-54 justify-start lg:gap-1 xl:gap-3 pl-1 pr-1 text-[10px] xl:text-xs font-medium border-border text-text-main hover:bg-gray-50 bg-white rounded-md"
                        >
                            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-lime-lab text-white shrink-0">
                                <FileText className="h-4 w-4" />
                            </div>
                            <span className="truncate">Результаты анализов</span>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}