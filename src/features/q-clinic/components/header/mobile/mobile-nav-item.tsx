import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../header-constants';
import { Button } from '@/components/ui/Button/Button';

interface MobileNavItemProps {
    item: NavItem;
    isExpanded: boolean;
    onToggle: () => void;
    onClose: () => void;
}

export function MobileNavItem({ item, isExpanded, onToggle, onClose }: MobileNavItemProps) {
    if (item.subItems) {
        return (
            <div className="flex flex-col">
                <Button
                    variant="ghost"
                    onClick={onToggle}
                    className={cn(
                        "flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded-xl transition-colors text-left",
                        isExpanded
                            ? "text-primary hover:bg-gray-100"
                            : "text-gray-800 hover:text-primary"
                    )}
                >
                    <span className="flex items-center gap-3">
                        {item.icon && <item.icon className="w-5 h-5" />}
                        {item.name}
                    </span>
                    <ChevronDown
                        className={cn(
                            "w-5 h-5 text-gray-400 transition-transform duration-300",
                            isExpanded && "rotate-180 text-primary"
                        )}
                    />
                </Button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <div className="flex flex-col pl-4 pr-4 pb-2 space-y-1 rounded-b-xl">
                                {item.subItems.map(sub => (
                                    <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className="block pl-8 py-2.5 text-base text-gray-600 hover:text-primary  transition-all"
                                        onClick={onClose}
                                    >
                                        {sub.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <Link
            href={item.href}
            className={cn(
                "flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-xl transition-colors",
                item.icon
                    ? "text-primary mb-2 hover:bg-gray-100"
                    : "text-gray-800 hover:bg-gray-100 hover:text-primary "
            )}
            onClick={onClose}
        >
            {item.icon && <item.icon className="w-5 h-5" />}
            {item.name}
        </Link>
    );
}