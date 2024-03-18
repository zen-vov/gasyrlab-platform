import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, pathnames } from './navigation';

export default createMiddleware({
  defaultLocale: 'ru',
  localePrefix,
  locales,
  pathnames
});

export const config = {
  matcher: ["/", "/(ru|kz)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};