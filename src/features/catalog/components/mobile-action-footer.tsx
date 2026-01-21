'use client';

import { Button } from "@/components/ui";
import { useCartStore } from "@/stores/useCartStore";
import { Analysis } from "@/types/analysis";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface MobileActionFooterProps {
    analysis: Analysis;
}

export function MobileActionFooter({ analysis }: MobileActionFooterProps) {
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
                article: analysis.article
            });
        }
    };

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 pb-safe">
            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                    <span className="text-xl font-bold text-text-main">
                        {analysis.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <span className="text-[10px] text-text-muted">
                        + взятие биоматериала
                    </span>
                </div>

                <Button
                    onClick={handleAddToCart}
                    size="lg"
                    variant="lime"
                    className={cn(
                        "flex-1 font-bold text-sm h-11"
                    )}
                >
                    {isInCart ? "В корзине" : "В корзину"}
                </Button>
            </div>
        </div>
    );
}