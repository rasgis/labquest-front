export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    article?: string; // Артикул может пригодиться в будущем
}