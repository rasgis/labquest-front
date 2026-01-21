import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { env } from '@/env';

// Создаем инстанс
const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // разрешает отправку HttpOnly cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// Хелпер для получения CSRF токена из куки (не HttpOnly)
// бэкенд кладет CSRF токен в куку 'XSRF-TOKEN' или 'csrf_token'
// function getCsrfToken() {
//   if (typeof document === 'undefined') return null;
//   const match = document.cookie.match(new RegExp('(^| )XSRF-TOKEN=([^;]+)'));
//   return match ? decodeURIComponent(match[2]) : null;
// }

// Пока не знаю что будет отдавать бэк, перестрахуемся циклами проверок чтобы не было ошибок
function getCsrfToken(): string | null {
  if (typeof document === 'undefined') return null;

  // Ищем куку с именем XSRF-TOKEN
  const name = 'XSRF-TOKEN=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i] || '';
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

// 2. Request Interceptor (Добавляем CSRF токен)
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  // Для мутирующих запросов добавляем CSRF защиту
  if (['post', 'put', 'delete', 'patch'].includes(config.method?.toLowerCase() || '')) {
    const csrfToken = getCsrfToken();
    if (csrfToken) {
      config.headers['X-XSRF-TOKEN'] = csrfToken;
    }
  }
  return config;
});

// 3. Response Interceptor (Обработка ошибок авторизации)
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError): Promise<never> => {
    const originalRequest = error.config;

    // Ошибка 401 (Unauthorized) - истек токен
    if (error.response?.status === 401 && originalRequest) {
      // Здесь позже будем обновлять токен, если API поддерживает refresh endpoint
      // Для начала просто делаем редирект на логин, чтобы не усложнять 
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/login';
      }
    }

    // Ошибка 403 (Forbidden) - нет прав
    if (error.response?.status === 403) {
      console.error('Доступ запрещен (403)');
      // потом будет редирект на /403
    }

    return Promise.reject(error);
  }
);

export default apiClient;