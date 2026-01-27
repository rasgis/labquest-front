'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MobileLink } from './mobile-link';
import { AccordionItem } from './accordion-item';
import React from 'react';

interface MobileMenuNavProps {
    onClose: () => void;
}

export function MobileMenuNav({ onClose }: MobileMenuNavProps): React.ReactElement {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string): void => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <nav className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col gap-1">
                <Link
                    href="#"
                    className="flex items-center gap-3 text-base font-medium text-text-main rounded-lg w-fit"
                    onClick={onClose}
                >
                    <div className="bg-white rounded p-1 w-7 h-7 flex items-center justify-center">
                        <Image
                            src="/icons/button-icons/discount.svg"
                            alt="%"
                            width={18}
                            height={18}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    Акции
                </Link>

                <MobileLink href="#" onClick={onClose}>
                    Выезд на дом
                </MobileLink>
                <MobileLink href="#" onClick={onClose}>
                    Капельницы
                </MobileLink>
                <MobileLink href="#" onClick={onClose}>
                    Check-Up
                </MobileLink>
                <MobileLink href="#" onClick={onClose}>
                    Q test - тест для самовзятия
                </MobileLink>
                <MobileLink href="/auth/login" onClick={onClose}>
                    Личный кабинет
                </MobileLink>

                <AccordionItem
                    title="Пациентам"
                    isOpen={openSection === 'patients'}
                    onToggle={() => toggleSection('patients')}
                >
                    <MobileLink href="#" onClick={onClose}>Программа лояльности</MobileLink>
                    <MobileLink href="#" onClick={onClose}>Продукты LQ</MobileLink>
                    <MobileLink href="#" onClick={onClose}>Статьи</MobileLink>
                    <MobileLink href="#" onClick={onClose}>Популярная диагностика</MobileLink>
                    <MobileLink href="#" onClick={onClose}>Справка на COVID-19</MobileLink>
                    <MobileLink href="#" onClick={onClose}>Мобильное приложение</MobileLink>
                </AccordionItem>

                <AccordionItem
                    title="Франшиза"
                    isOpen={openSection === 'franchise'}
                    onToggle={() => toggleSection('franchise')}
                >
                    <MobileLink href="#" onClick={onClose}>Q-Капельницы</MobileLink>
                    <MobileLink href="#" onClick={onClose}>Labquest и Q-клиника</MobileLink>
                </AccordionItem>

                <AccordionItem
                    title="Клиникам"
                    isOpen={openSection === 'clinics'}
                    onToggle={() => toggleSection('clinics')}
                >
                    <MobileLink href="#" onClick={onClose}>Маркетинговая поддержка</MobileLink>
                    <MobileLink href="#" onClick={onClose}>Бланки</MobileLink>
                    <MobileLink href="#" onClick={onClose}>Логистика</MobileLink>
                    <MobileLink href="#" onClick={onClose}>Удобный IT-сервис</MobileLink>
                    <MobileLink href="#" onClick={onClose}>Личный кабинет врача</MobileLink>
                </AccordionItem>

                <AccordionItem
                    title="О компании"
                    isOpen={openSection === 'about'}
                    onToggle={() => toggleSection('about')}
                >
                    <MobileLink href="#" onClick={onClose}>Новости</MobileLink>
                    <MobileLink href="#" onClick={onClose}>СМИ о нас</MobileLink>
                    <MobileLink href="#" onClick={onClose}>Вакансии</MobileLink>
                    <MobileLink href="#" onClick={onClose}>Семинары и конференции</MobileLink>
                </AccordionItem>
            </div>
        </nav>
    );
}
