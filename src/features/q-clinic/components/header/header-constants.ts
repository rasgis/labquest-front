import { User, type LucideIcon } from 'lucide-react';

export type NavItem = {
    name: string;
    href: string;
    subItems?: { name: string; href: string }[];
    icon?: LucideIcon;
};

export const NAV_LINKS: NavItem[] = [
    { name: 'Адреса', href: '#addresses' },
    { name: 'Врачи', href: '#doctors' },
    { name: 'УЗИ', href: '#ultrasound' },
    { name: 'ЭКГ', href: '#ecg' },
    { name: 'Капельницы', href: '#drops' },
    { name: 'О клинике', href: '#about' },
    {
        name: 'Франшизы',
        href: '#franchises',
        subItems: [
            { name: 'Франшиза Q-капельницы', href: '#q-drops' },
            { name: 'Франшиза ЛабКвест и Q-клиника', href: '#labquest' },
        ]
    },
    { name: 'Кабинет', href: '#cabinet', icon: User },
];