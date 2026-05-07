"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { getLocaleFromPathname, getSiteContent, localizeHref } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const site = getSiteContent(locale);

  return (
    <footer className="border-t border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container grid gap-8 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-3">
          <Logo size="sm" />
          <p className="max-w-md text-sm leading-6 text-muted-foreground">{site.description}</p>
          <p className="text-sm text-muted-foreground">{site.location}</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold">{locale === "fr" ? "Explorer" : "Explore"}</p>
          <div className="flex flex-col gap-2 text-sm">
            {site.navLinks.map((link) => (
              <Link
                key={link.label}
                href={localizeHref(link.href, locale)}
            className="text-muted-foreground transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold">Contact</p>
          <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground transition hover:text-accent">
            {site.email}
          </a>
          <div className="flex gap-3 text-sm">
            <a href={site.socials.linkedin} className="text-muted-foreground transition hover:text-accent">
              LinkedIn
            </a>
            <a href={site.socials.github} className="text-muted-foreground transition hover:text-accent">
              GitHub
            </a>
            <a href={site.socials.x} className="text-muted-foreground transition hover:text-accent">
              X
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-muted-foreground">
          <p>
            {"(c)"} {new Date().getFullYear()} {site.name}.{" "}
            {locale === "fr" ? "Tous droits reserves." : "All rights reserved."}
          </p>
          <Link href={localizeHref("/privacy", locale)} className="hover:text-accent">
            {locale === "fr" ? "Politique de confidentialite" : "Privacy policy"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
