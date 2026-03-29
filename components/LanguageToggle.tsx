"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getLocaleFromPathname, switchLocalePath } from "@/lib/i18n";

export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const enHref = switchLocalePath(pathname, "en");
  const frHref = switchLocalePath(pathname, "fr");

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/80 p-1 text-xs font-semibold dark:bg-slate-900/70 dark:border-white/10",
        className
      )}
      aria-label={locale === "fr" ? "Changer de langue" : "Change language"}
    >
      <Link
        href={enHref}
        className={cn(
          "rounded-full px-2.5 py-1 transition",
          locale === "en" ? "bg-foreground text-background" : "text-foreground/70 hover:text-foreground"
        )}
      >
        EN
      </Link>
      <Link
        href={frHref}
        className={cn(
          "rounded-full px-2.5 py-1 transition",
          locale === "fr" ? "bg-foreground text-background" : "text-foreground/70 hover:text-foreground"
        )}
      >
        FR
      </Link>
    </div>
  );
}
