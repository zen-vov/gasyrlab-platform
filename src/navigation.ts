import { 
  createLocalizedPathnamesNavigation,
  Pathnames
} from "next-intl/navigation"; 

export const locales = ['ru', 'kz'] as const;
export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/home': '/home',

  '/about': {
    ru: '/about',
    kz: '/about',
  },
  "/signup": {
    ru: '/singup',
    kz: '/signup',
  },
  "/auth": {
    ru: '/auth',
    kz: '/auth'
  }
} satisfies Pathnames<typeof locales>

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });