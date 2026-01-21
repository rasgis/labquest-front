import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface City {
    name: string;
    slug: string;
    id: string;
}

interface CityState {
    currentCity: string; // slug города
    cities: City[];      // Список доступных городов
    setCity: (slug: string) => void;
    setCities: (cities: City[]) => void;
}

export const useCityStore = create<CityState>()(
    persist(
        (set) => ({
            currentCity: 'moskva', // Значение по умолчанию
            cities: [],

            setCity: (slug) => {
                set({ currentCity: slug });

                // записываем куку, чтобы Middleware тоже видел город
                if (typeof document !== 'undefined') {
                    // max-age=1 год, SameSite=Lax (безопасно)
                    document.cookie = `city=${slug}; path=/; max-age=31536000; SameSite=Lax`;
                }
            },

            setCities: (cities) => set({ cities }),
        }),
        {
            name: 'labquest-city-storage', // Имя ключа в localStorage
            storage: createJSONStorage(() => localStorage),
            // Мы сохраняем только currentCity
            partialize: (state) => ({ currentCity: state.currentCity }),
        }
    )
);