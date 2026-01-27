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
                    className="fixed inset-x-0 bottom-16 top-[93px] z-60 bg-white flex flex-col overflow-hidden mt-1 md:hidden"
                >
                    <MobileMenuActions />
                    <MobileMenuPopular onClose={closeMobileMenu} />
                    <MobileMenuNav onClose={closeMobileMenu} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
