import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { BookingForm } from "@/components/BookingForm";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Demander un appel",
  description:
    "Demandez un appel avec Saf9a pour vos projets de developpement web, DevOps ou automatisation IA.",
  path: "/fr/book",
  locale: "fr",
  keywords: ["demander un appel Saf9a", "consultation developpement web", "consultation DevOps Tunisie"],
});

export default function BookPageFr() {
  return (
    <>
      <PageHero
        variant="book"
        overline="Reservation"
        title="Reserver un appel de cadrage."
        description={siteFr.booking.description}
      />
      <Section className="pt-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-border bg-surface/75 p-5 shadow-soft backdrop-blur-xl md:p-8">
            <BookingForm />
          </div>
          <div className="space-y-6 rounded-lg border border-border bg-surface-strong p-6 text-background shadow-lift dark:bg-surface dark:text-foreground">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">La suite</p>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-background/75 dark:text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Nous relisons votre demande et confirmons le format d&apos;appel le plus utile.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-success" />
                  <span>Nous repondons par email sous un jour ouvre avec un horaire confirme.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-warning" />
                  <span>Nous arrivons prepares avec le contexte, les questions et les prochaines etapes.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-background/15 bg-background/10 p-4 dark:border-border dark:bg-background/45">
              <p className="text-sm font-semibold">Vous preferez l&apos;email ?</p>
              <p className="mt-2 text-sm leading-6 text-background/75 dark:text-muted-foreground">
                Envoyez directement vos disponibilites et le contexte du projet, nous prenons la suite.
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
