import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description: site.contact.description,
};

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            overline="Contact"
            title={site.contact.headline}
            description={site.contact.description}
          />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:bg-slate-900/60 dark:border-white/10">
          <div>
            <p className="text-sm font-semibold">Email</p>
            <a href={`mailto:${site.email}`} className="mt-2 block text-sm text-muted-foreground">
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold">Location</p>
            <p className="mt-2 text-sm text-muted-foreground">{site.location}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Socials</p>
            <div className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground">
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
          <div className="rounded-2xl border border-border bg-background p-4">
            <p className="text-sm font-semibold">Need a custom booking?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Share a preferred time window and we will confirm the best slot by email.
            </p>
            <Button href="/book" className="mt-4 w-full justify-center">
              {site.booking.primaryCta}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
