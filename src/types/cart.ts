export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    article?: string; // Артикул анализа
    discount?: number; // Процент скидки
}