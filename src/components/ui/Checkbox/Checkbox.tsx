'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    activeColor?: 'primary' | 'blue';
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, id, activeColor = 'primary', ...props }, ref) => {
        const generatedId = React.useId();
        const inputId = id || generatedId;

        return (
            <div className="flex items-start gap-2 group">
                <div className="relative flex items-center justify-center">
                    <input
                        type="checkbox"
                        id={inputId}
                        ref={ref}
                        className={cn(
                            "peer h-6 w-6 appearance-none rounded-[6px] border bg-white transition-all cursor-pointer",
                            "border-brand-blue-secondary hover:border-primary",
                            activeColor === 'primary'
                                ? "checked:bg-primary checked:border-primary"
                                : "checked:bg-brand-blue-secondary checked:border-brand-blue-secondary",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                            "disabled:cursor-not-allowed disabled:opacity-50",

                            className
                        )}
                        {...props}
                    />
                    <Check
                        className="pointer-events-none absolute h-4 w-4 text-white opacity-0 transition-opacity peer-checked:opacity-100 stroke-[3px]"
                    />
                </div>
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium text-text-muted cursor-pointer select-none leading-none mt-1 group-hover:text-text-main transition-colors"
                    >
                        {label}
                    </label>
                )}
            </div>
        );
    }
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };