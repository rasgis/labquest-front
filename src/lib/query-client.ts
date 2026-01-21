import { QueryClient, isServer } from '@tanstack/react-query';

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                // Данные считаются свежими 1 минуту (не делаем повторных запросов при переключении вкладок)
                staleTime: 60 * 1000,
                // Если произошла ошибка
                retry: (failureCount, error: any) => {
                    // Не повторять запрос, если 404 (нет данных) или 401/403 (ошибка доступа)
                    if (error?.response?.status === 404 || error?.response?.status === 401 || error?.response?.status === 403) {
                        return false;
                    }
                    // Иначе пробуем еще 1 раз (например, если сеть мигнула)
                    return failureCount < 1;
                },
            },
        },
    });
}

// Singleton паттерн для React Query в Next.js App Router
let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
    if (isServer) {
        // На сервере всегда создаем новый клиент
        return makeQueryClient();
    } else {
        // На клиенте используем один и тот же, чтобы кэш работал
        if (!browserQueryClient) browserQueryClient = makeQueryClient();
        return browserQueryClient;
    }
}