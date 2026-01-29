'use client';

import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import {
    ANALYSIS_CATEGORIES,
    COMPLEX_CATEGORIES
} from '../api/get-analyses';
import { findCategoryBySlug } from '@/lib/find-category';

interface MobileCatalogDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileCatalogDialog({
    isOpen,
    onClose,
}: MobileCatalogDialogProps): React.ReactElement {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = useParams();

    const activeTabRaw = searchParams.get('tab');
    const activeTab = (activeTabRaw === 'complex' ? 'complex' : 'analysis');
    const activeCategorySlug = searchParams.get('category');

    const categories = activeTab === 'analysis' ? ANALYSIS_CATEGORIES : COMPLEX_CATEGORIES;
    const selectedCategory = findCategoryBySlug(categories, activeCategorySlug);

    const handleTabChange = (newTab: 'analysis' | 'complex'): void => {
        const city = (params.city as string) || 'moskva';
        router.push(`/${city}/catalog?tab=${newTab}`);
    };

    const handleCategorySelect = (categorySlug: string): void => {
        const city = (params.city as string) || 'moskva';
        const currentTab = searchParams.get('tab') || 'analysis';

        if (activeCategorySlug === categorySlug) {
            router.push(`/${city}/catalog?tab=${currentTab}`);
        } else {
            router.push(`/${city}/catalog?tab=${currentTab}&category=${categorySlug}`);
        }
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    />

                    <div className="relative w-full max-w-[380px] flex flex-col items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="absolute -top-12 right-0 bg-white text-text-main hover:bg-white/90 rounded-full w-10 h-10 shadow-lg"
                        >
                            <X className="w-6 h-6" />
                        </Button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
                        >
                            <div className="flex text-sm font-medium text-center leading-tight bg-bg-blue-soft border-b border-border">
                                <button
                                    onClick={() => handleTabChange('analysis')}
                                    className={cn(
                                        "flex-1 py-4 px-4 transition-colors",
                                        activeTab === 'analysis'
                                            ? "bg-white text-text-main font-semibold"
                                            : "text-text-main hover:bg-bg-blue-lightest/50"
                                    )}
                                >
                                    Анализы
                                </button>
                                <button
                                    onClick={() => handleTabChange('complex')}
                                    className={cn(
                                        "flex-1 py-4 px-4 transition-colors border-l border-border",
                                        activeTab === 'complex'
                                            ? "bg-white text-text-main font-semibold"
                                            : "text-text-main hover:bg-bg-blue-lightest/50"
                                    )}
                                >
                                    Комплексные
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-3 px-2 flex flex-col gap-0.5">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleCategorySelect(category.slug)}
                                        className={cn(
                                            "w-full flex items-start gap-3 px-4 py-2.5 text-left transition-colors rounded-lg",
                                            "text-text-main text-[15px] leading-snug",
                                            selectedCategory?.id === category.id
                                                ? "bg-bg-blue-soft text-brand-blue font-medium"
                                                : "hover:bg-bg-blue-soft/50"
                                        )}
                                    >
                                        <span className={cn(
                                            "w-2 h-2 rounded-full mt-1.5 shrink-0 transition-colors",
                                            selectedCategory?.id === category.id ? "bg-primary" : "bg-lime-lab"
                                        )} />
                                        <span>{category.name}</span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}