'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from '@/stores/useUIStore';
import { useEffect } from 'react';
import { MobileMenuActions, MobileMenuPopular, MobileMenuNav } from './index';

export function MobileMenu(): React.ReactElement {
    const { isMobileMenuOpen, closeMobileMenu } = useUIStore();

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-1/2 -translate-x-1/2 w-full max-w-[768px] bottom-0 top-[90px] z-50 bg-white flex flex-col overflow-hidden mt-0 lg:hidden"
                >
                    <MobileMenuActions />
                    <MobileMenuPopular onClose={closeMobileMenu} />
                    <MobileMenuNav onClose={closeMobileMenu} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
