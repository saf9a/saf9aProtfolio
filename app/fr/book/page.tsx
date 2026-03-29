import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
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
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            as="h1"
            overline="Reservation"
            title={siteFr.booking.headline}
            description={siteFr.booking.description}
          />
          <div className="mt-8">
            <BookingForm />
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:border-white/10 dark:bg-slate-900/60">
          <div>
            <p className="text-sm font-semibold">La suite</p>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Nous relisons votre demande et confirmons le format d&apos;appel le plus utile.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Nous repondons par email sous un jour ouvre avec un horaire confirme.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Nous arrivons prepares avec le contexte, les questions et les prochaines etapes.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background p-4">
            <p className="text-sm font-semibold">Vous preferez l&apos;email ?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Envoyez directement vos disponibilites et le contexte du projet, nous prenons la suite.
            </p>
            <a href={`mailto:${siteFr.email}`} className="mt-4 inline-flex text-sm font-semibold text-accent">
              {siteFr.email}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
