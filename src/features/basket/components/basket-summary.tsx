'use client';

import { useState } from 'react';
import { Button, Input, Checkbox } from '@/components/ui';
import { useCartStore } from '@/stores/useCartStore';
import { cn } from '@/lib/utils';

interface BasketSummaryProps {
    onCheckout: () => void;
}

export function BasketSummary({ onCheckout }: BasketSummaryProps) {
    const [deliveryType, setDeliveryType] = useState<'home' | 'office'>('home');
    const { items } = useCartStore();
    const totalBasePrice = items.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
    const totalOnlinePrice = items.reduce((acc, item) => {
        const base = item.price;
        const price = item.discount
            ? Math.round(base * (1 - item.discount / 100) * 100) / 100
            : base;
        return acc + price;
    }, 0);

    return (
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-6 mb-4">

                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => setDeliveryType('home')}
                >
                    <Checkbox
                        checked={deliveryType === 'home'}
                        readOnly
                        className="w-5 h-5 rounded-[4px] border-gray-300 checked:bg-brand-blue-secondary checked:border-brand-blue-secondary group-hover:border-brand-blue-secondary"
                    />
                    <span className={cn(
                        "text-base select-none transition-colors",
                        deliveryType === 'home' ? "font-medium text-brand-blue" : "font-medium text-text-main"
                    )}>
                        Сдать на дому
                    </span>
                </div>

                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => setDeliveryType('office')}
                >
                    <Checkbox
                        checked={deliveryType === 'office'}
                        readOnly
                        className="w-5 h-5 rounded-[4px] border-gray-300 checked:bg-brand-blue-secondary checked:border-brand-blue-secondary group-hover:border-brand-blue-secondary"
                    />
                    <span className={cn(
                        "text-base select-none transition-colors",
                        deliveryType === 'office' ? "font-medium text-brand-blue" : "font-medium text-text-main"
                    )}>
                        Сдать в офисе
                    </span>
                </div>
            </div>

            <div className="mb-6 min-h-[40px]">
                {deliveryType === 'home' ? (
                    <p className="text-sm text-text-main leading-snug">
                        После оформления заказа, наш оператор свяжется с вами и уточнит адрес
                    </p>
                ) : (
                    <Button
                        className="bg-brand-blue hover:bg-brand-blue-accent h-9 text-xm px-4 font-medium rounded-md text-white transition-colors"
                    >
                        Изменить офис
                    </Button>
                )}
            </div>

            <div className="border-b border-border pb-4">
                <label className="text-xl font-medium text-text-main mb-2 block">
                    Введите код купона для скидки:
                </label>
                <div className="flex gap-2">
                    <Input
                        placeholder="Введите код промокода"
                        className="bg-bg-input border-none text-sm placeholder:text-muted-foreground h-10 w-60 rounded-lg focus-visible:ring-1 focus-visible:ring-brand-blue"
                    />
                    <Button
                        className="bg-lime-lab hover:bg-lime-lab-hover text-brand-blue font-bold w-12 h-10 rounded-lg p-0 shrink-0 transition-colors"
                    >
                        ОК
                    </Button>
                </div>
            </div>

            <div className="pt-4 mb-6 space-y-3">
                <div className="flex justify-between items-baseline border-b border-border pb-4">
                    <span className="text-xl font-medium text-text-muted">Итого без скидок:</span>
                    <span className="text-xl font-bold text-text-main">
                        {totalBasePrice.toLocaleString('ru-RU')} ₽
                    </span>
                </div>

                <div className="flex justify-between items-baseline border-b border-border pb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-medium text-text-muted">При оплате на сайте:</span>
                        {totalOnlinePrice < totalBasePrice && (
                            <span className="bg-primary text-white text-xs font-bold px-1.5 py-0.5 rounded-[4px]">
                                -5%
                            </span>
                        )}
                    </div>
                    <span className="text-xl font-bold text-text-main">
                        {totalOnlinePrice.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₽
                    </span>
                </div>
            </div>

            <Button
                className="w-full bg-lime-lab hover:bg-lime-lab-hover text-brand-blue font-medium text-base h-12 rounded-lg shadow-none transition-colors"
                onClick={onCheckout}
            >
                Оформить заказ
            </Button>
        </div>
    );
}