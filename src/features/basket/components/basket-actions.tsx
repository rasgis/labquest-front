'use client';

import { ShoppingCart, Printer } from 'lucide-react';
import { useCartStore } from '@/stores/useCartStore';
import { Button } from '@/components/ui';

export function BasketActions() {
    const { clearCart } = useCartStore();

    const handlePrintOrder = () => {
        // открыть PDF или модалку с заказом
        console.log('Печать заказа');
        window.print();
    };

    const handlePrintRules = () => {
        // открыть PDF или модалку с правилами
        console.log('Печать правил подготовки');
        window.print();
    };

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 mt-6 border-t border-border pt-6">

            <Button
                variant="ghost"
                onClick={clearCart}
                className="group h-auto p-0 hover:bg-transparent gap-2 justify-start"
            >
                <ShoppingCart className="w-5 h-5 text-brand-blue stroke-[2] group-hover:text-brand-blue-secondary transition-colors" />
                <span className="font-medium text-sm text-brand-blue border-b border-brand-blue/50 group-hover:border-brand-blue-secondary group-hover:text-brand-blue-secondary transition-all">
                    Очистить корзину
                </span>
            </Button>

            <Button
                variant="ghost"
                onClick={handlePrintOrder}
                className="group h-auto p-0 hover:bg-transparent gap-2 justify-start"
            >
                <Printer className="w-5 h-5 text-brand-blue stroke-[2] group-hover:text-brand-blue-secondary transition-colors" />
                <span className="font-medium text-sm text-brand-blue border-b border-brand-blue/50 group-hover:border-brand-blue-secondary group-hover:text-brand-blue-secondary transition-all">
                    Распечатать заказ
                </span>
            </Button>

            <Button
                variant="ghost"
                onClick={handlePrintRules}
                className="group h-auto p-0 hover:bg-transparent gap-2 justify-start"
            >
                <Printer className="w-5 h-5 text-brand-blue stroke-[2] group-hover:text-brand-blue-secondary transition-colors" />
                <span className="font-medium text-sm text-brand-blue border-b border-brand-blue/50 group-hover:border-brand-blue-secondary group-hover:text-brand-blue-secondary transition-all">
                    Распечатать правила подготовки
                </span>
            </Button>

        </div>
    );
}