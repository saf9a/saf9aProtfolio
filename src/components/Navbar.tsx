"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { getLocaleFromPathname, getSiteContent, localizeHref } from "@/lib/i18n";

export function Navbar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const site = getSiteContent(locale);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-2xl">
      <div className="container flex items-center justify-between py-3">
        <Link href={localizeHref("/", locale)} className="flex items-center">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-border/80 bg-surface/70 p-1 shadow-soft md:flex" aria-label="Primary">
          {site.navLinks.map((link) => {
            const href = localizeHref(link.href, locale);
            const isActive = pathname === href;

            return (
              <Link
                key={link.label}
                href={href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-foreground/5 hover:text-foreground",
                  isActive && "bg-foreground text-background hover:bg-foreground hover:text-background"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Button href={localizeHref("/book", locale)}>{site.booking.primaryCta}</Button>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 md:hidden"
          aria-label={locale === "fr" ? "Ouvrir le menu" : "Toggle menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">{locale === "fr" ? "Ouvrir le menu" : "Open menu"}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {open ? (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="container flex flex-col gap-4 py-6">
            {site.navLinks.map((link) => {
              const href = localizeHref(link.href, locale);

              return (
                <Link
                  key={link.label}
                  href={href}
                  className={cn("rounded-lg px-3 py-2 text-sm font-medium", pathname === href && "bg-foreground text-background")}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{locale === "fr" ? "Langue" : "Language"}</span>
              <LanguageToggle />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{locale === "fr" ? "Theme" : "Theme"}</span>
              <ThemeToggle />
            </div>
            <Button href={localizeHref("/book", locale)} className="justify-center">
              {site.booking.primaryCta}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
