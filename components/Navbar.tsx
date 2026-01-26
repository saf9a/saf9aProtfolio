"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("top");
  const [open, setOpen] = useState(false);

  const sectionIds = useMemo(() => site.homeSections.map((section) => section.id), []);

  useEffect(() => {
    if (!isHome) return;
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isHome, sectionIds]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {site.navLinks.map((link) => {
            const href = isHome && link.homeHref ? link.homeHref : link.href;
            const isActive = isHome ? link.sectionId === activeSection : pathname === link.href;
            return (
              <Link
                key={link.label}
                href={href}
                className={cn(
                  "text-sm font-medium transition hover:text-accent",
                  isActive && "text-accent"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button href={site.calendlyUrl} target="_blank" rel="noreferrer">
            Book a call
          </Button>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open menu</span>
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
        <div className="border-t border-border bg-background md:hidden">
          <div className="container flex flex-col gap-4 py-6">
            {site.navLinks.map((link) => {
              const href = isHome && link.homeHref ? link.homeHref : link.href;
              return (
                <Link
                  key={link.label}
                  href={href}
                  className="text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
            <Button
              href={site.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="justify-center"
            >
              Book a call
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
