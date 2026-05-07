import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { buildPageMetadata } from "@/lib/seo";

const locale = "fr" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Contacter Saf9a",
  description:
    "Contactez Saf9a a Tunis, Tunisie pour vos projets en developpement web, DevOps et automatisation IA.",
  path: "/fr/contact",
  locale,
  keywords: ["contact Saf9a", "contact developpement web Tunis", "contact DevOps Tunisie"],
});

export default function ContactPageFr() {
  return (
    <>
      <PageHero
        variant="contact"
        overline="Contact"
        title="Commencer avec un signal clair."
        description={siteFr.contact.description}
        primaryLabel={siteFr.booking.primaryCta}
        primaryHref="/fr/book"
      />
      <Section className="pt-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-border bg-surface/75 p-5 shadow-soft backdrop-blur-xl md:p-8">
            <ContactForm />
          </div>
          <div className="space-y-6 rounded-lg border border-border bg-surface-strong p-6 text-background shadow-lift dark:bg-surface dark:text-foreground">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Email</p>
              <a href={`mailto:${siteFr.email}`} className="mt-3 block text-sm font-semibold text-background dark:text-foreground">
                {siteFr.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Localisation</p>
              <p className="mt-3 text-sm text-background/75 dark:text-muted-foreground">{siteFr.location}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Reseaux</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-background/75 dark:text-muted-foreground">
                <a href={siteFr.socials.linkedin} className="hover:text-accent">LinkedIn</a>
                <a href={siteFr.socials.github} className="hover:text-accent">GitHub</a>
                <a href={siteFr.socials.x} className="hover:text-accent">X</a>
              </div>
            </div>
            <div className="rounded-lg border border-background/15 bg-background/10 p-4 dark:border-border dark:bg-background/45">
              <p className="text-sm font-semibold">Besoin d&apos;un creneau personnalise ?</p>
              <p className="mt-2 text-sm leading-6 text-background/75 dark:text-muted-foreground">
                Partagez une plage horaire preferee et nous confirmerons le meilleur creneau par email.
              </p>
              <Button href="/fr/book" className="mt-4 w-full justify-center bg-background text-foreground hover:bg-background/90">
                {siteFr.booking.primaryCta}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
