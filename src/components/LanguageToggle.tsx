"use client";

import type { Locale } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";
import { cn } from "@/lib/utils";
import { getMessages } from "@/lib/i18n";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const messages = getMessages(locale);
  const options: Locale[] = ["en", "fr"];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface p-1 text-xs font-semibold text-foreground shadow-soft backdrop-blur",
        className
      )}
      aria-label={messages.common.changeLanguage}
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition",
            locale === option
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-current={locale === option ? "true" : undefined}
          onClick={() => setLocale(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
