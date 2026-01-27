'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

export function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps): React.ReactElement {
    return (
        <div className="border-0">
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full py-2 text-base font-medium text-text-main active:opacity-70 transition-opacity"
            >
                {title}
                <ChevronRight className={cn("w-5 h-5 text-gray-800 transition-transform", isOpen && "rotate-90")} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pl-4 pb-2 flex flex-col gap-0.5 border-l border-gray-100 ml-1 mt-1">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
