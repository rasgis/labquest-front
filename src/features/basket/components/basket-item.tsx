'use client';

import { Button } from '@/components/ui';
import { useCartStore } from '@/stores/useCartStore';
import { CartItem } from '@/types/cart';

interface BasketItemProps {
    item: CartItem;
}

export function BasketItem({ item }: BasketItemProps) {
    const { removeItem } = useCartStore();

    return (
        <div className="flex flex-col border-b border-gray-200 py-4 last:border-0 sm:flex-row sm:justify-between sm:items-start">
            {/* Левая часть: Название и Код */}
            <div className="flex-1 pr-4">
                <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-base font-bold text-[#333333]">
                        {item.name}
                    </h3>
                    {/* Когда появится артикул, выводим его. Пока что ID как заглушку */}
                    <span className="text-xs text-gray-400 font-normal">
                        {item.article || item.id}
                    </span>
                </div>

                {/* Кнопка удалить */}
                <Button
                    onClick={() => removeItem(item.id)}
                    variant="ghost"
                    size="sm"
                    className="mt-2 text-xs font-medium text-[#008D95] hover:text-red-500 transition-colors"
                >
                    удалить
                </Button>
            </div>

            {/* Правая часть: Цена */}
            <div className="mt-2 flex items-center justify-between sm:mt-0 sm:block sm:text-right">
                <div className="text-lg font-bold text-[#333333] whitespace-nowrap">
                    {item.price.toLocaleString('ru-RU')} ₽
                </div>
            </div>
        </div>
    );
}