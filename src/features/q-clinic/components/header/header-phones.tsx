import Image from 'next/image';
import { cn } from '@/lib/utils';

export function HeaderPhones() {
    return (
        <div className={cn(
            "flex items-center gap-2 xl:gap-3 transition-all",
            "mx-auto",
            "lg:mx-0"
        )}>
            <div className="flex w-8 h-8 md:w-10 md:h-10 items-center justify-center shrink-0">
                <Image
                    src="/logo/q-clinic/phone.svg"
                    alt="Телефон"
                    width={20}
                    height={20}
                    className="w-4 h-4 md:w-5 md:h-5"
                />
            </div>

            <div className="flex flex-col items-center lg:items-end leading-tight">
                <a href="tel:+74952605912" className="text-xs md:text-sm font-bold text-gray-800 hover:text-brand-green transition-colors whitespace-nowrap">
                    8 (495) 260-59-12
                </a>
                <a href="tel:+78006006776" className="text-xs md:text-sm font-bold text-gray-800 hover:text-brand-green transition-colors whitespace-nowrap">
                    8 (800) 600-67-76
                </a>
            </div>
        </div>
    );
}