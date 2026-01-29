'use client';

import Link from "next/link";
import Image from "next/image";
import { Clock, Check } from "lucide-react";
import { Analysis } from "@/types/analysis";
import { useCartStore } from "@/stores/useCartStore";
import { useCityStore } from "@/stores/useCityStore";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface AnalysisCardProps {
    analysis: Analysis;
}

export function AnalysisCard({ analysis }: AnalysisCardProps): React.ReactElement {
    const { addItem, items } = useCartStore();
    const { currentCity } = useCityStore();
    const router = useRouter();

    const isInCart = items.some(item => item.id === analysis.id);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();

        if (isInCart) {
            router.push('/basket');
        } else {
            addItem({
                id: analysis.id,
                name: analysis.name,
                price: analysis.price,
                article: analysis.article,
            });
        }
    };

    return (
        <div className="bg-white rounded-2xl border border-border p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">

                <div className="flex-1 flex flex-col">

                    <div className="flex flex-col mb-4">

                        <div className="order-2 md:order-1 text-sm text-text-muted mt-1 md:mt-0 mb-0 md:mb-2 font-normal">
                            № {analysis.article}
                        </div>

                        <Link
                            href={`/${currentCity}/analysis/${analysis.id}`}
                            className="order-1 md:order-2 block group"
                        >
                            <h3 className="text-lg md:text-xl font-medium text-text-main group-hover:text-primary transition-colors leading-tight">
                                {analysis.name}
                            </h3>
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 mt-auto">
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl md:text-2xl font-medium text-text-brand">
                                {analysis.price.toLocaleString('ru-RU')} ₽
                            </span>
                        </div>
                        <div className="text-xs font-medium text-text-brand">
                            Взятие биоматериала: {analysis.biomaterialPrice} ₽
                        </div>
                    </div>
                </div>

                <div className="shrink-0 flex flex-row md:flex-col gap-3 w-full md:w-[200px] mt-2 md:mt-0">
                    <Button
                        variant="outline"
                        size="sm"
                        className={cn(
                            "flex-1 md:flex-none w-full justify-center gap-2 md:gap-3 h-10 text-sm transition-colors border font-medium",
                            "bg-bg-blue-soft border-brand-blue-secondary text-brand-blue",
                            "hover:bg-bg-blue-soft-hover hover:border-brand-blue hover:text-brand-blue"
                        )}
                    >
                        <Clock className="w-5 h-5 text-brand-blue group-hover:text-primary transition-colors" />
                        <span className="whitespace-nowrap">Выезд на дом</span>
                    </Button>

                    <Button
                        variant="lime"
                        size="sm"
                        onClick={handleAddToCart}
                        className={cn(
                            "flex-1 md:flex-none w-full justify-center gap-2 font-medium h-10 rounded-lg text-text-main group"
                        )}
                    >
                        {isInCart ? (
                            <Check className="w-5 h-5 text-text-main" />
                        ) : (
                            <Image
                                src="/icons/button-icons/basket.svg"
                                alt="Корзина"
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        )}


                        {isInCart ? (
                            <>В корзине</>
                        ) : (
                            <>

                                В корзину
                            </>
                        )}
                    </Button>
                </div>

            </div>
        </div>
    );
}