import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
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
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            as="h1"
            overline="Booking"
            title={site.booking.headline}
            description={site.booking.description}
          />
          <div className="mt-8">
            <BookingForm />
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:bg-slate-900/60 dark:border-white/10">
          <div>
            <p className="text-sm font-semibold">What happens next</p>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>We review your request and confirm the best call format.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>We reply by email within one business day with a confirmed time.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>We show up prepared with context, questions, and next steps.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background p-4">
            <p className="text-sm font-semibold">Prefer email instead?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Send your availability and project context directly and we will take it from there.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex text-sm font-semibold text-accent"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
