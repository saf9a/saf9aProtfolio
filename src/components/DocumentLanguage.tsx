"use client";

import { useEffect } from "react";
import { useLocale } from "@/components/LocaleProvider";

export function DocumentLanguage() {
  const { locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
