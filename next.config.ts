import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Включаем строгий режим React (помогает найти баги в эффектах)
  reactStrictMode: true,

  // Настройка заголовков безопасности
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY', // Запрещаем встраивать сайт в iframe (защита от Clickjacking)
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Content-Security-Policy',
          // В продакшене нужно настроить connect-src под реальные домены API
          value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' data:;",
        },
      ],
    },
  ],
  // Оптимизация для PWA (отключаем лишние sourcemaps в проде)
  productionBrowserSourceMaps: false,

  // Отключаем индикаторы разработки
  // devIndicators: false,
};

export default nextConfig;
