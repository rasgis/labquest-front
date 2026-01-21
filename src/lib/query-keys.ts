export const queryKeys = {
    // Ключи для городов
    cities: {
        all: ['cities'] as const,
    },

    // Ключи для анализов
    analyses: {
        all: ['analyses'] as const,
        lists: () => [...queryKeys.analyses.all, 'list'] as const,
        // Конкретный список с фильтрами (город, категория, поиск)
        list: (filters: Record<string, unknown>) => [...queryKeys.analyses.lists(), { ...filters }] as const,
        details: () => [...queryKeys.analyses.all, 'detail'] as const,
        // Детальная страница анализа
        detail: (id: string) => [...queryKeys.analyses.details(), id] as const,
    },

    // Ключи для пользователя (ЛК)
    user: {
        all: ['user'] as const,
        profile: () => [...queryKeys.user.all, 'profile'] as const,
        orders: () => [...queryKeys.user.all, 'orders'] as const,
        order: (id: string) => [...queryKeys.user.orders(), id] as const,
        results: () => [...queryKeys.user.all, 'results'] as const,
        result: (id: string) => [...queryKeys.user.results(), id] as const,
    },
};