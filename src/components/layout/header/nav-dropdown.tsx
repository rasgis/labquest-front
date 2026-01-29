'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavDropdownItem {
    label: string;
    href: string;
}

interface NavDropdownProps {
    title: string;
    href?: string;
    items: NavDropdownItem[];
    className?: string;
    variant?: 'default' | 'primary';
}

export function NavDropdown({
    title,
    href = '#',
    items,
    className,
    variant = 'default'
}: NavDropdownProps) {

    const styles = {
        default: {
            text: "text-text-main hover:text-brand-blue-secondary",
            icon: "text-gray-400 group-hover:text-brand-blue-secondary",
            dropdownItem: "text-text-main hover:bg-gray-50 hover:text-brand-blue-secondary"
        },
        primary: {
            text: "text-text-main hover:text-primary",
            icon: "text-gray-400 group-hover:text-primary",
            dropdownItem: "text-text-main hover:bg-primary/5 hover:text-primary"
        }
    };

    const currentStyle = styles[variant];

    return (
        <div className={cn("relative group h-full flex items-center", className)}>
            <Link
                href={href}
                className={cn(
                    "flex items-center gap-1 transition-colors whitespace-nowrap py-4",
                    currentStyle.text
                )}
            >
                {title}
                <ChevronDown
                    className={cn(
                        "w-3 h-3 xl:w-4 xl:h-4 transition-all duration-200 group-hover:rotate-180",
                        currentStyle.icon
                    )}
                />
            </Link>

            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden min-w-[200px] py-2 flex flex-col">
                    {items.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "px-5 py-2.5 text-sm transition-colors whitespace-nowrap text-left",
                                currentStyle.dropdownItem
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}