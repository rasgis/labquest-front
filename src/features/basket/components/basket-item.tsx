'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { useCartStore } from '@/stores/useCartStore';
import { useCityStore } from '@/stores/useCityStore';
import { CartItem } from '@/types/cart';

interface BasketItemProps {
    item: CartItem;
}

export function BasketItem({ item }: BasketItemProps) {
    const { removeItem } = useCartStore();
    const { currentCity } = useCityStore();

    const basePrice = item.price;
    const finalPrice = item.discount
        ? Math.round(basePrice * (1 - item.discount / 100) * 100) / 100
        : basePrice;



    return (
        <div className="flex flex-col md:flex-row justify-between border-b border-border py-6 last:border-0 gap-4 group">

            <div className="flex flex-col justify-between items-start gap-2 md:max-w-[60%]">
                <div className="text-lg md:text-xl font-medium text-brand-blue leading-snug">
                    <Link
                        href={`/${currentCity}/analysis/${item.id}`}
                        className="hover:text-brand-blue-secondary transition-colors duration-200"
                    >
                        {item.name}
                    </Link>

                    {item.article && (
                        <span className="ml-3 text-sm text-text-muted font-medium whitespace-nowrap">
                            {item.article}
                        </span>
                    )}
                </div>

                <Button
                    onClick={() => removeItem(item.id)}
                    variant="link"
                    size="sm"
                    className="p-0 h-auto text-sm font-medium text-brand-blue hover:text-brand-blue-secondary transition-colors duration-200"
                >
                    удалить
                </Button>
            </div>

            <div className="flex flex-col md:items-end gap-1 mt-1">

                <div className="flex items-center gap-2">
                    <div className="bg-lime-lab text-white px-2 py-1 text-lg md:text-xl font-medium rounded-md whitespace-nowrap leading-none">
                        {finalPrice.toLocaleString('ru-RU')} ₽
                    </div>

                    {item.discount && (
                        <div className="bg-primary text-white px-2 py-1 text-sm font-bold rounded-md leading-none h-[28px] md:h-[32px] flex items-center justify-center">
                            -{item.discount}%
                        </div>
                    )}

                    {item.discount && (
                        <div className="text-[10px] md:text-xm text-primary font-bold leading-tight ml-1 text-left">
                            при оплате <br /> на сайте
                        </div>
                    )}
                </div>

                <div className="text-xs text-text-muted font-medium self-start">
                    <span className="font-semibold text-base text-text-muted-foreground">
                        {basePrice.toLocaleString('ru-RU')} ₽
                    </span>{' '}
                    при оплате в офисе
                </div>
            </div>
        </div>
    );
}