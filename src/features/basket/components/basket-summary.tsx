'use client';

import { useState } from 'react';
import { Button, Checkbox, Input } from '@/components/ui';

interface BasketSummaryProps {
    totalPrice: number;
    itemsCount: number;
    onCheckout: () => void;
}

export function BasketSummary({ totalPrice, itemsCount, onCheckout }: BasketSummaryProps) {
    const [deliveryType, setDeliveryType] = useState<'home' | 'office'>('office');

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            {/* Выбор типа сдачи (Дома или офис) */}
            <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setDeliveryType('home')}>
                    <Checkbox
                        id="home"
                        checked={deliveryType === 'home'}
                        readOnly
                        className="rounded-sm"
                    />
                    <label htmlFor="home" className="text-sm font-bold text-[#333333] cursor-pointer">
                        Сдать на дому
                    </label>
                </div>

                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setDeliveryType('office')}>
                    <Checkbox
                        id="office"
                        checked={deliveryType === 'office'}
                        readOnly
                        className="rounded-sm"
                    />
                    <label htmlFor="office" className="text-sm font-bold text-[#333333] cursor-pointer">
                        Сдать в офисе
                    </label>
                </div>
            </div>

            {/* Блок адреса офиса (показываем только если выбран офис) */}
            {deliveryType === 'office' && (
                <div className="mb-6">
                    <p className="text-xs text-gray-500 mb-2">
                        Выбранный офис: <br />
                        м. Новые Черемушки, ул. Гарибальди
                    </p>
                    <Button variant="primary" size="sm" className="bg-[#314f5e] hover:bg-[#253c48] h-8 text-xs px-4">
                        Изменить офис
                    </Button>
                </div>
            )}

            {/* Промокод */}
            <div className="mb-6">
                <label className="text-sm font-bold text-[#333333] mb-2 block">
                    Введите код купона для скидки:
                </label>
                <div className="flex gap-2">
                    <Input
                        placeholder="Введите промокод"
                        className="bg-[#EBF2F6] border-none text-sm placeholder:text-gray-400"
                    />
                    <Button className="bg-lime-lab hover:bg-lime-lab-hover text-[#333333] font-bold min-w-[50px]">
                        Применить
                    </Button>
                </div>
            </div>

            {/* Расчеты */}
            <div className="space-y-3 mb-6 border-t border-gray-100 pt-4">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-400">Итого без скидок:</span>
                    <span className="text-lg font-bold text-[#333333]">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-400">При оплате на сайте:</span>
                        <span className="bg-[#AA266F] text-white text-xs font-bold px-1 py-0.5 rounded">-5%</span>
                    </div>
                    {/* Имитация скидки (просто для вида пока что) */}
                    <span className="text-lg font-bold text-[#333333]">{(totalPrice * 0.95).toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</span>
                </div>
            </div>

            {/*  Кнопка Оформить */}
            <Button
                className="w-full bg-lime-lab hover:bg-lime-lab-hover text-[#333333] font-bold text-base h-12 rounded-sm shadow-none"
                onClick={onCheckout}
            >
                Оформить заказ
            </Button>
        </div>
    );
}