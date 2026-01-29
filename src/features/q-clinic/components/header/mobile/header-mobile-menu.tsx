import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../header-constants';
import { MobileNavItem } from './mobile-nav-item';

interface HeaderMobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function HeaderMobileMenu({ isOpen, onClose }: HeaderMobileMenuProps) {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const toggleSubmenu = (name: string) => {
        setExpandedItem(prev => prev === name ? null : name);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-16 md:top-20 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl z-50 overflow-hidden lg:hidden"
                    >
                        <div className="flex flex-col max-h-[80vh] overflow-y-auto">
                            <div className="p-4 space-y-1">
                                {NAV_LINKS.map((link) => (
                                    <MobileNavItem
                                        key={link.name}
                                        item={link}
                                        isExpanded={expandedItem === link.name}
                                        onToggle={() => toggleSubmenu(link.name)}
                                        onClose={onClose}
                                    />
                                ))}
                            </div>

                            <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-4">

                                <Link
                                    href="/"
                                    className="flex items-center justify-center gap-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <span className="text-sm font-medium">Перейти на</span>
                                    <div className="flex items-center gap-2">
                                        <Image src="/icons/icon-192.png" alt="" width={24} height={24} />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold leading-none">ЛабКвест</span>
                                            <span className="text-[8px] uppercase tracking-wider opacity-70">Лаборатория будущего</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}