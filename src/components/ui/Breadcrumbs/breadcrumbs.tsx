'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
    label: React.ReactNode;
    href?: string;
    active?: boolean;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    if (!items?.length) return null;

    return (
        <nav
            aria-label="Breadcrumb"
            className={cn("hidden md:flex mb-6 overflow-x-auto whitespace-nowrap", className)}
        >
            <ol className="flex items-center gap-2 text-xs md:text-sm text-text-muted">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="flex items-center gap-2">
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-primary transition-colors hover:underline"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span
                                    className={cn(isLast && "text-text-main font-medium")}
                                    aria-current={isLast ? "page" : undefined}
                                >
                                    {item.label}
                                </span>
                            )}

                            {!isLast && (
                                <ChevronRight className="w-4 h-4 text-text-muted/60" />
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}