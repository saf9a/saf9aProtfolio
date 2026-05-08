"use client";

import { useLocale } from "@/components/LocaleProvider";
import { getMessages } from "@/lib/i18n";

export function SkipLink() {
  const { locale } = useLocale();
  const messages = getMessages(locale);

  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-soft focus:outline-none focus:ring-2 focus:ring-accent"
    >
      {messages.common.skipToContent}
    </a>
  );
}
