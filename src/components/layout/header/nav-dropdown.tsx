'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

interface NavDropdownProps {
    title: string;
    items: { label: string; href: string }[];
    className?: string;
}

export function NavDropdown({ title, items, className }: NavDropdownProps) {
    return (
        <div className="relative group flex items-center h-full">
            <Button
                variant="ghost"
                className={cn(
                    "h-auto p-0 hover:bg-transparent",
                    "flex items-center gap-1 text-xs font-bold text-text-main hover:text-brand-blue-secondary transition-colors py-1",
                    className
                )}
            >
                {title}
                <ChevronDown className="h-3 w-3 text-text-muted group-hover:text-brand-blue-secondary transition-transform duration-200 group-hover:rotate-180" />
            </Button>

            <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-md shadow-xl border border-border overflow-hidden py-1 flex flex-col">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="px-4 py-2 text-xs font-medium text-text-main hover:bg-muted hover:text-brand-blue-secondary transition-colors text-left"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}