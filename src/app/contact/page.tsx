import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Saf9a",
  description:
    "Contact Saf9a in Tunis, Tunisia about web development, DevOps, and AI automation projects.",
  path: "/contact",
  keywords: ["contact Saf9a", "Tunis web development contact", "DevOps Tunisia contact"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contact"
        overline="Contact"
        title="Start with a clear signal."
        description={site.contact.description}
        primaryLabel={site.booking.primaryCta}
        primaryHref="/book"
      />
      <Section className="pt-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-border bg-surface/75 p-5 shadow-soft backdrop-blur-xl md:p-8">
            <ContactForm />
          </div>
          <div className="space-y-6 rounded-lg border border-border bg-surface-strong p-6 text-background shadow-lift dark:bg-surface dark:text-foreground">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Email</p>
              <a href={`mailto:${site.email}`} className="mt-3 block text-sm font-semibold text-background dark:text-foreground">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Location</p>
              <p className="mt-3 text-sm text-background/75 dark:text-muted-foreground">{site.location}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Socials</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-background/75 dark:text-muted-foreground">
                <a href={site.socials.linkedin} className="hover:text-accent">LinkedIn</a>
                <a href={site.socials.github} className="hover:text-accent">GitHub</a>
                <a href={site.socials.x} className="hover:text-accent">X</a>
              </div>
            </div>
            <div className="rounded-lg border border-background/15 bg-background/10 p-4 dark:border-border dark:bg-background/45">
              <p className="text-sm font-semibold">Need a custom booking?</p>
              <p className="mt-2 text-sm leading-6 text-background/75 dark:text-muted-foreground">
                Share a preferred time window and we will confirm the best slot by email.
              </p>
              <Button href="/book" className="mt-4 w-full justify-center bg-background text-foreground hover:bg-background/90">
                {site.booking.primaryCta}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
