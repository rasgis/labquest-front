'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from '@/lib/query-client';
import type { ReactNode } from 'react';

export default function QueryProvider({ children }: { children: ReactNode }) {
    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* DevTools появятся только в режиме разработки (npm run dev) */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}