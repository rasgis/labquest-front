'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, Phone } from 'lucide-react';
import { Button, Input } from '@/components/ui';

export function MiddleBar() {
    return (
        <div className="bg-white py-4">
            <div className="container mx-auto px-4 flex items-center justify-between gap-8">

                <Link href="/" className="shrink-0 flex items-center gap-3">
                    <Image
                        src="/icons/icon-192.png"
                        alt="LabQuest"
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain"
                        priority
                    />
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-text-main leading-none tracking-tight">ЛабКвест</span>
                        <span className="text-[10px] items-center font-medium text-text-muted uppercase tracking-[0.1em] leading-none mt-1">
                            Лаборатория будущего
                        </span>
                    </div>
                </Link>

                <div className="flex-1 max-w-2xl flex">
                    <div className="relative w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-main" />
                        <Input
                            placeholder="Введите название анализа или услуги"
                            className="pl-12 bg-bg-input border-transparent focus:bg-white h-12 rounded-l-xl rounded-r-none text-base placeholder:text-text-muted focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>
                    <Button
                        variant="outline"
                        className="border-lime-lab text-text-main hover:bg-lime-lab font-medium px-8 h-12 rounded-r-xl rounded-l-none uppercase"
                    >
                        НАЙТИ
                    </Button>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                    <div className="hidden xl:block">
                        <Button
                            variant="lime"
                            size="lg"
                            className="relative rounded-xl font-medium overflow-visible px-6"
                        >
                            Горячая линия
                            <div className="absolute -bottom-3 -right-2 bg-bg-blue-light text-[10px] font-medium text-text-main px-2 py-0.5 rounded-md whitespace-nowrap z-10 pointer-events-none normal-case leading-normal">
                                по ОРВИ
                            </div>
                        </Button>
                    </div>

                    <div className="hidden lg:flex flex-col gap-1 text-sm font-medium text-text-main">
                        <a href="tel:88007000999" className="flex items-center gap-2 hover:text-primary transition group">
                            <Phone className="h-5 w-5 text-lime-lab fill-current" />
                            <span className="text-lg font-medium">8 (800) 700 09 99</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}