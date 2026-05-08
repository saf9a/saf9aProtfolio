"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { Logo } from "@/components/Logo";
import { getMessages, getSiteContent, localizeHref } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLocale();
  const site = getSiteContent(locale);
  const messages = getMessages(locale);

  return (
    <footer className="border-t border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container grid gap-8 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-3">
          <Logo size="sm" />
          <p className="max-w-md text-sm leading-6 text-muted-foreground">{site.description}</p>
          <p className="text-sm text-muted-foreground">{site.location}</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold">{messages.common.explore}</p>
          <div className="flex flex-col gap-2 text-sm">
            {site.navLinks.map((link) => (
              <Link
                key={link.label}
                href={localizeHref(link.href, locale)}
                className="text-muted-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold">{messages.common.contact}</p>
          <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            {site.email}
          </a>
          <div className="flex gap-3 text-sm">
            <a href={site.socials.linkedin} className="text-muted-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              LinkedIn
            </a>
            <a href={site.socials.github} className="text-muted-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              GitHub
            </a>
            <a href={site.socials.x} className="text-muted-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              X
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-muted-foreground">
          <p>
            {"(c)"} {new Date().getFullYear()} {site.name}.{" "}
            {messages.common.allRightsReserved}
          </p>
          <Link href={localizeHref("/privacy", locale)} className="transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            {messages.common.privacyPolicy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
