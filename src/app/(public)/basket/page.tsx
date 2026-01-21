'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { useCartStore } from '@/stores/useCartStore';
import { BasketItem, BasketSummary, CheckoutSteps, CheckoutForm, OrderConfirmation } from '@/features/basket/components';

export default function BasketPage() {
    const { items, getTotalPrice, clearCart } = useCartStore();
    const [isMounted, setIsMounted] = useState(false);
    const [step, setStep] = useState<1 | 2 | 3>(1);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    // Если корзина пуста и мы НЕ на шаге 3 (на шаге 3 корзина может быть очищена)
    const isEmpty = items.length === 0;
    if (isEmpty && step !== 3) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-3xl font-bold mb-4">Корзина пуста</h1>
                <Button asChild className="bg-lime-lab text-black hover:bg-lime-lab-hover">
                    <Link href="/">Вернуться в каталог</Link>
                </Button>
            </div>
        );
    }

    // Заголовок страницы
    const getTitle = () => {
        if (step === 1) return "Корзина";
        if (step === 2) return "Оформление заказа";
        return "Подтверждение заказа";
    }

    const handleCreateOrder = () => {
        // Здесь была бы отправка на бэкенд
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(3);
        clearCart();
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {step !== 3 && ( // На 3 шаге заголовок уже есть внутри компонента в другом стиле
                <h1 className="text-3xl font-bold text-[#333333] mb-6">{getTitle()}</h1>
            )}

            {/* Прогресс бар */}
            <CheckoutSteps currentStep={step} />

            {/* ШАГ 1: КОРЗИНА */}
            {step === 1 && (
                <div className="grid gap-8 lg:grid-cols-12 mt-8 animate-in fade-in slide-in-from-left-4 duration-500">
                    <div className="lg:col-span-7">
                        <div className="border-t-2 border-primary pt-4">
                            {items.map((item) => (
                                <BasketItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <BasketSummary
                            totalPrice={getTotalPrice()}
                            itemsCount={items.length}
                            onCheckout={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                setStep(2);
                            }}
                        />
                    </div>
                </div>
            )}

            {/* ШАГ 2: ОФОРМЛЕНИЕ */}
            {step === 2 && (
                <CheckoutForm onNext={handleCreateOrder} />
            )}

            {/* ШАГ 3: ПОДТВЕРЖДЕНИЕ */}
            {step === 3 && (
                <OrderConfirmation />
            )}

        </div>
    );
}