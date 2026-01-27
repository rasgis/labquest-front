'use client';

import Link from 'next/link';
import React from 'react';

interface MobileLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export function MobileLink({ href, children, onClick }: MobileLinkProps): React.ReactElement {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="flex items-center justify-between py-2 text-base font-medium text-text-main active:bg-muted transition-colors"
        >
            <span>{children}</span>
        </Link>
    );
}
