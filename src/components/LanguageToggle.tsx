"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getLocaleFromPathname, getMessages, switchLocalePath } from "@/lib/i18n";

export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const messages = getMessages(locale);
  const enHref = switchLocalePath(pathname, "en");
  const frHref = switchLocalePath(pathname, "fr");

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface p-1 text-xs font-semibold text-foreground shadow-soft backdrop-blur",
        className
      )}
      aria-label={messages.common.changeLanguage}
    >
      <Link
        href={enHref}
        className={cn(
          "rounded-full px-2.5 py-1 transition",
          locale === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
        )}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </Link>
      <Link
        href={frHref}
        className={cn(
          "rounded-full px-2.5 py-1 transition",
          locale === "fr" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
        )}
        aria-current={locale === "fr" ? "true" : undefined}
      >
        FR
      </Link>
    </div>
  );
}
