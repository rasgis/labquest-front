'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SquareUserRound } from 'lucide-react';
import { useCityStore } from '@/stores/useCityStore';
import React from 'react';

interface MobileMenuPopularProps {
    onClose: () => void;
}

export function MobileMenuPopular({ onClose }: MobileMenuPopularProps): React.ReactElement {
    const { currentCity } = useCityStore();

    return (
        <div className="px-4 pb-4 shrink-0">
            <div className="flex flex-col rounded-2xl bg-brand-gradient p-4 gap-5">
                <Link
                    href={`/${currentCity}/catalog`}
                    className="flex items-center gap-4 text-[15px] font-medium text-text-main transition-opacity active:opacity-70"
                    onClick={onClose}
                >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        <Image
                            src="/icons/button-icons/star.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    Популярные анализы
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-4 text-[15px] font-medium text-text-main transition-opacity active:opacity-70"
                    onClick={onClose}
                >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        <Image
                            src="/icons/button-icons/onkonavi.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    Онконавигатор
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-4 text-[15px] font-medium text-text-main transition-opacity active:opacity-70"
                    onClick={onClose}
                >
                    <SquareUserRound className="w-6 h-6 shrink-0" />
                    Doctor Q Назначение анализов
                </Link>
            </div>
        </div>
    );
}
