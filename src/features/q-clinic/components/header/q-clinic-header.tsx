'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { HeaderLogo } from './header-logo';
import { HeaderPhones } from './header-phones';
import { HeaderDesktopNav } from './header-desktop-nav';
import { HeaderMobileMenu } from './mobile/header-mobile-menu';

export function QClinicHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all">
            <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between relative bg-white z-50">
                <HeaderLogo />
                <HeaderDesktopNav />
                <HeaderPhones />
                <div className="hidden lg:flex items-center gap-6 ml-6">
                    <div className="h-8 w-px bg-gray-200"></div>
                    <Link href="/" className="flex shrink-0 items-center gap-2 group">
                        <Image
                            src="/icons/icon-192.png"
                            alt="LabQuest"
                            width={42}
                            height={42}
                            className="h-8 w-8 md:h-9 md:w-9 object-contain group-hover:scale-110 transition-transform"
                        />
                        <div className="hidden 2xl:flex flex-col">
                            <span className="text-[16px] font-bold text-gray-800 leading-none tracking-tight group-hover:text-brand-green transition-colors">ЛабКвест</span>
                            <span className="text-[8px] font-medium text-gray-400 uppercase tracking-[0.1em] leading-none mt-1">
                                Лаборатория будущего
                            </span>
                        </div>
                    </Link>
                </div>

                <button
                    className="lg:hidden p-1.5 text-gray-700 hover:text-brand-green hover:bg-gray-50 rounded-md transition-colors z-20 ml-auto"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            <HeaderMobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </header>
    );
}