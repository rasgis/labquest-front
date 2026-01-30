import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm', // малиновый
        blue: 'bg-brand-blue text-white hover:bg-brand-blue-secondary shadow-sm', // синий
        lime: 'bg-lime-lab text-lime-lab-foreground hover:shadow-brand-purple shadow-sm font-bold transition-shadow duration-300', // лайм
        destructive: 'bg-destructive text-destructive-foreground hover:bg-red-700 shadow-sm', // красный
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground', // контурный
        secondary: 'bg-muted text-gray-900 hover:bg-gray-200', // вторичный
        ghost: 'hover:bg-muted hover:text-gray-900', // прозрачный
        link: 'text-primary underline-offset-4 hover:underline', // ссылка
        hero: 'bg-white text-lime-lab-foreground font-bold border-2 border-transparent hover:border-lime-lab hover:shadow-md hover:bg-white transition-all duration-300 active:scale-95 shadow-sm', // белая кнопка
      },
      size: {
        default: 'h-11 px-6 py-2', // по умолчанию
        sm: 'h-9 rounded-md px-3', // маленький
        lg: 'h-12 rounded-md px-8 text-base', // большой
        icon: 'h-10 w-10', // иконка
        hero: 'h-[52px] px-12 text-base rounded-full', // блок hero
      },
    },
    defaultVariants: {
      variant: 'blue',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading = false, children, ...props }, ref): React.ReactElement => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };