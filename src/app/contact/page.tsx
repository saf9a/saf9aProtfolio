import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { buildPageMetadata } from "@/lib/seo";
import { getMessages, getSiteContent, localizeHref } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/i18n-server";

export function generateMetadata(): Metadata {
  const locale = getRequestLocale();
  const page = getMessages(locale).pages.contact;

  return buildPageMetadata({
    title: page.metadata.title,
    description: page.metadata.description,
    path: "/contact",
    locale,
    keywords: page.metadata.keywords,
  });
}

export default function ContactPage() {
  const locale = getRequestLocale();
  const site = getSiteContent(locale);
  const messages = getMessages(locale);
  const page = messages.pages.contact;

  return (
    <>
      <PageHero
        variant="contact"
        locale={locale}
        overline={page.hero.overline}
        title={page.hero.title}
        description={site.contact.description}
        primaryLabel={site.booking.primaryCta}
        primaryHref={localizeHref("/book", locale)}
      />
      <Section className="pt-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-border bg-surface/75 p-5 shadow-soft backdrop-blur-xl md:p-8">
            <ContactForm />
          </div>
          <div className="space-y-6 rounded-lg border border-border bg-surface-strong p-6 text-background shadow-lift dark:bg-surface dark:text-foreground">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{messages.common.email}</p>
              <a href={`mailto:${site.email}`} className="mt-3 block text-sm font-semibold text-background dark:text-foreground">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{messages.common.location}</p>
              <p className="mt-3 text-sm text-background/85 dark:text-muted-foreground">{site.location}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{messages.common.socials}</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-background/85 dark:text-muted-foreground">
                <a href={site.socials.linkedin} className="hover:text-accent">LinkedIn</a>
                <a href={site.socials.github} className="hover:text-accent">GitHub</a>
                <a href={site.socials.x} className="hover:text-accent">X</a>
              </div>
            </div>
            <div className="rounded-lg border border-background/15 bg-background/10 p-4 dark:border-border dark:bg-background/45">
              <p className="text-sm font-semibold">{page.customBooking.title}</p>
              <p className="mt-2 text-sm leading-6 text-background/85 dark:text-muted-foreground">
                {page.customBooking.description}
              </p>
              <Button href={localizeHref("/book", locale)} className="mt-4 w-full justify-center bg-background text-foreground hover:bg-background/90">
                {site.booking.primaryCta}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
