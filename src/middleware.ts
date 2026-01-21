import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const DEFAULT_CITY = 'moskva';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Игнорируем API, статику и служебные файлы (чтобы не зациклить и не тормозить)
    // Это дублируется в config.matcher, но проверка здесь надежнее для логики
    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname.includes('.') // файлы с расширением (изображения, css и т.д.)
    ) {
        return NextResponse.next();
    }

    // Получаем текущий город из кук
    const cityCookie = request.cookies.get('city');
    const city = cityCookie?.value || DEFAULT_CITY;

    // Логика для главной страницы ("/")
    // Если пользователь зашел просто на labquest.ru -> редирект на labquest.ru/moskva
    if (pathname === '/') {
        const url = request.nextUrl.clone();
        url.pathname = `/${city}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// Конфигурация: на каких путях запускать этот middleware
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - sw.js (Service Worker)
         * - icons (PWA icons)
         * - manifest.json (PWA manifest)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sw.js|icons|manifest.json).*)',
    ],
};