import type { SiteContent } from "@/content/site";
import { site, siteFr } from "@/content/site";
import { messagesByLocale, type SiteMessages } from "@/content/messages";

export type Locale = "en" | "fr";

export const locales = ["en", "fr"] as const;
export const defaultLocale: Locale = "en";
export const localeCookieName = "locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  return defaultLocale;
}

export function getSiteContent(locale: Locale): SiteContent {
  return locale === "fr" ? siteFr : site;
}

export function getMessages(locale: Locale): SiteMessages {
  return messagesByLocale[locale];
}

export function stripLocaleFromPathname(pathname: string): string {
  return pathname || "/";
}

export function localizeHref(href: string, locale: Locale) {
  if (!href.startsWith("/") || href.startsWith("//")) {
    return href;
  }

  return href;
}

export function switchLocalePath(pathname: string, targetLocale: Locale) {
  return pathname || "/";
}
