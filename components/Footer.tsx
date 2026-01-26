import Link from "next/link";
import { site } from "@/content/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container grid gap-8 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-3">
          <Logo size="sm" />
          <p className="text-sm text-muted-foreground">{site.description}</p>
          <p className="text-sm text-muted-foreground">{site.location}</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold">Explore</p>
          <div className="flex flex-col gap-2 text-sm">
            {site.navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-accent">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold">Contact</p>
          <a href={`mailto:${site.email}`} className="text-sm hover:text-accent">
            {site.email}
          </a>
          <div className="flex gap-3 text-sm">
            <a href={site.socials.linkedin} className="hover:text-accent">
              LinkedIn
            </a>
            <a href={site.socials.github} className="hover:text-accent">
              GitHub
            </a>
            <a href={site.socials.x} className="hover:text-accent">
              X
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-accent">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
