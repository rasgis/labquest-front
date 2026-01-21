'use client';

import Link from 'next/link';
import { Sheet } from '@/components/ui/Sheet/sheet';
import { useUIStore } from '@/stores/useUIStore';
import { useCityStore } from '@/stores/useCityStore';
import { Button } from '@/components/ui';
import { User, MapPin, Phone, ChevronRight, FileText, Activity } from 'lucide-react';

export function MobileMenu() {
    const { isMobileMenuOpen, closeMobileMenu } = useUIStore();
    const { currentCity } = useCityStore();

    const cityName = currentCity === 'moskva' ? 'Москва' : currentCity;

    return (
        <Sheet isOpen={isMobileMenuOpen} onClose={closeMobileMenu} side="left">
            <div className="flex flex-col h-full">

                <div className="p-4 border-b border-border flex items-center justify-between">
                    <span className="font-bold text-lg text-text-main">Меню</span>
                </div>

                <div className="bg-bg-soft p-4 space-y-4">
                    <Link href="/auth/login" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
                        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-text-muted group-hover:text-primary transition-colors">
                            <User className="h-6 w-6" />
                        </div>
                        <div>
                            <div className="font-bold text-text-main group-hover:text-primary transition-colors">Личный кабинет</div>
                            <div className="text-xs text-text-muted">Войти или зарегистрироваться</div>
                        </div>
                    </Link>

                    <button className="flex items-center gap-2 text-sm font-medium text-text-main bg-white w-full p-2 rounded-md shadow-sm">
                        <MapPin className="h-4 w-4 text-lime-lab" />
                        <span className="capitalize">{cityName}</span>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto py-2">
                    <nav className="flex flex-col">
                        <MobileLink href="/catalog" onClick={closeMobileMenu}>Анализы и цены</MobileLink>
                        <MobileLink href="#" onClick={closeMobileMenu}>Акции <span className="text-primary ml-2 text-xs font-bold">%</span></MobileLink>
                        <MobileLink href="#" onClick={closeMobileMenu}>Адреса и время работы</MobileLink>
                        <MobileLink href="#" onClick={closeMobileMenu}>Выезд на дом</MobileLink>

                        <div className="h-px bg-border my-2 mx-4" />

                        <MobileLink href="#" onClick={closeMobileMenu}>Врачам</MobileLink>
                        <MobileLink href="#" onClick={closeMobileMenu}>Франчайзинг</MobileLink>
                        <MobileLink href="#" onClick={closeMobileMenu}>О компании</MobileLink>
                    </nav>
                </div>

                <div className="p-4 border-t border-border bg-gray-50 space-y-3">
                    <a href="tel:88007000999" className="flex items-center gap-3 text-text-main font-bold hover:text-primary transition-colors">
                        <Phone className="h-5 w-5 text-lime-lab fill-current" />
                        8 (800) 700 09 99
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="text-xs h-auto py-2 flex-col gap-1 items-start bg-white">
                            <Activity className="h-4 w-4 text-lime-lab" />
                            Расшифровка
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs h-auto py-2 flex-col gap-1 items-start bg-white">
                            <FileText className="h-4 w-4 text-lime-lab" />
                            Результаты
                        </Button>
                    </div>
                </div>

            </div>
        </Sheet>
    );
}

function MobileLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="flex items-center justify-between px-4 py-3 text-sm font-medium text-text-main active:bg-muted hover:text-primary transition-colors"
        >
            <span>{children}</span>
            <ChevronRight className="h-4 w-4 text-text-muted" />
        </Link>
    );
}