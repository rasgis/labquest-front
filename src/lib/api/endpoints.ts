// Список всех API эндпоинтов приложения.
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  ANALYSES: '/analyses',
  ORDERS: '/orders',
} as const;
