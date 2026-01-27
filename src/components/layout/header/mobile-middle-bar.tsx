'use client';

import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui';
import { useUIStore } from '@/stores/useUIStore';

export function MobileMiddleBar(): React.ReactElement {
    const { toggleMobileMenu } = useUIStore();
    const isMobileMenuOpen = useUIStore((state) => state.isMobileMenuOpen);

    return (
        <div className="flex items-center justify-between px-4 py-3 gap-1 border-b border-gray-200">
            <div className="flex items-center gap-2">
                <Button
                    onClick={toggleMobileMenu}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-text-main hover:bg-transparent -ml-2 shrink-0"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-7 w-7" />
                    ) : (
                        <Menu className="h-7 w-7" />
                    )}
                </Button>

                <Link href="/" className="shrink-0 flex flex-col group active:opacity-70 transition-opacity">
                    <span className="text-[17px] font-bold text-text-main-dark leading-[0.8] tracking-tight">ЛабКвест</span>
                    <div className="flex items-center gap-1 mt-1">
                        <span className="text-[6px] font-medium text-muted-foreground uppercase tracking-[0.1em] leading-none">
                            Лаборатория будущего
                        </span>
                        <div className="w-1.5 h-1.5 bg-brand-lime shrink-0" />
                    </div>
                </Link>
            </div>

            <div className="flex items-center gap-2">
                <div className="relative">
                    <Link href="tel:88007000999">
                        <Button
                            variant="lime"
                            size="sm"
                            className="h-7 px-3 text-[10px] rounded-lg font-bold shadow-none text-text-main-dark"
                        >
                            Горячая линия
                        </Button>
                    </Link>
                    <div className="absolute -bottom-2 right-0 bg-bg-blue-accent-soft text-[8px] font-bold text-brand-blue-accent-dark px-1.5 py-0.5 rounded-md whitespace-nowrap z-10 pointer-events-none shadow-sm">
                        по ОРВИ
                    </div>
                </div>

                <a href="tel:88007000999" className="text-text-main-dark flex items-center gap-1 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4 text-brand-lime fill-current" />
                    <span className="text-[10px] font-bold whitespace-nowrap hidden min-[380px]:block">8 (800) 700 09 99</span>
                </a>
            </div>
        </div>
    );
}
