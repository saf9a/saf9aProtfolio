import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { buildPageMetadata } from "@/lib/seo";
import { localizeHref } from "@/lib/i18n";

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
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            as="h1"
            overline="Contact"
            title="Contacter Saf9a a Tunis"
            description={siteFr.contact.description}
          />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:border-white/10 dark:bg-slate-900/60">
          <div>
            <p className="text-sm font-semibold">Email</p>
            <a href={`mailto:${siteFr.email}`} className="mt-2 block text-sm text-muted-foreground">
              {siteFr.email}
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold">Localisation</p>
            <p className="mt-2 text-sm text-muted-foreground">{siteFr.location}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Reseaux</p>
            <div className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground">
              <a href={siteFr.socials.linkedin} className="hover:text-accent">
                LinkedIn
              </a>
              <a href={siteFr.socials.github} className="hover:text-accent">
                GitHub
              </a>
              <a href={siteFr.socials.x} className="hover:text-accent">
                X
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-background p-4">
            <p className="text-sm font-semibold">Besoin d&apos;un creneau personnalise ?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Partagez une plage horaire preferee et nous confirmerons le meilleur creneau par email.
            </p>
            <Button href={localizeHref("/book", locale)} className="mt-4 w-full justify-center">
              {siteFr.booking.primaryCta}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
