'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

const RadioGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return <div className={cn("grid gap-2", className)} {...props} ref={ref} />;
    }
);
RadioGroup.displayName = "RadioGroup";

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
    ({ className, ...props }, ref) => {
        return (
            <div className="relative flex items-center justify-center h-4 w-4">
                <input
                    type="radio"
                    className={cn(
                        "peer h-4 w-4 appearance-none rounded-full border border-brand-blue-secondary text-brand-blue-secondary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-blue-secondary disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <span className="absolute h-2 w-2 rounded-full bg-brand-blue-secondary opacity-0 transition-opacity peer-checked:opacity-100 pointer-events-none"></span>
            </div>
        );
    }
);
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };