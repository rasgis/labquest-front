'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

interface SheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    side?: 'left' | 'right';
    className?: string;
}

export function Sheet({
    isOpen,
    onClose,
    children,
    side = 'left',
    className
}: SheetProps) {
    // Блокируем скролл при открытом меню
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const variants = {
        closed: {
            x: side === 'left' ? '-100%' : '100%',
            opacity: 0
        },
        open: {
            x: 0,
            opacity: 1
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />

                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={cn(
                            "fixed top-0 bottom-0 z-50 w-[85%] max-w-[320px] bg-white shadow-xl overflow-y-auto",
                            side === 'left' ? 'left-0' : 'right-0',
                            className
                        )}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-500 hover:text-black z-10"
                        >
                            <X className="h-6 w-6" />
                        </Button>

                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
