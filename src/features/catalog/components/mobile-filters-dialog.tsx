'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button, Checkbox, Label } from '@/components/ui';

interface MobileFiltersDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: () => void;
}

export function MobileFiltersDialog({
    isOpen,
    onClose,
    onApply
}: MobileFiltersDialogProps): React.ReactElement {
    const [isPregnancy, setIsPregnancy] = useState(false);
    const [isHomeVisit, setIsHomeVisit] = useState(false);

    const handleApply = () => {
        onApply();
        onClose();
    };

    const FilterSelectItem = ({ label }: { label: string }) => (
        <div className="w-full">
            <Button
                variant="ghost"
                className={cn(
                    "w-full h-auto justify-between font-normal hover:bg-white p-4",
                    "flex items-center gap-2 bg-white",
                    "border border-border rounded-lg",
                    "text-text-muted transition-all",
                    "hover:border-primary hover:text-text-main"
                )}
            >
                <span className="truncate">{label}</span>
                <ChevronDown className="w-5 h-5 text-gray-300" />
            </Button>
        </div>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-bg-modal-overlay backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-[380px] bg-white rounded-xl shadow-2xl p-6 flex flex-col gap-6"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-text-main">Фильтры</h2>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={onClose}
                                className="text-text-main hover:bg-bg-blue-soft rounded-md"
                            >
                                <X className="w-6 h-6" />
                            </Button>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 cursor-pointer select-none group">
                                <Checkbox
                                    id="mb-pregnancy"
                                    checked={isPregnancy}
                                    onChange={(e) => setIsPregnancy(e.target.checked)}
                                    activeColor="primary"
                                    className="h-7 w-7 border-pink-300 checked:border-primary bg-white"
                                />
                                <Label
                                    htmlFor="mb-pregnancy"
                                    className="text-[17px] font-normal text-text-muted "
                                >
                                    Беременность
                                </Label>
                            </div>

                            <div className="flex items-center gap-3 cursor-pointer select-none group">
                                <Checkbox
                                    id="mb-home-visit"
                                    checked={isHomeVisit}
                                    onChange={(e) => setIsHomeVisit(e.target.checked)}
                                    activeColor="blue"
                                    className="h-7 w-7  border-brand-blue-secondary checked:border-brand-blue-secondary bg-white"
                                />
                                <Label
                                    htmlFor="mb-home-visit"
                                    className="text-[17px] font-normal text-text-muted cursor-pointer"
                                >
                                    Выезд на дом
                                </Label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <FilterSelectItem label="Пол" />
                            <FilterSelectItem label="Возраст" />
                            <FilterSelectItem label="Системы организма" />
                            <FilterSelectItem label="Болезни" />
                        </div>

                        <div className="mt-2">
                            <Button
                                onClick={handleApply}
                                className={cn(
                                    "w-full h-12 rounded-lg text-brand-blue font-medium text-base transition-colors",
                                    "bg-bg-blue-soft border border-border-blue-light hover:bg-bg-blue-soft-hover"
                                )}
                            >
                                Показать
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
