import { defaultLocale, locales, type Locale } from './ui';

export { ui, t, locales, defaultLocale, localeNames, localeFlags } from './ui';
export type { Locale } from './ui';

/** Localised path: `lp('/about', 'fr')` → `/fr/about`; with 'en' → `/about`. */
export function lp(path: string, locale: Locale): string {
  const clean = path === '/' ? '' : path;
  return locale === defaultLocale ? (path === '/' ? '/' : path) : `/${locale}${clean === '' ? '' : clean}`;
}

/** Read the locale from a pathname like `/fr/hacks`. Returns default when none. */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

/** Strip the locale prefix from a path, returning the canonical English path. */
export function stripLocale(pathname: string): string {
  const seg = pathname.split('/').filter(Boolean)[0];
  if ((locales as readonly string[]).includes(seg)) {
    return '/' + pathname.split('/').filter(Boolean).slice(1).join('/');
  }
  return pathname;
}
