import { cookies } from "next/headers";
import { defaultLocale, isLocale, localeCookieName, type Locale } from "@/lib/i18n";

export function getRequestLocale(): Locale {
  const locale = cookies().get(localeCookieName)?.value;
  return isLocale(locale) ? locale : defaultLocale;
}
