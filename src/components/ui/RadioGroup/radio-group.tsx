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
            <div className="relative flex items-center">
                <input
                    type="radio"
                    className="peer h-4 w-4 appearance-none rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    ref={ref}
                    {...props}
                />
                <span className="absolute left-[3px] top-[3px] h-2.5 w-2.5 rounded-full bg-primary opacity-0 transition-opacity peer-checked:opacity-100 pointer-events-none"></span>
            </div>
        );
    }
);
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };