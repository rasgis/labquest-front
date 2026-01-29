'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Clock, Check, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { useCartStore } from "@/stores/useCartStore";
import { Analysis } from "@/types/analysis";
import { cn } from "@/lib/utils";

interface AnalysisActionCardProps {
    analysis: Analysis;
}

export function AnalysisActionCard({ analysis }: AnalysisActionCardProps) {
    const router = useRouter();
    const { items, addItem } = useCartStore();
    const cartItem = items.find((i) => i.id === analysis.id);
    const isInCart = !!cartItem;

    const handleAddToCart = () => {
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
        <div className="space-y-4">
            <div className="bg-bg-lime-light border border-brand-lime rounded-2xl p-6">
                <div className="text-sm text-text-muted mb-1">Стоимость анализа</div>
                <div className="text-3xl font-bold text-text-main mb-3">
                    {analysis.price.toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-sm font-medium text-text-main mb-6">
                    Взятие биоматериала: <span className="font-bold">{analysis.biomaterialPrice || 250} ₽</span>
                </div>

                <div className="flex gap-3">
                    <Button
                        variant="outline"
                        size="sm"
                        className={cn(
                            "flex-1 items-center justify-center gap-2 h-10 text-xs sm:text-sm transition-colors border font-medium px-2",
                            "bg-bg-blue-soft border-brand-blue-secondary text-brand-blue",
                            "hover:bg-bg-blue-soft-hover hover:border-brand-blue hover:text-brand-blue"
                        )}
                    >
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue group-hover:text-primary transition-colors shrink-0" />
                        <span className="whitespace-nowrap">Выезд на дом</span>
                    </Button>

                    <Button
                        variant="lime"
                        size="sm"
                        onClick={handleAddToCart}
                        className="flex-1 items-center justify-center gap-2 font-medium h-10 rounded-lg text-text-main group px-2 text-xs sm:text-sm"
                    >
                        {isInCart ? (
                            <>
                                <Check className="w-5 h-5 text-text-main" />
                                <span>В корзине</span>
                            </>
                        ) : (
                            <>
                                <Image
                                    src="/icons/button-icons/basket.svg"
                                    alt="Корзина"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <span>В корзину</span>
                            </>
                        )}
                    </Button>
                </div>
            </div>

            <Button
                variant="outline"
                className="w-full h-14 rounded-2xl border-primary/20 text-text-main bg-bg-pink-soft hover:bg-primary/5 hover:border-primary/40 font-medium text-base justify-center transition-colors shadow-sm"
            >
                Записаться на прием врача
            </Button>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-white group cursor-pointer hover:transition-colors border border-transparent hover:bg-lime-lab-hover active:bg-lime-lab">
                <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-text-main" />
                    <span className="font-medium text-text-main text-sm">Пример результата</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-muted transition-colors">
                    <span className="group-hover:text-text-main">Скачать файл</span>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-text-main group-hover:bg-transparent">
                        <ArrowRight className="w-3 h-3 text-text-main" />
                    </div>
                </div>
            </div>
        </div>
    );
}