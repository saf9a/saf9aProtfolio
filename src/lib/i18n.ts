import type { SiteContent } from "@/content/site";
import { site, siteFr } from "@/content/site";

export type Locale = "en" | "fr";

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
}

export function getSiteContent(locale: Locale): SiteContent {
  return locale === "fr" ? siteFr : site;
}

export function localizeHref(href: string, locale: Locale) {
  if (locale === "en") {
    return href;
  }

  return href === "/" ? "/fr" : `/fr${href}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale) {
  const currentLocale = getLocaleFromPathname(pathname);
  const normalizedPath =
    currentLocale === "fr"
      ? pathname.replace(/^\/fr(?=\/|$)/, "") || "/"
      : pathname || "/";

  return localizeHref(normalizedPath, targetLocale);
}
