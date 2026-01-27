'use client';

import { cn } from '@/lib/utils';

interface CheckoutStepsProps {
    currentStep: 1 | 2 | 3;
}

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
    const steps = [
        { id: 1, name: 'Мой заказ' },
        { id: 2, name: 'Оформление заказа' },
        { id: 3, name: 'Подтверждение заказа' },
    ];

    return (
        <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm md:text-base font-medium text-gray-400">
                {steps.map((step) => (
                    <span
                        key={step.id}
                        className={cn(
                            "flex-1 text-center first:text-left last:text-right text-lg",
                            currentStep >= step.id ? "text-brand-blue" : "text-muted-foreground"
                        )}
                    >
                        {step.name}
                    </span>
                ))}
            </div>

            <div className="relative h-4 w-full bg-gray-200 rounded-none overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full bg-lime-lab transition-all duration-300 ease-in-out"
                    style={{ width: `${(currentStep / steps.length) * 100}%` }}
                />
            </div>
        </div>
    );
}