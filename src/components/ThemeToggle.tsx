"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const storageKey = "theme";

export function ThemeToggle({ className }: { className?: string }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 text-sm shadow-soft backdrop-blur transition hover:border-foreground/30",
        className
      )}
      aria-label={locale === "fr" ? "Changer le theme" : "Toggle theme"}
      aria-pressed={isDark}
    >
      {isDark ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M4.93 19.07l1.41-1.41" />
          <path d="M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
        </svg>
      )}
    </button>
  );
}
