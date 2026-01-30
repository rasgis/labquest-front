import axios, { AxiosError, AxiosResponse, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { env } from '@/env';

// 1. Создаем инстанс
const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

function getCsrfToken(): string | null {
  if (typeof document === 'undefined') return null;
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

// Request Interceptor (CSRF)
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  if (['post', 'put', 'delete', 'patch'].includes(config.method?.toLowerCase() || '')) {
    const csrfToken = getCsrfToken();
    if (csrfToken) {
      config.headers['X-XSRF-TOKEN'] = csrfToken;
    }
  }
  return config;
});

// Response Interceptor (Auth Errors)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError): Promise<never> => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && originalRequest) {
      if (typeof window !== 'undefined') {
        // window.location.href = '/auth/login'; // когда будет страница логина
        console.warn('Unauthorized: Redirect to login');
      }
    }
    if (error.response?.status === 403) {
      console.error('Доступ запрещен (403)');
    }
    return Promise.reject(error);
  }
);


// Расширяем стандартный конфиг axios, добавляя туда city
interface CustomRequestOptions extends AxiosRequestConfig {
  city?: string;
}

// Эта обертка решает две задачи:
// 1. Вытаскивает 'city' из опций и кладет его в заголовок 'X-City-ID'
// 2. Сразу возвращает response.data

export const apiClient = {
  get: <T>(url: string, options: CustomRequestOptions = {}): Promise<T> => {
    const { city, headers, ...rest } = options;

    return axiosInstance.get<T>(url, {
      ...rest,
      headers: {
        ...headers,
        ...(city && { 'X-City-ID': city }), // здесь добавляем заголовок, если есть город
      },
    }).then(response => response.data);
  },

  post: <T>(url: string, data?: any, options: CustomRequestOptions = {}): Promise<T> => {
    const { city, headers, ...rest } = options;

    return axiosInstance.post<T>(url, data, {
      ...rest,
      headers: {
        ...headers,
        ...(city && { 'X-City-ID': city }),
      },
    }).then(response => response.data);
  },

  put: <T>(url: string, data?: any, options: CustomRequestOptions = {}): Promise<T> => {
    const { city, headers, ...rest } = options;
    return axiosInstance.put<T>(url, data, {
      ...rest,
      headers: {
        ...headers,
        ...(city && { 'X-City-ID': city }),
      },
    }).then(response => response.data);
  },

  delete: <T>(url: string, options: CustomRequestOptions = {}): Promise<T> => {
    const { city, headers, ...rest } = options;
    return axiosInstance.delete<T>(url, {
      ...rest,
      headers: {
        ...headers,
        ...(city && { 'X-City-ID': city }),
      },
    }).then(response => response.data);
  },
};

export { axiosInstance };