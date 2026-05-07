import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { BookingForm } from "@/components/BookingForm";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Request a Call",
  description:
    "Request a call with Saf9a for web development, DevOps, or AI automation projects and planning.",
  path: "/book",
  keywords: ["request a call Saf9a", "book web development consultation", "DevOps consultation Tunisia"],
});

export default function BookPage() {
  return (
    <>
      <PageHero
        variant="book"
        overline="Booking"
        title="Book a focused build call."
        description={site.booking.description}
      />
      <Section className="pt-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-border bg-surface/75 p-5 shadow-soft backdrop-blur-xl md:p-8">
            <BookingForm />
          </div>
          <div className="space-y-6 rounded-lg border border-border bg-surface-strong p-6 text-background shadow-lift dark:bg-surface dark:text-foreground">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">What happens next</p>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-background/75 dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>We review your request and confirm the best call format.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-success" />
                <span>We reply by email within one business day with a confirmed time.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-warning" />
                <span>We show up prepared with context, questions, and next steps.</span>
              </li>
              </ul>
            </div>
            <div className="rounded-lg border border-background/15 bg-background/10 p-4 dark:border-border dark:bg-background/45">
              <p className="text-sm font-semibold">Prefer email instead?</p>
              <p className="mt-2 text-sm leading-6 text-background/75 dark:text-muted-foreground">
                Send your availability and project context directly and we will take it from there.
              </p>
              <a href={`mailto:${site.email}`} className="mt-4 inline-flex text-sm font-semibold text-accent">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
