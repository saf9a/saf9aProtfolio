import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { BookingForm } from "@/components/BookingForm";
import { buildPageMetadata } from "@/lib/seo";
import { getMessages } from "@/lib/i18n";

const locale = "fr" as const;
const messages = getMessages(locale);
const page = messages.pages.book;

export const metadata: Metadata = buildPageMetadata({
  title: page.metadata.title,
  description: page.metadata.description,
  path: "/fr/book",
  locale,
  keywords: page.metadata.keywords,
});

export default function BookPageFr() {
  return (
    <>
      <PageHero
        variant="book"
        locale={locale}
        overline={page.hero.overline}
        title={page.hero.title}
        description={siteFr.booking.description}
      />
      <Section className="pt-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-border bg-surface/75 p-5 shadow-soft backdrop-blur-xl md:p-8">
            <BookingForm />
          </div>
          <div className="space-y-6 rounded-lg border border-border bg-surface-strong p-6 text-background shadow-lift dark:bg-surface dark:text-foreground">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{page.next.title}</p>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-background/85 dark:text-muted-foreground">
                {page.next.steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className={`mt-2 h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-accent" : index === 1 ? "bg-success" : "bg-warning"}`} />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-background/15 bg-background/10 p-4 dark:border-border dark:bg-background/45">
              <p className="text-sm font-semibold">{page.email.title}</p>
              <p className="mt-2 text-sm leading-6 text-background/85 dark:text-muted-foreground">
                {page.email.description}
              </p>
              <a href={`mailto:${siteFr.email}`} className="mt-4 inline-flex text-sm font-semibold text-accent">
                {siteFr.email}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
