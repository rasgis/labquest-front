import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem } from '@/types/cart';


interface CartState {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'quantity'>) => void; // При добавлении quantity не нужен (он равен 1)
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;

    // Getters (вычисляемые значения)
    getTotalPrice: () => number;
    getItemsCount: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (item) => set((state) => {
                const existingItem = state.items.find((i) => i.id === item.id);

                // Если товар уже есть — не добавляем повторно (кол-во всегда 1)
                if (existingItem) {
                    return { items: state.items };
                }

                // Если нет — добавляем новый
                return { items: [...state.items, { ...item, quantity: 1 }] };
            }),

            removeItem: (id) => set((state) => ({
                items: state.items.filter((i) => i.id !== id),
            })),

            updateQuantity: (id, quantity) => set((state) => {
                if (quantity <= 0) {
                    // Если кол-во 0 или меньше, удаляем товар
                    return { items: state.items.filter((i) => i.id !== id) };
                }
                return {
                    items: state.items.map((i) =>
                        i.id === id ? { ...i, quantity } : i
                    ),
                };
            }),

            clearCart: () => set({ items: [] }),

            getTotalPrice: () => {
                return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
            },

            getItemsCount: () => {
                return get().items.reduce((count, item) => count + item.quantity, 0);
            }
        }),
        {
            name: 'labquest-cart-storage', // Данные сохранятся в localStorage
            storage: createJSONStorage(() => localStorage),
        }
    )
);