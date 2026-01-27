'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { CATEGORIES, CategoryId } from '../lib/catalog-constants';

interface MobileCatalogDialogProps {
    isOpen: boolean;
    onClose: () => void;
    selectedCategory: CategoryId | null;
    onCategorySelect: (id: CategoryId | null) => void;
}

export function MobileCatalogDialog({
    isOpen,
    onClose,
    selectedCategory,
    onCategorySelect
}: MobileCatalogDialogProps): React.ReactElement {
    const [activeTab, setActiveTab] = useState<'analysis' | 'complex'>('analysis');

    const handleSelect = (id: CategoryId) => {
        onCategorySelect(id);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Оверлей */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-bg-modal-overlay backdrop-blur-sm"
                    />

                    {/* Контейнер модального окна */}
                    <div className="relative w-full max-w-[380px] flex flex-col items-center">
                        {/* Кнопка закрытия */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="absolute -top-12 right-0 bg-white text-text-main hover:bg-white/90 rounded-full w-10 h-10 shadow-lg"
                        >
                            <X className="w-6 h-6" />
                        </Button>

                        {/* Карточка контента */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="w-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
                        >
                            {/* Табы */}
                            <div className="flex text-sl font-medium text-center leading-tight bg-bg-blue-soft">
                                <button
                                    onClick={() => setActiveTab('analysis')}
                                    className={cn(
                                        "flex-1 py-4 px-4 transition-colors",
                                        activeTab === 'analysis'
                                            ? "bg-white text-text-main"
                                            : "text-text-main hover:bg-bg-blue-lightest/50"
                                    )}
                                >
                                    Анализы
                                </button>
                                <button
                                    onClick={() => setActiveTab('complex')}
                                    className={cn(
                                        "flex-1 py-4 px-4 transition-colors",
                                        activeTab === 'complex'
                                            ? "bg-white text-text-main border-l border-border"
                                            : "text-text-main border-l border-border hover:bg-bg-blue-lightest/50"
                                    )}
                                >
                                    Комплексные<br />исследования
                                </button>
                            </div>

                            {/* Список категорий */}
                            <div className="flex-1 overflow-y-auto py-3 px-2 flex flex-col gap-0.5 scrollbar-thin">
                                {CATEGORIES.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleSelect(category.id)}
                                        className={cn(
                                            "w-full flex items-start gap-3 px-4 py-2.5 text-left transition-colors rounded-lg",
                                            "text-text-main text-[15px] leading-snug",
                                            selectedCategory === category.id
                                                ? "bg-bg-blue-soft text-brand-blue font-medium"
                                                : "hover:bg-bg-blue-soft/50"
                                        )}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-lime-lab mt-1.5 shrink-0" />
                                        <span>{category.label}</span>
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
