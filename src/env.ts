import { z } from 'zod';

const envSchema = z.object({
  // Публичные переменные (доступны в браузере)
  NEXT_PUBLIC_API_URL: z.url(),
  NEXT_PUBLIC_KEYCLOAK_URL: z.url(),
  NEXT_PUBLIC_KEYCLOAK_REALM: z.string().min(1),
  NEXT_PUBLIC_KEYCLOAK_CLIENT: z.string().min(1),
});

// Проверяем process.env
const envResults = envSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_KEYCLOAK_URL: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
  NEXT_PUBLIC_KEYCLOAK_REALM: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
  NEXT_PUBLIC_KEYCLOAK_CLIENT: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT,
});

if (!envResults.success) {
  const flattened = z.flattenError(envResults.error);
  console.error('❌ Ошибка валидации переменных окружения:', flattened.fieldErrors);
  throw new Error('Некорректные переменные окружения');
}

// Экспортируем проверенный объект env
export const env = envResults.data;