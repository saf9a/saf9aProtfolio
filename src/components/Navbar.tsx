"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { getLocaleFromPathname, getMessages, getSiteContent, localizeHref } from "@/lib/i18n";

export function Navbar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const site = getSiteContent(locale);
  const messages = getMessages(locale);
  const prefersReducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-2xl"
    >
      <div className="container flex items-center justify-between py-3">
        <Link
          href={localizeHref("/", locale)}
          className="flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <Logo />
        </Link>
        <nav
          className="hidden items-center gap-1 rounded-full border border-border/90 bg-surface/90 p-1 shadow-soft md:flex"
          aria-label={messages.common.primaryNavigation}
        >
          {site.navLinks.map((link) => {
            const href = localizeHref(link.href, locale);
            const isActive = pathname === href;

            return (
              <Link
                key={link.label}
                href={href}
                className={cn(
                  "relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                  isActive
                    ? "text-background"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive ? (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-foreground shadow-lift"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="relative z-10">{link.label}</span>
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-soft transition hover:border-foreground/35 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          aria-label={open ? messages.common.closeMenu : messages.common.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">{open ? messages.common.closeMenu : messages.common.openMenu}</span>
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
      <AnimatePresence initial={false}>
        {open ? (
        <motion.div
          initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="container flex flex-col gap-3 py-6">
            {site.navLinks.map((link) => {
              const href = localizeHref(link.href, locale);
              const isActive = pathname === href;

              return (
                <Link
                  key={link.label}
                  href={href}
                  className={cn(
                    "relative overflow-hidden rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    isActive && "text-background"
                  )}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="mobile-navbar-active-pill"
                      className="absolute inset-0 rounded-lg bg-foreground"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm font-semibold">{messages.common.language}</span>
              <LanguageToggle />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">{messages.common.theme}</span>
              <ThemeToggle />
            </div>
            <Button href={localizeHref("/book", locale)} className="justify-center">
              {site.booking.primaryCta}
            </Button>
          </div>
        </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
