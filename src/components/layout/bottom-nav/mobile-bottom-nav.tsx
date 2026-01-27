'use client';

import Link from 'next/link';
import { FileText, Activity, MapPin, Calendar } from 'lucide-react';

export function MobileBottomNav(): React.ReactElement {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-lime-lab border-t border-border z-50 safe-area-bottom rounded-t-md">
            <div className="h-16 px-2 flex items-center justify-between">
                <FooterButton icon={FileText} label="Анализы" href="/catalog" />
                <FooterButton icon={MapPin} label="Адреса" href="#" />
                <FooterButton icon={Activity} label="Расшифровка" labelLine2="анализов" href="#" />
                <FooterButton icon={FileText} label="Результаты" labelLine2="анализов" href="#" />
                <FooterButton icon={Calendar} label="Запись" labelLine2="к врачу" href="#" />
            </div>
        </div>
    );
}

function FooterButton({
    icon: Icon,
    label,
    href,
    labelLine2
}: {
    icon: React.ElementType;
    label: string;
    href: string;
    labelLine2?: string;
}): React.ReactElement {
    return (
        <Link
            href={href}
            className="flex flex-col items-center justify-center flex-1 h-full gap-0.5 active:opacity-70 transition-opacity"
        >
            <Icon className="w-5 h-5 text-text-main" />
            <span className="text-[9px] font-bold text-text-main leading-tight text-center">
                {label}
                {labelLine2 && <><br />{labelLine2}</>}
            </span>
        </Link>
    );
}
